import { describe, it, expect, beforeEach, vi, type Mock } from 'vitest';
import { HabitModel } from '../../../src/features/habits/habit.model.js';
import * as command from '../../../src/features/habits/command.js';
import NotFoundError from '../../../src/errors/NotFoundError.js';

vi.mock('../../../src/features/habits/habit.model.js');

describe('Habit Commands', () => {
  const userId = 'user-123';
  const habitId = 'habit-123';

  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('createHabit', () => {
    it('should create a new habit', async () => {
      const dto = {
        title: 'Test Habit',
        isPositive: true,
        isNegative: false,
        resetCounter: 'daily' as const,
      };
      const mockHabit = { ...dto, userId, toJSON: () => ({ ...dto, userId }) };
      (HabitModel.create as Mock).mockResolvedValue(mockHabit);

      const result = await command.createHabit(userId, dto);

      expect(HabitModel.create).toHaveBeenCalledWith({ ...dto, userId });
      expect(result).toEqual({ ...dto, userId });
    });
  });

  describe('getHabits', () => {
    it('should return a list of habits for a user', async () => {
      const mockHabits = [
        { toJSON: () => ({ title: 'Habit 1' }) },
        { toJSON: () => ({ title: 'Habit 2' }) },
      ];
      (HabitModel.find as Mock).mockResolvedValue(mockHabits);

      const result = await command.getHabits(userId);

      expect(HabitModel.find).toHaveBeenCalledWith({ userId });
      expect(result).toEqual([{ title: 'Habit 1' }, { title: 'Habit 2' }]);
    });
  });

  describe('getHabit', () => {
    it('should return a single habit', async () => {
      const mockHabit = { toJSON: () => ({ _id: habitId, userId }) };
      (HabitModel.findOne as Mock).mockResolvedValue(mockHabit);

      const result = await command.getHabit(userId, habitId);

      expect(HabitModel.findOne).toHaveBeenCalledWith({ _id: habitId, userId });
      expect(result).toEqual({ _id: habitId, userId });
    });

    it('should throw NotFoundError if habit is not found', async () => {
      (HabitModel.findOne as Mock).mockResolvedValue(null);
      await expect(command.getHabit(userId, habitId)).rejects.toThrow(NotFoundError);
    });
  });

  describe('updateHabit', () => {
    it('should update and return a habit', async () => {
        const dto = { title: 'Updated Habit' };
        const mockHabit = { toJSON: () => ({ _id: habitId, ...dto }) };
        (HabitModel.findOneAndUpdate as Mock).mockResolvedValue(mockHabit);

        const result = await command.updateHabit(userId, habitId, dto);

        expect(HabitModel.findOneAndUpdate).toHaveBeenCalledWith(
          { _id: habitId, userId },
          dto,
          { new: true }
        );
        expect(result).toEqual({ _id: habitId, ...dto });
      });

    it('should throw NotFoundError if habit to update is not found', async () => {
      (HabitModel.findOneAndUpdate as Mock).mockResolvedValue(null);
      await expect(command.updateHabit(userId, habitId, {})).rejects.toThrow(NotFoundError);
    });
  });

  describe('deleteHabit', () => {
    it('should delete a habit', async () => {
        (HabitModel.deleteOne as Mock).mockResolvedValue({ deletedCount: 1 });
        await expect(command.deleteHabit(userId, habitId)).resolves.toBeUndefined();
        expect(HabitModel.deleteOne).toHaveBeenCalledWith({ _id: habitId, userId });
      });

    it('should throw NotFoundError if habit to delete is not found', async () => {
        (HabitModel.deleteOne as Mock).mockResolvedValue({ deletedCount: 0 });
        await expect(command.deleteHabit(userId, habitId)).rejects.toThrow(NotFoundError);
    });
  });

  describe('incrementHabit', () => {
    it('should increment the positive count', async () => {
      const mockHabit = { toJSON: () => ({ positiveCount: 1 }) };
      (HabitModel.findOneAndUpdate as Mock).mockResolvedValue(mockHabit);

      const result = await command.incrementHabit(userId, habitId);

      expect(HabitModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: habitId, userId },
        { $inc: { positiveCount: 1 } },
        { new: true }
      );
      expect(result).toEqual({ positiveCount: 1 });
    });

    it('should throw NotFoundError if habit to increment is not found', async () => {
      (HabitModel.findOneAndUpdate as Mock).mockResolvedValue(null);
      await expect(command.incrementHabit(userId, habitId)).rejects.toThrow(NotFoundError);
    });
  });

  describe('decrementHabit', () => {
    it('should increment the negative count', async () => {
      const mockHabit = { toJSON: () => ({ negativeCount: 1 }) };
      (HabitModel.findOneAndUpdate as Mock).mockResolvedValue(mockHabit);

      const result = await command.decrementHabit(userId, habitId);

      expect(HabitModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: habitId, userId },
        { $inc: { negativeCount: 1 } },
        { new: true }
      );
      expect(result).toEqual({ negativeCount: 1 });
    });

    it('should throw NotFoundError if habit to decrement is not found', async () => {
        (HabitModel.findOneAndUpdate as Mock).mockResolvedValue(null);
        await expect(command.decrementHabit(userId, habitId)).rejects.toThrow(NotFoundError);
      });
  });
});
