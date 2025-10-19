import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
  statusCode?: number;
}

const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong!';

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

export default errorHandler;
