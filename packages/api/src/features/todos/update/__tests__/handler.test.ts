import { describe, it, expect, vi, beforeEach } from "vitest";
import { updateTodoHandler } from "../handler";
import * as command from "../command";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import { UpdateTodoDto } from "@galaxify/commons";

describe("updateTodoHandler", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      user: { _id: "some-user-id" },
      params: { id: "some-todo-id" },
      body: {
        title: "Updated Todo",
        description: "Updated Description",
      },
    };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    next = vi.fn();
  });

  it("should update and return a todo", async () => {
    const expectedTodo = {
      _id: "some-todo-id",
      title: "Updated Todo",
      description: "Updated Description",
      userId: "some-user-id",
    };

    const updateTodoCommandMock = vi
      .spyOn(command, "updateTodoCommand")
      .mockResolvedValue(expectedTodo);

    await updateTodoHandler(req as Request, res as Response, next);

    expect(updateTodoCommandMock).toHaveBeenCalledWith(
      "some-user-id",
      "some-todo-id",
      req.body as UpdateTodoDto
    );
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith(expectedTodo);
  });
});
