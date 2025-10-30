import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as command from './command.js';

export const createTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = await command.createTodo(req.user!.id, req.body);
    res.status(StatusCodes.CREATED).json(todo);
  } catch (err) {
    next(err);
  }
};

export const getTodosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await command.getTodos(req.user!.id);
    res.status(StatusCodes.OK).json(todos);
  } catch (err) {
    next(err);
  }
};

export const getTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = await command.getTodo(req.user!.id, req.params.id);
    res.status(StatusCodes.OK).json(todo);
  } catch (err) {
    next(err);
  }
};

export const updateTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = await command.updateTodo(
      req.user!.id,
      req.params.id,
      req.body
    );
    res.status(StatusCodes.OK).json(todo);
  } catch (err) {
    next(err);
  }
};

export const deleteTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await command.deleteTodo(req.user!.id, req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (err) {
    next(err);
  }
};

export const checkTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = await command.checkTodo(req.user!.id, req.params.id);
    res.status(StatusCodes.OK).json(todo);
  } catch (err) {
    next(err);
  }
};
