import { useState } from "react";
import { useReceiptContext } from "../context/state";
import Image from "next/image";

function DragAndDrop() {
  const [imageDataUrl, setImageDataUrl] = useState();
  const { receiptData, setReceiptData } = useReceiptContext();

  async function sendFile(file) {
    const base64 = await convertBase64(file);
    const fileBody = JSON.stringify({
      fileName: file.name,
      fileType: file.type,
      fileData: base64,
    });
    const response = await fetch("/api/upload", {
      method: "POST",
      body: fileBody,
    });

    const data = await response.json();
    setReceiptData([data]);
  }
  // Convert input image to base64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        setImageDataUrl(fileReader.result);
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    sendFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    sendFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className="dragAndDrop"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => {
        document.getElementById("fileInput").click();
      }}
    >
      {imageDataUrl ? (
        <Image
          className="max-w-full max-h-[80vh]"
          src={imageDataUrl}
          alt="File"
        />
      ) : (
        <div>
          <label className="" htmlFor="fileInput">
            Drag and Drop a receipt here or click this area to choose file
          </label>
          <input
            className="hidden"
            type="file"
            accept=".jpg, .jpeg, .png"
            id="fileInput"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
}

export default DragAndDrop;
