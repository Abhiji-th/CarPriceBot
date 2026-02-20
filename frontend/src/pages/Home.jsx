import React, { useState } from "react";
import CarForm from "../components/CarForm";
import ActionButtons from "../components/ActionButtons";
import { getPrice, getContribution } from "../api/carApi";
import PredictionResults from "../components/PredictionResults";
import ShapResults from "../components/ShapResults";

const Home = () => {
	const [carData, setCarData] = useState({});
	const [loading, setLoading] = useState(false);
	const [prediction, setPrediction] = useState(null);
	const [shap, setShap] = useState(null);

	const handlePredict = async () => {
		try {
			setLoading(true);
			const res = await getPrice(carData);

			setPrediction(res.data.predicted_price);
			setShap(null);
		} catch (error) {
			console.log("Error fetching data: ", error);
		} finally {
			setLoading(false);
		}
	};

	const handleShap = async () => {
		try {
			setLoading(true);
			const res = await getContribution(carData);

			setShap(res.data);
			setPrediction(null);
		} catch (error) {
			console.log("Error fetching data: ", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<h1>Used Car Price Predictor</h1>

			<CarForm setCarData={setCarData} />

			<ActionButtons
				onPredict={handlePredict}
				onShap={handleShap}
				loading={loading}
			/>

			{prediction && <PredictionResults value={prediction} />}
			{shap && <ShapResults data={shap} />}

			{/* <pre>{JSON.stringify(carData, null, 2)}</pre> */}
		</>
	);
};

export default Home;
