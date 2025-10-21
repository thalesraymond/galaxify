import { Request, Response } from "express";
import { RegisterUseCase } from "./register.use-case.js";

export class RegisterController {
    constructor(private registerUseCase: RegisterUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        try {
            await this.registerUseCase.execute({ email, password });
            return res.status(201).send();
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message || "Unexpected error." });
        }
    }
}
