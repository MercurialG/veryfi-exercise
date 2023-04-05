import React from "react";
import DragAndDrop from "../components/DragAndDrop";
import ReceiptData from "../components/ReceiptData";

function HomePage() {
  return (
    <div className="flex columns-2 background-color-black">
      <DragAndDrop className="height-5" />
      <ReceiptData className="border solid" />
    </div>
  );
}

export default HomePage;
