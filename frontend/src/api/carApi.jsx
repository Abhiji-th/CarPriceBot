import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getPrice = (data) => API.post("/predict_price", data);

export const getContribution = (data) => API.post("/max_contribution", data);

export const getCarData = () => API.get("/carData");
