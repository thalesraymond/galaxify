import { describe, it, expect, vi, beforeEach } from "vitest";
import { execute } from "../command";
import DailyModel from "../../../../models/DailyModel.js";
import NotFoundError from "../../../../errors/NotFoundError.js";

vi.mock("../../../../models/DailyModel.js", () => ({
    default: {
        findOneAndUpdate: vi.fn(),
    },
}));

describe("checkDaily command", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    it("should check a daily and update the counter", async () => {
        const dailyId = "456";
        const userId = "123";

        const mockDaily = {
            _id: "456",
            title: "Test Daily",
            description: "Test Description",
            resetCounter: "daily" as const,
            checks: [new Date()],
            userId: "123",
        };

        (DailyModel.findOneAndUpdate as vi.Mock).mockResolvedValue(mockDaily);

        const result = await execute(dailyId, userId);

        expect(DailyModel.findOneAndUpdate).toHaveBeenCalledWith(
            { _id: dailyId, userId },
            { $push: { checks: expect.any(Date) } },
            { new: true }
        );

        expect(result).toEqual({
            id: "456",
            title: "Test Daily",
            description: "Test Description",
            resetCounter: "daily",
            checks: [expect.any(Date)],
            counter: 1,
        });
    });

    it("should throw a NotFoundError if the daily is not found", async () => {
        const dailyId = "456";
        const userId = "123";

        (DailyModel.findOneAndUpdate as vi.Mock).mockResolvedValue(null);

        await expect(execute(dailyId, userId)).rejects.toThrow(NotFoundError);
    });
});
