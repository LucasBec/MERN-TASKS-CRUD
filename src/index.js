import app from "./app.js";
import { connectDB } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PUERTO || 3000;

connectDB();
app.listen(PORT);

console.log(`app iniciada en localhost:${PORT}`);
