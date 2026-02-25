import React, { useState } from "react";

function CarForm({ setCarData }) {
	const numFields = [
		{ name: "year_of_manufacture", placeholder: "Year" },
		{ name: "km_driven", placeholder: "KM Driven" },
		{ name: "mileage", placeholder: "Mileage" },
		{ name: "engine", placeholder: "Engine" },
		{ name: "max_power", placeholder: "Max Power" },
		{ name: "seats", placeholder: "Seats" },
	];

	const isFormValid = () => {
		return (
			form.brand &&
			form.model &&
			form.year_of_manufacture &&
			form.km_driven &&
			form.fuel_type &&
			form.transmission_type &&
			form.mileage &&
			form.engine &&
			form.max_power &&
			form.seats
		);
	};

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
		<div className="mb-4 grid grid-cols-2 gap-4">
			<h2>Enter car details</h2>

			<select
				name="brand"
				value={form.brand}
				onChange={handleChange}
				className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
			>
				<option value="">Select brand</option>
				{brands.map((brand) => (
					<option key={brand} value={brand}>
						{brand}
					</option>
				))}
			</select>

			<select
				name="model"
				value={form.model}
				onChange={handleChange}
				className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
			>
				<option value="">Select model</option>
				{models.map((model) => (
					<option key={model} value={model}>
						{model}
					</option>
				))}
			</select>

			<select
				name="fuel_type"
				value={form.fuel_type}
				onChange={handleChange}
				className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
			>
				<option value="">Select fuel type</option>
				{fuel_types.map((fuel_type) => (
					<option key={fuel_type} value={fuel_type}>
						{fuel_type}
					</option>
				))}
			</select>

			<select
				name="transmission_type"
				value={form.transmission_type}
				onChange={handleChange}
				className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
			>
				<option value="">Select transmission type</option>
				{transmission_types.map((transmission_type) => (
					<option key={transmission_type} value={transmission_type}>
						{transmission_type}
					</option>
				))}
			</select>

			{numFields
				.filter((field) => field.name != "brand")
				.map((field) => (
					<input
						key={field.name}
						name={field.name}
						placeholder={field.placeholder}
						value={form[field.name]}
						onChange={handleChange}
						className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
					/>
				))}
		</div>
	);
}

export default CarForm;
