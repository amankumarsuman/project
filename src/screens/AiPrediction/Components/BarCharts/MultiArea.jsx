import React from "react";
import Chart from "react-apexcharts";

function MultiArea(props) {
  const { dataList, dataListtwo, dataListthree } = props;

  const data = {
    series: [
      {
        name: "TSLA Model 1",
        data: dataList?.values?.map((list) => list?.toFixed(2)),
      },
      {
        name: "TSLA Model 2",
        data: dataListtwo?.values?.map((list) => list?.toFixed(2)),
      },
      {
        name: "TSLA Model 3",
        data: dataListthree?.values?.map((list) => list?.toFixed(2)),
      },
    ],
    options: {
      colors: ["#60a3bc", "#833471", "#82589F"],
      legend: {
        labels: {
          colors: "#AAAAAA", // Specify colors for each legend label
        },
      },
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        // type: "datetime",
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
      grid: {
        show: false,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      fill: {
        opacity: 1,
        colors: ["#60a3bc", "#833471", "#82589F"],
      },
    },
  };
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height={280}
      />
    </div>
  );
}

export default MultiArea;
