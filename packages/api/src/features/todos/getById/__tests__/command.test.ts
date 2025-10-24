import { describe, it, expect, vi } from "vitest";
import { getTodoByIdCommand } from "../command";
import { Todo } from "../../todo.model";
import { NotFoundError } from "../../../../errors/NotFoundError";

vi.mock("../../todo.model");

describe("getTodoByIdCommand", () => {
  it("should return a todo if found", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";
    const expectedTodo = {
      _id: todoId,
      title: "Test Todo",
      userId,
    };

    (Todo.findOne as vi.Mock).mockResolvedValue(expectedTodo);

    const result = await getTodoByIdCommand(userId, todoId);

    expect(Todo.findOne).toHaveBeenCalledWith({ _id: todoId, userId });
    expect(result).toEqual(expectedTodo);
  });

  it("should throw a NotFoundError if todo is not found", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";

    (Todo.findOne as vi.Mock).mockResolvedValue(null);

    await expect(getTodoByIdCommand(userId, todoId)).rejects.toThrow(
      NotFoundError
    );
  });
});
