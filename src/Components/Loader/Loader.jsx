import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <div className="progressLoader">
        <PropagateLoader size={16} color="#00f6ff" />
      </div>
    </>
  );
};

export default Loader;
