"use client";
import { Habit, CreateHabitDto, UpdateHabitDto } from "@galaxify/commons";
import { useEffect, useState } from "react";
import HabitList from "./HabitList";
import CreateHabitForm from "./CreateHabitForm";
import EditHabitForm from "./EditHabitForm";
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  completeHabit,
} from "./api";

const HabitsPage = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const fetchedHabits = await getHabits();
        setHabits(fetchedHabits);
      } catch (error) {
        console.error("Failed to fetch habits:", error);
      }
    };
    fetchHabits();
  }, []);

  const handleCreateHabit = async (habit: CreateHabitDto) => {
    try {
      const newHabit = await createHabit(habit);
      setHabits([...habits, newHabit]);
    } catch (error) {
      console.error("Failed to create habit:", error);
    }
  };

  const handleUpdateHabit = async (habit: UpdateHabitDto) => {
    if (!editingHabit) return;
    try {
      const updated = await updateHabit(editingHabit._id, habit);
      setHabits(habits.map((h) => (h._id === updated._id ? updated : h)));
      setEditingHabit(null);
    } catch (error) {
      console.error("Failed to update habit:", error);
    }
  };

  const handleDeleteHabit = async (id: string) => {
    try {
      await deleteHabit(id);
      setHabits(habits.filter((h) => h._id !== id));
    } catch (error) {
      console.error("Failed to delete habit:", error);
    }
  };

  const handleCompleteHabit = async (id: string) => {
    try {
      const updatedHabit = await completeHabit(id);
      setHabits(
        habits.map((h) => (h._id === updatedHabit._id ? updatedHabit : h))
      );
    } catch (error) {
      console.error("Failed to complete habit:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Habits</h1>
      <div className="mb-4">
        {editingHabit ? (
          <EditHabitForm habit={editingHabit} onSubmit={handleUpdateHabit} />
        ) : (
          <CreateHabitForm onSubmit={handleCreateHabit} />
        )}
      </div>
      <HabitList
        habits={habits}
        onEdit={setEditingHabit}
        onDelete={handleDeleteHabit}
        onComplete={handleCompleteHabit}
      />
    </div>
  );
};

export default HabitsPage;
