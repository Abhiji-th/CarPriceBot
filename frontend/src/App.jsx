import { useEffect } from "react";
import { predictPrice, maxContribution } from "./api/carApi";
const App = () => {

  const carData = {
  "brand": "Hyundai",
  "model": "i20",
  "year_of_manufacture": 2018,
  "km_driven": 45000,
  "fuel_type": "Petrol",
  "transmission_type": "Manual",
  "mileage": 18.5,
  "engine": 1197,
  "max_power": 82,
  "seats": 5 
}

  useEffect(() => {
    const getPredict = async () => {
        try{
          const response = await predictPrice(carData);
          console.log(response.data);
        } catch(error){
          console.error(error);
        }
    }

    const getMaxContribution = async () => {
        try{
          const response = await maxContribution(carData);
          console.log(response.data);
        } catch(error){
          console.error(error);
        }
    }

    getPredict();
    getMaxContribution();
  }, []);

  return (
    <div>App</div>
  )
}

export default App