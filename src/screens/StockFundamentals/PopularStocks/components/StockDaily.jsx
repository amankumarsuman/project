import ReactApexChart from "react-apexcharts";
import { DailyReturn, DailyReturnIndex } from "../utils/data";

export const StockDaily = () => {
  return (
    <div className="flex text-sm h-full justify-between">
      <div className="flex gap-2 h-full w-1/3">
        <div className="border-2 border-[#ffffff37] w-full rounded-lg overflow-y-auto p-4">
          <h2 className="text-xl font-semibold">Compare</h2>
          <table className="w-full mt-4">
            <thead>
              <tr className="text-base text-yellow-400 mb-2 text-left">
                <th className="py-2">Date</th>
                <th className="px-2">Day</th>
                <th className="px-2">APPL</th>
                <th className="px-2">SPY</th>
                <th className="px-2">QQQ</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
              <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                <td className="py-2">13-03-2021</td>
                <td className="px-2">Sun</td>
                <td className="px-2">2%</td>
                <td className="px-2">2%</td>
                <td className="px-2">2.43%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-full justify-between w-3/5">
        <div className="h-[48%] w-full px-4 pb-3 border-2 border-[#ffffff37] rounded-md">
          <ReactApexChart
            options={DailyReturn.options}
            series={DailyReturn.series}
            type="bar"
            height="100%"
            width="100%"
          />
        </div>
        <div className="h-[48%] w-full overflow-y-hidden px-4 pb-3 border-2 border-[#ffffff37] rounded-md">
          <ReactApexChart
            options={DailyReturnIndex.options}
            series={DailyReturnIndex.series}
            type="bar"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};
