import { describe, it, expect, vi } from "vitest";
import { execute } from "../command";
import DailyModel from "../../../../models/DailyModel.js";

vi.mock("../../../../models/DailyModel.js", () => ({
    default: {
        find: vi.fn(),
    },
}));

describe("getDailies command", () => {
    it("should return all dailies for a user", async () => {
        const userId = "123";

        const mockDailies = [
            {
                _id: "456",
                title: "Test Daily",
                description: "Test Description",
                resetCounter: "daily" as const,
                checks: [new Date()],
                userId: "123",
            },
        ];

        (DailyModel.find as vi.Mock).mockResolvedValue(mockDailies);

        const result = await execute(userId);

        expect(DailyModel.find).toHaveBeenCalledWith({ userId });

        expect(result).toEqual([
            {
                id: "456",
                title: "Test Daily",
                description: "Test Description",
                resetCounter: "daily",
                checks: [expect.any(Date)],
                counter: 1,
            },
        ]);
    });
});
