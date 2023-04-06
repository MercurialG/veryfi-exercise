import React from "react";
import DragAndDrop from "../components/DragAndDrop";
import ReceiptData from "../components/ReceiptData";

function HomePage() {
  return (
    <div className="flex-col mx-auto self-center items-center content-center w-[80vw] h-[80vh] ">
      <DragAndDrop />
      <ReceiptData />
    </div>
  );
}

export default HomePage;
