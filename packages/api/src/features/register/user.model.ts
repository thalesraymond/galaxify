import { Schema, model } from "mongoose";
import { User } from "./user.entity.js";

const userSchema = new Schema<User>({
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
});

export const UserModel = model<User>("User", userSchema);
