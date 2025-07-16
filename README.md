
# 🚗 Second-Hand Car Price Prediction Chatbot

An AI-powered chatbot that predicts the price of a second-hand car based on user input. The system integrates a machine learning model, a conversational interface built with Rasa, a React-based frontend, and a backend API for seamless user interaction.

---

## 📌 Project Overview

This project aims to make car price estimation easier and more interactive using a chatbot interface. Users provide car details through natural conversation, and the chatbot returns a predicted price based on an ML model trained on real-world data.

---

## 🔍 Problem Statement

Estimating the resale value of a car depends on various factors such as brand, model, year, mileage, fuel type, and transmission. Manual methods are time-consuming. This chatbot simplifies the process using a trained model and conversational UI.

---

## 🛠️ Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React              |
| Chatbot      | Rasa (rule-based)  |
| ML Model     | RandomForestRegressor (scikit-learn) |
| Backend API  | Python (Flask or FastAPI) |

---

## 🧠 Machine Learning Model

- **Model**: RandomForestRegressor
- **Features**:
  - Brand
  - Model
  - Year
  - Transmission Type
  - Fuel Type
  - Kilometers Driven
  - Ownership
- **Target**: Selling Price
- **Dataset**: [CarDekho/Custom Scraped Dataset]
- **Evaluation Metrics**:
  - R² Score
  - MAE/MSE

---

## 🤖 Chatbot Features

- Greets the user and explains functionality
- Asks relevant questions (brand, year, km driven, etc.)
- Validates inputs using slot validation
- Predicts price based on collected data
- Handles fallback and clarifying prompts

---

## 💻 Frontend (React)

- Chat UI with text input and chatbot responses
- Visual prediction output (card or popup)
- Responsive design using Material UI or TailwindCSS

---

## 🔗 Project Structure

car-price-chatbot/
│
├── frontend/ # 💻 React app for the user interface
│ └── src/
│ ├── App.js # Main React component
│ └── components/ # UI components (Chat window, form, etc.)
│
├── chatbot/ # 🤖 Rasa chatbot backend
│ ├── domain.yml # Intents, slots, entities, responses
│ ├── rules.yml # Rule-based dialogue management
│ └── actions/ # Custom action logic (e.g., prediction request)
│
├── model/ # 🧠 ML model training and artifacts
│ ├── train_model.ipynb # Jupyter notebook for model training
│ └── car_price_model.pkl# Trained RandomForestRegressor model
│
├── api/ # 🔌 Backend API (Flask/FastAPI)
│ └── app.py # Integrates chatbot and ML model endpoints
│
├── requirements.txt # 📦 Python dependencies
└── README.md # 📘 Project documentation

---

## 🚀 Running the Project Locally

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/Abhiji-th/CarPriceBot.git
cd car-price-chatbot
\`\`\`
 
### 2. Install Dependencies
\`\`\`bash
pip install -r requirements.txt
cd frontend
npm install
\`\`\`

### 3. Train the Model (if needed)
\`\`\`bash
cd model
python train_model.py
\`\`\`

### 4. Start Backend Server
\`\`\`bash
# From root directory
cd api
python app.py
\`\`\`

### 5. Start Chatbot (Rasa)
\`\`\`bash
cd chatbot
rasa train
rasa run actions &
rasa shell
\`\`\`

### 6. Start Frontend
\`\`\`bash
cd frontend
npm start
\`\`\`

---

<!-- ## 📸 Screenshots

![Chat UI](./assets/chat-ui.png)
![Prediction Output](./assets/prediction-output.png)

---

## 🌐 Live Demo (Optional)

[👉 Click here to try the chatbot](https://your-deployment-link.com)

--- -->

## ✅ Future Improvements

- Use a neural network-based model (e.g., XGBoost, LightGBM)
- Deploy backend on Render, Railway
- Add voice-based interface
- Add authentication for user sessions
- Containerize using Docker

---

## 📧 Contact

For queries or collaborations:

**Abhijith C**  
Email: [abhijithc.242cs003@nitk.edu.in]  
GitHub: [github.com/Abhiji-th](https://github.com/Abhiji-th)

---

## 🏷️ License

MIT License
