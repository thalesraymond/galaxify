import { Daily } from "@galaxify/commons";
import DailyModel from "../../../models/DailyModel.js";
import NotFoundError from "@/errors/NotFoundError.js";
import { startOfDay, startOfWeek, startOfMonth } from "date-fns";

export async function execute(dailyId: string, userId: string): Promise<Daily> {
    const daily = await DailyModel.findOneAndUpdate(
        { _id: dailyId, userId },
        { $push: { checks: new Date() } },
        { new: true }
    );

    if (!daily) {
        throw new NotFoundError("Daily not found");
    }

    const now = new Date();
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

    const counter = daily.checks.filter(check => check >= startDate).length;

    return {
        id: daily._id.toString(),
        title: daily.title,
        description: daily.description,
        resetCounter: daily.resetCounter as 'daily' | 'weekly' | 'monthly',
        checks: daily.checks,
        counter,
    };
}
