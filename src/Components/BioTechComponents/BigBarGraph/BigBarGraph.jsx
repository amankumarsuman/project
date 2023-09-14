import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import "./BigBarGraph.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const labels = ["1 Day", "1 Week", "1 month", "Year to date", "1 year"];

const data = {
  labels,
  datasets: [
    {
      label: "SPY",
      data: [3, -12, 7.5, -11, 2],
      borderColor: "#CCC900",
      backgroundColor: "#CCC900",
    },
    // {
    //   label: "XLV",
    //   data: [-7.25, 5.34, 13.33, -3],
    //   borderColor: "#1AA3B3",
    //   backgroundColor: "#1AA3B3",
    // },
    {
      label: "QQQ",
      data: [10, -12.13, 15, -9, 7],
      borderColor: "#4A0082",
      backgroundColor: "#4A0082",
    },
    // {
    //   label: "IBB",
    //   data: [-3.2, 4.66, -9.6, 7, -8],
    //   borderColor: "#FCB500",
    //   backgroundColor: "#FCB500",
    // },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    indexAxis: "y",
    elements: {
      bar: {
        borderHeight: 10,
        borderRadius: 10,
      },
    },
    responsive: true,
    barThickness: 15,
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        align: "center",
      },
    },
  },
};

export default function BigBarGraph() {
  return (
    <div className="bigBarGraphContainer">
      <div className="bigBarGraphCard">
        <span className="header">TITLE</span>
        <Bar options={config.options} data={data} />
      </div>
    </div>
  );
}
