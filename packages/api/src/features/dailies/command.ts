import { CreateDailyDto, UpdateDailyDto } from '@galaxify/commons';
import NotFoundError from '../../errors/NotFoundError.js';
import { DailyModel } from './daily.model.js';

export const createDaily = async (userId: string, dto: CreateDailyDto) => {
  const daily = await DailyModel.create({ ...dto, userId });
  return daily.toJSON();
};

export const getDailies = async (userId: string) => {
  const dailies = await DailyModel.find({ userId });
  return dailies.map((daily) => daily.toJSON());
};

export const getDaily = async (userId: string, dailyId: string) => {
  const daily = await DailyModel.findOne({ _id: dailyId, userId });
  if (!daily) {
    throw new NotFoundError('Daily not found');
  }
  return daily.toJSON();
};

export const updateDaily = async (
  userId: string,
  dailyId: string,
  dto: UpdateDailyDto
) => {
  const daily = await DailyModel.findOneAndUpdate(
    { _id: dailyId, userId },
    dto,
    { new: true }
  );
  if (!daily) {
    throw new NotFoundError('Daily not found');
  }
  return daily.toJSON();
};

export const deleteDaily = async (userId: string, dailyId: string) => {
  const result = await DailyModel.deleteOne({ _id: dailyId, userId });
  if (result.deletedCount === 0) {
    throw new NotFoundError('Daily not found');
  }
};

export const checkDaily = async (userId: string, dailyId: string) => {
  const daily = await DailyModel.findOneAndUpdate(
    { _id: dailyId, userId },
    { $inc: { counter: 1 }, $push: { checks: new Date() } },
    { new: true }
  );
  if (!daily) {
    throw new NotFoundError('Daily not found');
  }
  return daily.toJSON();
};
