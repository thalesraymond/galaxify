import { describe, it, expect, vi, beforeEach } from "vitest";
import { handleLoginUser } from "../../../src/features/login/handler.js";
import * as command from "../../../src/features/login/command.js";
import UnauthorizedError from "../../../src/errors/UnauthorizedError.js";

vi.mock("../../../src/features/userLogin/command.js");

describe("userLogin handler", () => {
    const mockReq: any = {
        body: {
            email: "test@example.com",
            password: "Password123!",
        },
    };

    const mockRes: any = {
        status: vi.fn(() => mockRes),
        json: vi.fn(),
    };

    beforeEach(() => {
        vi.resetAllMocks();
    });

    describe("given a successful login", () => {
        beforeEach(() => {
            vi.spyOn(command, "execute").mockResolvedValue({ token: "mockedToken" });
        });

        it("should return a 200 status and a JWT token", async () => {
            await handleLoginUser(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({ token: "mockedToken" });
        });
    });

    describe("given an unauthorized error", () => {
        beforeEach(() => {
            vi.spyOn(command, "execute").mockRejectedValue(new UnauthorizedError("invalid credentials"));
        });

        it("should return a 401 status and an error message", async () => {
            await handleLoginUser(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(401);
            expect(mockRes.json).toHaveBeenCalledWith({ message: "invalid credentials" });
        });
    });

    describe("given an unexpected error", () => {
        beforeEach(() => {
            vi.spyOn(command, "execute").mockRejectedValue(new Error("Something went wrong"));
        });

        it("should return a 500 status and a generic error message", async () => {
            await handleLoginUser(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.json).toHaveBeenCalledWith({ message: "Internal server error" });
        });
    });
});
