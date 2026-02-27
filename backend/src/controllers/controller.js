import carData from "../models/carData.model.js";

const PYTHON_API = "http://localhost:5000";

export const getPredictPrice = async (req, res, next) => {
	try {
		const result = await fetch(`${PYTHON_API}/predict_price`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(req.body),
		});

		const data = await result.json();
		res.send(data);
	} catch (error) {
		console.error(error);
	}
};

export const getMaxContribution = async (req, res, next) => {
	try {
		const result = await fetch(`${PYTHON_API}/max_contribution`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(req.body),
		});

		const data = await result.json();
		res.send(data);
	} catch (error) {
		console.error(error);
	}
};

export const getCarData = async (req, res, next) => {
	try {
		const result = await carData.findOne({});
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ msg: "Error fetching from MongoDB" });
	}
};
