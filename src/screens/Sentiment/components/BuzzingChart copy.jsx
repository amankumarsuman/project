import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(...registerables, ChartDataLabels);

function BuzzingChart() {
  const data = {
    labels: ["APPL", "TSLA", "MSFT", "NVDA", "UNH", "SPY", "GOOGL"],
    datasets: [
      {
        data: [0, 400, 600, 800, 1000, 1200, 1400],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
        ],
        hoverBackgroundColor: [
          "#09c0f1",
          "#09c0f1",
          "#09c0f1",
          "#09c0f1",
          "#0678b1",
          "#0678b1",
          "#0678b1",
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: false,
      datalabels: {
        anchor: "center",
        color: "white",
        align: "end",
        formatter: Math.round,
        font: {
          weight: "bold",
          size: "12rem",
        },
      },
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        padding: 50,
      },
    },
    scales: {
      xAxes: [
        {
          barPercentage: 0.8,
          gridLines: {
            display: true,
            drawTicks: true,
            drawOnChartArea: false,
          },
          ticks: {
            fontColor: "#555759",
            fontFamily: "Lato",
            fontSize: 16,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            drawTicks: true,
            tickMarkLength: 5,
            drawOnChartArea: true,
          },
          ticks: {
            padding: 10,
            beginAtZero: true,
            fontColor: "#555759",
            fontFamily: "Lato",
            fontSize: 16,
          },
          scaleLabel: {
            display: true,
            padding: 40,
            fontFamily: "Lato",
            fontColor: "#555759",
            fontSize: 18,
            fontStyle: 700,
            labelString: "Scale Label",
          },
        },
      ],
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}

export default BuzzingChart;
