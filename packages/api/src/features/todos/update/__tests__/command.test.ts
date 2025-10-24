import { describe, it, expect, vi } from "vitest";
import { updateTodoCommand } from "../command";
import { Todo } from "../../todo.model";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { UpdateTodoDto } from "@galaxify/commons";

vi.mock("../../todo.model");

describe("updateTodoCommand", () => {
  it("should update and return a todo if found", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";
    const updateData: UpdateTodoDto = {
      title: "Updated Todo",
      description: "Updated Description",
    };
    const expectedTodo = {
      _id: todoId,
      ...updateData,
      userId,
    };

    (Todo.findOneAndUpdate as vi.Mock).mockResolvedValue(expectedTodo);

    const result = await updateTodoCommand(userId, todoId, updateData);

    expect(Todo.findOneAndUpdate).toHaveBeenCalledWith(
      { _id: todoId, userId },
      updateData,
      { new: true }
    );
    expect(result).toEqual(expectedTodo);
  });

  it("should throw a NotFoundError if todo is not found", async () => {
    const userId = "some-user-id";
    const todoId = "some-todo-id";
    const updateData: UpdateTodoDto = {
      title: "Updated Todo",
    };

    (Todo.findOneAndUpdate as vi.Mock).mockResolvedValue(null);

    await expect(
      updateTodoCommand(userId, todoId, updateData)
    ).rejects.toThrow(NotFoundError);
  });
});
