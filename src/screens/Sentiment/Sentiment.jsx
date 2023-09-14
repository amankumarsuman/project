import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./Styles/index.css";
import "./Styles/homePage.css";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import DailySentiment from "./DailySentiment";
import SP500 from "./SP500";
import SearchIcon from "@mui/icons-material/Search";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Navbar from "../../Components/Navbar/Navbar";
import DrawerHeader from "../../Components/DrawerHeader/DrawerHeader";

export default function Sentiment() {
  const [value, setValue] = useState("0");

  const handleSearchClick = () => {
    setValue("0");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleSearchValue = (e) => {
  //   setSearchValue(e.target.value);
  // };

  return (
    <Provider store={store}>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box
          component="main"
          sx={{ flexGrow: 1, paddingBottom: "6px", paddingTop: "4px" }}
        >
          <DrawerHeader />
          <Box className="home-box">
            <TabContext value={value}>
              <Box className="header-tabs">
                <TabList
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    className="tab-pills"
                    label="Daily Sentiment"
                    value="0"
                  />

                  <Tab className="tab-pills" label="S&P500" value="1" />
                  <Tab className="tab-pills" label="DJIA" value="2" />
                  <Tab className="tab-pills" label="NASDAQ" value="3" />
                </TabList>
              </Box>
              <Box className="home-tabpanel">
                <TabPanel value="0" sx={{ height: "100%" }}>
                  <DailySentiment />
                </TabPanel>
                <TabPanel value="1"><SP500 /></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Box>
      </Box>
    </Provider>
  );
}
