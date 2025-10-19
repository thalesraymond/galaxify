<!--
SYNC IMPACT REPORT
- Version change: none -> 1.0.0
- List of modified principles: N/A (new constitution)
- Added sections:
  - Core Principles
  - Theming & Style
  - Development Operations
  - Governance
- Removed sections: N/A
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md (No changes needed, but will be interpreted against new principles)
  - ✅ .specify/templates/spec-template.md (No changes needed)
  - ✅ .specify/templates/tasks-template.md (No changes needed, but will be interpreted against new principles)
- Follow-up TODOs: none
-->
# Galaxify Constitution

## Core Principles

### I. The Galactic Core: Clean Architecture
The backend architecture MUST adhere to Clean Architecture principles, separating concerns into distinct layers: Domain (celestial bodies), Application/Use Cases (mission plans), Infrastructure (starships and tools), and Controllers (mission control). This ensures logic is isolated, testable, and maintainable.

### II. The Starship Blueprint: TypeScript & Svelte
The project is constructed with TypeScript for both the Node.js backend and the Svelte frontend. This ensures type safety and robust engineering across the entire vessel. All backend modules MUST use ESM with explicit `.js` file extensions in relative imports.

### III. Mission Control Directives: Backend Conventions
All backend code MUST follow strict conventions: `PascalCase` for filenames and classes, `I` prefix for interfaces, constructor-based dependency injection, and single-purpose Use Case classes. Controller methods MUST be public arrow functions to maintain their `this` context when handling incoming transmissions (HTTP requests).

### IV. The Navigator's Console: SvelteKit Best Practices
The frontend experience is guided by SvelteKit. Routing is file-based (`src/routes`), data loading for pages is handled in `+page.server.js`, and state mutations are managed via form `actions`. Component styles MUST be scoped to prevent cosmic interference (CSS conflicts), with global variables defined in `src/app.css`.

### V. Pre-Flight Simulations: A Test-First Galaxy
All systems MUST be verified with `vitest`. Tests are co-located in a `__tests__` directory that mirrors the `src` structure. Mocking is performed using `vi.mock`, and asynchronous operations are tested for expected outcomes, including failures. All new features or bug fixes require corresponding tests.

## Theming & Style

All user-facing components, documentation, and internal naming conventions SHOULD reflect a consistent space-exploration theme. Names like "Galactic Core", "Starship", "Mission Control", and "Navigator" are encouraged to create an immersive and unified project identity.

## Development Operations

- **Asynchronous Operations**: All asynchronous tasks MUST use `async/await`.
- **Error Handling**: Custom error classes MUST be used for specific failure scenarios.
- **State Management**: Shared frontend state is managed by Svelte Stores (`src/lib/stores`), with auto-subscription (`$store`) used in components for reactivity.

## Governance

This Constitution is the supreme law of the Galaxify project. All code contributions, reviews, and architectural decisions MUST align with its principles. Amendments require a formal proposal, review, and an update to the version number according to Semantic Versioning.

**Version**: 1.0.0 | **Ratified**: 2025-10-19 | **Last Amended**: 2025-10-19