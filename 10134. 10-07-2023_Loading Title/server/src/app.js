import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();
import morgan from "morgan";
import userRoutes from "../routes/user.routes.js";
import errorMiddleWare from "../middlewares/error.middleware.js";
import connectionToDb from "../config/dbConnection.js";
connectionToDb();
import connectToCloudinary from "../config/cloudinaryConnection.js";
connectToCloudinary();
import courseRoutes from "../routes/course.routes.js";

app.use(express.json());

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/ping", (req, res) => {
    res.send("pong");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use(errorMiddleWare);

app.all("*", (req, res) => {
    res.status(404).send("OOPS!! 404 page not found");
});

export default app;
