import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography, Paper } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { NoEncryption } from "@mui/icons-material";

export default function CircleChart(props) {
  const donutChart = {
    labels: ["1 star", "2 star"],
    datasets: [
      {
        data: [10, 50],
        // backgroundColor: ["#808080", "#808080", "#808080", "#808080"],
        backgroundColor: [props.item.circleColour, "#808080"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    padding: "0px",
    responsive: true,
    maintainAspectRatio: true,
    defaultFontSize: "14px",
    cutout: 42,

    plugins: {
      legend: false,
      datalabels: false,
      tooltip: {
        enabled: false,
      },
    },
  };

  const newText = () => {
    return (
      <>
        <p>newText</p>
      </>
    );
  };

  const drawInnerText = (chart) => {
    let ctx = chart.ctx;
    ctx.restore();
    const fontSize = (chart.height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.color = "white";

    ctx.textBaseline = "middle";
    const dataArrValues = chart.config._config.data.datasets[0].data;
    let text = "";
    let textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
    let textY = chart.height / 2;
    ctx.fillText(text, textX, textY);
    ctx.fillStyle = "#fff";
    ctx.save();
  };

  return (
    <div
      className="doughnut-chart-top "
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <Doughnut
        data={donutChart}
        options={options}
        plugins={[
          {
            beforeDraw: function (chart) {
              drawInnerText(chart);
            },
          },
        ]}
      />

      <Box
        sx={{
          position: "absolute",

          height: "110px",
          width: "110px",
          top: "0%",
          left: "0%",
          borderRadius: "50%",

          zIndex: -1,
          backgroundColor: props.item.bgColor,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            pt: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>SENTIMENT</Typography>
          <hr
            style={{
              width: "60%",
              margin: 0,
              height: "0.1rem",
              border: 0,
              backgroundColor: props.item.circleColour,
            }}
          />
          <Typography>26</Typography>
        </Box>
      </Box>
    </div>
  );
}
