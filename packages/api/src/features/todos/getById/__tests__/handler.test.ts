import { describe, it, expect, vi, beforeEach } from "vitest";
import { getTodoByIdHandler } from "../handler";
import * as command from "../command";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

describe("getTodoByIdHandler", () => {
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

  it("should return a todo if found", async () => {
    const expectedTodo = {
      _id: "some-todo-id",
      title: "Test Todo",
      userId: "some-user-id",
    };

    const getTodoByIdCommandMock = vi
      .spyOn(command, "getTodoByIdCommand")
      .mockResolvedValue(expectedTodo);

    await getTodoByIdHandler(req as Request, res as Response, next);

    expect(getTodoByIdCommandMock).toHaveBeenCalledWith(
      "some-user-id",
      "some-todo-id"
    );
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith(expectedTodo);
  });
});
