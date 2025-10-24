import { Router } from "express";
import { createTodoHandler } from "./create/index.js";
import { getAllTodosHandler } from "./getAll/index.js";
import { getTodoByIdHandler } from "./getById/index.js";
import { updateTodoHandler } from "./update/index.js";
import { deleteTodoHandler } from "./delete/index.js";
import { checkTodoHandler } from "./check/index.js";
import { isAuthenticated } from "../../middleware/authMiddleware.js";

const router = Router();

router.post("/", isAuthenticated, createTodoHandler);
router.get("/", isAuthenticated, getAllTodosHandler);
router.get("/:id", isAuthenticated, getTodoByIdHandler);
router.put("/:id", isAuthenticated, updateTodoHandler);
router.delete("/:id", isAuthenticated, deleteTodoHandler);
router.patch("/:id/check", isAuthenticated, checkTodoHandler);

export default router;
