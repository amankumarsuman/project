import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "./PieChartFunc.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
    },
  },
};

export default function PieChartFunc({ pieChartData }) {
  const data = {
    labels: ["Buy", "Hold", "Sell"],
    datasets: [
      {
        label: "Stock",
        data:
          pieChartData[0] !== undefined
            ? [pieChartData[0].buy, pieChartData[0].hold, pieChartData[0].sell]
            : [400, 300, 300],
        backgroundColor: ["green", "yellow", "red"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="pieChartContainer">
      <span className="header">Analyst Ratings</span>
      <div className="pieChartCard">
        <span className="header">Hold</span>
        <div className="cardContentWraper">
          <div className="pieChartWraper">
            <Doughnut data={data} options={options} />
          </div>

          <div className="outerText">
            <p>
              Based on 27 analysts giving stock ratings to Apple in the past 3
              months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
