import { Daily } from "@galaxify/commons";
import DailyModel from "../../../models/DailyModel.js";
import { startOfDay, startOfWeek, startOfMonth } from "date-fns";

export async function execute(userId: string): Promise<Daily[]> {
    const dailies = await DailyModel.find({ userId });

    const now = new Date();

    return dailies.map((daily) => {
        let startDate: Date;

        switch (daily.resetCounter) {
            case "daily":
                startDate = startOfDay(now);
                break;
            case "weekly":
                startDate = startOfWeek(now);
                break;
            case "monthly":
                startDate = startOfMonth(now);
                break;
            default:
                startDate = new Date(0);
        }

        const counter = daily.checks.filter(
            (check) => (check as unknown as Date).getTime() >= startDate.getTime()
        ).length;

        return {
            id: daily._id.toString(),
            title: daily.title,
            description: daily.description ?? undefined,
            resetCounter: daily.resetCounter as "daily" | "weekly" | "monthly",
            checks:
                typeof daily.checks.toObject === "function"
                    ? daily.checks.toObject()
                    : daily.checks,
            counter,
        };
    });
}
