import { Router } from "express";
import { RegisterController } from "./register.controller.js";
import { RegisterUseCase } from "./register.use-case.js";
import { MongoUserRepository } from "./user.repository.js";

const router = Router();

const userRepository = new MongoUserRepository();
const registerUseCase = new RegisterUseCase(userRepository);
const registerController = new RegisterController(registerUseCase);

router.post("/register", (req, res) => registerController.handle(req, res));

export default router;
