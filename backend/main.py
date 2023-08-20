from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.param_functions import File
import numpy as np
import pytesseract
import cv2

pytesseract.pytesseract.tesseract_cmd = (
    "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
)

app = FastAPI()

origins = ["http://localhost", "http://localhost:3000", "http://localhost:8000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
async def return_image_text(file: UploadFile = File(...)):
    file_bytes = np.fromfile(file.file, np.uint8)
    file_input = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    text = pytesseract.image_to_string(file_input)
    return {"Image Text": text}
