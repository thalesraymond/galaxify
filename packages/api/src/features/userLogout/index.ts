import express from "express";
import { handleLogoutUser } from "./handler.js";

const authRouter = express.Router();

authRouter.post("/logout", handleLogoutUser);

export default authRouter;
