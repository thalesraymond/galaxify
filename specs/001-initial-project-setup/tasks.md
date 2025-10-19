# Tasks: Initial Project Setup & Core MVP Features

**Input**: Design documents from `/home/thales/projects/galaxify/specs/001-initial-project-setup/`

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure.

- [x] T001 [P] Configure shared TypeScript settings in `packages/shared/tsconfig.json`.
- [x] T002 [P] Define shared data types in `packages/shared/src/types/model-types.ts` based on `data-model.md`.
- [x] T003 [P] Configure Vitest for the backend in `packages/api/vitest.config.js` using `@swc/jest`.
- [x] T004 [P] Configure Vitest for the frontend in `packages/web/vitest.config.js`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

- [ ] T005 Setup the main Express server in `packages/api/src/index.ts`.
- [ ] T006 [P] Implement database connection module in `packages/api/src/config/database.ts`.
- [ ] T007 [P] Add security middleware (Helmet, CORS) to the Express app in `packages/api/src/index.ts`.
- [ ] T008 [P] Create a generic error handling middleware in the API package.

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Account Registration and Login (Priority: P1) 🎯 MVP

**Goal**: Allow users to create an account and log in securely.

**Independent Test**: A new user can visit the site, register for an account, be redirected to the dashboard, log out, and log back in successfully.

### Implementation for User Story 1

- [ ] T009 [P] [US1] Create the User model schema in `packages/api/src/models/user.model.ts`.
- [ ] T010 [US1] Implement authentication logic (password hashing, JWT generation) in `packages/api/src/utils/auth.ts`.
- [ ] T011 [US1] Create the authentication controller in `packages/api/src/controllers/authController.ts` with `register` and `login` methods.
- [ ] T012 [US1] Create the authentication routes in `packages/api/src/routes/authRoutes.ts` for `/register` and `/login`.
- [ ] T013 [US1] Implement the server-side route protection hook in `packages/web/src/hooks.server.ts`.
- [ ] T014 [P] [US1] Create the user store in `packages/web/src/lib/stores/userStore.ts`.
- [ ] T015 [P] [US1] Develop the registration form component in `packages/web/src/routes/register/+page.svelte`.
- [ ] T016 [P] [US1] Develop the login form component in `packages/web/src/routes/login/+page.svelte`.
- [ ] T017 [US1] Update the main layout in `packages/web/src/routes/+layout.svelte` to show user status and a logout button.

**Checkpoint**: User authentication is fully functional.

---

## Phase 4: User Story 2 - Gamified Task Management (Priority: P1)

**Goal**: Allow users to create, manage, and complete tasks to earn rewards.

**Independent Test**: An authenticated user can create a new task, see it in their list, and mark it as complete.

### Implementation for User Story 2

- [ ] T018 [P] [US2] Create the Task model schema in `packages/api/src/models/task.model.ts`.
- [ ] T019 [P] [US2] Create the Resource model schema in `packages/api/src/models/resource.model.ts`.
- [ ] T020 [US2] Implement reward calculation logic in `packages/api/src/utils/calculateRewards.ts`.
- [ ] T021 [US2] Create the task controller in `packages/api/src/controllers/taskController.ts` with methods for creating and completing tasks.
- [ ] T022 [US2] Create the task routes in `packages/api/src/routes/taskRoutes.ts`.
- [ ] T023 [P] [US2] Develop the task creation component in `packages/web/src/lib/components/TaskInput.svelte`.
- [ ] T024 [P] [US2] Develop the task list item component in `packages/web/src/lib/components/TaskItem.svelte`.
- [ ] T025 [US2] Create the main task dashboard page at `packages/web/src/routes/dashboard/+page.svelte` to display and manage tasks.

**Checkpoint**: Core task management loop is functional.

---

## Phase 5: User Story 3 - Star System Exploration (Priority: P2)

**Goal**: Allow users to view their procedurally generated star system.

**Independent Test**: An authenticated user can navigate to the starmap and see a visual representation of their system.

### Implementation for User Story 3

- [ ] T026 [P] [US3] Create the StarSystem and Discovery model schemas in `packages/api/src/models/starSystem.model.ts` and `discovery.model.ts`.
- [ ] T027 [US3] Create the system controller in `packages/api/src/controllers/systemController.ts` to get the current system.
- [ ] T028 [US3] Create the system routes in `packages/api/src/routes/systemRoutes.ts`.
- [ ] T029 [P] [US3] Develop the starmap view component in `packages/web/src/routes/starmap/+page.svelte`.
- [ ] T030 [P] [US3] Create a `logbook` page at `packages/web/src/routes/logbook/+page.svelte` to display discoveries.

**Checkpoint**: Users can view their star system and discoveries.

---

## Phase 6: User Story 4 - Spaceship Customization (Priority: P3)

**Goal**: Allow users to craft and equip ship parts.

**Independent Test**: A user can go to the shipyard, view their ship, and craft a new part if they have the resources.

### Implementation for User Story 4

- [ ] T031 [P] [US4] Create the Ship and Part model schemas in `packages/api/src/models/ship.model.ts` and `part.schema.ts`.
- [ ] T032 [US4] Create the ship controller in `packages/api/src/controllers/shipController.ts` for getting ship data and crafting parts.
- [ ] T033 [US4] Create the ship routes in `packages/api/src/routes/shipRoutes.ts`.
- [ ] T034 [P] [US4] Develop the shipyard UI component in `packages/web/src/routes/shipyard/+page.svelte`.

**Checkpoint**: Ship customization features are functional.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [ ] T035 [P] Add `svelte-toast` for user feedback on all form submissions and API actions.
- [ ] T036 [P] Review and add loading state indicators for all data-fetching pages.
- [ ] T037 [P] Write unit tests for utility functions like `calculateRewards.ts`.
- [ ] T038 Run `quickstart.md` validation to ensure the project is runnable.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** & **Phase 2 (Foundational)** MUST be completed before any user story work begins.
- **User Stories** can be implemented in priority order (US1 -> US2 -> US3 -> US4).
- Within each user story, backend tasks (models, controllers, routes) should be completed before frontend tasks that depend on them.

## Implementation Strategy

1.  Complete **Phase 1 & 2** to establish the project foundation.
2.  Implement **User Story 1 (Authentication)** to deliver the core MVP.
3.  Implement **User Story 2 (Task Management)**.
4.  Implement **User Story 3 & 4**.
5.  Complete **Phase 7 (Polish)**.
