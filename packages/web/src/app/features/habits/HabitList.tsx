import { Habit } from "@galaxify/commons";
import HabitItem from "./HabitItem";

type HabitListProps = {
  habits: Habit[];
  onEdit: (habit: Habit) => void;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
};

const HabitList = ({ habits, onEdit, onDelete, onComplete }: HabitListProps) => {
  if (habits.length === 0) {
    return (
      <p className="text-center text-gray-500">
        You don&apos;t have any habits yet. Create one!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {habits.map((habit) => (
        <HabitItem
          key={habit._id}
          habit={habit}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default HabitList;
