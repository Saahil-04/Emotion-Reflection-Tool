import os
import requests
from dotenv import load_dotenv

load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")

def analyze_emotion(text: str):
    url = "https://api-inference.huggingface.co/models/bhadresh-savani/distilbert-base-uncased-emotion"

    headers = {
        "Authorization": f"Bearer {HF_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "inputs": text
    }

    response = requests.post(url, headers=headers, json=payload)

    print("STATUS:", response.status_code)
    print("BODY:", response.text)

    if response.status_code != 200:
        raise Exception(f"HuggingFace API Error: {response.status_code} - {response.text}")

    data = response.json()
    if isinstance(data, list) and isinstance(data[0], list):
        predictions = data[0]
        top = max(predictions, key=lambda x: x['score'])
        return top['label'], top['score']
    else:
        raise Exception("Unexpected response format from HuggingFace")
