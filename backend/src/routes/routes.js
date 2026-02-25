import { Router } from "express";
import {
	getPredictPrice,
	getMaxContribution,
	getCarData,
} from "../controllers/controller.js";
const router = Router();

router.post("/predict_price", getPredictPrice);
router.post("/max_contribution", getMaxContribution);
router.get("/carData", getCarData);

export default router;
