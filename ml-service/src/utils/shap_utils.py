import pandas as pd

def get_max_contribution(model, preprocessor, explainer, data):
    input_data = pd.DataFrame([data])

    input_transformed = preprocessor.transform(input_data)

    # IMPORTANT FIX
    if hasattr(input_transformed, "toarray"):
        input_transformed = input_transformed.toarray()

    input_transformed = input_transformed.astype(float)

    shap_values = explainer(input_transformed)

    shap_values_df = pd.DataFrame(
        shap_values.values,
        columns=preprocessor.get_feature_names_out()
    )

    abs_vals = shap_values_df.iloc[0].abs()

    max_feature = abs_vals.idxmax()
    percentage = (abs_vals.max() / abs_vals.sum()) * 100

    return max_feature, percentage
