import React from "react";
import Chart from "react-apexcharts";

function MultibarCharts(props) {
  const { dataList, dataListtwo, dataListthree } = props;
  const data = {
    series: [
      {
        name: "TSLA",
        data: dataList?.values?.map((list) => list?.toFixed(2)),
      },
      {
        name: "SPY",
        data: dataListtwo?.values?.map((list) => list?.toFixed(2)),
      },
      {
        name: "QQQ",
        data: dataListthree?.values?.map((list) => list?.toFixed(2)),
      },
    ],
    options: {
      colors: ["#00cec9", "#BDC581", "#3B3B98"],
      legend: {
        labels: {
          colors: "#AAAAAA", // Specify colors for each legend label
        },
      },
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: dataList?.items,
        labels: {
          style: {
            colors: "#AAAAAA",
          },
        },
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
          style: {
            color: "#AAAAAA", // Change this to your desired color
            fontWeight: 400,
          },
        },
        labels: {
          style: {
            colors: "#AAAAAA",
          },
        },
      },
      grid: {
        show: false,
      },
      fill: {
        opacity: 1,
        colors: ["#00cec9", "#BDC581", "#3B3B98"],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val;
          },
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={280}
      />
    </div>
  );
}

export default MultibarCharts;
