import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Paper, Grid } from "@mui/material";
import { NoEncryption } from "@mui/icons-material";
import ReactApexChart from "react-apexcharts";

export default function CircleChart(props) {
  const series = [44, 55];
  const options = {
    chart: {
      type: "donut",
    },
    fill: {
      colors: ["#DE0000", "#BFBFBF"],
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          // labels: {
          //   show: true,
          //   total: {
          //     show: true,
          //     showAlways: true,
          //     label: "Sentiment",
          //     color: "white",
          //     fontSize: "1rem",
          //     formatter: () => "16",
          //   },
          //   name: {
          //     show: true,
          //     offsetY: -2,
          //     fontSize: "3px",
          //     color: "white",
          //     formatter: () => "Sentiment",
          //   },
          //   value: {
          //     true: true,
          //     color: "white",
          //     offsetY: 6,
          //     formatter: () => "555",
          //   },
          // },
        },
      },
    },
  };

  return (
    <Grid
      item
      className="doughnut-chart"
      style={{
        marginBottom: "0.2rem",
        height: "100%",
        zIndex: -1,
        alignItems: "center",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={200}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70%",
          width: "160%",
          left: "65%",
          top: "-83%",
          borderRadius: "50%",
          zIndex: -1,
          backgroundColor: "#4B0000",
        }}
      >
        <Typography sx={{ fontSize: "0.7rem" }}>SENTIMENT</Typography>
        <hr
          style={{
            width: "60%",
            margin: 0,
            height: "0.1rem",
            border: 0,
            backgroundColor: "#E21111",
          }}
        />
        <Typography>TSLA</Typography>
        <Typography sx={{ fontSize: "0.7rem" }}>452.68</Typography>
        <Typography>26</Typography>
      </Box>
    </Grid>
  );
}
