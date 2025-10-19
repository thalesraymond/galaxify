import { Schema, model } from 'mongoose';
import { partSchema } from './part.schema';

const shipSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, default: 'UNS Pioneer' },
  partSlots: { type: Number, default: 4 },
  parts: [partSchema],
}, { timestamps: true });

export const Ship = model('Ship', shipSchema);
