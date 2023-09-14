import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Paper, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CircleChartComponent() {
  // useEffect(() => {
  //   var chart = new Highcharts.Chart({
  //     chart: {
  //       renderTo: "container1",
  //       type: "pie",
  //     },
  //     title: {
  //       verticalAlign: "middle",
  //       floating: true,
  //       text: "TSLA<br>",
  //     },

  //     plotOptions: {
  //       pie: {
  //         innerSize: "100%",
  //       },
  //       series: {
  //         states: {
  //           hover: {
  //             enabled: false,
  //           },
  //           inactive: {
  //             opacity: 1,
  //           },
  //         },
  //       },
  //     },
  //     series: [
  //       {
  //         borderWidth: 0,
  //         name: "Subscribers",
  //         data: [
  //           {
  //             y: 80,
  //             name: false,
  //             color: "#00DE4C",
  //           },
  //           {
  //             y: 20,
  //             name: false,
  //             color: "#DDF4E4",
  //           },
  //         ],
  //         size: "100%",
  //         innerSize: "75%",
  //         showInLegend: false,
  //         dataLabels: {
  //           enabled: false,
  //         },
  //       },
  //     ],
  //     //   credits: {
  //     //     enabled: false,
  //     //   },
  //   });
  // }, []);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div id="container1"></div>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "150px",
            padding: "0.5rem 0.5rem",
            backgroundColor: "#004B19",
            color: "white",
            borderRadius: "1rem",
          }}
        >
          <Typography sx={{ fontWeight: 300 }}>Sentiment</Typography>
          <Typography sx={{ fontWeight: 400 }}>452.68(0.55%)</Typography>
          <Typography variant="h6">16</Typography>
        </Paper>
      </Box>
    </>
  );
}
