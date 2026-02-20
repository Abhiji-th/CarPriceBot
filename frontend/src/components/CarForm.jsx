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

	const brands = [
		"Maruti",
		"Hyundai",
		"Ford",
		"Renault",
		"Mini",
		"Mercedes-Benz",
		"Toyota",
		"Volkswagen",
		"Honda",
		"Mahindra",
		"Datsun",
		"Tata",
		"Kia",
		"BMW",
		"Audi",
		"Land Rover",
		"Jaguar",
		"MG",
		"Isuzu",
		"Porsche",
		"Skoda",
		"Volvo",
		"Lexus",
		"Jeep",
		"Maserati",
		"Bentley",
		"Nissan",
		"ISUZU",
		"Ferrari",
		"Mercedes-AMG",
		"Rolls-Royce",
		"Force",
	];

	const model = [
		"Alto",
		"Grand",
		"i20",
		"Ecosport",
		"Wagon R",
		"i10",
		"Venue",
		"Swift",
		"Verna",
		"Duster",
		"Cooper",
		"Ciaz",
		"C-Class",
		"Innova",
		"Baleno",
		"Swift Dzire",
		"Vento",
		"Creta",
		"City",
		"Bolero",
		"Fortuner",
		"KWID",
		"Amaze",
		"Santro",
		"XUV500",
		"KUV100",
		"Ignis",
		"RediGO",
		"Scorpio",
		"Marazzo",
		"Aspire",
		"Figo",
		"Vitara",
		"Tiago",
		"Polo",
		"Seltos",
		"Celerio",
		"GO",
		"5",
		"CR-V",
		"Endeavour",
		"KUV",
		"Jazz",
		"3",
		"A4",
		"Tigor",
		"Ertiga",
		"Safari",
		"Thar",
		"Hexa",
		"Rover",
		"Eeco",
		"A6",
		"E-Class",
		"Q7",
		"Z4",
		"6",
		"XF",
		"X5",
		"Hector",
		"Civic",
		"D-Max",
		"Cayenne",
		"X1",
		"Rapid",
		"Freestyle",
		"Superb",
		"Nexon",
		"XUV300",
		"Dzire VXI",
		"S90",
		"WR-V",
		"XL6",
		"Triber",
		"ES",
		"Wrangler",
		"Camry",
		"Elantra",
		"Yaris",
		"GL-Class",
		"7",
		"S-Presso",
		"Dzire LXI",
		"Aura",
		"XC",
		"Ghibli",
		"Continental",
		"CR",
		"Kicks",
		"S-Class",
		"Tucson",
		"Harrier",
		"X3",
		"Octavia",
		"Compass",
		"CLS",
		"redi-GO",
		"Glanza",
		"Macan",
		"X4",
		"Dzire ZXI",
		"XC90",
		"F-PACE",
		"A8",
		"MUX",
		"GTC4Lusso",
		"GLS",
		"X-Trail",
		"XE",
		"XC60",
		"Panamera",
		"Alturas",
		"Altroz",
		"NX",
		"Carnival",
		"C",
		"RX",
		"Ghost",
		"Quattroporte",
		"Gurkha",
	];

	const fuel_type = ["Petrol", "Diesel", "CNG", "LPG", "Electric"];

	const transmission_type = ["Manual", "Automatic"];

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

			<select name="brand" value={form.brand} onChange={handleChange}>
				<option value="">Select brand</option>
				{brands.map((brand) => (
					<option key={brand} value={brand}>
						{brand}
					</option>
				))}
			</select>

			{fields
				.filter((field) => field.name != "brand")
				.map((field) => (
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
