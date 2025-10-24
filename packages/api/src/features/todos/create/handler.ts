import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateTodoDto } from "@galaxify/commons";
import { createTodoCommand } from "./command.js";

export const createTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description } = req.body as CreateTodoDto;
    const newTodo = await createTodoCommand(req.user._id, {
      title,
      description,
    });
    res.status(StatusCodes.CREATED).json(newTodo);
  } catch (err) {
    next(err);
  }
};
