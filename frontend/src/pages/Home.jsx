import React, { useState } from "react";
import CarForm from "../components/CarForm";
import ActionButtons from "../components/ActionButtons";
import { getPrice , getContribution } from "../api/carApi";

const Home = () => {
	const [carData, setCarData] = useState({});
	const [loading, setLoading] = useState(false);
	const [prediction, setPrediction] = useState(null);
	const [shap, setShap] = useState(null)

	const handlePredict = async () => {
		try{
			setLoading(true);
			const res = await getPrice(carData);
			console.log(res.data);
		}
		catch(error){
			console.log("Error fetching data: ", error);
		}
		finally{
			setLoading(false);
		}
	}

	const handleShap = async () => {
		try{
			setLoading(true);
			const res = await getContribution(carData);
			console.log(res.data);
		}
		catch(error){
			console.log("Error fetching data: ", error);
		}
		finally{
			setLoading(false);
		}
	}

	return (
		<>
			<h1>Used Car Price Predictor</h1>

			<CarForm setCarData={setCarData} />

			<ActionButtons onPredict={handlePredict} onShap={handleShap} loading={loading}/>

			<pre>{JSON.stringify(carData, null, 2)}</pre>
		</>
	);
};

export default Home;
