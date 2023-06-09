import React, { useState } from "react";

// Reusable Tabs component - provide it with array of components and switch between them
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    // Tab buttons
    <div className="h-[95vh] border-solid border-[1px] border-green-500">
      <ul className="flex flex-row justify-evenly text-white font-mono font-bold p-3 transition-all duration-500 ease-in-out">
        {tabs.map((tab) => (
          <li key={tab.key}>
            <button
              className={activeTab === tab.key ? "active-tab" : "inactive-tab"}
              onClick={() => handleTabClick(tab.key)}
              aria-selected={activeTab === tab.key}
              role="tab"
              tabIndex={activeTab === tab.key ? 0 : -1}
              title={tab.title}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      {/* Tab content */}
      <div className="flex justify-center md:w-[45vw] transition-all duration-500 ease-in-out">
        {tabs.find((tab) => tab.key === activeTab).component}
      </div>
    </div>
  );
};

export default Tabs;
