import { describe, it, expect, vi, beforeEach, afterEach, type Mock } from 'vitest';
import * as command from '../../../src/features/dailies/command.js';
import { DailyModel } from '../../../src/features/dailies/daily.model.js';
import NotFoundError from '../../../src/errors/NotFoundError.js';
import { CreateDailyDto, UpdateDailyDto } from '@galaxify/commons';

vi.mock('../../../src/features/dailies/daily.model.js', () => ({
  DailyModel: {
    create: vi.fn(),
    find: vi.fn(),
    findOne: vi.fn(),
    findOneAndUpdate: vi.fn(),
    deleteOne: vi.fn(),
  },
}));

describe('Dailies Command', () => {
  const userId = 'user-123';

  beforeEach(() => {
    vi.resetAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('createDaily', () => {
    it('should create a new daily', async () => {
      const dto: CreateDailyDto = {
        title: 'Test Daily',
        resetCounter: 'daily',
      };
      const daily = { ...dto, userId, toJSON: () => ({ ...dto, userId }) };
      (DailyModel.create as Mock).mockResolvedValue(daily);

      const result = await command.createDaily(userId, dto);

      expect(DailyModel.create).toHaveBeenCalledWith({ ...dto, userId });
      expect(result).toEqual(daily.toJSON());
    });
  });

  describe('getDailies', () => {
    it('should return a list of dailies', async () => {
      const dailies = [
        { title: 'Daily 1', toJSON: () => ({ title: 'Daily 1' }) },
        { title: 'Daily 2', toJSON: () => ({ title: 'Daily 2' }) },
      ];
      (DailyModel.find as Mock).mockResolvedValue(dailies);

      const result = await command.getDailies(userId);

      expect(DailyModel.find).toHaveBeenCalledWith({ userId });
      expect(result).toEqual(dailies.map((d) => d.toJSON()));
    });
  });

  describe('getDaily', () => {
    const dailyId = 'daily-123';

    it('should return a single daily', async () => {
      const daily = { title: 'Test Daily', toJSON: () => ({ title: 'Test Daily' }) };
      (DailyModel.findOne as Mock).mockResolvedValue(daily);

      const result = await command.getDaily(userId, dailyId);

      expect(DailyModel.findOne).toHaveBeenCalledWith({ _id: dailyId, userId });
      expect(result).toEqual(daily.toJSON());
    });

    it('should throw an error if the daily is not found', async () => {
      (DailyModel.findOne as Mock).mockResolvedValue(null);

      await expect(command.getDaily(userId, dailyId)).rejects.toThrow(
        new NotFoundError('Daily not found')
      );
    });
  });

  describe('updateDaily', () => {
    const dailyId = 'daily-123';

    it('should update a daily', async () => {
      const dto: UpdateDailyDto = { title: 'Updated Daily' };
      const daily = { ...dto, toJSON: () => ({ ...dto }) };
      (DailyModel.findOneAndUpdate as Mock).mockResolvedValue(daily);

      const result = await command.updateDaily(userId, dailyId, dto);

      expect(DailyModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: dailyId, userId },
        dto,
        { new: true }
      );
      expect(result).toEqual(daily.toJSON());
    });

    it('should throw an error if the daily is not found', async () => {
      (DailyModel.findOneAndUpdate as Mock).mockResolvedValue(null);

      await expect(
        command.updateDaily(userId, dailyId, {})
      ).rejects.toThrow(new NotFoundError('Daily not found'));
    });
  });

  describe('deleteDaily', () => {
    const dailyId = 'daily-123';

    it('should delete a daily', async () => {
      (DailyModel.deleteOne as Mock).mockResolvedValue({ deletedCount: 1 });

      await command.deleteDaily(userId, dailyId);

      expect(DailyModel.deleteOne).toHaveBeenCalledWith({ _id: dailyId, userId });
    });

    it('should throw an error if the daily is not found', async () => {
      (DailyModel.deleteOne as Mock).mockResolvedValue({ deletedCount: 0 });

      await expect(command.deleteDaily(userId, dailyId)).rejects.toThrow(
        new NotFoundError('Daily not found')
      );
    });
  });

  describe('checkDaily', () => {
    const dailyId = 'daily-123';

    it('should increment the counter and add a check', async () => {
      const date = new Date();
      vi.setSystemTime(date);
      const daily = {
        title: 'Test Daily',
        counter: 1,
        checks: [date],
        toJSON: () => ({
          title: 'Test Daily',
          counter: 1,
          checks: [date],
        }),
      };
      (DailyModel.findOneAndUpdate as Mock).mockResolvedValue(daily);

      const result = await command.checkDaily(userId, dailyId);

      expect(DailyModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: dailyId, userId },
        { $inc: { counter: 1 }, $push: { checks: date } },
        { new: true }
      );
      expect(result).toEqual(daily.toJSON());
    });

    it('should throw an error if the daily is not found', async () => {
      (DailyModel.findOneAndUpdate as Mock).mockResolvedValue(null);

      await expect(command.checkDaily(userId, dailyId)).rejects.toThrow(
        new NotFoundError('Daily not found')
      );
    });
  });
});
