import CustomError from "@/errors/CustomError.js";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default class ErrorHandlerMiddleware {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static errorHandler(err: CustomError, _req: Request, res: Response, next: NextFunction) {
        const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

        const msg = err.message || "Something went wrong, try again later";

        return res.status(statusCode).json({ msg });
    }
}
