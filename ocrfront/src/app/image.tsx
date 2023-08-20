"use client";

import { useState } from "react";
import "@uploadthing/react/styles.css";
import { useRouter } from "next/navigation";
import { UploadButton } from "./uploadthingutil";

export default function ProcessImage() {
  const [imageText, setImageText] = useState("");
  const formDataBody = require("form-data-body");
  const router = useRouter();

  function handleChange(e: any) {
    setImageText(e.target.value);
  }

  const handleSubmit = async (req: any) => {
    console.log(req);
    console.log(req[0]);
    const formData = {
      name: String(req[0].name),
      url: String(req[0].fileUrl),
      size: String(req[0].size),
    };
    const parsedFormData = JSON.stringify(formData, null, 4);
    console.log(formData);
    console.log(parsedFormData);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
        method: "POST:",
        body: parsedFormData,
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-10 m-10">
        <div className="flex flex-col">
          <div className="mx-auto p-3 m-5">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(uploadedImage: any) => {
                handleSubmit(uploadedImage);
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
