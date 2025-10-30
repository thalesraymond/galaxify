import { Habit } from "@galaxify/commons";

type HabitItemProps = {
  habit: Habit;
  onEdit: (habit: Habit) => void;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
};

const HabitItem = ({ habit, onEdit, onDelete, onComplete }: HabitItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold mb-2">{habit.title}</h3>
        <p className="text-gray-600">{habit.description}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onComplete(habit._id)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Complete
        </button>
        <button
          onClick={() => onEdit(habit)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(habit._id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
