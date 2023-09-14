import React from 'react';
import ReactApexChart from 'react-apexcharts';
// import {Pie, PieChart, Sector} from "recharts";
const ApexPieChartJS = ({className, PosOrNeg, value, bgColor}) => {
    const data = {
        labels: ['Category A'],
        series: [100], // dummy data
    };
    const options = {
        colors: [bgColor],
        chart: {
            type: 'donut',
            height: 200,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '60%',
                },
            },
        },
        labels: ['Value'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        //    annotations: {
        //   position: 'center',
        //   yaxis: [
        //     {
        //       y: 0,
        //       borderColor: 'transparent',
        //       label: {
        //         text: 'Category A',
        //         style: {
        //           fontSize: '14px',
        //           color: '#333',
        //         },
        //       },
        //     },
        //   ],
        // },
    };
    return (
        <div className={className}>
            <ReactApexChart options={options} series={data.series} type="donut" height={100}/>
            <div className="relative inset-0 flex items-center justify-center">
                <div className="absolute top-[-50px] text-white text-sm font-semibold">{value}</div>
            </div>
            <div className={'text-white text-center text-sm font-semibold'}>{PosOrNeg}</div>
        </div>
    )
}
export default ApexPieChartJS;

//  const data = [
//   { name: 'Group A', value: 100 },
//   { name: 'Group B', value: 100 },
// ];
//
// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';
//
//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };
//
//     return (
//         <div className="donut-pie-chart flex justify-center items-center color-white w-[55]">
//       <PieChart width={200} height={200}>
//           <Pie
//             // activeIndex={this.state.activeIndex}
//             activeShape={renderActiveShape}
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={60}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             // onMouseEnter={this.onPieEnter}
//           />
//         </PieChart>
//     </div>
//     )
// }