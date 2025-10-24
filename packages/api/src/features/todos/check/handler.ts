import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { checkTodoCommand } from "./command";

export const checkTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const todo = await checkTodoCommand(req.user._id, id);
    res.status(StatusCodes.OK).json(todo);
  } catch (err) {
    next(err);
  }
};
