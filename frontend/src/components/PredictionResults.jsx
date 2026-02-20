import React from "react";

const PredictionResults = ({ value }) => {
	return (
		<div>
			<h2>Predicted Price</h2>
			<p>Rs. {value}</p>
		</div>
	);
};

export default PredictionResults;
