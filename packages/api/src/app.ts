import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import * as dotenv from "dotenv";

const app = express();

dotenv.config();

app.use((req, res, next) => {
    Object.defineProperty(req, "query", {
        ...Object.getOwnPropertyDescriptor(req, "query"),
        value: req.query,
        writable: true,
    });
    next();
});

app.use(helmet());
app.use(express.json());
app.use(mongoSanitize());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

import authRouter from "./features/userRegister/index.js";
import mongoose from "mongoose";

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use("/api/auth", authRouter);

try {
    if (!process.env.MONGO_CONNECTION_STRING) {
        throw new Error("MONGO_CONNECTION_STRING is not defined");
    }

    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
        dbName: "galaxify",
    });

    app.listen(process.env.PORT ?? 5100, () => {
        console.log("server running....");
    });
} catch (error) {
    console.log(error);
}

export default app;
