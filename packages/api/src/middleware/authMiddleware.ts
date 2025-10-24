import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import UnauthenticatedError from "../errors/UnauthenticatedError.js";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };
    req.user = { _id: payload.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};
