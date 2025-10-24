import { describe, it, expect, vi } from "vitest";
import { deleteTodoCommand } from "../command";
import { Todo } from "../../todo.model";
import { NotFoundError } from "../../../../errors/NotFoundError";

vi.mock("../../todo.model");

describe("deleteTodoCommand", () => {
  it("should delete a todo if found", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";

    (Todo.findOneAndDelete as vi.Mock).mockResolvedValue({ _id: todoId });

    await deleteTodoCommand(userId, todoId);

    expect(Todo.findOneAndDelete).toHaveBeenCalledWith({ _id: todoId, userId });
  });

  it("should throw a NotFoundError if todo is not found", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";

    (Todo.findOneAndDelete as vi.Mock).mockResolvedValue(null);

    await expect(deleteTodoCommand(userId, todoId)).rejects.toThrow(
      NotFoundError
    );
  });
});
