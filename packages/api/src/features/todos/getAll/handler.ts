import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getAllTodosCommand } from "./command.js";

export const getAllTodosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await getAllTodosCommand(req.user._id);
    res.status(StatusCodes.OK).json(todos);
  } catch (err) {
    next(err);
  }
};
