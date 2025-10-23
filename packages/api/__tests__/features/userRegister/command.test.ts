import { describe, it, expect, vi, beforeEach } from "vitest";
import bcrypt from "bcryptjs";
import { execute } from "../../../src/features/userRegister/command.js";
import UserModel from "../../../src/models/UserModel.js";
import BadRequestError from "../../../src/errors/BadRequestError.js";
import { RegisterUserDto } from "@galaxify/commons";

// Mock the dependencies
vi.mock("bcryptjs");
vi.mock("../../../models/UserModel.js");

describe("userRegister command", () => {
    const mockDto: RegisterUserDto = {
        email: "test@example.com",
        password: "Password123!",
    };

    beforeEach(() => {
        vi.resetAllMocks();
    });

    describe("given valid user data", () => {
        beforeEach(() => {
            vi.spyOn(UserModel, "findOne").mockResolvedValue(null);
            vi.spyOn(bcrypt, "hash").mockResolvedValueOnce("hashedpassword" as any);
            vi.spyOn(UserModel, "create").mockResolvedValueOnce({
                _id: "mockedId",
                email: mockDto.email,
                password: "hashedpassword",
            } as any);
        });

        it("should register a new user successfully", async () => {
            const result = await execute(mockDto);

            expect(UserModel.findOne).toHaveBeenCalledWith({ email: mockDto.email });
            expect(bcrypt.hash).toHaveBeenCalledWith(mockDto.password, 10);
            expect(UserModel.create).toHaveBeenCalledWith({
                email: mockDto.email,
                password: "hashedpassword",
            });
            expect(result).toEqual({
                id: "mockedId",
                email: mockDto.email,
            });
        });
    });

    describe("given an invalid password", () => {
        const invalidDto: RegisterUserDto = { ...mockDto, password: "weak" };

        beforeEach(() => {
            // No mocks needed here since validation happens before db interaction
        });

        it("should throw a Bad Request", async () => {
            try {
                await execute(invalidDto);
                expect.fail("Expected execute() to throw an error");
            } catch (error) {
                expect(error).toBeInstanceOf(BadRequestError);
                expect(error).toHaveProperty("statusCode", 400);
            }
        });
    });

    describe("given an email that already exists", () => {
        beforeEach(() => {
            vi.spyOn(UserModel, "findOne").mockResolvedValue({
                _id: "existingId",
                email: mockDto.email,
                password: "anotherhashedpassword",
            });
        });

        it("should throw a Bad Request", async () => {
            try {
                await execute(mockDto);
                expect.fail("Expected execute() to throw an error");
            } catch (error) {
                expect(error).toBeInstanceOf(BadRequestError);
                expect(error).toHaveProperty("statusCode", 400);
            }
            expect(UserModel.findOne).toHaveBeenCalledWith({ email: mockDto.email });
        });
    });
});
