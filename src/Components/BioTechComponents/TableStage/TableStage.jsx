import React from "react";

import "./TableStage.scss";

const colorArray = [
  "#929eae",
  "#FF1111",
  "#FF9900",
  "#FFD600",
  "#03FB75",
  "#24FF00",
];

const TableStage = ({ colorCode }) => {
  let box1 = 0;
  let box2 = 0;
  let box3 = 0;
  let box4 = 0;
  let box5 = 0;

  const findColor = () => {
    if (colorCode === 1) {
      box1 = 1;
    } else if (colorCode === 2) {
      box1 = 1;
      box2 = 2;
    } else if (colorCode === 3) {
      box1 = 1;
      box2 = 2;
      box3 = 3;
    } else if (colorCode === 4) {
      box1 = 1;
      box2 = 2;
      box3 = 3;
      box4 = 4;
    } else {
      box1 = 1;
      box2 = 2;
      box3 = 3;
      box4 = 4;
      box5 = 5;
    }
  };

  findColor();

  return (
    <div className="tableStageContainer">
      <div className="stageWraper">
        <div
          className="box1 box"
          style={{ backgroundColor: colorArray[box1] }}
        ></div>
        <div
          className="box2 box"
          style={{ backgroundColor: colorArray[box2] }}
        ></div>
        <div
          className="box3 box"
          style={{ backgroundColor: colorArray[box3] }}
        ></div>
        <div
          className="box4 box"
          style={{ backgroundColor: colorArray[box4] }}
        ></div>
        <div
          className="box5 box"
          style={{ backgroundColor: colorArray[box5] }}
        ></div>
      </div>
    </div>
  );
};

export default TableStage;
