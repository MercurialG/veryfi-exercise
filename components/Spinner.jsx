import React from "react";
// Just a simple spinner componet for loading
const Spinner = () => {
  return (
    <div className="flex flex-col justify-center self-center items-center h-full ">
      <div className="border-t-4 border-b-4 border-[#02f96f] w-16 h-16 rounded-full animate-spin"></div>
      <div className="text-center font-mono p-3 font-bold">
        <p>If Loading takes longer then 10 seconds -</p>
        probably there is an error on the server side, please try again later{" "}
      </div>
    </div>
  );
};

export default Spinner;
