import { Schema, model } from 'mongoose';

const discoverySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  type: { type: String, required: true, enum: ['PLANET', 'CREATURE', 'ANOMALY', 'LORE_FRAGMENT'] },
  name: { type: String, required: true },
  description: { type: String },
  starSystem: { type: Schema.Types.ObjectId, ref: 'StarSystem' },
}, { timestamps: true });

export const Discovery = model('Discovery', discoverySchema);
