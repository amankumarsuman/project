import ReactApexChart from "react-apexcharts";
import { singlechartData, comparisonData } from "../utils/data";
export const StockOverview = () => {
  const overViewData = [
    {
      timeLine: "One Day",
      stock: 1,
    },
    {
      timeLine: "One Week",
      stock: 3,
    },
    {
      timeLine: "One Month",
      stock: 2.4,
    },
    {
      timeLine: "Last Year",
      stock: 1.54,
    },
    {
      timeLine: "One Year",
      stock: 3.92,
    },
  ];

  const compareData = [
    {
      timeLine: "One Year",
      aapl: -30,
      spy: 25,
      qqq: 20,
      sector: 20,
    },
    {
      timeLine: "Last Year",
      aapl: 18,
      spy: 22,
      qqq: 28,
      sector: 22,
    },
    {
      timeLine: "One Month",
      aapl: 4.5,
      spy: 6,
      qqq: 8,
      sector: -15,
    },
    {
      timeLine: "One Week",
      aapl: 3,
      spy: 4,
      qqq: 5,
      sector: 5,
    },
    {
      timeLine: "One Day",
      aapl: 1,
      spy: 2,
      qqq: 3,
      sector: 3,
    },
  ];

  return (
    <div className="overflow-y-auto h-full flex flex-col justify-between">
      <div className="flex text-base justify-between items-center h-[48%]">
        <div className="border-2 border-[#ffffff37] rounded-lg p-4 w-[40%] h-full overflow-y-auto">
          <h2 className="text-xl font-semibold">Overview</h2>
          <div className="pt-1 mt-2 w-full">
            {overViewData.map((overview, index) => {
              return (
                <div
                  key={overview.timeLine}
                  className={`flex py-1 text-white justify-between ${
                    index !== overViewData.length - 1
                      ? "border-b-[1px] border-[#ffffff13]"
                      : ""
                  }`}
                >
                  <span>{overview.timeLine}</span>
                  <span>{overview.stock}%</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-full w-[55%] border-2 border-[#ffffff37] rounded-lg px-4 pb-3">
          <ReactApexChart
            options={singlechartData.options}
            series={singlechartData.series}
            type="bar"
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div className="flex text-base gap-2 items-center h-[50%] justify-between">
        <div className="border-2 border-[#ffffff37] rounded-lg h-full overflow-y-scroll p-4 w-[40%]">
          <h2 className="text-xl font-semibold">Compare</h2>
          <table className="mt-4 w-full">
            <thead className="w-full">
              <tr className="text-left text-yellow-400 w-full">
                <th className="mb-4">Timeline/Stocks</th>
                <th>APPL</th>
                <th>SPY</th>
                <th>QQQ</th>
                <th>SECTOR</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((data, index) => {
                return (
                  <tr
                    key={data.timeLine}
                    className={`text-white ${
                      index !== compareData.length - 1
                        ? "border-b-[1px] border-[#ffffff13]"
                        : ""
                    }`}
                  >
                    <td className="py-1">{data.timeLine}</td>
                    <td>{data.aapl}%</td>
                    <td>{data.spy}%</td>
                    <td>{data.qqq}%</td>
                    <td>{data.sector}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="h-full overflow-y-hidden w-[55%] px-4 pb-3 border-2 border-[#ffffff37] rounded-md">
          <ReactApexChart
            options={comparisonData.options}
            series={comparisonData.series}
            type="bar"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};
