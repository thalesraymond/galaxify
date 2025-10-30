"use client";
import { CreateHabitDto } from "@galaxify/commons";
import { useState } from "react";

type CreateHabitFormProps = {
  onSubmit: (habit: CreateHabitDto) => void;
};

const CreateHabitForm = ({ onSubmit }: CreateHabitFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPositive, setIsPositive] = useState(true);
  const [resetCounter, setResetCounter] = useState<"daily" | "weekly" | "monthly">("daily");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      isPositive,
      isNegative: !isPositive,
      resetCounter,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Habit Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Habit Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Habit Type</label>
        <select
          value={isPositive ? "positive" : "negative"}
          onChange={(e) => setIsPositive(e.target.value === "positive")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Reset Counter</label>
        <select
          value={resetCounter}
          onChange={(e) => setResetCounter(e.target.value as "daily" | "weekly" | "monthly")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Create Habit
      </button>
    </form>
  );
};

export default CreateHabitForm;
