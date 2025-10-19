# Gemini MESN Project Style Guide

This document outlines the coding style, conventions, and architectural patterns for the MESN (MongoDB, Express, Svelte, Node.js) project. Following these guidelines ensures consistency and maintainability.

## Backend (Node.js & TypeScript)

The backend structure and principles remain consistent with a standard Clean Architecture setup in a Node.js environment.

### 1\. General Principles

  - **Language**: The project is written in **TypeScript**.
  - **Module System**: We use **ESM** (`import`/`export`). All relative imports **must** include the `.js` extension.
    ```typescript
    // Correct
    import ChangeJobUseCase from '../appUseCases/ChangeJobUseCase.js';

    // Incorrect
    import ChangeJobUseCase from '../appUseCases/ChangeJobUseCase';
    ```
  - **Architecture**: The backend follows principles of **Clean Architecture**. Logic is separated into distinct layers:
      - **Domain**: Core business entities and rules (e.g., `User`, `Job`).
      - **Application (Use Cases)**: Orchestrates business logic (e.g., `RegisterUserUseCase`).
      - **Infrastructure**: Implements external concerns like databases (MongoDB repositories), services, and security (e.g., `JobRepository`, `PasswordManager`).
      - **Controllers**: Handles HTTP requests and responses, delegating to use cases.

### 2\. File and Naming Conventions

  - **File Naming**: Files containing a single class or primary component are named in `PascalCase` (e.g., `JobController.ts`, `User.ts`).
  - **Test Files**: Test files are located in the `__tests__` directory, mirroring the `src` structure. They are named with the `.test.ts` suffix (e.g., `ChangeJobUseCase.test.ts`).
  - **Interfaces**: Interface names are prefixed with `I` (e.g., `IUserRepository`, `IJobRepository`).
  - **Variables and Functions**: Use `camelCase` (e.g., `registerUserUseCase`).
  - **Classes and Types**: Use `PascalCase` (e.g., `User`, `JobPayload`).
  - **Enums/Constants**: Use `PascalCase` for enum names and `UPPER_SNAKE_CASE` for enum members if applicable (e.g., `JobStatus.PENDING`).

### 3\. Class Design

  - **Dependency Injection**: Dependencies are injected via the constructor and declared as `private readonly`.
    ```typescript
    export default class JobController {
        constructor(
            private readonly jobRepository: IJobRepository,
            private readonly userRepository: IUserRepository
        ) {}
    }
    ```
  - **Use Cases**: Encapsulate a single business operation within a class with one public method, `execute`.
    ```typescript
    class RegisterUserUseCase {
        // ... constructor
        public async execute(request: RegisterUserRequest): Promise<User> {
            // ... logic
        }
    }
    ```
  - **Controllers**: Controller methods are defined as public arrow functions on the class instance. This ensures `this` is correctly bound when used in Express route handlers.
    ```typescript
    export default class UserController {
        // ... constructor
        public register = async (req: Request, res: Response) => {
            // ... logic
        };
    }
    ```
  - **Domain Entities**: Entities contain their own validation logic, throwing an error if a rule is violated upon instantiation. Value Objects (e.g., `Email`, `EntityId`) are used to enforce constraints on specific attributes.

### 4\. Testing with `vitest`

  - **Import Paths**: Always import the original TypeScript source files from the `src` directory in your test files. **Do not** import compiled JavaScript files from the `dist` directory.
  - **Structure**: Use `describe` to group tests for a class or function, and `it` to define individual test cases.
  - **Mocking**: Use `vi.mock`, `vi.fn()`, and `vi.spyOn()` for mocking dependencies. Provide mock implementations using `(mockFn as vi.Mock).mockResolvedValue(...)`.
  - **Error Testing**: Test for expected errors using `expect(...).rejects.toThrow()`.

### 5\. Asynchronous Code

  - Always use `async/await` for asynchronous operations. All controller methods, use case `execute` methods, and repository methods that perform I/O are `async`.

### 6\. Error Handling

  - Use custom error classes that extend `Error` (e.g., `NotFoundError`, `UnauthorizedError`, `BadRequestError`) to represent specific failure scenarios.
  - Business logic (use cases, domain) should throw these errors. A top-level error handling middleware in Express is responsible for catching them and sending the appropriate HTTP response.

-----

## Frontend (Svelte & TypeScript)

