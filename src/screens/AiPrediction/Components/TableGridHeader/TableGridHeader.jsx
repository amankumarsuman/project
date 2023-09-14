import React, { useEffect, useState } from "react";
import "../TableGridHeader/TableGridHeader.scss";
import axios from "axios";

function TableGridHeader(props) {
  const { dataList, list, model } = props;
  const listing = [
    "1 Day",
    "2 Day",
    "3 Day",
    "4 Day",
    "5 Day",
    "6 Day",
    "7 Day",
    "8 Day",
    "9 Day",
    "10 Day",
  ];
  return (
    <div className="grid_wrapper_header">
      <div style={{ height: "40px", width: "28px", minWidth: "57px" }}></div>
      <div style={{ width: "30px", minWidth: "30px" }}>
        <p></p>
        <div className="thead"></div>
      </div>
      <div className="">
        {/* <p className="small_head">Current Price</p> */}
        <p className="thead">Price</p>
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
          {listing?.map((list, index) => {
            return (
              <p key={index} className="thead">
                {list}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TableGridHeader;
