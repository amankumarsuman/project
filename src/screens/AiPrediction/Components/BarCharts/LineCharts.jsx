import React from "react";
import Chart from "react-apexcharts";

function LineCharts(props) {
  const { dataList } = props;
  const data = {
    series: [
      {
        name: "Price",
        data: dataList?.values?.map((list) => list?.toFixed(2)),
      },
    ],
    options: {
      colors: ["#00CCFF"],
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
      //   colors: "#9C27B0",
      stroke: {
        curve: "straight",
      },
      // title: {
      //   text: 'Product Trends by Month',
      //   align: 'left'
      // },
      grid: {
        show: false,
        row: {
          // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          // opacity: 0.5
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
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
        lines: {
          show: false,
        },
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
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height={280}
      />
    </div>
  );
}

export default LineCharts;
