import { CreateDailyDto, Daily } from "@galaxify/commons";
import DailyModel from "../../../models/DailyModel.js";

export async function execute(dto: CreateDailyDto, userId: string): Promise<Daily> {
    const daily = await DailyModel.create({
        ...dto,
        userId,
    });

    return {
        id: daily._id.toString(),
        title: daily.title,
        description: daily.description,
        resetCounter: daily.resetCounter as 'daily' | 'weekly' | 'monthly',
        checks: daily.checks,
        counter: 0,
    };
}
