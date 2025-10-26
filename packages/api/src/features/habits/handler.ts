import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as command from './command.js';

export const createHabitHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const habit = await command.createHabit(req.user!.id, req.body);
    res.status(StatusCodes.CREATED).json(habit);
  } catch (err) {
    next(err);
  }
};

export const getHabitsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const habits = await command.getHabits(req.user!.id);
    res.status(StatusCodes.OK).json(habits);
  } catch (err) {
    next(err);
  }
};

export const getHabitHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const habit = await command.getHabit(req.user!.id, req.params.id);
    res.status(StatusCodes.OK).json(habit);
  } catch (err) {
    next(err);
  }
};

export const updateHabitHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const habit = await command.updateHabit(
      req.user!.id,
      req.params.id,
      req.body
    );
    res.status(StatusCodes.OK).json(habit);
  } catch (err) {
    next(err);
  }
};

export const deleteHabitHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await command.deleteHabit(req.user!.id, req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (err) {
    next(err);
  }
};

export const incrementHabitHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const habit = await command.incrementHabit(req.user!.id, req.params.id);
    res.status(StatusCodes.OK).json(habit);
  } catch (err) {
    next(err);
  }
};

export const decrementHabitHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const habit = await command.decrementHabit(req.user!.id, req.params.id);
    res.status(StatusCodes.OK).json(habit);
  } catch (err) {
    next(err);
  }
};
