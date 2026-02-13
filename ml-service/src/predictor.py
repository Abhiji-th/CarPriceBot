import pandas as pd

def predict(model, preprocessor, data):
    df = pd.DataFrame([data])
    input_transformed = preprocessor.transform(df)
    return model.predict(input_transformed)[0]