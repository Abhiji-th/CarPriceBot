import React from "react";

const formatFeatureName = (name) => {
  let clean = name.includes("__") ? name.split("__")[1] : name;

  if (clean.includes("_")) {
    const parts = clean.split("_");
    if (parts.length > 1) {
      return `${parts[0]} ${parts.slice(1).join(" ")}`;
    }
  }

  return clean.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const ShapResults = ({ data }) => {
	return (
		<div className="mt-6 p-4 bg-blue-50 rounded-md">
			<h2 className="text-lg font-semibold">Shap Analysis</h2>
			<p className="text-2xl font-bold text-blue-600">
				Feature: {formatFeatureName(data.highest_contributing_feature)}
			</p>
			<p className="text-2xl font-bold text-blue-600">
				Contribution: {Math.round(data.percentage_contribution)}%
			</p>
		</div>
	);
};

export default ShapResults;
