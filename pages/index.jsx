import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Tabs from "../components/Tabs";
import FileInput from "../components/FileInput";
import JsonDisplay from "../components/JsonDisplay";
import ReceiptDisplay from "../components/ReceiptDisplay";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [receiptData, setReceiptData] = useState();
  const tabsRef = useRef(null);

  // This should scroll to data when its loaded on mobile... Should
  useEffect(() => {
    if (receiptData && tabsRef.current) {
      tabsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [receiptData]);

  async function sendFile(file) {
    if (file) {
      setIsLoading(true);
      const base64 = await convertBase64(file);
      const fileBody = JSON.stringify({
        fileName: file.name,
        fileType: file.type,
        fileData: base64,
      });
      const response = await fetch("/api/upload", {
        method: "POST",
        body: fileBody,
      });

      const data = await response.json();
      setReceiptData([data]);
      setIsLoading(false);
    }
  }
  const convertBase64 = (file) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          setImageDataUrl(fileReader.result);
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    }
  };

  // Handlers for input component
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    sendFile(file);
    setImageDataUrl(null);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    sendFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // Set prop arrays for Tabs components
  const inputTabs = [
    {
      key: "tab1",
      title: "Choose file",
      component: (
        <FileInput
          handleDragOver={handleDragOver}
          imageDataUrl={imageDataUrl}
          handleDrop={handleDrop}
          handleFileChange={handleFileChange}
        />
      ),
    },
  ];
  const outputTabs = [
    {
      key: "tab1",
      title: "Visualised Data",
      component: (
        <ReceiptDisplay loading={isLoading} receiptData={receiptData} />
      ),
    },
    {
      key: "tab2",
      title: "JSON",
      component: <JsonDisplay loading={isLoading} receiptData={receiptData} />,
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Veryfi Receipt Visualiser</title>
        <meta
          name="description"
          content="App build to showcase veryfi API visualisation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <div className="homePage">
          <Tabs tabs={inputTabs} />
          <div className="msx:mb-5"></div>
          <Tabs tabs={outputTabs} innerRef={tabsRef} />
          <footer className="text-center md:hidden h-[10vh] p-5 pb-7 font-mono font-bold text-white">
            <p>@MercurialG</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default HomePage;