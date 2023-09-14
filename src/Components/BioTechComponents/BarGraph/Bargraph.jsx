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

import "./BarGraph.scss";

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
      label: "Positive",
      data: [3, 12, 15.5, 18],
      borderColor: "#36F097",
      backgroundColor: "#36F097",
    },
    {
      label: "Negative",
      data: [-7.25, -12.34, -17.33],
      borderColor: "#F22323",
      backgroundColor: "#F22323",
    },
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

export default function BarGraph() {
  return (
    <div className="barGraphContainer">
      <div className="barGraphCard">
        <span className="header">IBB</span>
        <div className="barGraphBox">
          <Bar options={config.options} data={data} />
        </div>
      </div>
    </div>
  );
}
