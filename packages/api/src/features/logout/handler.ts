import { Request, Response } from "express";

export const logoutHandler = async (req: Request, res: Response) => {
    return res.status(200).json({ message: "Logout successful" });
};
