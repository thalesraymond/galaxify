import mongoose, { Schema } from "mongoose";

const DailySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    resetCounter: {
        type: String,
        enum: ['daily', 'weekly', 'monthly'],
        required: true,
    },
    checks: {
        type: [Date],
        default: [],
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

export default mongoose.model("Daily", DailySchema);
