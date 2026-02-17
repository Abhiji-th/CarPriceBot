from flask import Flask, request, jsonify
import model_loader
import predictor
from shap_explainer import create_explainer 
from utils import shap_utils

app = Flask(__name__)

model = model_loader.load_model()
preprocessor = model.named_steps["preprocessor"]
trained_model = model.named_steps["model"]
explainer = create_explainer(trained_model)

@app.route("/predict_price", methods=["POST"])
def predict_price():
    try:
        data = request.json
        prediction = predictor.predict(trained_model, preprocessor, data)

        return jsonify({
            "predicted_price": float(prediction)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/max_contribution", methods=["POST"])
def max_contribution():
    try:
        data = request.json
        feature, percentage = shap_utils.get_max_contribution(trained_model, preprocessor, explainer, data)

        return jsonify({
            "highest_contributing_feature": feature,
            "percentage_contribution": float(percentage)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if(__name__ == '__main__'):
    app.run(host="0.0.0.0", port=5000, debug=True)