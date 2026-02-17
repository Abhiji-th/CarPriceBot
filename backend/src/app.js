import express from 'express';
import logger from './middleware/logger.js';
const app = express();
const PYTHON_API = 'localhost'

app.use(express.json());
app.use(logger);


app.get('api/predict_price', async (req, res, next) => {
    const result = await fetch(`${PYTHON_API}/predict_price`);
    res.json(result); 
});

app.get('api/max_contribution', async (req, res, next)=>{
    const result = await fetch(`${PYTHON_API}/max_contribution`);
    res.json(result);
});

export default app; 