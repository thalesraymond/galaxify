import { Request, Response } from "express";
import { execute } from "./command.js";

export const handleGetDailies = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const dailies = await execute(req.user.id);

        return res.status(200).json(dailies);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
