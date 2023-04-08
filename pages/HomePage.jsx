import React, { useEffect, useRef } from "react";
import Tabs from "../components/Tabs";
import DragAndDrop from "../components/DragAndDrop";
import JsonDisplay from "../components/JsonDisplay";
import ReceiptDisplay from "../components/ReceiptDisplay";
import { useReceiptContext } from "../context/receiptState";

// Main and only page
function HomePage() {
  const { receiptData } = useReceiptContext();

  const tabsRef = useRef(null);

  // This should scroll to data when its loaded on mobile... Should
  useEffect(() => {
    if (receiptData && tabsRef.current) {
      console.log(tabsRef);
      tabsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [receiptData]);
  // Set prop arrays for Tabs components
  const inputTabs = [
    {
      key: "tab1",
      title: "Choose file",
      component: <DragAndDrop />,
    },
  ];
  const outputTabs = [
    {
      key: "tab1",
      title: "Visualised Data",
      component: <ReceiptDisplay />,
    },
    {
      key: "tab2",
      title: "JSON",
      component: <JsonDisplay />,
    },
  ];

  return (
    <div className="homePage">
      <Tabs tabs={inputTabs} />
      <div className="msx:mb-5"></div>
      <Tabs tabs={outputTabs} innerRef={tabsRef} />
      <footer className="text-center md:hidden h-[10vh] p-5 pb-7 font-mono font-bold text-white">
        <p>@MercurialG</p>
      </footer>
    </div>
  );
}

export default HomePage;
