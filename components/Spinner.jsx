import React from "react";
// Just a simple spinner componet for loading
const Spinner = () => {
  return (
    <div className="flex justify-center self-center items-center h-full ">
      <div className="border-t-4 border-b-4 border-[#02f96f] w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
