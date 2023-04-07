// import React, { useState } from "react";
// import Camera from "./Camera";
// import DragAndDrop from "./DragAndDrop";
// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("tab1");
//   //  Tab switching handlers
//   const handleTab1 = () => {
//     setActiveTab("tab1");
//   };
//   const handleTab2 = () => {
//     setActiveTab("tab2");
//   };
//   return (
//     <div className="">
//       <ul className="flex flex-row justify-evenly text-white font-mono font-bold p-3">
//         <li
//           className={activeTab === "tab1" ? "active-tab" : "inactive-tab"}
//           onClick={handleTab1}
//         >
//           Choose file
//         </li>
//         <li
//           className={activeTab === "tab2" ? "active-tab" : "inactive-tab"}
//           onClick={handleTab2}
//         >
//           Camera
//         </li>
//       </ul>

//       <div className="w-[80vw] h-[80vh] md:w-[40vw]">
//         {activeTab === "tab1" ? <DragAndDrop /> : <Camera />}
//       </div>
//     </div>
//   );
// };
// export default Tabs;

import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  //  Tab switching handlers
  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="">
      <ul className="flex flex-row justify-evenly text-white font-mono font-bold p-3">
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

      <div className="w-[80vw] h-[80vh] md:w-[40vw]">
        {tabs.find((tab) => tab.key === activeTab).component}
      </div>
    </div>
  );
};

export default Tabs;
