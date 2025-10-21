import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import app from "../src/app";
import { UserModel } from "../src/features/register/user.model";

vi.mock("../src/features/register/user.model");

describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
        const response = await request(app)
            .post("/api/auth/register")
            .send({ email: "test@example.com", password: "password" });

        expect(response.status).toBe(201);
        expect(UserModel.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
        expect(UserModel.create).toHaveBeenCalled();
    });

    it("should return 400 if user already exists", async () => {
        vi.spyOn(UserModel, "findOne").mockResolvedValueOnce({
            id: "1",
            email: "test@example.com",
            password: "hashedpassword",
        });

        const response = await request(app)
            .post("/api/auth/register")
            .send({ email: "test@example.com", password: "password" });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("User already exists.");
    });
});
