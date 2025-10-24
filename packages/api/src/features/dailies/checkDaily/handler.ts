import { Request, Response } from "express";
import { execute } from "./command.js";
import NotFoundError from "@/errors/NotFoundError.js";

export const handleCheckDaily = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const daily = await execute(req.params.id, req.user.id);

        return res.status(200).json(daily);
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(error.statusCode).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};
