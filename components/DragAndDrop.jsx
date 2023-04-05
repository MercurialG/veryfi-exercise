import { useState } from "react";

const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    setSelectedFiles(files);
  };

  return (
    <div
      className="file-uploader flex flex-col items-center justify-center border-2 border-gray-400 border-dashed py-12 rounded-md"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <svg
        className="w-6 h-6 text-gray-400 mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a4 4 0 01-4-4V8a4 4 0 014-4h6a4 4 0 014 4v13a4 4 0 01-4 4h-6z"
        />
      </svg>
      <p className="text-gray-600">
        {selectedFiles.length > 0
          ? `${selectedFiles.length} file(s) selected`
          : "Drag and drop files here, or click to select files"}
      </p>
      <input
        type="file"
        onChange={handleFileSelect}
        multiple
        accept="image/jpeg,image/png,application/pdf"
        className="hidden"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={() => {
          document.querySelector("input[type=file]").click();
        }}
      >
        Select Files
      </button>
    </div>
  );
};

export default FileUploader;
