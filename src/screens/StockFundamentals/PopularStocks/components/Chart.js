import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  singlechartData,
  comparisonData,
  DailyReturn,
  YearlyReturn,
  DailyReturnIndex,
  MonthlyReturn,
} from "../utils/data";

const Chart = () => {
  return (
    <div>
      <div id="singlechartData">
        <ReactApexChart
          options={singlechartData.options}
          series={singlechartData.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="comparisonData">
        <ReactApexChart
          options={comparisonData.options}
          series={comparisonData.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="DailyReturn">
        <ReactApexChart
          options={DailyReturn.options}
          series={DailyReturn.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="DailyReturnIndex">
        <ReactApexChart
          options={DailyReturnIndex.options}
          series={DailyReturnIndex.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="MonthlyReturn">
        <ReactApexChart
          options={MonthlyReturn.options}
          series={MonthlyReturn.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="YearlyReturn">
        <ReactApexChart
          options={YearlyReturn.options}
          series={YearlyReturn.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
