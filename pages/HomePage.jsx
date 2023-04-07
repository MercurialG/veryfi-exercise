import React from "react";
import ReceiptData from "../components/ReceiptData";
import Tabs from "../components/Tabs";
import DragAndDrop from "../components/DragAndDrop";
import Camera from "../components/Camera";
function HomePage() {
  const tabs = [
    {
      key: "tab1",
      title: "Choose file",
      component: <DragAndDrop />,
    },
    {
      key: "tab2",
      title: "Camera",
      component: <Camera />,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row md:gap-10 mt-4 mx-auto w-[80vw] h-[70vh] md:w-[90vw]">
      <Tabs tabs={tabs} />
      <ReceiptData />
    </div>
  );
}

export default HomePage;
