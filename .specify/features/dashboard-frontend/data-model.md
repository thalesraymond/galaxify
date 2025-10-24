# Data Model for Galaxify Dashboard Front-End

## Entities

### Habit
- `id`: Unique Identifier (string)
- `name`: Name of the habit (string)
- `type`: Type of habit (enum: POSITIVE, NEGATIVE, BOTH)
- `isCompletedToday`: Status for today's completion (boolean)

### DailyMission
- `id`: Unique Identifier (string)
- `name`: Name of the daily mission (string)
- `isCompleted`: Completion status (boolean)

### ToDo
- `id`: Unique Identifier (string)
- `name`: Name of the to-do item (string)
- `isCompleted`: Completion status (boolean)
