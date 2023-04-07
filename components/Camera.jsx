import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useReceiptContext } from "../context/state";
import Image from "next/image";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 380,
  height: 600,
  facingMode: "environment" || "user",
};

const Camera = () => {
  const { receiptData, setReceiptData } = useReceiptContext();
  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  async function sendFile() {
    console.log("sending");
    const base64 = picture;
    const fileBody = JSON.stringify({
      fileName: "screenshot",
      fileData: base64,
    });
    const response = await fetch("/api/upload", {
      method: "POST",
      body: fileBody,
    });

    const data = await response.json();
    setReceiptData([data]); //change data in context(../context/state.js) for siblings to use
  }

  return (
    <div className="flex flex-col justify-center mt-3">
      <div className="">
        {picture == "" ? (
          <Webcam
            className="rounded-md shadow-sm mb-3"
            audio={false}
            height={700}
            ref={webcamRef}
            width={370}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <Image alt="Image" src={picture} />
        )}
      </div>
      <div>
        {picture != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPicture();
            }}
            className="cameraButton"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="cameraButton"
          >
            Capture
          </button>
        )}
        {picture && (
          <button
            className="text-white p-2 bg-blue-400 rounded-md"
            onClick={() => sendFile()}
          >
            send
          </button>
        )}
      </div>
    </div>
  );
};
export default Camera;
