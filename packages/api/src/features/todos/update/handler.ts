import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { updateTodoCommand } from "./command";

export const updateTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const todo = await updateTodoCommand(req.user._id, id, updateData);
    res.status(StatusCodes.OK).json(todo);
  } catch (err) {
    next(err);
  }
};
