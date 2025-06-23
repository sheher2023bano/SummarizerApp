from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from dotenv import load_dotenv  # 👈 NEW import

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get the API token from environment variable
HUGGINGFACE_API_TOKEN = os.getenv("HUGGINGFACE_API_TOKEN")  # 👈 secure now
API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
HEADERS = {
    "Authorization": f"Bearer {HUGGINGFACE_API_TOKEN}"
}

def query_huggingface_api(payload):
    response = requests.post(API_URL, headers=HEADERS, json=payload)
    return response.json()

@app.post("/generate")
async def generate_summary(request: Request):
    data = await request.json()
    job_description = data.get("job", "")

    if not job_description:
        return {"summary": "⚠️ No input provided."}

    prompt = f"Summarize this: {job_description}"

    result = query_huggingface_api({"inputs": prompt})

    if isinstance(result, dict) and result.get("error"):
        return {"summary": f"⚠️ API Error: {result['error']}"}

    summary = result[0].get("summary_text", "").strip()
    return {"summary": summary if summary else "⚠️ No summary returned."}
