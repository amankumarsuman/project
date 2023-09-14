import React from "react";
import CircleChart from "./CircleChart";
import { Grid } from "@mui/material";

// const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function createData(circleColour, bgColor, fat, carbs, protein) {
  return { circleColour, bgColor, fat, carbs, protein };
}
// const dataArr = [
//   createData("#00DE4C", "#004B19", 6.0, 24, 4.0),
//   createData("#DE0000", "#4B0000", 9.0, 37, 4.3),
//   createData("#FFE70F", "#c2af00", 16.0, 24, 6.0),
//   createData("#DE0000", "#4B0000", 3.7, 67, 4.3),
//   createData("#00DE4C", "#004B19", 3.7, 67, 4.3),
//   createData("#FFE70F", "#c2af00", 3.7, 67, 4.3),
//   createData("#00DE4C", "#004B19", 3.7, 67, 4.3),
//   createData("#DE0000", "#4B0000", 3.7, 67, 4.3),
//   createData("#FFE70F", "#c2af00", 3.7, 67, 4.3),
//   createData("#DE0000", "#4B0000", 3.7, 67, 4.3),

//   createData("#00DE4C", "#004B19", 3.7, 67, 4.3),
// ];

const SentimentCard = (props) => {
  const dataArr = props.sentimentData;
  return (
    <>
      {console.log('props', props, 'dataArr', dataArr)}
      {dataArr.map((item) => {
        return <CircleChart item={item} />;
      })}
    </>
  );
};

export default SentimentCard;
