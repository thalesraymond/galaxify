# Implementation Plan: Convert Web Package to Server-Side Rendering

## 1. Technical Context

- **Feature**: Convert the `web` package from Client-Side Rendering (CSR) to Server-Side Rendering (SSR).
- **Existing Stack**: The project utilizes Vite, React, and TypeScript within a pnpm monorepo. The current `web` package is configured for CSR.
- **Challenge**: The primary challenge is to integrate SSR into the existing Vite-based workflow seamlessly, ensuring that both the development experience (like HMR) and production builds are optimized.
- **Unknowns**:
    - The optimal strategy for integrating SSR with the current Vite and React setup.
    - Best practices for server-side data fetching and state hydration.
    - Configuration of the build process to produce separate client and server bundles.
- **Clarifications**:
    - The SSR approach has been determined through research. The project will use a custom Vite SSR implementation. See `research.md` for details.

## 2. Constitution Check

- **Simplicity**: A custom Vite SSR implementation appears to be the simplest approach that aligns with the existing technology stack, avoiding the introduction of a larger framework's complexity.
- **Developer Experience**: Maintaining Vite's fast HMR during development is crucial. The chosen solution must support this.
- **Modularity**: The SSR server logic should be encapsulated within the `web` package, communicating with the `api` package for data, thus preserving the project's modular architecture.

## 3. Phase 0: Outline & Research

(See `research.md` for details)

## 4. Phase 1: Design & Contracts

(To be completed after research)