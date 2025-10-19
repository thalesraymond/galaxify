import { Schema } from 'mongoose';

export const partSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['SCANNER', 'ENGINE', 'MINING_LASER', 'SCOOP'] },
  description: { type: String },
  effects: [{
    effectType: { type: String },
    value: { type: Number }
  }],
}, { _id: false });
