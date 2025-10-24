import { describe, it, expect, vi } from "vitest";
import { getAllTodosCommand } from "../command";
import { Todo } from "../../todo.model";

vi.mock("../../todo.model");

describe("getAllTodosCommand", () => {
  it("should return all todos for a user", async () => {
    const userId = "some-user-id";
    const expectedTodos = [
      {
        _id: "some-todo-id-1",
        title: "Test Todo 1",
        userId,
      },
      {
        _id: "some-todo-id-2",
        title: "Test Todo 2",
        userId,
      },
    ];

    (Todo.find as vi.Mock).mockResolvedValue(expectedTodos);

    const result = await getAllTodosCommand(userId);

    expect(Todo.find).toHaveBeenCalledWith({ userId });
    expect(result).toEqual(expectedTodos);
  });
});
