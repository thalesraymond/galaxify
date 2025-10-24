import { describe, it, expect, vi, beforeEach } from "vitest";
import { getAllTodosHandler } from "../handler";
import * as command from "../command";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

describe("getAllTodosHandler", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      user: { _id: "some-user-id" },
    };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    next = vi.fn();
  });

  it("should return all todos for a user", async () => {
    const expectedTodos = [
      {
        _id: "some-todo-id-1",
        title: "Test Todo 1",
        userId: "some-user-id",
      },
      {
        _id: "some-todo-id-2",
        title: "Test Todo 2",
        userId: "some-user-id",
      },
    ];

    const getAllTodosCommandMock = vi
      .spyOn(command, "getAllTodosCommand")
      .mockResolvedValue(expectedTodos);

    await getAllTodosHandler(req as Request, res as Response, next);

    expect(getAllTodosCommandMock).toHaveBeenCalledWith("some-user-id");
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith(expectedTodos);
  });
});
