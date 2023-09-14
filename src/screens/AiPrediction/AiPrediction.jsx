import React, { useEffect, useState } from "react";
import "../AiPrediction/AiPrediction.scss";
import { Grid } from "@mui/material";
import BarCharts from "./Components/BarCharts/BarCharts";
import MultiArea from "./Components/BarCharts/MultiArea";
import MultibarCharts from "./Components/MultibarCharts";
import TopHeader from "./Components/TopHeader/TopHeader";
import TopTen from "./Components/TopTen/TopTen";
import TableGrid from "./Components/TableGrid/TableGrid";
import axios from "axios";
import ETF from "./Components/ETF/ETF";
import TableGridOne from "./Components/TableGridOne/TableGridOne";
import TableGridHeader from "./Components/TableGridHeader/TableGridHeader";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "../../Components/Navbar/Navbar";
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
// import RadialSeparators from "./RadialSeparators";

const percentage = 75;

function AiPrediction(props) {
  const [tabDataName, setTabDataName] = useState("");
  const [dataList, setDataList] = useState({});
  const [dataListtwo, setDataListtwo] = useState({});
  const [dataListthree, setDataListthree] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://dev-ai-prediction-backend.stockiworld.com/model1/forecast/tsla/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("res", res?.data);
        setDataList(res?.data);
      })
      .catch((error) => {
        console.log("error_", error);
      });
    axios
      .get(
        "https://dev-ai-prediction-backend.stockiworld.com/model2/forecast/tsla/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("res", res?.data);
        setDataListtwo(res?.data);
      })
      .catch((error) => {
        console.log("error_", error);
      });
    axios
      .get(
        "https://dev-ai-prediction-backend.stockiworld.com/model3/forecast/tsla/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("res", res?.data);
        setDataListthree(res?.data);
      })
      .catch((error) => {
        console.log("error_", error);
      });
  }, []);

  // setInterval(()=>{
  //   axios
  //     .get(
  //       "https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=ff170cfbc214454f0a10844eb6e9606e",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("res", res?.data);
  //       setDataList(res?.data);
  //     })
  //     .catch((error) => {
  //       console.log("error_", error);
  //     });
  // }, 100000000)

  return (
    <div className="dashboard_wrapper">
      <div>
        <Navbar />
      </div>
      <div>
        <TopHeader tabDataName={tabDataName} setTabDataName={setTabDataName} />
        {tabDataName === "" && (
          <>
            <div className="top_rated_wrapper">
              <TableGrid />
            </div>
            <div className="main_content_wrapper">
              <Grid container spacing={4}>
                <Grid item sm={12} md={2}>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      border: "2px solid blue",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      background
                      backgroundPadding={4}
                      styles={buildStyles({
                        backgroundColor: "#081b00",
                        textColor: "#fff",
                        pathColor: "#27ae60",
                        trailColor: "transparent",
                      })}
                    />
                  </div>
                  {/* <div className="company_logo">
                    <img src={teslaLogo} alt="logo" />
                  </div> */}
                </Grid>
                <Grid item sm={12} md={5}>
                  <div className="company_prediction">
                    <MultiArea
                      dataList={dataList}
                      dataListtwo={dataListtwo}
                      dataListthree={dataListthree}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} md={5}>
                  <div className="company_month">
                    <BarCharts dataList={dataList} />
                  </div>
                </Grid>
                <Grid item sm={12} md={7}>
                  <div className="company_price">
                    {/* <ReactDatatableComponent noheader={false} />
                  <br />
                  <ReactDatatableComponent noheader={true} />

                  <br />
                  <ReactDatatableComponent noheader={true} /> */}
                    <TableGridHeader />
                    <TableGridOne
                      dataList={dataList}
                      list={"TSLA"}
                      modelname={"Model 1"}
                      currentPrice={"220.00"}
                    />
                    <TableGridOne
                      dataList={dataListtwo}
                      list={"TSLA"}
                      modelname={"Model 2"}
                      currentPrice={"410.00"}
                    />
                    <TableGridOne
                      dataList={dataListthree}
                      list={"TSLA"}
                      modelname={"Model 3"}
                      currentPrice={"300.00"}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} md={5}>
                  <div className="company_actual">
                    <MultibarCharts
                      dataList={dataList}
                      dataListtwo={dataListtwo}
                      dataListthree={dataListthree}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </>
        )}
        {tabDataName === "TopStocks" && (
          <>
            <TopTen tabDataName={tabDataName} />
          </>
        )}
        {tabDataName === "ETF" && (
          <>
            <ETF tabDataName={tabDataName} />
          </>
        )}
      </div>
    </div>
  );
}

export default AiPrediction;
