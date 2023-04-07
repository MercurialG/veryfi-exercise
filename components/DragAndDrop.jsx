import { useState } from "react";
import { useReceiptContext } from "../context/state";
import Image from "next/image";

function DragAndDrop() {
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const { setReceiptData } = useReceiptContext();

  async function sendFile(file) {
    if (file) {
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
  }
  // Convert input image to base64
  const convertBase64 = (file) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          setImageDataUrl(fileReader.result);
          // resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    sendFile(file);
    setImageDataUrl(null);
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
      className="lg:dragAndDrop cursor-pointer"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => {
        document.getElementById("fileInput").click();
      }}
    >
      <div className={imageDataUrl ? "hidden" : "msx:attach"}>
        <label className="hidden lg:block" htmlFor="fileInput">
          Drag and Drop a receipt here or click this area to choose file.
        </label>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          id="fileInput"
          onChange={handleFileChange}
        />
      </div>
      <div
        className={imageDataUrl ? "" : "hidden"}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {imageDataUrl && (
          <Image
            className="w-full max-h-[80vh]"
            height={512}
            width={512}
            src={imageDataUrl}
            alt="File"
          />
        )}
        <div />
      </div>
    </div>
  );
}

export default DragAndDrop;
