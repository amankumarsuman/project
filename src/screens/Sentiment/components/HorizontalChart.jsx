import React from "react";
import ReactApexChart from "react-apexcharts";

export default function HorizontalChart({ sentimentData }) {
  const stockSymbols = sentimentData.map((item) => item.Symbol);
  const bullishData = sentimentData.map((item) => parseFloat(item.sentiment));
  const bearishData = sentimentData.map((item) => -parseFloat(item.sentiment));
  const series = [
    {
      name: "Bullish",
      data: [0.4, 0.65, 0, 0, 3.8],
    },
    {
      name: "Bearish",
      data: [0, 0, -1.18, -4.4, 0],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 100,
      stacked: true,
      toolbar: {
        show: false,
      },
      offsetY: 10,
    },
    tooltip: {
      enabled: false,
    },
    colors: ["#00DE4C", "#EE0303"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
      colors: ["#fff"],
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
    yaxis: {
      lines: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "0.6rem",
        },
      },
    },

    title: {
      // text: "Chart Title",
    },
    xaxis: {
      categories: stockSymbols,
      //   title: {
      //     text: "Percent",
      //   },
      labels: {
        show: true,
        align: "middle",
        formatter: function (val) {
          return Math.abs(Math.round(val));
        },
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      position: "top",
      offsetY: 2,
      offsetX: 30,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={150}
      />
    </div>
  );
}
