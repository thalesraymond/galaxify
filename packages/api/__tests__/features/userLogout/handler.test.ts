import { describe, it, expect, vi, beforeEach } from "vitest";
import { handleLogoutUser } from "../../../src/features/userLogout/handler.js";

describe("userLogout handler", () => {
    const mockReq: any = {};

    const mockRes: any = {
        status: vi.fn(() => mockRes),
        json: vi.fn(),
    };

    beforeEach(() => {
        vi.resetAllMocks();
    });

    it("should return a 200 status and a success message", async () => {
        await handleLogoutUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ message: "Logout successful" });
    });
});
