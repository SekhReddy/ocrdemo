"use client";

import { useState, useEffect } from "react";
import "@uploadthing/react/styles.css";
import { UploadButton } from "./uploadthingutil";

export default function ProcessImage() {
  const [imageText, setImageText] = useState("");
  const [imageFile, setImageFile] = useState("");

  useEffect(() => {
    async function fetchImageText() {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`);
      const json = await result.json();
      console.log(json);
      setImageText(json);
    }
  }, []);

  function handleChange(e: any) {
    setImageText(e.target.value);
  }

  async function handleSubmit(image: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "POST",
      body: image,
    })
      .then(async (r) => {
        if (r.ok) {
          const json = await r.json();
          const jsonText = JSON.parse(json);
          setImageText(jsonText);
          alert("Image uploaded successfully");
        }
      })
      .catch((e) => {
        alert(`Upload Error! ${e.message}`);
      });
  }

  return (
    <div>
      <div className="container mx-auto p-10 m-10">
        <div className="flex flex-col">
          <div className="mx-auto p-3 m-5">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(result: any) => {
                const uploadedImage = result;
                let formData = new FormData();
                formData.set("file", uploadedImage);
                handleSubmit(formData);
                alert("File uploaded successfully");
              }}
              onUploadError={(error: Error) => {
                alert(`Upload Error! ${error.message}`);
              }}
            />
            <textarea
              value={imageText}
              onChange={handleChange}
              className="border-2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
