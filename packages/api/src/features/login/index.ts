import express from "express";
import { handleLoginUser } from "./handler.js";

const authRouter = express.Router();

authRouter.post("/login", handleLoginUser);

export default authRouter;
