const formatDate = (string) => {
  const inputDate = new Date(string);
  const day = inputDate.getDate();
  const month = inputDate.toLocaleString("default", { month: "short" });
  const year = inputDate.getFullYear().toString().substr(-2);

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
};



export const singlechartData = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: "200px",
      background: "transparent",
    },

    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
      },
    },
    xaxis: {
      categories: ["1 Day", "1 Week", "1 Month", "Year to date", "1 Year"],
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
      },
      axisBorder: {
        show: false,
      },
    },
  },
  series: [
    {
      name: "Percentage",
      data: [1, 3, 4.5, 18, -30],
      color: function ({ value }) {
        return value < 0 ? "#FF0000" : "#00FF00";
      },
    },
  ],
};

export const comparisonData = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      background: "transparent",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
      },
    },
    xaxis: {
      categories: ["1 Day", "1 Week", "1 Month", "Year to date", "1 Year"],
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
      },
      axisBorder: {
        show: false,
      },
    },
    colors: ["#4472C4", "#ED7D31", "gray", "#FFC000"],
    tooltip: {
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
  },

  series: [
    {
      name: "AAPL",
      data: [-30, 18, 4.5, 3, 1],
    },
    {
      name: "SPY",
      data: [25, 22, 6, 4, 2],
    },
    {
      name: "QQQ",
      data: [20, 28, 8, 5, 3],
    },
    {
      name: "SECTOR",
      data: [20, 22, -15, 5, 3],
    },
  ],
};

export const DailyReturn = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      background: "transparent",
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
        colors: {
          ranges: [
            {
              from: 0,
              to: Infinity,
              color: "#00FF00",
            },
            {
              from: -Infinity,
              to: 0,
              color: "#FF0000",
            },
          ],
        },
        columnWidth: "20%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
        formatter: function (value) {
          return formatDate(value);
        },
        datetimeUTC: true,
        datetimeFormatter: {
            year: 'yyyy',
            month: "MMM 'yy",
            day: 'dd MMM',
            hour: 'HH:mm',
        },
      },
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
      x: {
        formatter: function (value) {
          return formatDate(value);
        }
      }
    },
  },

  series: [
    {
      name: "AAPL",
      data: [
        ["2023-08-01", 2],
        ["2023-07-01", -2],
        ["2023-06-01", 1.8],
        ["2023-05-01", 3],
        ["2023-04-01", 5],
        ["2023-03-01", 3],
        ["2023-02-01", 3],
        ["2023-01-01", -4],
        ["2022-12-01", 3],
        ["2022-11-01", 1],
        ["2022-10-01", 2.5],
        ["2022-09-01", 2.7],
        ["2022-08-01", 3],
        ["2022-07-01", -4],
        ["2022-06-01", 3],
        ["2022-05-01", 1],
        ["2022-04-01", 2.5],
        ["2022-03-01", 2.7],
        ["2022-02-01", 3.1],
        ["2022-01-01", 2.9],
      ],
    },
  ],
};

export const DailyReturnIndex = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      background: "transparent",
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
      ],
    },
    colors: ["#4472C4", "#ED7D31", "gray", "#FFC000"],
    fontSize: "8px",
    tooltip: {
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
  },

  series: [
    {
      name: "AAPL",
      data: [
        2, -2, 1.8, 3, 5, 3, 3, -4, 3, 1, 2.5, 2.7, 3, -4, 3, 1, 2.5, 2.7, 3.1,
        2.9,
      ],
    },
    {
      name: "SPY",
      data: [
        2, -2, 1.8, 3, 5, 3, 5, -4, 3, 2, 2.5, 2.7, 3, -4, 3, 4, 2, 2.5, 3, 3,
      ],
    },
    {
      name: "QQQ",
      data: [
        2, -2, 1.8, 2.8, 5, 3, 3, -4, 3, 1, 2.5, 2.7, 2.5, -4, 3, 3.2, 2.5, 2.7,
        3.9, 2.9,
      ],
    },
  ],
};

