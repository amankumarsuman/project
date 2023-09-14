import apiUrls from "../constants/apiUrls";
import { useDispatch } from "react-redux";
import {
  getSentiment,
  searchStock,
  searchGraph,
  hotList,
  fixedList,
} from "../dailySentimentSlice";
import axios from "axios";

const baseUrl = "http://ec2-13-58-190-71.us-east-2.compute.amazonaws.com/";

const useCoinActions = () => {
  const dispatch = useDispatch();

  const predictionListing = () => {
    axios
      .get(baseUrl + apiUrls.Top_Stock_Sentiment)
      .then((response) => {
        // Handle response
        const data = response.data.data;
        if (data) dispatch(getSentiment(data));
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  };

  // search stock
  const searchSymbol = () => {
    axios
      .get(`${baseUrl + apiUrls.Search_Stock}TSLA`)
      .then((response) => {
        // Handle response
        const data = response.data.data;
        if (data) dispatch(searchStock(data));
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  };

  // daily sentiment graph
  const sentimentGraph = () => {
    axios
      .get(`${baseUrl + apiUrls.Daily_Sentiment_Graph}TSLA`)
      .then((response) => {
        // Handle response
        const data = response.data.data;
        if (data) dispatch(searchGraph(data));
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  };

  // daily hot list
  const dailyHotList = () => {
    axios
      .get(baseUrl + apiUrls.Daily_Hot_List)
      .then((response) => {
        // Handle response
        const data = response.data.data;
        if (data) dispatch(hotList(data));
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  };

  // stock price for right table
  const stockPrice = () => {
    axios
      .get(`${baseUrl + apiUrls.Stock_Price}TSLA`)
      .then((response) => {
        // Handle response
        const data = response.data.data;
        if (data) dispatch(fixedList(data));
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  };

  // stock price for right table
  const sp500Sentiment = () => {
    axios
      .get(`${baseUrl}/sp500/sentiment-and-price`)
      .then((response) => {
        // Handle response
        const data = response.data.data;
        console.log(data, "my data");
        // if (data) dispatch(fixedList(data));
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  };
  return {
    predictionListing,
    searchSymbol,
    sentimentGraph,
    dailyHotList,
    stockPrice,
    sp500Sentiment,
  };
};
export { useCoinActions };
