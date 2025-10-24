import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

// routes

import userRegisterRouter from "./features/userRegister/router.js";
import userLoginRouter from "./features/login/router.js";
import userLogoutRouter from "./features/logout/router.js";
import todosRouter from "./features/todos/router.js";

// end routes

// middleware

import limiter from "./middleware/rateLimiter.js";

// end middleware

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

app.use("/api", limiter);

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use("/api/auth", userRegisterRouter);
app.use("/api/auth", userLoginRouter);
app.use("/api/auth", userLogoutRouter);
app.use("/api/todos", todosRouter);

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

export const viteNodeApp = app;
