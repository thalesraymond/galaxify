import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UnauthenticatedError from '../errors/UnauthenticatedError.js';
import UserModel from '../models/UserModel.js';

interface JwtPayload {
  id: string;
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new UnauthenticatedError('Authentication invalid'));
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user = { id: payload.id };
    next();
  } catch (error) {
    next(new UnauthenticatedError('Authentication invalid'));
  }
};
