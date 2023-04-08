import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  //  Tab switching handlers
  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="h-[95vh] border-solid border-[1px] border-green-500 ">
      <ul className="flex flex-row justify-evenly text-white font-mono font-bold p-3 transition-all duration-500 ease-in-out">
        {tabs.map((tab) => (
          <li
            key={tab.key}
            className={activeTab === tab.key ? "active-tab" : "inactive-tab"}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div className="flex justify-center md:w-[45vw] transition-all duration-500 ease-in-out">
        {tabs.find((tab) => tab.key === activeTab).component}
      </div>
    </div>
  );
};

export default Tabs;
