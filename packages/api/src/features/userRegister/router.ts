import { Router } from "express";
import { userRegisterHandler } from "./handler";

const router = Router();

router.post("/register", userRegisterHandler);

export default router;
