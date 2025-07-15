from transformers import pipeline

emotion_classifier = pipeline("text-classification", model="nateraw/bert-base-uncased-emotion")

def detect_emotion(text: str):
    predictions = emotion_classifier(text)[0]
    top = max(predictions, key=lambda x: x['score'])
    return top['label'], top['score']
