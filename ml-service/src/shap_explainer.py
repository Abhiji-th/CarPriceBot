import shap

def create_explainer(trained_model):
    return shap.Explainer(trained_model)
