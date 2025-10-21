import { Router } from "express";
import { RegisterController } from "./registerController.js";
import { RegisterUseCase } from "./registerUseCase.js";
import { MongoUserRepository } from "./userRepository.js";

const router = Router();

const userRepository = new MongoUserRepository();
const registerUseCase = new RegisterUseCase(userRepository);
const registerController = new RegisterController(registerUseCase);

router.post("/register", (req, res) => registerController.handle(req, res));

export default router;
