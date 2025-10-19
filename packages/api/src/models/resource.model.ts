import { Schema, model } from 'mongoose';

const resourceSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    type: { type: String, required: true },
    quantity: { type: Number, default: 0 },
}, { timestamps: true });

export const Resource = model('Resource', resourceSchema);
