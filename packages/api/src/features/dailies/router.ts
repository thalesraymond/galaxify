import express from "express";
import { handleCreateDaily } from "./createDaily/handler.js";
import { handleCheckDaily } from "./checkDaily/handler.js";
import { handleGetDailies } from "./getDailies/handler.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

const dailiesRouter = express.Router();

dailiesRouter.use(authMiddleware);

dailiesRouter.post("/", handleCreateDaily);
dailiesRouter.post("/:id/check", handleCheckDaily);
dailiesRouter.get("/", handleGetDailies);

export default dailiesRouter;
