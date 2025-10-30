import { Habit, CreateHabitDto, UpdateHabitDto } from "@galaxify/commons";

const API_URL = "/api/habits";

export const getHabits = async (): Promise<Habit[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch habits");
  }
  return response.json();
};

export const createHabit = async (habit: CreateHabitDto): Promise<Habit> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habit),
  });
  if (!response.ok) {
    throw new Error("Failed to create habit");
  }
  return response.json();
};

export const updateHabit = async (
  id: string,
  habit: UpdateHabitDto
): Promise<Habit> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habit),
  });
  if (!response.ok) {
    throw new Error("Failed to update habit");
  }
  return response.json();
};

export const deleteHabit = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete habit");
  }
};

export const completeHabit = async (id: string): Promise<Habit> => {
  const response = await fetch(`${API_URL}/${id}/complete`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Failed to complete habit");
  }
  return response.json();
};
