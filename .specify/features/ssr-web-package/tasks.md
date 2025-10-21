# Tasks for Convert Web Package to Server-Side Rendering

This document outlines the tasks required to implement the Convert Web Package to Server-Side Rendering feature.

## Implementation Strategy

The implementation will follow an MVP-first approach. We will start with the core setup and then implement each user story as an independent, testable increment.

## Dependencies

The user stories can be implemented in any order as they are independent.

## Parallel Execution

Tasks marked with `[P]` can be executed in parallel within the same phase.

---

## Phase 1: Project Setup

- [ ] T001 Initialize necessary configurations for SSR within the `web` package in packages/web/.
- [ ] T002 Install new dependencies required for SSR in packages/web/package.json.

## Phase 2: Foundational Tasks

- [ ] T003 Create server entry point for the `web` package in packages/web/src/entry-server.tsx.
- [ ] T004 Configure Vite for SSR, including client and server build outputs in packages/web/vite.config.ts.
- [ ] T005 Set up a basic Node.js/Express server to handle SSR requests in packages/web/src/server.ts.
- [ ] T006 Implement a basic health check endpoint (`/healthz`) for the SSR server in packages/web/src/server.ts.

## Phase 3: User Story 1 - Initial Server-Side Render and Hydration

**Goal**: The application successfully renders the initial page view on the server and hydrates on the client.
**Independent Test Criteria**:
- Verify that the initial HTML response contains the fully rendered content of the application.
- Verify that the client-side React application successfully hydrates the server-rendered HTML without re-rendering.
- Verify that client-side JavaScript takes over after hydration, enabling interactive elements.

- [ ] T007 [US1] Modify `web/src/main.tsx` to use `hydrateRoot` for client-side entry in packages/web/src/main.tsx.
- [ ] T008 [US1] Integrate `entry-server.tsx` into the Node.js/Express server to render the React app to HTML in packages/web/src/server.ts.

## Phase 4: User Story 2 - SEO and JS-Disabled Support

**Goal**: Search engines can index the fully rendered content, and users with JavaScript disabled can view content.
**Independent Test Criteria**:
- Verify that a search engine crawler (simulated) receives fully rendered HTML.
- Verify that the application content is visible and readable when JavaScript is disabled in the browser.

- [ ] T009 [US2] Ensure all critical content is present in the server-rendered HTML in packages/web/src/entry-server.tsx.
- [ ] T010 [US2] Implement meta tag management for SEO (if not already present) in packages/web/src/entry-server.tsx.

## Phase 5: User Story 3 - Data Fetching for SSR

**Goal**: The rendering server can fetch necessary data from the API package to fully render pages.
**Independent Test Criteria**:
- Verify that pages requiring data from the API are fully rendered on the server with the correct data.
- Verify that basic error handling (retries, circuit breakers) is implemented for API calls during SSR.

- [ ] T011 [US3] Implement a data fetching mechanism on the server-side (e.g., `getServerSideProps` equivalent) in packages/web/src/entry-server.tsx.
- [ ] T012 [US3] Integrate API calls to the `api` package within the server-side data fetching logic in packages/web/src/entry-server.tsx.
- [ ] T013 [US3] Implement basic error handling for API calls in packages/web/src/entry-server.tsx or a dedicated data fetching utility.

## Phase 6: User Story 4 - Routing for SSR and Client-Side Navigation

**Goal**: The routing solution handles initial server-side requests and subsequent client-side navigation without page reloads.
**Independent Test Criteria**:
- Verify that direct navigation to any application route results in a server-rendered page.
- Verify that client-side navigation between routes does not trigger a full page reload.

- [ ] T014 [US4] Configure client-side router (e.g., React Router) to work with SSR in packages/web/src/main.tsx.
- [ ] T015 [US4] Ensure server-side routing matches client-side routing in packages/web/src/server.ts.

## Phase 7: User Story 5 - Build Process for Server and Client Bundles

**Goal**: The project's build process produces distinct bundles for the server and the client.
**Independent Test Criteria**:
- Verify that separate client and server bundles are generated after the build process.
- Verify that the client bundle is optimized for browser delivery and the server bundle for Node.js execution.

- [ ] T016 [US5] Modify `web/vite.config.ts` to produce separate client and server builds in packages/web/vite.config.ts.
- [ ] T017 [US5] Update `package.json` scripts for building both client and server in packages/web/package.json.

## Phase 8: User Story 6 - Error Handling and Fallback

**Goal**: The application gracefully handles server-side rendering errors by falling back to client-side rendering.
**Independent Test Criteria**:
- Verify that if the SSR process encounters an error, the server sends a basic HTML structure, and the client-side application successfully renders the page.

- [ ] T018 [US6] Implement error boundaries or try-catch blocks in packages/web/src/entry-server.tsx to catch SSR errors.
- [ ] T019 [US6] Configure the server to send a minimal HTML shell on SSR errors, allowing client-side rendering to take over in packages/web/src/server.ts.

## Phase 9: User Story 7 - Monorepo Compatibility and Existing Functionality

**Goal**: The SSR implementation is compatible with the pnpm monorepo and all existing functionality remains operational.
**Independent Test Criteria**:
- Verify that the SSR setup integrates seamlessly within the pnpm monorepo structure.
- Verify that all existing features and user flows of the `web` package function correctly after SSR implementation.

- [ ] T020 [US7] Ensure `pnpm-workspace.yaml` and `package.json` files are correctly configured for the SSR setup in pnpm-workspace.yaml and packages/web/package.json.
- [ ] T021 [US7] Perform comprehensive regression testing of existing features.

## Final Phase: Polish & Cross-Cutting Concerns

- [ ] T022 Implement basic logging and error reporting for the SSR server in packages/web/src/server.ts.
- [ ] T023 Apply standard web security practices (input validation, secure headers) to the SSR server in packages/web/src/server.ts.
- [ ] T024 Verify FCP and TTI performance metrics.
- [ ] T025 Verify Lighthouse SEO score.
- [ ] T026 Conduct load testing to ensure CPU utilization targets are met.
