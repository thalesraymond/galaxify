import { model, Schema, Types } from 'mongoose';
import { Habit } from '@galaxify/commons/habits';

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
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const HabitModel = model<Habit>('Habit', habitSchema);
