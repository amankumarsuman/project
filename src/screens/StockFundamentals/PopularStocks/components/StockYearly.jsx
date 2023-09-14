import ReactApexChart from "react-apexcharts";
import { YearlyReturn } from "../utils/data";

export const StockYearly = () => {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-between">
        <div className="border-2 border-[#ffffff3b] rounded-lg h-[38%] mx-auto p-4 overflow-y-auto overflow-x-auto w-full">
          <h2 className="text-base font-semibold">Yearly Return</h2>
          <div className="mt-4 w-full">
            <table className="w-full">
              <thead>
                <tr className="text-base text-yellow-300 mb-2">
                  <th className="pr-4 pb-2">Year</th>
                  <th className="pr-4">2000</th>
                  <th className="pr-4">2001</th>
                  <th className="pr-4">2002</th>
                  <th className="pr-4">2003</th>
                  <th className="pr-4">2004</th>
                  <th className="pr-4">2005</th>
                  <th className="pr-4">2006</th>
                  <th className="pr-4">2007</th>
                  <th className="pr-4">2008</th>
                  <th className="pr-4">2009</th>
                  <th className="pr-4">2010</th>
                  <th className="pr-4">2011</th>
                  <th className="pr-4">2012</th>
                  <th className="pr-4">2013</th>
                  <th className="pr-4">2014</th>
                  <th className="pr-4">2015</th>
                  <th className="pr-4">2016</th>
                  <th className="pr-4">2017</th>
                  <th className="pr-4">2018</th>
                  <th className="pr-4">2019</th>
                  <th className="pr-4">2020</th>
                  <th className="pr-4">2021</th>
                  <th className="pr-4">2022</th>
                  <th className="pr-4">2023</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                  <td className="py-2">AAPL</td>
                  <td className="px-2">2%</td>
                  <td className="px-2">6%</td>
                  <td className="px-2">7%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">4%</td>
                  <td className="px-2">7%</td>
                  <td className="px-2">3%</td>
                  <td className="px-2">9%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">13%</td>
                  <td className="px-2">14%</td>
                  <td className="px-2">15%</td>
                  <td className="px-2">16%</td>
                  <td className="px-2">6%</td>
                  <td className="px-2">18%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">20%</td>
                  <td className="px-2">21%</td>
                  <td className="px-2">22%</td>
                  <td className="px-2">23%</td>
                  <td className="px-2">15%</td>
                  <td className="px-2">20%</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                  <td className="py-2">SPY</td>
                  <td className="py-2">2%</td>
                  <td className="px-2">3%</td>
                  <td className="px-2">8%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">2%</td>
                  <td className="px-2">7%</td>
                  <td className="px-2">4%</td>
                  <td className="px-2">9%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">2%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">4%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">4%</td>
                  <td className="px-2">15%</td>
                  <td className="px-2">8%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">18%</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-base text-white border-b-[1px] border-[#ffffff13]">
                  <td className="py-2">QQQ</td>
                  <td className="py-2">2%</td>
                  <td className="px-2">8%</td>
                  <td className="px-2">4%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">4%</td>
                  <td className="px-2">15%</td>
                  <td className="px-2">8%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">2%</td>
                  <td className="px-2">8%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">10%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">15%</td>
                  <td className="px-2">6%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">5%</td>
                  <td className="px-2">12%</td>
                  <td className="px-2">8%</td>
                  <td className="px-2">4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="h-[58%] w-full ">
          <div className="h-full w-full flex">
            <div className="w-2/4 border-2 border-[#ffffff3b] rounded-lg overflow-y-auto p-4">
              <p className="text-lg font-semibold mb-3">Yearly Performance</p>
              <table className="w-full">
                <thead>
                  <tr className="text-base text-yellow-300 mb-2">
                    <th className="pb-2">Year</th>
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
                  <td>2023</td>
                    <td className="py-2">161%</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td>2023</td>
                    <td className="py-2">161%</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                </tbody>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td>2023</td>
                    <td className="py-2">161%</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td>2023</td>
                    <td className="py-2">161%</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
                  <tr className="text-base text-center text-white border-b-[1px] border-[#ffffff13]">
                    <td>2023</td>
                    <td className="py-2">161%</td>
                    <td>127.4</td>
                    <td>193.3</td>
                    <td>125.4</td>
                    <td>190.23</td>
                    <td>47%</td>
                  </tr>
              </table>
            </div>
            <div className="w-2/4">
              <ReactApexChart
                options={YearlyReturn.options}
                series={YearlyReturn.series}
                type="bar"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
