import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { deleteTodoCommand } from "./command";

export const deleteTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deleteTodoCommand(req.user._id, id);
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (err) {
    next(err);
  }
};
