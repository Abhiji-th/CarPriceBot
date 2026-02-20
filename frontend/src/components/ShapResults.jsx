import React from "react";

const ShapResults = ({ data }) => {
	return (
		<div>
			<h2>Shap Results</h2>
			<p>Feature: {data.highest_contributing_feature}</p>
			<p>Contribution: {data.percentage_contribution}%</p>
		</div>
	);
};

export default ShapResults;
