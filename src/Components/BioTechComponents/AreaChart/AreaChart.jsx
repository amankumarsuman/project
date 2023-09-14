import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "./AreaChart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export default function AreaChart({ chartColor }) {
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [34, 23, 77, 12, 88, 31, 16],
        backgroundColor: chartColor,
        pointRadius: 0,
      },
    ],
  };
  return (
    <div className="areaChart">
      <Line options={options} data={data} />
    </div>
  );
}
