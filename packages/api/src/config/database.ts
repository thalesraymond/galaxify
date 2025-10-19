import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        return null;
        const mongoURI = process.env.MONGODB_URI ?? "nope";
        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined in the environment variables.");
        }
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
