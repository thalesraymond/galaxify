import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  type: { type: String, required: true, enum: ['HABIT', 'DAILY', 'TODO'] },
  text: { type: String, required: true },
  notes: { type: String },
  isPositive: { type: Boolean, default: true },
  isNegative: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
  streak: { type: Number, default: 0 },
}, { timestamps: true });

export const Task = model('Task', taskSchema);
