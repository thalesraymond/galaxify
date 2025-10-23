import mongoose from "mongoose";

export interface UserSchema {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserSchema>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema) as mongoose.Model<UserSchema>;
