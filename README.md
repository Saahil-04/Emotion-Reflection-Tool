
# 🧠 Emotion Reflection Tool

A beautifully designed web app that allows users to reflect on their feelings and get a quick AI-powered mock "emotion analysis." Built with a modern React (Next.js) frontend, animated UI, light/dark themes, and a Python backend using FastAPI.

> ✅ Fully responsive · 🌗 Theme toggle · ⚡ Fast UX · 🧪 Fake emotion analysis

---

## 🔧 Features

- 🎨 Clean, animated, modern UI with dark/light mode toggle
- 💬 User can enter a short text reflection
- ⚙️ Python FastAPI backend returns mock emotion and confidence
- 🔁 Smooth frontend-backend integration
- ⚠️ Graceful error and loading state handling

---

## 🖥️ Tech Stack

| Layer     | Tech                        |
|-----------|-----------------------------|
| Frontend  | Next.js (TypeScript), Tailwind CSS, Framer Motion |
| Backend   | Python FastAPI, Uvicorn     |
| Deployment| Vercel (frontend), Render (backend) |

---

## 🏁 Getting Started Locally

### ⚙️ Prerequisites

- Node.js & npm
- Python 3.8+
- Git

---

### 📦 Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/emotion-reflection-tool.git
cd emotion-reflection-tool
```

---

## 📱 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

> Make sure the backend is running at `http://localhost:8000` or update `NEXT_PUBLIC_API_URL` in `.env.local`.

---

## 🧠 Backend Setup (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

This runs the backend on [http://localhost:8000](http://localhost:8000)

---

### 📄 Example API Request

**POST /analyze**

```json
{
  "text": "I feel nervous but excited about my new role."
}
```

**Response:**

```json
{
  "emotion": "Anxious",
  "confidence": 0.87
}
```

---

## 🚀 Deployment

### 🔹 Frontend → Vercel

- Project root: `frontend/`
- Add environment variable:
  ```
  NEXT_PUBLIC_API_URL = https://your-api.onrender.com
  ```

### 🔹 Backend → Render

- Root: `backend/`
- Build command:
  ```bash
  pip install -r requirements.txt
  ```
- Start command:
  ```bash
  uvicorn main:app --host=0.0.0.0 --port=8000
  ```

---


## 📁 Project Structure

```
emotion-reflection-tool/
├── frontend/        # Next.js + Tailwind UI
│   └── app/
│       └── page.tsx
├── backend/         # FastAPI mock analysis API
│   ├── main.py
│   └── requirements.txt
└── README.md
```

---

## 🙌 Credits

Designed & built with care by [Saahil Vishwakarma]

---

## 📜 License

MIT – free to use, modify, share.
