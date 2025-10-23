import { Request, Response } from "express";
import { execute } from "./command.js";
import { LoginUserDto } from "@galaxify/commons";
import UnauthorizedError from "@/errors/UnauthorizedError.js";

export const handleLoginUser = async (req: Request<unknown, unknown, LoginUserDto>, res: Response) => {
    try {
        const { token } = await execute(req.body);

        return res.status(200).json({ token });
    } catch (error) {
        if (error instanceof UnauthorizedError) {
            return res.status(error.statusCode).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};
