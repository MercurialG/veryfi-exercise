import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useReceiptContext } from "../context/state";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 300,
  height: 500,
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
    <div className="bg-gray-500">
      <h2 className="mb-5 text-center"></h2>
      <div className="">
        {picture == "" ? (
          <Webcam
            className=""
            audio={false}
            height={600}
            ref={webcamRef}
            width={350}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div>
        {picture != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPicture();
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="h-[30px] w-full mt-1 bg-gradient-to-r from-[#171c3a], to-[#115246]"
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
