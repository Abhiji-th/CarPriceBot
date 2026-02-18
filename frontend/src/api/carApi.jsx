import axios from "axios";

const API = axios.create({
baseURL: "http://localhost:8080/api"
});

export const predictPrice = (data) =>{
    return API.post("/predict_price", data);
}

export const maxContribution = (data) =>{
    return API.post("/max_contribution", data);
}  
