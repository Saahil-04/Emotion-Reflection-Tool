import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("models/gemini-1.5-flash")  # This is Gemini 2.0 Flash

def generate_response(user_text: str, emotion: str) -> str:
    prompt = f"""
    You are an emotionally intelligent assistant helping users reflect on how they feel.

    User's text: "{user_text}"
    Detected emotion: {emotion}

    Reply empathetically in 1 - 3 sentences. Validate the emotion and offer thoughtful, comforting insight.
    """
    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print("Gemini error:", e)
        return "Sorry, I'm having trouble generating a response right now."
