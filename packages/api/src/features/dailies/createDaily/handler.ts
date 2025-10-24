import { Request, Response } from "express";
import { execute } from "./command.js";
import { CreateDailyDto } from "@galaxify/commons";

export const handleCreateDaily = async (req: Request<unknown, unknown, CreateDailyDto>, res: Response) => {
    try {
        // @ts-ignore
        const daily = await execute(req.body, req.user.id);

        return res.status(201).json(daily);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
