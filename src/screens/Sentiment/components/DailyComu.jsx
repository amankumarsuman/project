import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

ChartJS.register(...registerables);

function DailyComu({ sentimentData }) {
  const categories = sentimentData.map(item => item.sentiment);
  const series = [
    {
      name: "Bullish",
      data: sentimentData.map((item) =>
        parseFloat(item.price_change_percentage)
      ),
    },
    {
      name: "Neutral",
      data: sentimentData.map((item) =>
        parseFloat(item.price_change_percentage)
      ),
    },
    {
      name: "Bearish",
      data: sentimentData.map((item) =>
        parseFloat(item.price_change_percentage)
      ),
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 200,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },

    tooltip: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 1,
        dataLabels: {
          // total: {
          //   enabled: false,
          // },
        },
      },
    },
    xaxis: {
      categories: categories,
      tickAmount: 8,
      labels: {
        hideOverlappingLabels: true,
      },
      labels: {
        style: {
          fontSize: "0.65rem",
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    colors: ["#039000", "#CFDFF2", "#EE0303"],
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    legend: {
      position: "top",
      offsetY: 10,
      offsetX: 0,
    },
  };

  // const options = {
  //   legend: { display: false },
  //   scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
  //   plugins: {
  //     datalabels: false,
  //   },
  // };

  return (
    <>
      <Box className="daily-commulative-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={360}
        />
      </Box>
    </>
  );
}

export default DailyComu;
