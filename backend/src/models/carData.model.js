import mongoose from "mongoose";

const carDataSchema = new mongoose.Schema(
	{
		brands: [String],
		models: [String],
		fuel_types: [String],
		transmission_types: [String],
	},
	{ collection: "carData" },
);

const carData = mongoose.model("CarData", carDataSchema);
export default carData;
