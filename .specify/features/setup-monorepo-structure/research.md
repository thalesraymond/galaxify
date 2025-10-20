# Research & Decisions

This document outlines the research and decisions made for the monorepo setup.

## 1. Monorepo Setup with pnpm, Vite, React.js, and Express.js

-   **Decision**: Use pnpm workspaces to manage the monorepo. The `pnpm-workspace.yaml` file will define the packages. A root `package.json` will contain the scripts to run commands across all packages.
-   **Rationale**: pnpm workspaces are efficient for monorepos, as they share dependencies between packages, saving disk space and installation time.
-   **Alternatives considered**: npm workspaces, yarn workspaces. pnpm is generally considered more performant.

## 2. Build and Test Toolchain with Vite and Vitest

-   **Decision**: Use Vite for building and Vitest for testing all packages.
-   **Rationale**: Vite is a fast and modern build tool. Vitest is a Vite-native test runner with a Jest-compatible API, which makes it easy to use.
-   **Alternatives considered**: Using `tsc` directly for the backend build, Jest for testing. Vite is faster than `tsc` for development, and Vitest is faster and more modern than Jest.

## 3. API Proxy from React to Express.js

-   **Decision**: Use the built-in proxy feature of Vite. The `vite.config.ts` file will be configured with a `rewrite` rule to proxy requests from `/api/:path*` to the backend server.
-   **Rationale**: This is the standard and simplest way to handle API proxying in React with Vite during development. For production, a reverse proxy like Nginx or a cloud provider's API gateway would be used, but that is out of scope for this feature.

## 4. Backend Middleware Best Practices

-   **Decision**: The following middleware will be used in the Express.js application:
    -   `helmet`: To set various HTTP headers for security.
    -   `express-mongo-sanitize`: To sanitize user-supplied data to prevent NoSQL injection.
    -   `express-rate-limit`: To limit repeated requests to public APIs and/or endpoints such as password reset.
    -   `morgan`: To log HTTP requests in the `dev` format during development.
-   **Rationale**: This is a standard set of middleware that provides a good baseline of security and logging for an Express.js application.
-   **Alternatives considered**: Implementing these functionalities manually. Using libraries is more secure and less error-prone.
