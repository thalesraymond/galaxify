import { Request, Response } from "express";
import { handleRegisterUserCommand } from "./command.js";
import { RegisterUserDto } from "@galaxify/commons";

export const handleRegisterUser = async (req: Request<unknown, unknown, RegisterUserDto>, res: Response) => {
    try {
        const user = await handleRegisterUserCommand(req.body);
        res.status(201).json(user);
    } catch (error) {
        const errorDetails = error as Error;
        console.error(errorDetails.message);
        res.status(500).json({ message: "Internal server error", originalError: errorDetails.message });
    }
};
