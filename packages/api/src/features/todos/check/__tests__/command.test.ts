import { describe, it, expect, vi } from "vitest";
import { checkTodoCommand } from "../command";
import { Todo } from "../../todo.model";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { BadRequestError } from "../../../../errors/BadRequestError";

vi.mock("../../todo.model");

describe("checkTodoCommand", () => {
  it("should check a todo if found and not completed", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";
    const todo = {
      _id: todoId,
      completed: false,
      save: vi.fn().mockResolvedValue({}),
    };

    (Todo.findOne as vi.Mock).mockResolvedValue(todo);

    const result = await checkTodoCommand(userId, todoId);

    expect(Todo.findOne).toHaveBeenCalledWith({ _id: todoId, userId });
    expect(todo.completed).toBe(true);
    expect(todo.save).toHaveBeenCalled();
    expect(result).toEqual(todo);
  });

  it("should throw a NotFoundError if todo is not found", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";

    (Todo.findOne as vi.Mock).mockResolvedValue(null);

    await expect(checkTodoCommand(userId, todoId)).rejects.toThrow(
      NotFoundError
    );
  });

  it("should throw a BadRequestError if todo is already checked", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";
    const todo = {
      _id: todoId,
      completed: true,
    };

    (Todo.findOne as vi.Mock).mockResolvedValue(todo);

    await expect(checkTodoCommand(userId, todoId)).rejects.toThrow(
      BadRequestError
    );
  });
});
