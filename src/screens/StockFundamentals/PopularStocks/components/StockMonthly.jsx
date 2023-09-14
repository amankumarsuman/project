import ReactApexChart from "react-apexcharts";
import { MonthlyReturn } from "../utils/data";
import { useState } from "react";
import { MonthlyTable } from "./MonthlyTable";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-[#ffffff13] rounded-lg px-4 py-2 text-sm font-semibold"
    >
      {props.children}
    </button>
  );
};
export const StockMonthly = () => {
  const [tab, setTab] = useState(0);

  const setTable = () => {
    setTab(0);
  };

  const setChart = () => {
    setTab(1);
  };

  return (
    <div className="h-full flex justify-between flex-col">
      <div className="flex gap-4 justify-end w-full h-[30px] items-center">
        <Button onClick={setTable}>Table</Button>
        <Button onClick={setChart}>Chart</Button>
      </div>
      <div className="w-full p-4 h-[calc(100%-40px)] mx-auto overflow-y-auto overflow-x-auto">
        {tab === 0 ? (
          <MonthlyTable />
        ) : (
          <div className="h-full w-full flex gap-4">
            <div className="w-2/4 border-2 border-[#ffffff69] rounded-lg overflow-y-auto p-4">
              <p className="text-lg font-semibold text-white">
                Montly Performance
              </p>
              <table className="w-full mt-4">
                <thead>
                  <tr className="text-sm text-yellow-300 mb-2">
                    <th className="pb-2">Month</th>
                    <th className="pb-2">Open</th>
                    <th className="pb-2">High</th>
                    <th className="pb-2">Low</th>
                    <th className="pb-2">Close</th>
                    <th className="pb-2">Change(%)</th>
                    <th className="pb-2">Avg. Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Jan</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Feb</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Mar</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Apr</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">May</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Jun</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Jul</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Aug</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Sep</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td className="py-2">Oct</td>
                    <td>2023</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="h-full w-2/4 overflow-hidden border-2 border-[#ffffff69] rounded-lg p-4">
              <ReactApexChart
                options={MonthlyReturn.options}
                series={MonthlyReturn.series}
                type="bar"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
