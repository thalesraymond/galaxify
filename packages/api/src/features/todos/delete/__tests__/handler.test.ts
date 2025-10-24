import { describe, it, expect, vi, beforeEach } from "vitest";
import { deleteTodoHandler } from "../handler";
import * as command from "../command";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

describe("deleteTodoHandler", () => {
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
      send: vi.fn(),
    };
    next = vi.fn();
  });

  it("should delete a todo and return no content", async () => {
    const deleteTodoCommandMock = vi
      .spyOn(command, "deleteTodoCommand")
      .mockResolvedValue(undefined);

    await deleteTodoHandler(req as Request, res as Response, next);

    expect(deleteTodoCommandMock).toHaveBeenCalledWith(
      "some-user-id",
      "some-todo-id"
    );
    expect(res.status).toHaveBeenCalledWith(StatusCodes.NO_CONTENT);
    expect(res.send).toHaveBeenCalled();
  });
});
