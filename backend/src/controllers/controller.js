const PYTHON_API = 'http://localhost:5000'

export const getPredictPrice = async (req, res, next) => {
    try{
        const result = await fetch(`${PYTHON_API}/predict_price`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
            })
        });

        const data = await result.json();
        res.send(data);
    }
    catch(error){
        console.error(error);
    }
}

export const getMaxContribution = async (req, res, next)=>{
    try{
        const result = await fetch(`${PYTHON_API}/max_contribution`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
            })
        });
        
        const data = await result.json();
        res.send(data);
    }
    catch(error){
        console.error(error);
    }
}
