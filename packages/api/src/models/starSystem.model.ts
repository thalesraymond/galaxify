import { Schema, model } from 'mongoose';
import { planetSchema } from './planet.schema';

const starSystemSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true },
  isCurrent: { type: Boolean, default: true, index: true },
  planetCount: { type: Number },
  escapeVector: {
    requiredTasks: [{
      taskType: { type: String },
      habitText: { type: String },
      count: { type: Number }
    }],
    isCompleted: { type: Boolean, default: false }
  },
  planets: [planetSchema],
}, { timestamps: true });

export const StarSystem = model('StarSystem', starSystemSchema);
