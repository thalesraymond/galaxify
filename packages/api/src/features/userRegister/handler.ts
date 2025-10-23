import { Request, Response } from "express";
import { execute } from "./command.js";
import { RegisterUserDto } from "@galaxify/commons";
import { HttpError } from "../../utils/http-error.js";

export const handleRegisterUser = async (
    req: Request<unknown, unknown, RegisterUserDto>,
    res: Response
) => {
    try {
        const user = await execute(req.body);
        res.status(201).json(user);
    } catch (error) {
        if (error instanceof HttpError) {
            res.status(error.statusCode).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
};
