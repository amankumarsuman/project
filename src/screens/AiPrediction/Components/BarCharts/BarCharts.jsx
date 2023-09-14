import React from "react";
import Chart from "react-apexcharts";

function BarCharts(props) {
  const { dataList } = props;
  const data = {
    series: [
      {
        name: "Price",
        data: dataList?.values?.map((list) => list?.toFixed(2)),
      },
    ],
    options: {
      fill: {
        opacity: 1,
        colors: ["#5758BB"],
      },
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "",
        align: "left",
        style: {
          color: "#AAAAAA",
        },
      },
      grid: {
        show: false,
        row: {
          colors: ["#7FFFD4", "transparent"], // takes an array which will be repeated on columns
          opacity: 0,
        },
      },
      xaxis: {
        categories: dataList?.items?.map((list) => {
          try{
          const capitalizedList =
            list?.charAt(0)?.toUpperCase() +
            (list !== undefined ? list?.slice(1) : "");
          return capitalizedList;
          }catch (e){
            return '';
          }
        }),
        labels: {
          style: {
            colors: "#AAAAAA",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#AAAAAA",
          },
        },
      },
    },
  };
  return (
    <div>
      {" "}
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={280}
      />
    </div>
  );
}

export default BarCharts;
