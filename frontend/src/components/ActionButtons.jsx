import React from "react";

const ActionButtons = ({ onPredict, onShap, loading }) => {
	return (
		<div>
			<button
				onClick={onPredict}
				disabled={loading}
				className="flex-1 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
			>
				{loading ? "Loading..." : "Predict Price"}
			</button>
			<button
				onClick={onShap}
				disabled={loading}
				className="ml-2 flex-1 bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
			>
				{loading ? "Loading..." : "Shap Analysis"}
			</button>
		</div>
	);
};

export default ActionButtons;
