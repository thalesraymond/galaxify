import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connStr = process.env.COSMO_DB_CONNECTION_STRING || "mongodb://localhost:27017/galaxify";
        await mongoose.connect(connStr);
        console.log("MongoDB Connected...");
    } catch (err) {
        const error = err as Error;
        console.error(error?.message);
        process.exit(1);
    }
};
