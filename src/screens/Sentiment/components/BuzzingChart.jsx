import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";

function BuzzingChart({ sentimentData }) {
  const categories = sentimentData.map((item) => item.Symbol);
  const sentimentValues = sentimentData.map((item) => parseFloat(item.price));

  const series = [
    {
      data: sentimentValues,
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 200,
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "0.5rem",
        fontWeight: "bold",
      },
      offsetY: -5,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
      dataLabels: {
        enabled: false,
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          fontSize: "0.6rem",
        },
      },
    },
  };

  return (
    <Box>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={180}
      />
    </Box>
  );
}

export default BuzzingChart;
