import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getTodoByIdCommand } from "./command.js";

export const getTodoByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const todo = await getTodoByIdCommand(req.user._id, id);
    res.status(StatusCodes.OK).json(todo);
  } catch (err) {
    next(err);
  }
};
