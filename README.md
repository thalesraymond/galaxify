# Galaxify

This is the monorepo for the Galaxify project.

## Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

## Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd galaxify
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Configure environment variables**:
    Copy the `.env_example` file to a new file named `.env` and fill in the required values.
    ```bash
    cp .env_example .env
    ```

## Available Scripts

-   **`pnpm run dev`**: Starts the development server for both the frontend and backend with hot-reloading.
    - The frontend will be available at `http://localhost:3000`.
    - The backend will be available at `http://localhost:4000`.

-   **`pnpm run build`**: Builds the entire application stack for production.

-   **`pnpm run lint`**: Lints the entire project.

-   **`pnpm run test`**: Runs the tests for the entire project.
