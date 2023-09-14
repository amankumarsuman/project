import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const series = [
    {
      name: "STOCK ABC",
      data: [10, 20, 12, 18, 30, 10],
    },
  ];
  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
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
    },
    stroke: {
      curve: "straight",
    },

    // title: {
    //   text: "Fundamental Analysis of Stocks",
    //   align: "left",
    // },
    // subtitle: {
    //   text: "Price Movements",
    //   align: "left",
    // },
    labels: ["1", "2", "3", "4", "5"],
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={140}
      />
    </>
  );
};

export default LineChart;
