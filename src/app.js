import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//middleare
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(morgan("dev")); //logs
app.use(express.json()); // Middleware para parsear JSON
app.use(cookieParser()); // middleware par parsear cookie
app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
//app.use(cookieParser()); <--- MAL posicionado

export default app;
