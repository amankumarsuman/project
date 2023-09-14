import React from "react";
import { ClockLoader } from "react-spinners";

const MiniLoader = () => {
  return (
    <div className="miniLoader">
      <ClockLoader color="#00f6ff" speedMultiplier={2} size={80} />
    </div>
  );
};

export default MiniLoader;
