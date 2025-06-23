# 🧠 Text Summarizer App

This is a full-stack **Text Summarization Web App** built with:

- ⚙️ **Backend:** FastAPI using Hugging Face's BART model
- 🌐 **Frontend:** React + TailwindCSS
- ☁️ **Deployment:** Render (Backend) & Vercel (Frontend)

The app allows users to paste long text and instantly receive a smart summary using state-of-the-art NLP.

---

## 📁 Project Structure

```
summarizer-app/
│
├── backend/               # FastAPI backend (API + Hugging Face integration)
│   ├── main.py
│   ├── requirements.txt
│   ├── .env               # contains API token (not uploaded to GitHub)
│   └── README.md
│
├── frontend/              # React + Tailwind frontend
│   ├── src/
│   ├── package.json
│   └── ...
│
├── README.md              # This file
└── .gitignore
```

---

## 🚀 How It Works

1. User pastes text into the frontend.
2. Frontend sends a request to the FastAPI backend.
3. Backend forwards the text to Hugging Face’s summarization model.
4. Summary is returned and displayed to the user.

---

## 🧪 Tech Stack

| Area     | Technology          |
| -------- | ------------------- |
| Frontend | React, Tailwind CSS |
| Backend  | FastAPI, Python     |
| NLP API  | Hugging Face BART   |
| Hosting  | Vercel + Render     |

---

## 🌐 Live Demo (if deployed)

> Add link here after deployment.

---

## 🙋‍♀️ Author

Built by Sheher Bano — beginner learning full-stack development with AI-powered tools.

---

## 📄 License

This project is open-source and free to use for learning and portfolio purposes.
