import React from "react";
import ReceiptData from "../components/ReceiptData";
import Tabs from "../components/Tabs";
import DragAndDrop from "../components/DragAndDrop";
import Camera from "../components/Camera";
import DataDisplay from "../components/DataDisplay";
function HomePage() {
  const inputTabs = [
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
  const outputTabs = [
    {
      key: "tab1",
      title: "Visualised Data",
      component: <ReceiptData />,
    },
    {
      key: "tab2",
      title: "JSON",
      component: <DataDisplay />,
    },
  ];
  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-10 mt-4 h-[70vh] w-[90vw] md:w-[80vw] mx-auto md:justify-center p-3">
      <Tabs tabs={inputTabs} />
      <Tabs tabs={outputTabs} />
      <footer className="text-center md:hidden h-[10vh] p-5 pb-7 font-mono font-bold text-white">
        <p>MercurialG</p>
      </footer>
    </div>
  );
}

export default HomePage;
