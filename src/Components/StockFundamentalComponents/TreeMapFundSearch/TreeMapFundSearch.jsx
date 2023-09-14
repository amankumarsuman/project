import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
import { Chart } from "react-chartjs-2";

import "./TreeMapFundSearch.scss";
import { lightGreen, green } from "../../../constants/constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TreemapController,
  TreemapElement
);

const data = [
  { name: "AAPL", dataCoverage: 46.4 },
  { name: "BAC", dataCoverage: 9.09 },
  { name: "AXP", dataCoverage: 7.69 },
  { name: "KO", dataCoverage: 7.63 },
  { name: "CVX", dataCoverage: 6.65 },
  { name: "OXY", dataCoverage: 4.07 },
  { name: "KHC", dataCoverage: 3.87 },
  { name: "MCO", dataCoverage: 2.32 },
  { name: "ATVI", dataCoverage: 1.3 },
  { name: "HPQ", dataCoverage: 1.09 },
  { name: "VRSN", dataCoverage: 0.83 },
  { name: "C", dataCoverage: 0.8 },
  { name: "KR", dataCoverage: 0.76 },
  { name: "PARA", dataCoverage: 0.64 },
  { name: "V", dataCoverage: 0.58 },
  { name: "GM", dataCoverage: 0.45 },
  // { name: "DVA", dataCoverage: 0.9 },
  // { name: "MA", dataCoverage: 0.45 },
  // { name: "LBRDA", dataCoverage: 0.42 },
  // { name: "AON", dataCoverage: 0.42 },
  // { name: "LSXMK", dataCoverage: 0.37 },
  // { name: "AMZN", dataCoverage: 0.34 },
  // { name: "CE", dataCoverage: 0.3 },
  // { name: "COF", dataCoverage: 0.29 },
  // { name: "SNOW", dataCoverage: 0.29 },
  // { name: "MCK", dataCoverage: 0.25 },
];

const options = {
  plugins: {
    title: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: true,
      callbacks: {
        title(items) {
          return items[0].raw._data.name;
        },
      },
    },
  },
};

const config = {
  type: "treemap",
  data: {
    datasets: [
      {
        tree: data,
        key: "dataCoverage",
        labels: {
          display: true,
          formatter: (context) => context.raw._data.name,
        },
        backgroundColor(context) {
          if (context.type !== "data") return "transparent";
          const { dataCoverage } = context.raw._data;
          return dataCoverage === 0
            ? color(green).rgbString()
            : color(lightGreen).alpha(dataCoverage).rgbString();
        },
      },
    ],
  },
};

export default function TreeMapFundSearch() {
  return (
    <div className="fundTreeMapContainer">
      <span className="header">Top 100 Holdings Heatmap</span>
      <div className="fundTreeMapCard">
        <Chart type="treemap" data={config.data} options={options} />
      </div>
    </div>
  );
}
