# Research: SSR Approach for the Web Package

## Decision

We will implement a **custom Server-Side Rendering (SSR) solution using Vite's built-in SSR capabilities**.

## Rationale

This decision is based on the project's core principles and existing technology stack:

- **Alignment with Constitution**:
    - **Simplicity**: A custom Vite SSR implementation is the most straightforward approach. It avoids introducing a large, opinionated framework like Next.js or Remix, which would add unnecessary complexity to the project.
    - **Developer Experience**: This approach fully leverages the existing Vite setup, ensuring that the fast development server and Hot Module Replacement (HMR) are preserved, which is a key priority.
    - **Modularity**: The SSR logic can be neatly encapsulated within the `web` package, maintaining the project's modular architecture without imposing a new framework's structure.

- **Technical Fit**: Since the project is already built on Vite, using its native SSR functionality is the most direct path. The official Vite documentation provides a comprehensive guide for building a server-rendered React application, covering server-entry, client hydration, and build configuration.

## Alternatives Considered

- **Next.js**: While a powerful and popular framework, integrating it would mean replacing Vite with Next.js's compiler and adopting its specific project structure and conventions. This would be a significant departure from the current setup and would violate the principle of simplicity.

- **Remix**: Similar to Next.js, Remix is another excellent framework, but it also comes with its own opinions on routing and data loading. Adopting it would introduce a new paradigm and a level of complexity that is not justified for this feature.
