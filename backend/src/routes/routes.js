import { Router } from 'express'
import {getPredictPrice, getMaxContribution} from '../controllers/controller.js'
const router = Router();

router.post('/predict_price', getPredictPrice);
router.post('/max_contribution', getMaxContribution);

export default router;