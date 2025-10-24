import { CreateHabitDto, UpdateHabitDto } from '@galaxify/commons';
import { HabitModel } from './habit.model.js';
import NotFoundError from '../../errors/NotFoundError.js';

export const createHabit = async (userId: string, dto: CreateHabitDto) => {
  const habit = await HabitModel.create({ ...dto, userId });
  return habit.toJSON();
};

export const getHabits = async (userId: string) => {
  const habits = await HabitModel.find({ userId });
  return habits.map((habit) => habit.toJSON());
};

export const getHabit = async (userId: string, habitId: string) => {
  const habit = await HabitModel.findOne({ _id: habitId, userId });
  if (!habit) {
    throw new NotFoundError('Habit not found');
  }
  return habit.toJSON();
};

export const updateHabit = async (
  userId: string,
  habitId: string,
  dto: UpdateHabitDto
) => {
  const habit = await HabitModel.findOneAndUpdate(
    { _id: habitId, userId },
    dto,
    { new: true }
  );
  if (!habit) {
    throw new NotFoundError('Habit not found');
  }
  return habit.toJSON();
};

export const deleteHabit = async (userId: string, habitId: string) => {
  const result = await HabitModel.deleteOne({ _id: habitId, userId });
  if (result.deletedCount === 0) {
    throw new NotFoundError('Habit not found');
  }
};

export const incrementHabit = async (userId: string, habitId: string) => {
  const habit = await HabitModel.findOneAndUpdate(
    { _id: habitId, userId },
    { $inc: { positiveCount: 1 } },
    { new: true }
  );
  if (!habit) {
    throw new NotFoundError('Habit not found');
  }
  return habit.toJSON();
};

export const decrementHabit = async (userId: string, habitId: string) => {
  const habit = await HabitModel.findOneAndUpdate(
    { _id: habitId, userId },
    { $inc: { negativeCount: 1 } },
    { new: true }
  );
  if (!habit) {
    throw new NotFoundError('Habit not found');
  }
  return habit.toJSON();
};
