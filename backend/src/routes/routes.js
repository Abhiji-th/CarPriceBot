import { Router } from 'express'
import {getPredictPrice, getMaxContribution} from '../controllers/controller.js'
const router = Router();

router.post('/api/predict_price', getPredictPrice);
router.post('/api/max_contribution', getMaxContribution);

export default router;