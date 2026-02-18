import express, { json } from 'express';
import logger from './middleware/logger.js';
import router from './routes/routes.js';
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/api", router);

export default app; 