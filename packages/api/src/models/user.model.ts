import { Schema, model, Document, Types } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  ship: { type: Schema.Types.ObjectId, ref: 'Ship' },
}, { timestamps: true });

export const User = model('User', userSchema);
