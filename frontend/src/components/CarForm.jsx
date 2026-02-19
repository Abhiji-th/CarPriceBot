import React, { useState } from "react";

function CarForm({ setCarData }) {
	const fields = [
		{ name: "brand", placeholder: "Brand" },
		{ name: "model", placeholder: "Model" },
		{ name: "year_of_manufacture", placeholder: "Year" },
		{ name: "km_driven", placeholder: "KM Driven" },
		{ name: "fuel_type", placeholder: "Fuel Type" },
		{ name: "transmission_type", placeholder: "Transmission" },
		{ name: "mileage", placeholder: "Mileage" },
		{ name: "engine", placeholder: "Engine" },
		{ name: "max_power", placeholder: "Max Power" },
		{ name: "seats", placeholder: "Seats" },
	];

	const [form, setForm] = useState({
		brand: "",
		model: "",
		fuel_type: "",
		transmission_type: "",
		year_of_manufacture: "",
		km_driven: "",
		mileage: "",
		engine: "",
		max_power: "",
		seats: "",
	});

	const handleChange = (e) => {
		const updatedForm = {
			...form,
			[e.target.name]: e.target.value,
		};

		setForm(updatedForm);
		setCarData(updatedForm);
	};

	return (
		<div>
			<h2>Enter car details</h2>
			{fields.map((field) => (
				<input
					key={field.name}
					name={field.name}
					placeholder={field.placeholder}
					value={form[field.name]}
					onChange={handleChange}
				/>
			))}
		</div>
	);
}

export default CarForm;
