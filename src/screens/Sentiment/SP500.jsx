import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import "./Styles/index.css";
import SPSearchCard from "./components/SPSearchCard";
import SPTable from "./components/SPTable";
import LineChart from "./components/LineChart";

const SP500 = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box sx={{ mt: 2 }}>
      {/* heading */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 1,
          px: window.innerWidth < 480 ? 1 : 0,
        }}
      >
        <Typography variant="h4">SP500</Typography>
        <Grid item md={2.7} sm={10}>
          <hr
            style={{
              width: "100%",
              backgroundColor: "#7E007B",
              border: "none",
              height: "0.2rem",
            }}
          />
        </Grid>
      </Grid>

      {/* first row */}
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Grid container spacing={2}>
          {/* item1 */}
          <Grid item md={2} xs={12}>
            <Paper
              className="paper-back"
              sx={{
                px: 1,
                py: 2,
                height: window.innerWidth < 480 ? 520 : 300,
              }}
            >
              <SPSearchCard />
            </Paper>
            <LineChart />
          </Grid>

          {/* item 2 */}
          <Grid item md={10} xs={12}>
            <Paper className="paper-back" sx={{ p: 2, height: 450 }}>
              <Grid
                item
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>CURRENT STOCK PRICE AND HISTORY</Typography>

                <SPTable />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SP500;
