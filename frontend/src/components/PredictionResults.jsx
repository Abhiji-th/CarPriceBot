import React from "react";

const PredictionResults = ({ value }) => {
	return (
		<div className="mt-6 p-4 bg-blue-50 rounded-md">
			<h2 className="text-lg font-semibold">Predicted Price</h2>
			<p className="text-2xl font-bold text-blue-600">
				Rs. {Math.round(value)}
			</p>
		</div>
	);
};

export default PredictionResults;
