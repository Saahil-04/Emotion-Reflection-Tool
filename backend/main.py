from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ReflectionInput(BaseModel):
    text: str

@app.post("/analyze")
def analyze_emotion(data: ReflectionInput):
    emotions = ["Happy", "Sad", "Anxious", "Excited", "Calm"]
    return {
        "emotion": random.choice(emotions),
        "confidence": round(random.uniform(0.7, 0.99), 2)
    }
