import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

import { green } from "../../../constants/constant";
import "./LineChartFunc.scss";

const data = {
  labels: ["Oct 2022", "Jan 2023", "Apr 2023", "Jul 2023", "Jul 2024"],
  datasets: [
    {
      label: "Dataset of Months",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: { green },
      pointBackgroundColor: "#fff",
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [229, 168, 108, 290],
    },
    {
      label: "Dataset of Months",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "#06d906",
      borderCapStyle: "butt",
      borderDash: [10, 20],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: { green },
      pointBackgroundColor: "#fff",
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [229, 168, 108, 290, 351],
    },
    {
      label: "Dataset of Months",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "red",
      borderCapStyle: "butt",
      borderDash: [10, 20],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: { green },
      pointBackgroundColor: "#fff",
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [229, 168, 108, 290, 120],
    },
    {
      label: "Dataset of Months",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "yellow",
      borderCapStyle: "butt",
      borderDash: [10, 20],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: { green },
      pointBackgroundColor: "#fff",
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [229, 168, 108, 290, 263],
    },
  ],
};
function LineChartFunc() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="lineChartContainer">
        <span className="header">Stock 12 Months Forecast</span>
        <div className="lineChartCard">
          <div className="lineChart">
            <div className="tooltip">
              <span className="tool1">Past 12 Months</span>
              <span className="tool2">12 Months Forecast</span>
            </div>
            <Line data={data} options={options} />
          </div>

          <div className="chartData">
            <span>
              Highest Price Target <span className="money1">$350.00</span>
            </span>
            <span>
              Average Price Target <span className="money2">$263.33</span>
            </span>
            <span>
              Lowest Price Target <span className="money3">$120.00</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default LineChartFunc;
