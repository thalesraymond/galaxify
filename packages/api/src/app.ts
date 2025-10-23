import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import limiter from "./middleware/rateLimiter.js";

const app = express();

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

export default app;
