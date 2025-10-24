import { describe, it, expect, vi } from "vitest";
import { execute } from "../command";
import DailyModel from "../../../../models/DailyModel.js";

vi.mock("../../../../models/DailyModel.js", () => ({
    default: {
        create: vi.fn(),
    },
}));

describe("createDaily command", () => {
    it("should create a new daily", async () => {
        const dto = {
            title: "Test Daily",
            description: "Test Description",
            resetCounter: "daily" as const,
        };
        const userId = "123";

        const mockCreatedDaily = {
            _id: "456",
            title: "Test Daily",
            description: "Test Description",
            resetCounter: "daily",
            checks: [],
            userId: "123",
        };

        (DailyModel.create as vi.Mock).mockResolvedValue(mockCreatedDaily);

        const result = await execute(dto, userId);

        expect(DailyModel.create).toHaveBeenCalledWith({
            ...dto,
            userId,
        });

        expect(result).toEqual({
            id: "456",
            title: "Test Daily",
            description: "Test Description",
            resetCounter: "daily",
            checks: [],
            counter: 0,
        });
    });
});
