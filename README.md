# Galaxify

<p align="center">
  <img src=".github/assets/galaxify.png" alt="Galaxify Logo" width="200"/>
</p>

<p align="center">
  <strong>A gamified habit formation application with a space exploration theme.</strong>
</p>

---

## 🚀 Tech Stack

-   **Frontend**: [SvelteKit](https://kit.svelte.dev/), [TypeScript](https://www.typescriptlang.org/)
-   **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/)
-   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Monorepo Management**: [pnpm Workspaces](https://pnpm.io/workspaces)
-   **Testing**: [Vitest](https://vitest.dev/)

## 🔧 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v20 or higher)
-   [pnpm](https://pnpm.io/) (v8 or higher)
-   A running [MongoDB](https://www.mongodb.com/try/download/community) instance.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd galaxify
    ```

2.  **Install dependencies from the root directory:**
    ```bash
    pnpm install
    ```

3.  **Run the development servers:**
    ```bash
    pnpm dev
    ```
    This command starts both the SvelteKit frontend and the Express.js backend concurrently. The application will be available at `http://localhost:5173`.

## 📦 Available Scripts

-   `pnpm dev`: Starts the development servers for both the `api` and `web` packages.
-   `pnpm build`: Builds all workspace packages for production.
-   `pnpm test`: Runs the entire test suite for the monorepo.

## 📁 Project Structure

This project is a `pnpm` monorepo with the following structure:

-   `packages/api`: The backend server built with Express.js.
-   `packages/web`: The frontend application built with SvelteKit.
-   `packages/shared`: Contains shared TypeScript types and interfaces used across the `api` and `web` packages.

## 📝 Coding Style & Architecture

This project follows the **MESN (MongoDB, Express, Svelte, Node.js)** stack with specific architectural guidelines. For a detailed guide on our coding standards, file conventions, and architectural patterns, please refer to the [**GEMINI.md**](./GEMINI.md) file.
