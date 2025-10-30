import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as command from './command.js';

export const createDailyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const daily = await command.createDaily(req.user!.id, req.body);
    res.status(StatusCodes.CREATED).json(daily);
  } catch (err) {
    next(err);
  }
};

export const checkDailyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const daily = await command.checkDaily(req.user!.id, req.params.id);
    res.status(StatusCodes.OK).json(daily);
  } catch (err) {
    next(err);
  }
};

export const updateDailyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const daily = await command.updateDaily(
      req.user!.id,
      req.params.id,
      req.body
    );
    res.status(StatusCodes.OK).json(daily);
  } catch (err) {
    next(err);
  }
};

export const deleteDailyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await command.deleteDaily(req.user!.id, req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (err) {
    next(err);
  }
};

export const getDailyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const daily = await command.getDaily(req.user!.id, req.params.id);
    res.status(StatusCodes.OK).json(daily);
  } catch (err) {
    next(err);
  }
};

export const getDailiesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailies = await command.getDailies(req.user!.id);
    res.status(StatusCodes.OK).json(dailies);
  } catch (err) {
    next(err);
  }
};
