import React, { useEffect, useState } from "react";
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
// ff170cfbc214454f0a10844eb6e9606e

import "./Styles/index.css";
import HeatMap from "./components/HeatMap";
import SearchCard from "./components/SearchCard";
import DailyComu from "./components/DailyComu";
import MiniCards from "./components/MiniCards";
import TableComp from "./components/TableComp";
import TopTable from "./components/TopTable";
import BuzzingChart from "./components/BuzzingChart";
import SentimentCard from "./components/SentimentCard";
import HorizontalChart from "./components/HorizontalChart";
import MiniCardsBearish from "./components/MiniCardsBearish";
import { useSelector, useDispatch } from "react-redux";
import { useCoinActions } from "./_actions/coin.actions";
import { getSentiment } from "./dailySentimentSlice";

const DailySentiment = () => {
  const sentimentSliceData = useSelector((state) => state.sentiment.value);
  const sentimentData = sentimentSliceData.topSentiment;
  const searchData = sentimentSliceData.searchStockData;
  const dailyComuData = sentimentSliceData.searchGraphData;
  const dailyHotListData = sentimentSliceData.hotListData;
  const fixedTableData = sentimentSliceData.fixedListData;
  const [fetchedSentimentData1, setFetchedSentimentData1] = useState([]);
  const [fetchedTopMentionStock, setFetchedTopMentionStock] = useState([]);

  const fetchSentimentData = async () => {
    try {
      console.log("Fetching daily heatmap data...");
      const DailyStockResponse = await fetch(
        "https://dev-sentiment.stockiworld.com/daily-stock-graph?symbol=JD" //http://localhost:5000
      );
      console.log(
        "Response status for daily heatmap data:",
        DailyStockResponse
      );
      const data = await DailyStockResponse.json();
      setFetchedSentimentData1(data.sentiment_graph);
    } catch (error) {
      console.error("Error fetching daily heatmap data:", error);
    }
  };

  const fetchTopMentionStock = async () => {
    try {
      console.log("Fetching topstock mention data...");
      const TopMentionStockResponse = await fetch(
        "https://dev-sentiment.stockiworld.com/daily-hot-list" //http://localhost:5000
      );
      console.log(
        "Response status for topstock mention data:",
        TopMentionStockResponse.status
      );
      const data = await TopMentionStockResponse.json();
      setFetchedTopMentionStock(data.data);
    } catch (error) {
      console.error("Error fetching topstock data:", error);
    }
  };

  useEffect(() => {
    fetchTopMentionStock();
    fetchSentimentData();
  }, []);
  // const [price, setPrice] = useState(0);

  // const login = {
  //   event: "login",
  //   data: {
  //     apiKey: "ff170cfbc214454f0a10844eb6e9606e",
  //   },
  // };

  // const subscribe = {
  //   event: "subscribe",
  //   data: {
  //     ticker: "msft",
  //   },
  // };

  // useEffect(() => {
  //   const ws = new WebSocket(
  //     "wss://websockets.financialmodelingprep.com",
  //     null,
  //     null,
  //     null,
  //     { rejectUnauthorized: false }
  //   );
  //   ws.onopen = () => {
  //     ws.send(JSON.stringify(login));
  //     ws.send(JSON.stringify(subscribe));
  //   };
  //   ws.onmessage = (event) => {
  //     const response = JSON.parse(event.data);
  //     console.log(response, 11111111);
  //     setPrice(response.ap);
  //   };
  // }, []);

  const coinActions = useCoinActions();
  const dispatch = useDispatch();
  const [intervalCount, setIntervalCount] = useState(0);

  useEffect(() => {
    coinActions.predictionListing();
    coinActions.searchSymbol();
    coinActions.sentimentGraph();
    coinActions.dailyHotList();
    coinActions.stockPrice();
    coinActions.sp500Sentiment();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalCount(intervalCount + 1);
      coinActions.predictionListing();
      coinActions.searchSymbol();
      coinActions.sentimentGraph();
      coinActions.dailyHotList();
      coinActions.stockPrice();
    }, 200000);
    return () => clearInterval(interval);
  }, [intervalCount]);

  return (
    <>
      {/* first row */}

      <Box sx={{ mb: 1 }}>
        <Grid container spacing={0.5}>
          <Grid item md={2.8} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: "28vh" }}>
              <Typography>Daily Sentiment Heat Map</Typography>
              <HeatMap sentimentData={fetchedSentimentData1} />
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper
              className="paper-back"
              sx={{
                px: 1,
                py: 1,
                height: "28vh",
              }}
            >
              <SearchCard searchData={fetchedTopMentionStock} />
            </Paper>
          </Grid>

          {/* daily commulative chart */}
          <Grid item md={3.1} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: "28vh" }}>
              <Grid
                item
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Daily Cumulative 5 Min</Typography>
                <Grid item>
                  <DailyComu sentimentData={fetchedTopMentionStock} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* daily heatmap */}
          <Grid item md={3.1} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: "28vh" }}>
              <Grid
                item
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Top Buzzing Stocks</Typography>
                <Grid item sx={{ height: "90%" }}>
                  <BuzzingChart sentimentData={fetchedTopMentionStock} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* second row */}
      <Box sx={{ flexGrow: 1, mb: 1 }}>
        <Grid container spacing={1}>
          {/* first item - column */}
          <Grid
            container
            item
            md={2.8}
            xs={12}
            spacing={1}
            sx={{ display: "flex", alignItems: "center", height: "26vh" }}
          >
            <Grid item md={12} xs={12} sx={{ height: "40%" }}>
              <MiniCards />
            </Grid>
            <Grid item md={12} xs={12} sx={{ height: "40%" }}>
              <MiniCardsBearish sentimentData={fetchedTopMentionStock} />
            </Grid>
          </Grid>

          {/* second item - column */}
          <Grid item md={3} xs={12}>
            <Paper className="paper-back" sx={{ p: 0, height: "25vh" }}>
              <HorizontalChart sentimentData={fetchedTopMentionStock} />
            </Paper>
          </Grid>
          {/* third item - column */}

          <Grid container item md={6.2} xs={12}>
            <Box
              className="sentiment-circle"
              sx={{
                height: "23.5vh",
                width: "100%",
                // border: "2px solid #101F2C",
                border:"1px solid red",
                display: "flex",
                p: 0.5,
                overflowX: "scroll",
                borderRadius: "0.6rem",
              }}
            >
              <Grid
                item
                md={4}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                 <SentimentCard sentimentData={fetchedSentimentData1} />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* third row */}
      <Box sx={{ flexGrow: 1, mb: 1 }}>
        <Grid container item spacing={0.5}>
          {/* first item */}
          <Grid item md={5.8} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: "28vh" }}>
              <Typography>Top Mentions Stock - Wallstreet Bet</Typography>

              <TopTable dailyHotListData={fetchedTopMentionStock} />
            </Paper>
          </Grid>
          {/* second item */}

          <Grid item md={6.2} xs={12}>
            <Paper className="paper-back" sx={{ p: 1, height: "28vh" }}>
              <TableComp />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DailySentiment;
