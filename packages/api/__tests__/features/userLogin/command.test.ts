import { describe, it, expect, vi, beforeEach } from "vitest";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { execute } from "../../../src/features/userLogin/command.js";
import UserModel from "../../../src/models/UserModel.js";
import UnauthorizedError from "../../../src/errors/UnauthorizedError.js";
import { LoginUserDto } from "@galaxify/commons";

// Mock the dependencies
vi.mock("bcryptjs");
vi.mock("jsonwebtoken");
vi.mock("../../../src/models/UserModel.js");

describe("userLogin command", () => {
    const mockDto: LoginUserDto = {
        email: "test@example.com",
        password: "Password123!",
    };

    const mockUser = {
        _id: "mockedId",
        email: mockDto.email,
        password: "hashedpassword",
    };

    beforeEach(() => {
        vi.resetAllMocks();
    });

    describe("given valid user data", () => {
        beforeEach(() => {
            vi.spyOn(UserModel, "findOne").mockResolvedValue(mockUser as any);
            vi.spyOn(bcrypt, "compare").mockResolvedValue(true as any);
            vi.spyOn(jwt, "sign").mockReturnValue("mockedToken" as any);
        });

        it("should return a JWT token", async () => {
            const result = await execute(mockDto);

            expect(UserModel.findOne).toHaveBeenCalledWith({ email: mockDto.email });
            expect(bcrypt.compare).toHaveBeenCalledWith(mockDto.password, mockUser.password);
            expect(jwt.sign).toHaveBeenCalledWith(
                { id: mockUser._id, email: mockUser.email },
                process.env.JWT_SECRET,
                { expiresIn: parseInt(process.env.JWT_EXPIRES_IN || "86400", 10) }
            );
            expect(result).toEqual({ token: "mockedToken" });
        });
    });

    describe("given a non-existent user", () => {
        beforeEach(() => {
            vi.spyOn(UserModel, "findOne").mockResolvedValue(null);
        });

        it("should throw an UnauthorizedError", async () => {
            await expect(execute(mockDto)).rejects.toThrow(UnauthorizedError);
        });
    });

    describe("given an incorrect password", () => {
        beforeEach(() => {
            vi.spyOn(UserModel, "findOne").mockResolvedValue(mockUser as any);
            vi.spyOn(bcrypt, "compare").mockResolvedValue(false as any);
        });

        it("should throw an UnauthorizedError", async () => {
            await expect(execute(mockDto)).rejects.toThrow(UnauthorizedError);
        });
    });
});
