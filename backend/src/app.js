import express, { json } from "express";
import logger from "./middleware/logger.js";
import router from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/api", router);

export default app;
