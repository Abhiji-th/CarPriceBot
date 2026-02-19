import React, { useState } from "react";
import CarForm from "../components/CarForm";

const Home = () => {
	const [carData, setCarData] = useState({});

	return (
		<>
			<h1>Used Car Price Predictor</h1>
			<CarForm setCarData={setCarData} />
			<pre>{JSON.stringify(carData, null, 2)}</pre>
		</>
	);
};

export default Home;
