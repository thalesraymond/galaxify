# Quickstart Guide

This guide explains how to set up the development environment and run the project.

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

## Running the Application

-   **Start the development server**:
    This will start both the frontend and backend with hot-reloading.
    ```bash
    pnpm run dev
    ```
    - The frontend will be available at `http://localhost:3000`.
    - The backend will be available at `http://localhost:4000`.

-   **Build for production**:
    ```bash
    pnpm run build
    ```

-   **Run linter**:
    ```bash
    pnpm run lint
    ```

-   **Run tests**:
    ```bash
    pnpm run test
    ```
