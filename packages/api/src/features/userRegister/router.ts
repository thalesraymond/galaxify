import { Router } from "express";
import { userRegisterHandler } from "./handler.js";

const router = Router();

router.post("/register", userRegisterHandler);

export default router;
