# 🧠 Summarizer Backend

This is the backend for a Text Summarization web application built using **FastAPI** and Hugging Face's BART model. It receives long text input from the frontend, sends it to the Hugging Face API for summarization, and returns the generated summary.

---

## 🔗 API Endpoint

`POST /generate`

### 🟢 Example Request:

```json
{
  "job": "Paste your long text here..."
}
```

### 🟢 Example Response:

```json
{
  "summary": "This is the summarized version of your input text."
}
```

---

## 🔐 Environment Variables

Create a `.env` file in the `backend/` folder with the following:

```
HUGGINGFACE_API_TOKEN=your_token_here
```

This API token is used to authenticate with Hugging Face’s inference endpoint.

> ⚠️ Important: Make sure `.env` is listed in your `.gitignore` so it does not get pushed to GitHub.

---

## 📦 Installation & Running Locally

### 1️⃣ Install dependencies:

```bash
pip install -r requirements.txt
```

### 2️⃣ Start the FastAPI server:

```bash
uvicorn main:app --reload
```

---

## 🚀 Deployment on Render

### ✅ Build Command:

```bash
pip install -r requirements.txt
```

### ✅ Start Command:

```bash
uvicorn main:app --host 0.0.0.0 --port 10000
```

### ✅ Add Environment Variable:

Go to your Render dashboard and add:

```
Key: HUGGINGFACE_API_TOKEN
Value: your_token_here
```

---

## ✅ Status

This backend is fully connected and ready to work with the React frontend deployed on **Vercel**.
