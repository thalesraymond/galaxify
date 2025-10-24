import { Router } from "express";
import { logoutHandler } from "./handler";

const router = Router();

router.post("/logout", logoutHandler);

export default router;
