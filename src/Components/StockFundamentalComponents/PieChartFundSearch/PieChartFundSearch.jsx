import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import "chartjs-plugin-labels";

import "./PieChartFundSearch.scss";
import {
  skyBlue,
  blue,
  green,
  lightGreen,
  parrot,
} from "../../../constants/constant";
// import appleLogo from "../../../assets/images/appleLogo.png";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Apple", "Coca-Cola", "Chevron", "Oxy", "Kraft Foods"],
  datasets: [
    {
      label: "Stock",
      data: [300, 150, 50, 100, 80],
      backgroundColor: [green, skyBlue, blue, parrot, lightGreen],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    datalabels: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

// const plugins = [
//   {
//     afterDraw: (chart) => {
//       // console.log(chart.canvas);
//       const canvas = chart.canvas;
//       // const span = document.createElement("span");
//       // canvas.appendChild(span);
//       var ctx = canvas.getContext("2d");
//       ctx.save();
//       var image = new Image();
//       image.src = appleLogo;
//       var imageSize = 55;
//       ctx.drawImage(
//         image,
//         chart.canvas.width / 2 - imageSize / 2,
//         chart.canvas.height / 2 - imageSize / 2,
//         imageSize,
//         imageSize
//       );
//       ctx.restore();
//     },
//   },
// ];

const PieChartFundSearch = ({ fund }) => {
  return (
    <>
      <div className="pieChartFundContainer">
        <span className="header">{fund}</span>
        <div className="pieChartFundCard">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default PieChartFundSearch;
