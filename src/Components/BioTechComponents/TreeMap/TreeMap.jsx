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

import "./TreeMap.scss";
import appleLogo from "../../../assets/images/appleLogo.png";

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
  { logo: appleLogo, name: "MSFT", dataCoverage: 9.09 },
  { logo: appleLogo, name: "AAPL", dataCoverage: 46.4 },
  { logo: appleLogo, name: "GOOGL", dataCoverage: 7.69 },
  { logo: appleLogo, name: "NVDA", dataCoverage: 7.63 },
  { logo: appleLogo, name: "META", dataCoverage: 6.65 },
  { logo: appleLogo, name: "XOM", dataCoverage: 4.07 },
  { logo: appleLogo, name: "TSLA", dataCoverage: 3.87 },
  { logo: appleLogo, name: "JPM", dataCoverage: 2.32 },
  { logo: appleLogo, name: "UNH", dataCoverage: 1.3 },
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
          color: "white",
          formatter: (context) => {
            return (
              context.raw._data.name + "\n" + context.raw._data.dataCoverage
              //   `<img src={${context.raw._data.logo}} alt="Company Logo" width="40px" />`
            );
          },
        },
        backgroundColor(context) {
          if (context.type !== "data") return "transparent";
          const { dataCoverage } = context.raw._data;
          return dataCoverage === 0
            ? color("#aba7a7").rgbString()
            : color("#696969").alpha(dataCoverage).rgbString();
        },
      },
    ],
  },
};

export default function TreeMap() {
  return (
    <div className="treeMapContainer">
      <div className="treeMapCard">
        <span className="header">HEATMAP</span>
        <div className="treeMapBox">
          <Chart type="treemap" data={config.data} options={options} />
        </div>
      </div>
    </div>
  );
}
