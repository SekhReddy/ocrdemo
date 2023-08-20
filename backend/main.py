from shutil import copyfileobj
from fastapi import FastAPI, Request, Body
from requests import get as download
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
async def return_image_text(request: dict = Body(...)):
    response = download(request["url"], stream=True)
    result = response.raw
    outputFile = open(request["name"], "wb")
    copyfileobj(response.raw, outputFile)
    outputFile.flush()
    outputFile.close()
    file_bytes = np.fromfile(request["name"], np.uint8)
    file_input = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    text = pytesseract.image_to_string(file_input)
    return {"Image Text": text}
