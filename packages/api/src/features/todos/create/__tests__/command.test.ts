import { describe, it, expect, vi } from "vitest";
import { createTodoCommand } from "../command";
import { Todo } from "../../todo.model";

vi.mock("../../todo.model");

describe("createTodoCommand", () => {
  it("should create a new todo", async () => {
    const userId = "some-user-id";
    const createTodoDto = {
      title: "Test Todo",
      description: "Test Description",
    };
    const expectedTodo = { ...createTodoDto, userId };

    (Todo.create as vi.Mock).mockResolvedValue(expectedTodo);

    const result = await createTodoCommand(userId, createTodoDto);

    expect(Todo.create).toHaveBeenCalledWith({ ...createTodoDto, userId });
    expect(result).toEqual(expectedTodo);
  });
});
