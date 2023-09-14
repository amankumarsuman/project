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
  const sentiment = parseFloat(props.item?.sentiment_today?.replace("%", "")) || 0;
  const percentChange = parseFloat(props.item?.price_change_percentage?.replace("%", "")) || 0;
  const status =
    sentiment > 0 ? "Bullish" : sentiment < 0 ? "Bearish" : "Neutral";

  const donutChart = {
    labels: ["1 star", "2 star"],
    datasets: [
      {
        data: [sentiment > 0 ? 100 - sentiment : 100 + sentiment, sentiment],
        // backgroundColor: ["#808080", "#808080", "#808080", "#808080"],
        backgroundColor: [
          "#808080",
          status === "Bullish"
            ? "#00DE4C"
            : status === "Bearish"
            ? "#DE0000"
            : "#FFE70F",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    padding: "0px",
    responsive: true,
    maintainAspectRatio: true,
    defaultFontSize: "14px",
    cutout: 39,

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
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>
            {props.item.Symbol}
          </Typography>
          <Typography sx={{ fontSize: "0.7rem" }}>
            ${props.item?.price}
            <span
              style={{ color: percentChange < 0 ? "#BD141D" : "#00D54A" }}
            >{`(${percentChange})`}</span>
          </Typography>
        </Box>
        <div
          className="doughnut-chart "
          style={{
            position: "relative",
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

              height: "99px",
              width: "99px",
              top: "0%",
              left: "0%",
              borderRadius: "50%",

              zIndex: -1,
              backgroundColor:
                status === "Bullish"
                  ? "#014A19"
                  : status === "Bearish"
                  ? "#4B0101"
                  : "#C2AF00",
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
                  backgroundColor:
                    status === "Bullish"
                      ? "#00DE4C"
                      : status === "Bearish"
                      ? "#DE0000"
                      : "#FFE70F",
                }}
              />

              <Typography sx={{ fontSize: "1.1rem" }}>{sentiment}</Typography>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
}
