import { describe, it, expect, vi, beforeEach } from "vitest";
import { checkTodoHandler } from "../handler";
import * as command from "../command";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

describe("checkTodoHandler", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      user: { _id: "some-user-id" },
      params: { id: "some-todo-id" },
    };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    next = vi.fn();
  });

  it("should check a todo and return it", async () => {
    const expectedTodo = {
      _id: "some-todo-id",
      title: "Test Todo",
      completed: true,
      userId: "some-user-id",
    };

    const checkTodoCommandMock = vi
      .spyOn(command, "checkTodoCommand")
      .mockResolvedValue(expectedTodo);

    await checkTodoHandler(req as Request, res as Response, next);

    expect(checkTodoCommandMock).toHaveBeenCalledWith(
      "some-user-id",
      "some-todo-id"
    );
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith(expectedTodo);
  });
});
