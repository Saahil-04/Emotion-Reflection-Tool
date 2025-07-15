
from ai.gemini_response import generate_response
from detection.emotion_detection import detect_emotion
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.post("/reflect")
async def reflect(input: TextInput):
    emotion, confidence = detect_emotion(input.text)
    ai_response = generate_response(input.text, emotion)
    return {
        "emotion": emotion,
        "confidence": confidence,
        "response": ai_response
    }