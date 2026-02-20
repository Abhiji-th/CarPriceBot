import React from "react";

const ActionButtons = ({ onPredict, onShap, loading }) => {
	return (
		<div>
			<button onClick={onPredict} disabled={loading}>
				{loading ? "Loading..." : "Predict Price"}
			</button>
			<button onClick={onShap} disabled={loading}>
				{loading ? "Loading" : "Shap Analysis"}
			</button>
		</div>
	);
};

export default ActionButtons;
