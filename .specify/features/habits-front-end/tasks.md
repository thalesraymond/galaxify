# Feature Implementation Tasks: Habits Front End

This document breaks down the implementation of the "Habits Front End" feature into a series of ordered tasks.

## Phase 1: Foundation and Data Layer

1.  **Task 1.1: Create Feature Scaffolding**
    -   Create a new directory `packages/web/src/app/features/habits` to house all frontend components and logic for this feature.
    -   Create a new page file `packages/web/src/app/habits/page.tsx` that will render the main habits component.

2.  **Task 1.2: Define Shared Types**
    -   In `packages/commons`, define the DTOs (Data Transfer Objects) for `Habit`, `CreateHabitDto`, and `UpdateHabitDto`.

3.  **Task 1.3: Implement API Client**
    -   Create a new file `packages/web/src/app/features/habits/api.ts`.
    -   Implement functions to handle API calls to the backend for habits (CRUD operations).

## Phase 2: UI Components

4.  **Task 2.1: Habit List Component**
    -   Create a component `HabitList.tsx` that receives a list of habits and renders them.
    -   This component should display a message when the list is empty.

5.  **Task 2.2: Habit Item Component**
    -   Create a component `HabitItem.tsx` that displays a single habit.
    -   Include buttons for "Edit", "Delete", and a mechanism to mark the habit as complete (e.g., a checkbox or a button).

6.  **Task 2.3: Create Habit Form Component**
    -   Create a component `CreateHabitForm.tsx` with a form to add a new habit.
    -   This form should handle user input, validation, and submission.

7.  **Task 2.4: Edit Habit Form Component**
    -   Create a component `EditHabitForm.tsx` to update an existing habit.
    -   This form can be similar to the create form but will be pre-filled with the habit's data.

## Phase 3: Integration and State Management

8.  **Task 3.1: Main Habits Page**
    -   Develop the main component `packages/web/src/app/features/habits/HabitsPage.tsx`.
    -   This component will manage the state for the habits feature, fetch the habits using the API client, and render the `HabitList` and `CreateHabitForm` components.
    -   Implement the logic for showing/hiding the create and edit forms (e.g., in a modal).

9.  **Task 3.2: Connect Actions**
    -   Wire up the "Create", "Edit", and "Delete" buttons to their respective API calls and update the UI accordingly.
    -   Implement the "Mark as Complete" functionality.

10. **Task 3.3: Add Routing**
    -   Ensure the `/habits` route is correctly configured in the Next.js router to display the `HabitsPage` component.

## Phase 4: Final Touches

11. **Task 4.1: Styling**
    -   Apply TailwindCSS styles to all new components to ensure they match the application's visual theme.

12. **Task 4.2: Testing**
    -   Write unit tests for the new components and API client functions to ensure they work as expected.
