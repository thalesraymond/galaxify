import { describe, it, expect, vi, beforeEach } from "vitest";
import { createTodoHandler } from "../handler";
import * as command from "../command";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

describe("createTodoHandler", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      user: { _id: "some-user-id" },
      body: {
        title: "Test Todo",
        description: "Test Description",
      },
    };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    next = vi.fn();
  });

  it("should create a new todo and return it", async () => {
    const expectedTodo = {
      _id: "some-todo-id",
      title: "Test Todo",
      description: "Test Description",
      userId: "some-user-id",
    };

    const createTodoCommandMock = vi
      .spyOn(command, "createTodoCommand")
      .mockResolvedValue(expectedTodo);

    await createTodoHandler(req as Request, res as Response, next);

    expect(createTodoCommandMock).toHaveBeenCalledWith("some-user-id", {
      title: "Test Todo",
      description: "Test Description",
    });
    expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
    expect(res.json).toHaveBeenCalledWith(expectedTodo);
  });
});
