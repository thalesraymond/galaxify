import { model, Schema } from 'mongoose';

const dailySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
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
    counter: {
      type: Number,
      default: 0,
    },
    checks: {
      type: [Date],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret: Record<string, unknown>) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const DailyModel = model('Daily', dailySchema);
