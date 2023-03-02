import React from "react";

const InfoBar = () => {
  return (
    <div className="flex j-between w-full max-w-md bg-black p-2 rounded-md">
      <div className="flex j-center i-center">
        <div className="w-1 bg-gray h-1 mr-2 rounded-t-full"></div>
        <p>N/A</p>
      </div>
      <div className="flex j-center i-center">
        <div className="w-1 bg-lightblue h-1 mr-2 rounded-t-full"></div>
        <p>Selected</p>
      </div>
      <div className="flex j-center i-center">
        <div className="w-1 bg-white h-1 mr-2 rounded-t-full"></div>
        <p>Occupied</p>
      </div>
    </div>
  );
};

export default InfoBar;
