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

	const formattedData = {
		...carData,
		year_of_manufacture: Number(carData.year_of_manufacture),
		km_driven: Number(carData.km_driven),
		mileage: Number(carData.mileage),
		engine: Number(carData.engine),
		max_power: Number(carData.max_power),
		seats: Number(carData.seats),
	};

	const handlePredict = async () => {
		if (
			Object.values(carData).some(
				(value) => value === "" || value === null || value === undefined,
			)
		) {
			alert("Please Enter All Fields!");
			return;
		}

		try {
			setLoading(true);
			const res = await getPrice(formattedData);

			setPrediction(res.data.predicted_price);
			setShap(null);
		} catch (error) {
			console.log("Error fetching data: ", error);
		} finally {
			setLoading(false);
		}
	};

	const handleShap = async () => {
		if (
			Object.values(carData).some(
				(value) => value === "" || value === null || value === undefined,
			)
		) {
			alert("Please Enter All Fields!");
			return;
		}

		try {
			setLoading(true);
			const res = await getContribution(formattedData);

			setShap(res.data);
			setPrediction(null);
		} catch (error) {
			console.log("Error fetching data: ", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex justify-center items-center">
			<div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
				<h1 className="text-3xl font-bold mb-6 text-center">
					Used Car Price Predictor
				</h1>

				<CarForm setCarData={setCarData} />

				<ActionButtons
					onPredict={handlePredict}
					onShap={handleShap}
					loading={loading}
				/>

				{prediction && <PredictionResults value={prediction} />}
				{shap && <ShapResults data={shap} />}

				{/* <pre>{JSON.stringify(carData, null, 2)}</pre> */}
			</div>
		</div>
	);
};

export default Home;
