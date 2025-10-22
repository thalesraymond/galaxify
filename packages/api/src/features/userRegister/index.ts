import express from "express";
import { handleRegisterUser } from "./handler.js";

const authRouter = express.Router();

authRouter.post("/register", handleRegisterUser);

export default authRouter;
