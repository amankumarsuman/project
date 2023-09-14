import React, { useEffect, useState } from "react";
import "./TopTen.scss";
// import teslaLogo from "../../assets/teslaLogo.png";
import ReactDatatableComponent from "../ReactDatatableComponent/ReactDatatableComponent";
import LineCharts from "../BarCharts/LineCharts";
import { Grid } from "@mui/material";
import axios from "axios";
import TableGrid from "../TableGrid/TableGrid";
import TableGridOne from "../TableGridOne/TableGridOne";
import TableGridHeader from "../TableGridHeader/TableGridHeader";

function TopTen(props) {
  const { tabDataName } = props;
  const stockList = [
    "AAPL",
    "AMZN",
    "MSFT",
    "TSLA",
    "GOOGL",
    "META",
    "NFLX",
    "NVDA",
    "ORCL"
  ];

  // "JPM",
  //   "XOM",
  //   "BA",
  //   "UNH",
  //   "CVX",
  //   "AMD",
  //   "COIN",
  //   "ORCL",

  const [dataList, setDataList] = useState({});
  const [dataListtwo, setDataListtwo] = useState({});
  const [dataListthree, setDataListthree] = useState({});

  const lineFunctionData = (stockname, modelnumber) => {
    axios
      .get(
        `https://dev-ai-prediction-backend.stockiworld.com/${modelnumber}/forecast/${stockname}/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        setDataList(res?.data);
        if (res.status === 200) {
          axios
            .get(
              `https://dev-ai-prediction-backend.stockiworld.com/model2/forecast/${stockname}/`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              setDataListtwo(res?.data);
            })
            .catch((err) => {
              console.log(err);
            });
          axios
            .get(
              `https://dev-ai-prediction-backend.stockiworld.com/model3/forecast/${stockname}/`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              setDataListthree(res?.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((error) => {
        console.log("error_", error);
      });
  };
  useEffect(() => {
    lineFunctionData("tsla", "model1");
  }, []);
  const [topTabName, setTopTabName] = useState("TSLA");
  return (
    <div className="topTen_wrapper">
      <Grid container className="wrapper_component">
        <Grid item md={7}>
          <div className="tabs_wrapper">
            {stockList?.map((list, index) => {
              return (
                <div
                  key={index}
                  className={
                    topTabName === "TSLA"
                      ? "active_tabsmine tabsmine"
                      : "tabsmine"
                  }
                  onClick={() => {
                    setTopTabName(list);
                    lineFunctionData(list, "model1");
                  }}
                >
                  <div className="image_wrap">
                    {/* <img src={teslaLogo} alt="Brand" /> */}
                  </div>
                  <div className="left_wrap">
                    <p>{list}</p>
                    {/* <small>Tesla Inc</small> */}
                  </div>
                  <div className="right_wrap">
                    <h6>$ 312.11</h6>
                    <small>2.8%</small>
                  </div>
                </div>
              );
            })}
          </div>
        </Grid>
        <Grid
          item
          md={5}
          style={{
            width: "100%",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          >
            <LineCharts dataList={dataList} />
          </div>
        </Grid>
      </Grid>
      {stockList?.map((list) => {
        return (
          <>
            {list === topTabName && (
              <>
                <TableGridHeader />
                <TableGridOne
                  dataList={dataList}
                  list={list}
                  modelname={"Model 1"}
                  tabDataName={tabDataName}
                  currentPrice={"290.00"}
                />
                <TableGridOne
                  dataList={dataListtwo}
                  list={list}
                  modelname={"Model 2"}
                  tabDataName={tabDataName}
                  currentPrice={"270.00"}
                />
                <TableGridOne
                  dataList={dataListthree}
                  list={list}
                  modelname={"Model 3"}
                  tabDataName={tabDataName}
                  currentPrice={"250.00"}
                />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}

export default TopTen;
