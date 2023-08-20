from fastapi import FastAPI, UploadFile
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from fastapi.param_functions import File
import numpy as np
import pytesseract
import cv2

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
]

pytesseract.pytesseract.tesseract_cmd = (
    "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
)

app = FastAPI(middleware=middleware)


@app.post("/")
async def return_image_text(file: UploadFile = File(...)):
    print("return_image_text method\n")
    file_bytes = np.fromfile(file.file, np.uint8)
    file_input = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    text = pytesseract.image_to_string(file_input)
    return {"Image Text": text}
