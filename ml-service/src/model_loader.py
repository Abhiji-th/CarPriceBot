from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR.parent / "models" / "rf_model_8.pkl"

def load_model():
    return joblib.load(MODEL_PATH)