import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography, Paper } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { NoEncryption } from "@mui/icons-material";

export default function TopCircleChart(props) {
  const sentiment =
    props.topSearchData?.sentiment_history?.sentiment_today?.replace("%", "");
  const status =
    parseFloat(sentiment) > 0
      ? "Bullish"
      : parseFloat(sentiment) < 0
      ? "Bearish"
      : "Neutral";
  const donutChart = {
    labels: ["grey", "sentiment"],
    datasets: [
      {
        data: [
          sentiment > 0 ? 100 - sentiment : 100 + sentiment - sentiment,
          sentiment,
        ],
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
    cutout: 42,
    title: {
      display: true,
      // text: "Total Feedback",
      fontSize: 30,
    },

    plugins: {
      legend: false,
      datalabels: false,
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div
      className="doughnut-chart-top"
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      <Doughnut data={donutChart} options={options} />

      <Box
        sx={{
          position: "absolute",
          height: "115px",
          width: "115px",
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

          <Typography variant="h6">{sentiment}</Typography>
          <Typography sx={{ fontSize: "0.7rem" }}>{status}</Typography>
        </Box>
      </Box>
    </div>
  );
}
