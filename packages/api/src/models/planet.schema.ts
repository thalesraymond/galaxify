import { Schema } from 'mongoose';

export const planetSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    isExplored: { type: Boolean, default: false },
}, { _id: false });
