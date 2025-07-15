from transformers import pipeline

emotion_classifier = pipeline(
    "text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
    top_k=None  
)

def detect_emotion(text: str):
    predictions = emotion_classifier(text)[0]
    top = max(predictions, key=lambda x: x['score'])
    return top['label'], top['score']
