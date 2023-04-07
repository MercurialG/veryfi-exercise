import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useReceiptContext } from "../context/state";
import Image from "next/image";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 768,
  height: 1280,
  // aspectRatio: 0.7,
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
            height={1280}
            ref={webcamRef}
            width={768}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <Image width={512} height={512} alt="Image" src={picture} />
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
          <button className="cameraButton mx-y" onClick={() => sendFile()}>
            send
          </button>
        )}
      </div>
    </div>
  );
};
export default Camera;
