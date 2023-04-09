import Image from "next/image";

function FileInput({
  handleFileChange,
  handleDrop,
  handleDragOver,
  imageDataUrl,
}) {
  return (
    <div
      className="md:dragAndDrop cursor-pointer opacity-80 transition-all duration-500 ease-in-out"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      role="button"
      aria-label="Choose a file to upload"
      onClick={() => {
        document.getElementById("fileInput").click();
      }}
    >
      <div className={imageDataUrl ? "hidden" : "msx:attach"}>
        <label className="hidden md:block" htmlFor="fileInput">
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
        role="region"
        aria-live="polite"
      >
        {imageDataUrl && (
          <div>
            <div className="border-green-500 border-solid border-[1px] text-sm text-center font-mono font-bold text-white md:text-black">
              <p>Cick the image to upload another file</p>
            </div>
            <Image
              className="h-[70vh] rounded-md"
              height={512}
              width={512}
              src={imageDataUrl}
              alt="File"
            />
          </div>
        )}
        <div />
      </div>
    </div>
  );
}

export default FileInput;
