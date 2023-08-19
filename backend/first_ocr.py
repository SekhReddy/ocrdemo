import pytesseract
import argparse
import cv2

pytesseract.pytesseract.tesseract_cmd = (
    "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
)

# construct argument parser and parse the arguments
parser = argparse.ArgumentParser()
parser.add_argument("-i", "--image", required=True, help="path to input image")
args = vars(parser.parse_args())

# load input image and convert to RGB channel ordering
image = cv2.imread(args["image"])
rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# use tesseract to OCR the image
text = pytesseract.image_to_string(image)
print(text)
