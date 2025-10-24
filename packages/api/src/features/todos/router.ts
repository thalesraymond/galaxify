import { Router } from "express";
import { createTodoHandler } from "./create";
import { getAllTodosHandler } from "./getAll";
import { getTodoByIdHandler } from "./getById";
import { updateTodoHandler } from "./update";
import { deleteTodoHandler } from "./delete";
import { checkTodoHandler } from "./check";
import { isAuthenticated } from "../../../middleware/authMiddleware";

const router = Router();

router.post("/", isAuthenticated, createTodoHandler);
router.get("/", isAuthenticated, getAllTodosHandler);
router.get("/:id", isAuthenticated, getTodoByIdHandler);
router.put("/:id", isAuthenticated, updateTodoHandler);
router.delete("/:id", isAuthenticated, deleteTodoHandler);
router.patch("/:id/check", isAuthenticated, checkTodoHandler);

export default router;
