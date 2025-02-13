import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

if (process.env.NODE_ENV != 'production') {
    dotenv.config();
};

//middleare
app.use(morgan("dev")); //logs
app.use(express.json()); // Middleware para parsear JSON
app.use(cookieParser()); // middleware par parsear cookie
app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
//app.use(cookieParser()); <--- MAL

export default app;
