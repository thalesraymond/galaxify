# Tasks for Galaxify Dashboard Front-End

## Feature: Galaxify Dashboard Front-End

This document outlines the tasks required to implement the Galaxify Dashboard Front-End feature, organized by phases and user stories. The implementation will follow an incremental delivery approach, prioritizing core viewing functionality before interaction.

## Phase 1: Setup

- [ ] T001 Install Tailwind CSS and PostCSS in packages/web
- [ ] T002 Configure Tailwind CSS in packages/web/tailwind.config.js and packages/web/postcss.config.js
- [ ] T003 Install Zustand in packages/web
- [ ] T004 Install React Query (TanStack Query) in packages/web
- [ ] T005 Create base styling for gamified and visually rich aesthetic in packages/web/src/app/globals.css

## Phase 2: Foundational

- [ ] T006 Create mock data for Habits, Daily Missions, and To-Dos in packages/web/src/lib/mockData.ts
- [ ] T007 Set up React Query client and provider in packages/web/src/app/layout.tsx
- [ ] T008 Create a custom hook for data fetching using React Query to consume mock data in packages/web/src/hooks/useDashboardData.ts
- [ ] T009 Set up Zustand store for global UI state (e.g., loading, error) in packages/web/src/store/uiStore.ts

## Phase 3: User Story 1: View Dashboard and Items

**Goal**: Display the main dashboard with Habits, Daily Missions, and To-Dos, handling empty states.
**Independent Test Criteria**: The dashboard loads and displays all three sections with mock data, and empty states are handled gracefully.

- [ ] T010 [US1] Create the main Dashboard component in packages/web/src/app/dashboard/page.tsx
- [ ] T011 [P] [US1] Create HabitList component in packages/web/src/app/components/HabitList.tsx
- [ ] T012 [P] [US1] Create DailyMissionList component in packages/web/src/app/components/DailyMissionList.tsx
- [ ] T013 [P] [US1] Create ToDoList component in packages/web/src/app/components/ToDoList.tsx
- [ ] T014 [US1] Integrate HabitList, DailyMissionList, and ToDoList into Dashboard component in packages/web/src/app/dashboard/page.tsx
- [ ] T015 [US1] Apply gamified and visually rich styling to Dashboard and its components in packages/web/src/app/dashboard/page.tsx and packages/web/src/app/components/*.tsx
- [ ] T016 [US1] Implement graceful handling for empty states in HabitList, DailyMissionList, and ToDoList components in packages/web/src/app/components/*.tsx

## Phase 4: User Story 2: Interact with Items

**Goal**: Enable users to interact with Habits, Daily Missions, and To-Dos, reflecting completion states.
**Independent Test Criteria**: Users can mark items as complete, and the UI visually reflects the updated state for all item types.

- [ ] T017 [US2] Implement interaction logic for DailyMission items (mark as complete) in packages/web/src/app/components/DailyMissionList.tsx
- [ ] T018 [US2] Implement interaction logic for ToDo items (mark as complete) in packages/web/src/app/components/ToDoList.tsx
- [ ] T019 [US2] Implement interaction logic for Habit items (positive, negative, both) in packages/web/src/app/components/HabitList.tsx
- [ ] T020 [US2] Ensure visual distinction for completed/interacted items across all list components in packages/web/src/app/components/*.tsx

## Phase 5: Polish & Cross-Cutting Concerns

- [ ] T021 Review and refine styling for consistency and gamified aesthetic across the dashboard.
- [ ] T022 Ensure accessibility for all interactive elements.
- [ ] T023 Implement basic error handling and loading states for data fetching using Zustand and React Query.

## Dependencies

- Phase 1 must be completed before Phase 2.
- Phase 2 must be completed before Phase 3.
- Phase 3 must be completed before Phase 4.
- Phase 4 must be completed before Phase 5.

## Parallel Execution Examples

- **Within US1**: T011, T012, T013 can be worked on in parallel as they involve creating separate components.

## Implementation Strategy

This feature will be developed using an MVP-first approach, with User Story 1 (View Dashboard and Items) forming the initial MVP. Subsequent user stories will be delivered incrementally.
