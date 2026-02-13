import pandas as pd

def get_max_contribution(model, preprocessor, explainer, data):
    input_data = pd.DataFrame([data])
    
    input_transformed = preprocessor.transform(input_data)
    
    shap_values = explainer(input_transformed)
    
    shap_values_df = pd.DataFrame(shap_values.values, columns=preprocessor.get_feature_names_out())

    max_contribution_feature = shap_values_df.iloc[0].idxmax()
    max_contribution_value = shap_values_df.iloc[0].max()

    predicted_price = model.predict(input_transformed)[0]

    percentage_contribution = (max_contribution_value / predicted_price) * 100 if predicted_price != 0 else 0

    return max_contribution_feature, percentage_contribution