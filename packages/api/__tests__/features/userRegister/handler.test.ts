import { describe, it, expect, vi, beforeEach, afterEach, Mock } from "vitest";
import { Request, Response } from "express";
import { userRegisterHandler } from "../../../src/features/userRegister/handler.js";
import * as registerCommand from "../../../src/features/userRegister/command.js";
import BadRequestError from "../../../src/errors/BadRequestError.js";

describe("userRegister handler", () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let status: ReturnType<typeof vi.fn>;
    let json: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        status = vi.fn();
        json = vi.fn();
        res = {
            status,
            json,
        };
        status.mockReturnValueOnce(res);
        req = {
            body: {
                email: "test@example.com",
                password: "Password123!",
            },
        };
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    describe("when registration is successful", () => {
        beforeEach(async () => {
            vi.spyOn(registerCommand, "execute").mockResolvedValueOnce({
                id: "123",
                email: "test@example.com",
            });
            await userRegisterHandler(req as Request, res as Response);
        });

        it("should call execute with the request body", () => {
            expect(registerCommand.execute).toHaveBeenCalledWith(req.body);
        });

        it("should return a 201 status code", () => {
            expect(status).toHaveBeenCalledWith(201);
        });

        it("should return the user object in the response", () => {
            expect(json).toHaveBeenCalledWith({
                id: "123",
                email: "test@example.com",
            });
        });
    });

    describe("when execute throws an HttpError", () => {
        beforeEach(async () => {
            vi.spyOn(registerCommand, "execute").mockRejectedValueOnce(
                new BadRequestError("User with this email already exists.")
            );
            await userRegisterHandler(req as Request, res as Response);
        });

        it("should return the correct status code", () => {
            expect(status).toHaveBeenCalledWith(400);
        });

        it("should return the error message in the response", () => {
            expect(json).toHaveBeenCalledWith({
                message: "User with this email already exists.",
            });
        });
    });

    describe("when execute throws a generic error", () => {
        beforeEach(async () => {
            vi.spyOn(registerCommand, "execute").mockRejectedValueOnce(new Error("Something went wrong"));

            await userRegisterHandler(req as Request, res as Response);
        });

        it("should return a 500 status code", () => {
            expect(status).toHaveBeenCalledWith(500);
        });

        it("should return a generic error message", () => {
            expect(json).toHaveBeenCalledWith({ message: "Internal server error" });
        });
    });
});
