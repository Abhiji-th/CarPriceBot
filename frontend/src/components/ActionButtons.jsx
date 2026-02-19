import React from "react";

const ActionButtons = ({ onPredict, onShap, loading }) => {
	return (
		<div>
			<button onClick={onPredict} disabled={loading}>
				Predict Price
			</button>
			<button onClick={onShap} disabled={loading}>
				Shap Analysis
			</button>
		</div>
	);
};

export default ActionButtons;
