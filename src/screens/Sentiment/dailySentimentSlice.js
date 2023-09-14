import { createSlice } from "@reduxjs/toolkit";

export const sentimentSlice = createSlice({
  name: "sentiment",
  initialState: {
    value: {
      topSentiment: [],
      searchStockData: [],
      searchGraphData: [],
      hotListData: [],
      fixedListData: [],
    },
  },
  reducers: {
    getSentiment: (state, action) => {
      state.value.topSentiment = action.payload;
    },
    searchStock: (state, action) => {
      state.value.searchStockData = action.payload;
    },
    searchGraph: (state, action) => {
      state.value.searchGraphData = action.payload;
    },
    hotList: (state, action) => {
      state.value.hotListData = action.payload;
    },
    fixedList: (state, action) => {
      state.value.fixedListData = action.payload;
    },
  },
});

export const { getSentiment, searchStock, searchGraph, hotList, fixedList } =
  sentimentSlice.actions;

export default sentimentSlice.reducer;
