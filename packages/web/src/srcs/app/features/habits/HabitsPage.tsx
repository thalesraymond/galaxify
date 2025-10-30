"use client";
import { Habit } from "@galaxify/commons";
import { useEffect, useState } from "react";
import HabitList from "./HabitList";
import CreateHabitForm from "./CreateHabitForm";
import { getHabits, createHabit } from "./api";

const HabitsPage = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const fetchedHabits = await getHabits();
      setHabits(fetchedHabits);
    };
    fetchHabits();
  }, []);

  const handleCreateHabit = async (habit: Omit<Habit, "_id" | "userId" | "createdAt" | "updatedAt" | "positiveCount" | "negativeCount">) => {
    const newHabit = await createHabit(habit);
    setHabits([...habits, newHabit]);
  };

  return (
    <div>
      <h1>Habits</h1>
      <CreateHabitForm onSubmit={handleCreateHabit} />
      <HabitList habits={habits} />
    </div>
  );
};

export default HabitsPage;
