import React, { useEffect, useState } from "react";
import "./TopTen.scss";
// import teslaLogo from "../../assets/teslaLogo.png";
import LineCharts from "../BarCharts/LineCharts";
import { Grid } from "@mui/material";
import axios from "axios";
import TableGridHeader from "../TableGridHeader/TableGridHeader";
import TableGridOne from "../TableGridOne/TableGridOne";

function ETF(props) {
  const { tabDataName } = props;
  const stockList = [
    "SPY",
    "QQQ",
    "XLK",
    "XLV",
    "XLY",
    "XLF",
    "XLC",
    "XLI",
    "XLP",
    "XLE",
    "XLU",
    "XLRE",
    "XLB",
  ];

  const [dataList, setDataList] = useState({});
  const [dataListtwo, setDataListtwo] = useState({});
  const [dataListthree, setDataListthree] = useState({});

  const lineETFFunctionData = (stockname, modelnumber) => {
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
        console.log("res", res?.data);
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
    lineETFFunctionData("spy", "model1");
  }, []);

  const [topTabName, setTopTabName] = useState("SPY");
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
                    lineETFFunctionData(list, "model1");
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
                  currentPrice={"320.00"}
                />
                <TableGridOne
                  dataList={dataListtwo}
                  list={list}
                  modelname={"Model 2"}
                  tabDataName={tabDataName}
                  currentPrice={"440.00"}
                />
                <TableGridOne
                  dataList={dataListthree}
                  list={list}
                  modelname={"Model 3"}
                  tabDataName={tabDataName}
                  currentPrice={"370.00"}
                />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}

export default ETF;
