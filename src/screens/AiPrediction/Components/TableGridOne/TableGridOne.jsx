import React, { useEffect, useState } from "react";
import "../TableGridOne/TableGridOne.scss";
import axios from "axios";

function TableGridOne(props) {
  const { dataList, list, tabDataName, modelname, currentPrice } = props;
  console.log("Tester", modelname);
  return (
    <div className="grid_wrapper">
      <div>
        <p className="head">{modelname}</p>
      </div>
      <div className="tlsp_container">
        <div className="icon_box"></div>
        <p style={{ fontSize: "15px" }}>{list}</p>
      </div>
      <div className="">
        {/* <p className="small_head">Current Price</p> */}
        <p className="head">{currentPrice}</p>
      </div>
      <div className="content_wrapper">
        {/* <div style={{display: "flex", justifyContent: "space-between"}}>
          {dataList?.items?.map((list, index) => {
            return <p className="small_head">{list}</p>;
          })}
        </div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {dataList?.values?.map((list, index) => {
            return <p className="head">{list.toFixed(2)}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default TableGridOne;