export const MonthlyReturn = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      background: "transparent",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
        colors: {
          ranges: [
            {
              from: 0,
              to: Infinity,
              color: "#00FF00",
            },
            {
              from: -Infinity,
              to: 0,
              color: "#FF0000",
            },
          ],
        },
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      crosshair: {
        width: 10,
      },
    },
    colors: ["#996600"],
    fontSize: "8px",
    tooltip: {
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
  },

  series: [
    {
      name: "Jan",
      data: [
        9.5, 1.79, 10.75, 20.6, -8.46, -20.34, 17.9, 13.8, -7.75, 55.52, 12.45,
        -11.36, 40.62,
      ],
    },
    {
      name: "Feb",
      data: [
        -0.87, 14.93, -7.14, 34.95, -0.13, 0.38, -0.77, -3.18, 4.19, 2.68,
        -14.87, -7.08, 18.76, 34.95, -14.87, 3.22, 12.47,
      ],
    },
    {
      name: "Mar",
      data: [
        16.16, 11.46, 8.79, -14.85, -7.17, 19.72, 11.32, -22.42, -12.51, -21.56,
        -1.12, 23.8, 0.85, 23.8, -22.42, 0.96, 15.04,
      ],
    },
    {
      name: "Apr",
      data: [
        -0.5, -11.04, 42.49, -0.27, 19.75, 4.78, 12.85, 10.43, -14.71, -49.21,
        6.21, -19.19, -20.8, 49.21, -20.8, 6.09, 20.77,
      ],
    },
    {
      name: "May",
      data: [
        9.2, -10.96, 81.07, -0.06, 10.95, -7.28, 8.58, -3.12, -22.43, 6.79,
        -11.87, -12.92, 17.56, 81.07, -22.43, 5.04, 34.6,
      ],
    },
    {
      name: "Jun",
      data: [
        -3.35, 6.07, 9.82, 15.54, 6.96, -4.91, 6.04, 20.45, 20.68, 29.32, 8.71,
        -11.19, 29.32, -11.19, 8.68, 11.17,
      ],
    },
    {
      name: "Jul",
      data: [
        -16.32, -3.3, -12.37, 25.07, -6.98, -0.79, 10.6, -10.55, -13.07, 8.12,
        32.5, 1.1, 32.38, 32.5, -16.32, 3.57, 16.43,
      ],
    },
    {
      name: "Aug",
      data: [
        -2.31, -12.18, -4.01, 25.86, 20.78, -6.42, -9.7, 10.03, 1.18, -6.62,
        74.15, 7.06, -7.25, 74.15, -12.18, 7.58, 22.19,
      ],
    },
    {
      name: "Sep",
      data: [
        4.75, -1.41, 2.66, 14.42, -10.02, -0.26, -3.76, -4.16, 12.23, 6.76,
        -13.91, 5.4, -3.76, 14.42, -13.91, -1.19, 7.77,
      ],
    },
    {
      name: "Oct",
      data: [
        7.03, 20.42, -3.92, -17.29, -0.4, -16.69, -3.09, -2.81, 27.4, 30.74,
        -9.55, 43.65, -14.22, 43.65, -17.29, 4.71, 18.98,
      ],
    },
    {
      name: "Nov",
      data: [
        61.77, 11.47, 20.22, -20.42, 1.17, 11.27, -4.21, -6.84, 3.9, 4.77,
        46.27, 2.76, -14.43, 61.77, -20.42, 9.05, 22.01,
      ],
    },
    {
      name: "Dec",
      data: [
        24.64, -12.77, 0.15, 18.19, -9.04, 4.23, 12.82, 0.81, -5.04, 26.79,
        24.33, -7.69, -36.73, 26.79, -36.73, -0.66, 17.76,
      ],
    },
  ],
};

export const YearlyReturn = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      background: "transparent",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "8px",
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
      ],
      crosshair: {
        width: 10,
      },
    },
    colors: ["#4472C4", "#ED7D31", "gray", "#FFC000"],
    fontSize: "8px",
    tooltip: {
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
  },

  series: [
    {
      name: "AAPL",
      data: [2, 6, 7, 5, 4, 7, 3, 9, 10, 5, 12, 13],
    },
    {
      name: "SPY",
      data: [2, 3, 8, 5, 2, 7, 4, 9, 10, 5, 12, 2],
    },
    {
      name: "QQQ",
      data: [2, 8, 4, 10, 4, 15, 8, 12, 10, 5, 12, 2],
    },
  ],
};
