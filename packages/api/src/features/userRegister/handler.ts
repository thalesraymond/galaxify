import { Request, Response } from "express";
import { handleRegisterUserCommand } from "./command.js";
import { RegisterUserDto } from "@galaxify/commons";

export const handleRegisterUser = async (
    req: Request<unknown, unknown, RegisterUserDto>,
    res: Response
) => {
    try {
        const user = await handleRegisterUserCommand(req.body);
        res.status(201).json(user);
    } catch (error) {
        // TODO: Implement proper error handling
        res.status(500).json({ message: "Internal server error" });
    }
};
