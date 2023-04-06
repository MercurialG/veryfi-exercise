import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { useReceiptContext } from "../context/state";

function FileUploader() {
  const { receiptData, setReceiptData } = useReceiptContext();

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

  async function sendFile(file) {
    const base64 = await convertBase64(file);
    const fdata = {
      fileName: file.name,
      fileType: file.type,
      fileData: base64,
    };
    // console.log(fdata);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify(fdata),
    });

    const data = await response.json();
    console.log(data);
    setReceiptData([data]);
    console.log(receiptData);
  }

  const onDrop = useCallback((acceptedFiles) => {
    sendFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="flex h-[100px] items-center justify-center border-dotted border-[5px]
       border-blue-500 rounded-md my-3 hover:opacity-70 bg-[#DDE4E4]"
      {...getRootProps()}
    >
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
