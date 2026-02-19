import { useEffect, useState } from "react";
import { predictPrice, maxContribution } from "./api/carApi";
import Home from "./pages/Home";
const App = () => {
	const [carData, setcarData] = useState(null);

	useEffect(() => {
		if (!carData) return;
		const getPredict = async () => {
			try {
				const response = await predictPrice(carData);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		const getMaxContribution = async () => {
			try {
				const response = await maxContribution(carData);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		getPredict();
		getMaxContribution();
	}, [carData]);

	return (
		<>
			<Home />
		</>
	);
};

export default App;
