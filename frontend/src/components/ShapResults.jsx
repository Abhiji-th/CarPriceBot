import React from "react";

const ShapResults = ({ data }) => {
	return (
		<div className="mt-6 p-4 bg-blue-50 rounded-md">
			<h2 className="text-lg font-semibold">Shap Analysis</h2>
			<p className="text-2xl font-bold text-blue-600">
				Feature: {data.highest_contributing_feature}
			</p>
			<p className="text-2xl font-bold text-blue-600">
				Contribution: {Math.round(data.percentage_contribution)}%
			</p>
		</div>
	);
};

export default ShapResults;
