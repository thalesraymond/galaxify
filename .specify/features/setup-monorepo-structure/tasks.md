# Tasks for Monorepo Structure Setup

This document outlines the tasks required to implement the Monorepo Structure Setup feature.

## Implementation Strategy

The implementation will follow an MVP-first approach. We will start with the core setup and then implement each user story as an independent, testable increment. The suggested MVP scope is the completion of User Story 1.

## Dependencies

The user stories are independent and can be implemented in any order after the foundational tasks are complete.

## Parallel Execution

Tasks marked with `[P]` can be executed in parallel within the same phase.

---

## Phase 1: Project Setup

- [x] T001 Create the root `package.json` file with pnpm workspace configuration in `/package.json`
- [x] T002 Create the `pnpm-workspace.yaml` file in `/pnpm-workspace.yaml`
- [x] T003 Create the `.gitignore` file in `/.gitignore`
- [x] T004 Create the `.env_example` file in `/.env_example`

## Phase 2: Foundational Tasks

- [x] T005 Create the `packages/commons` directory for shared code in `/packages/commons`
- [x] T006 Initialize the `packages/commons` package with a `package.json` file in `/packages/commons/package.json`
- [x] T007 Create a `tsconfig.json` for the `commons` package in `/packages/commons/tsconfig.json`
- [x] T008 Create an initial types file in `/packages/commons/src/types.ts`

## Phase 3: User Story 1 - Development Environment

**Goal**: A developer can start the entire application stack with a single command.
**Independent Test Criteria**: Running `pnpm run dev` starts the frontend and backend servers successfully.

- [x] T009 [US1] Create the `packages/api` directory for the backend in `/packages/api`
- [x] T010 [P] [US1] Initialize the `packages/api` package with a `package.json` file in `/packages/api/package.json`
- [x] T011 [P] [US1] Create a `tsconfig.json` for the `api` package in `/packages/api/tsconfig.json`
- [x] T012 [P] [US1] Create the main application file in `/packages/api/src/app.ts`
- [x] T013 [P] [US1] Create the server entry point in `/packages/api/src/server.ts`
- [x] T014 [P] [US1] Implement the health check endpoint in `/packages/api/src/app.ts`
- [x] T015 [US1] Add the `dev` script to the root `package.json` to start both servers in `/package.json`
- [x] T016 [US1] Create the `packages/web` directory for the frontend in `/packages/web`
- [x] T017 [P] [US1] Initialize the `packages/web` package with a `package.json` file in `/packages/web/package.json`
- [x] T018 [P] [US1] Create a `tsconfig.json` for the `web` package in `/packages/web/tsconfig.json`
- [x] T019 [P] [US1] Create the `vite.config.ts` file with the API proxy configuration in `/packages/web/vite.config.ts`

## Phase 4: User Story 2 - Production Build

**Goal**: A single command builds the entire application stack.
**Independent Test Criteria**: Running `pnpm run build` creates production-ready artifacts for both the frontend and backend.

- [x] T020 [US2] Add the `build` script to the `packages/api/package.json` file in `/packages/api/package.json`
- [x] T021 [US2] Add the `build` script to the `packages/web/package.json` file in `/packages/web/package.json`
- [x] T022 [US2] Add the `build` script to the root `package.json` to build both packages in `/package.json`

## Phase 5: User Story 3 - Linting

**Goal**: A single command can check the code quality of the entire project.
**Independent Test Criteria**: Running `pnpm run lint` lints all the packages.

- [x] T023 [US3] Configure ESLint for the `packages/api` package in `/packages/api/.eslintrc.js`
- [x] T024 [US3] Configure ESLint for the `packages/web` package in `/packages/web/.eslintrc.js`
- [x] T025 [US3] Add the `lint` script to the root `package.json` to lint all packages in `/package.json`

## Final Phase: Polish & Cross-Cutting Concerns

- [x] T026 Create a `README.md` file with instructions on how to use the monorepo in `/README.md`