### 1\. Core Libraries & Stack

  - **Framework**: **Svelte** with **TypeScript** (`<script lang="ts">`).
  - **Meta-Framework**: **SvelteKit** is used for routing, server-side rendering, and data loading.
  - **Build Tool**: **Vite**.
  - **Styling**: Scoped CSS within Svelte components' `<style>` blocks. Global styles are defined in `src/app.css`.
  - **Data Fetching**: The native **Fetch API** is used within SvelteKit's `load` functions and form `actions`. An optional Axios wrapper can be placed in `src/lib/utils/apiClient.ts` for consistency.
  - **State Management**:
      - **Svelte Stores**: For sharing state across different components (e.g., user authentication status, theme).
      - **Reactive `let` declarations**: For local component state.
  - **UI Feedback**: **`svelte-toast`** is used for displaying notifications.

### 2\. Directory Structure (SvelteKit)

  - **`src/routes`**: Contains all pages and API routes for the application, following a file-based routing system.
      - A page is defined by a `+page.svelte` file.
      - Data loading for a page is handled in a sibling `+page.server.js` or `+page.js` file.
      - Form submissions are handled by `actions` in `+page.server.js`.
  - **`src/lib`**: Contains shared code accessible throughout the project.
      - **`src/lib/components`**: Reusable Svelte components.
      - **`src/lib/utils`**: Shared utility functions, constants, etc.
      - **`src/lib/stores`**: Svelte store definitions.

### 3\. Component & Prop Styling

  - **Component Definition**: Components are defined in `.svelte` files, which contain a `<script>`, markup, and an optional `<style>` block.
    ```svelte
    <script lang="ts">
      import type { SomeType } from '$lib/types';
      
      export let name: string;
      export let details: SomeType | undefined = undefined;
    </script>

    <h1>Hello, {name}!</h1>

    <style>
      h1 {
        color: var(--primary-500);
      }
    </style>
    ```
  - **Prop Typing**: Component props are declared with `export let` inside the `<script lang="ts">` block. TypeScript types are used to define the prop's contract.

### 4\. Styling

  - **Scoped Styles**: Styles defined in a component's `<style>` tag are **scoped by default** to that component, preventing CSS conflicts.
  - **Global Styles**: Global styles and CSS variables (for colors, spacing, shadows) are defined in `src/app.css` and can be used in any component.
    ```css
    /* In src/app.css */
    :root {
      --primary-500: #2cb1bc;
      --border-radius: 0.25rem;
    }
    ```
  - **Dynamic Styles**: Use inline `style:` directives or toggle CSS classes with the `class:` directive for dynamic styling based on component state.

### 5\. Routing & Data Handling (SvelteKit)

  - **File-Based Routing**: Routes are created by adding folders and files to the `src/routes` directory. For example, `src/routes/dashboard/jobs/+page.svelte` creates the `/dashboard/jobs` route.
  - **`load` Functions**: Data fetching for a page is handled by a `load` function exported from a `+page.server.js` (runs on server only) or `+page.js` file (runs on server and client). The returned data is available to the corresponding `+page.svelte` file.
    ```typescript
    // In src/routes/dashboard/+page.server.ts
    import db from '$lib/server/db';

    export const load = async ({ locals }) => {
        const user = locals.user;
        const jobs = await db.jobs.find({ userId: user.id });
        return { jobs };
    };
    ```
  - **Form `actions`**: Form submissions and data mutations are handled by named `actions` exported from a `+page.server.js` file.
    ```typescript
    // In src/routes/login/+page.server.ts
    import { redirect } from '@sveltejs/kit';
    import { loginUser } from '$lib/server/auth';

    export const actions = {
      default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        // ... validation and login logic
        throw redirect(303, '/dashboard');
      }
    };
    ```
  - **Form Handling**: Use a standard HTML `<form>` element. SvelteKit's progressive enhancement (enabled by default) will handle submissions without a full page reload.
    ```svelte
    <form method="POST">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
        <button type="submit">Log In</button>
    </form>
    ```

### 6\. State Management

  - **Svelte Stores**: For state shared across components, use Svelte stores. Create stores in `src/lib/stores` and import them where needed.
    ```typescript
    // In src/lib/stores/userStore.ts
    import { writable } from 'svelte/store';

    export const user = writable(null);
    ```
  - **Auto-Subscription**: In Svelte components, use the `$` prefix to automatically subscribe and unsubscribe from stores, ensuring reactivity.
    ```svelte
    <script lang="ts">
      import { user } from '$lib/stores/userStore';
    </script>

    {#if $user}
      <p>Welcome, {$user.name}!</p>
    {:else}
      <p>Please log in.</p>
    {/if}
    ```