import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { useReceiptContext } from "../context/state";

function FileUploader() {
  const { receiptData, setReceiptData } = useReceiptContext();

  // Convert input image to base64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Call serveless function with converted to base64 image
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
    setReceiptData([data]); //change data in context(../context/state.js) for siblings to use
  }

  // Using react-dropzone package
  const onDrop = useCallback((acceptedFiles) => {
    sendFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dragAndDrop" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p className="font-bold">Drag & drop, or click to select receipts</p>
      )}
    </div>
  );
}

export default FileUploader;
