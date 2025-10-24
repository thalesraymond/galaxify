import { model, Schema, Types } from 'mongoose';
import { Habit } from '@galaxify/commons';

const habitSchema = new Schema<Habit>(
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
    isPositive: {
      type: Boolean,
      required: true,
    },
    isNegative: {
      type: Boolean,
      required: true,
    },
    resetCounter: {
      type: String,
      enum: ['daily', 'weekly', 'monthly'],
      required: true,
    },
    positiveCount: {
      type: Number,
      default: 0,
    },
    negativeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        (ret as any).id = ret._id;
        delete (ret as any)._id;
        delete (ret as any).__v;
      },
    },
  }
);

export const HabitModel = model<Habit>('Habit', habitSchema);
