import { Request, Response } from "express";
import { execute } from "./command.js";
import { RegisterUserDto } from "@galaxify/commons";
import BadRequestError from "@/errors/BadRequestError.js";

export const userRegisterHandler = async (req: Request<unknown, unknown, RegisterUserDto>, res: Response) => {
    try {
        const user = await execute(req.body);

        return res.status(201).json(user);
    } catch (error) {
        if (error instanceof BadRequestError) {
            return res.status(error.statusCode).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};
