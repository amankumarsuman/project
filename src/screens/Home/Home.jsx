import React, { useEffect, useRef, useState } from "react";
import "./home.scss";
import ReactSpeedometer from "react-d3-speedometer";
import LinearProgress from "@mui/material/LinearProgress";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import TradingViewWidget from "./TradingViewChart";
import teslaIcon from "../../assets/icons/tesla--big.svg";
import bentleyIcon from "../../assets/icons/bentley_logo_icon.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "./sidebar/sidebar";
export default function Home() {
  const dropdownRef = useRef();
  const route = useNavigate();
  const [variant, setVariant] = useState("spy");

  // useOnClickOutside(dropdownRef, () => setDropdwon(false));

  return (
    <>
      <div className="main_wrapper">
        <div>
          <Navbar />
        </div>
		<div><Sidebar/></div>
        <div className="home-page-all-contnet-alignment">
          <div className="home-header-content-alignment">
            <div className="left-alignment">
              <div className="grid-items">
                <div className="speedometer-container">
                  <ReactSpeedometer
                    fluidWidth={true}
                    minValue={0}
                    maxValue={500}
                    // value={473}
                    needleColor="steelblue"
                  />
                </div>
                <p>Signal</p>
              </div>
              <div className="grid-items">
                <div className="speedometer-container">
                  <ReactSpeedometer
                    fluidWidth={true}
                    minValue={0}
                    maxValue={500}
                    // value={473}
                    needleColor="steelblue"
                  />
                </div>
                <p>Power</p>
              </div>
            </div>
            <div className="right-alignment">
              <div className="grid-items">
                <div className="speedometer-container">
                  <ReactSpeedometer
                    fluidWidth={true}
                    minValue={0}
                    maxValue={500}
                    // value={473}
                    needleColor="steelblue"
                  />
                </div>
                <p>Nasdaq</p>
              </div>
              <div className="grid-items">
                <div className="speedometer-container">
                  <ReactSpeedometer
                    fluidWidth={true}
                    minValue={0}
                    maxValue={500}
                    // value={473}
                    needleColor="steelblue"
                  />
                </div>
                <p>Sp500</p>
              </div>
              <div className="grid-items">
                <div className="speedometer-container">
                  <ReactSpeedometer
                    fluidWidth={true}
                    minValue={0}
                    maxValue={500}
                    // value={473}
                    needleColor="steelblue"
                  />
                </div>
                <p>Djia</p>
              </div>
            </div>
          </div>
          <div className="home_content_alignment">
            <div className="main-left-contain">
              <TradingViewWidget />
              <FormControl>
                <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                  <Button
                    size="sm"
                    variant="soft"
                    color="neutral"
                    onClick={() => setVariant("spy")}
                    sx={{
                      border: "2px solid #ffff",
                      "&:hover": { borderColor: "#1976D2" },
                      "&.active": { borderColor: "#1976D2", color: "#1976D2" },
                    }}
                    className={variant === "spy" ? "active" : ""}
                  >
                    spy
                  </Button>
                  <Button
                    size="sm"
                    variant="soft"
                    color="neutral"
                    onClick={() => setVariant("stock")}
                    sx={{
                      border: "2px solid #ffff",
                      "&.active": { borderColor: "#1976D2", color: "#1976D2" },
                      "&:hover": { borderColor: "#1976D2" },
                    }}
                    className={variant === "stock" ? "active" : ""}
                  >
                    stock
                  </Button>
                  <Button
                    size="sm"
                    variant="soft"
                    color="neutral"
                    onClick={() => setVariant("scanner")}
                    sx={{
                      border: "2px solid #ffff",
                      "&.active": { borderColor: "#1976D2", color: "#1976D2" },
                      "&:hover": { borderColor: "#1976D2" },
                    }}
                    className={variant === "scanner" ? "active" : ""}
                  >
                    scanner
                  </Button>
                  <Button
                    size="sm"
                    variant="soft"
                    color="neutral"
                    onClick={() => setVariant("tsla")}
                    sx={{
                      border: "2px solid #ffff",
                      "&.active": { borderColor: "#1976D2", color: "#1976D2" },
                      "&:hover": { borderColor: "#1976D2" },
                    }}
                    className={variant === "tsla" ? "active" : ""}
                  >
                    tsla
                  </Button>
                  <Button
                    size="sm"
                    variant="soft"
                    color="neutral"
                    onClick={() => setVariant("nvda")}
                    sx={{
                      border: "2px solid #ffff",
                      "&.active": { borderColor: "#1976D2", color: "#1976D2" },
                      "&:hover": { borderColor: "#1976D2" },
                    }}
                    className={variant === "nvda" ? "active" : ""}
                  >
                    nvda
                  </Button>
                  <Button
                    size="sm"
                    variant="soft"
                    color="neutral"
                    onClick={() => setVariant("msft")}
                    sx={{
                      border: "2px solid #ffff",
                      "&.active": { borderColor: "#1976D2", color: "#1976D2" },
                      "&:hover": { borderColor: "#1976D2" },
                    }}
                    className={variant === "msft" ? "active" : ""}
                  >
                    msft
                  </Button>
                  <Button
                    size="sm"
                    variant="soft"
                    color="neutral"
                    onClick={() => setVariant("msft")}
                    sx={{
                      border: "2px solid #ffff",
                      "&.active": { borderColor: "#1976D2", color: "#1976D2" },
                      "&:hover": { borderColor: "#1976D2" },
                    }}
                    className={variant === "msft" ? "active" : ""}
                  >
                    msft
                  </Button>
                </Box>
              </FormControl>
            </div>
            <div className="main_right_contain">
              <div className="trade_items" onClick={() => route("/detail")}>
                <div className="trade_item_upper_content">
                  {/* <div className="img-item"> */}
                  <img src={teslaIcon} alt="teslaIcon" />
                  {/* </div> */}
                  <div className="text-item">
                    <p>Tsla</p>
                    <p>
                      123
                      <span>2.5 </span>
                      <span>( 60% )</span>
                    </p>
                  </div>
                </div>
                <div className="progressbar">
                  <LinearProgress
                    sx={{
                      height: 8, // Adjust the height to change the size
                      backgroundColor: "lightgray", // Change the background color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "success", // Change the color of the progress bar
                      },
                    }}
                    color="success"
                    variant="determinate"
                    value={50}
                  />
                </div>
              </div>
              <div className="trade_items">
                <div className="trade_item_upper_content">
                  {/* <img src={bentleyIcon} alt="bentleyIcon" /> */}
                  <img src={teslaIcon} alt="teslaIcon" />
                  <div className="text-item">
                    <p>Bently</p>
                    <p>
                      123
                      <span>12.5 </span>
                      <span>( 60% )</span>
                    </p>
                  </div>
                </div>
                <div className="progressbar">
                  <LinearProgress
                    sx={{
                      height: 8, // Adjust the height to change the size
                      backgroundColor: "lightgray", // Change the background color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "success", // Change the color of the progress bar
                      },
                    }}
                    color="success"
                    variant="determinate"
                    value={50}
                  />
                </div>
              </div>
              <div className="trade_items">
                <div className="trade_item_upper_content">
                  <img src={teslaIcon} alt="teslaIcon" />
                  <div className="text-item">
                    <p>Mg</p>
                    <p>
                      <span>123</span>
                      <span>5.5</span>
                      <span>(60% )</span>
                    </p>
                  </div>
                </div>
                <div className="progressbar">
                  <LinearProgress
                    sx={{
                      height: 8, // Adjust the height to change the size
                      backgroundColor: "lightgray", // Change the background color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "success", // Change the color of the progress bar
                      },
                    }}
                    color="success"
                    variant="determinate"
                    value={50}
                  />
                </div>
              </div>
              <div className="trade_items">
                <div className="trade_item_upper_content">
                  <img src={teslaIcon} alt="teslaIcon" />
                  <div className="text-item">
                    <p>Landover</p>
                    <p>
                      123
                      <span>7.5 </span>
                      <span>( 60% )</span>
                    </p>
                  </div>
                </div>
                <div className="progressbar">
                  <LinearProgress
                    sx={{
                      height: 8, // Adjust the height to change the size
                      backgroundColor: "lightgray", // Change the background color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "success", // Change the color of the progress bar
                      },
                    }}
                    color="success"
                    variant="determinate"
                    value={50}
                  />
                </div>
              </div>
              <div className="trade_items red">
                <div className="trade_item_upper_content">
                  <img src={teslaIcon} alt="teslaIcon" />
                  <div className="text-item">
                    <p>Honda</p>
                    <p>
                      120
                      {/* <span>7.5 </span> */}
                      <span>( 60% )</span>
                    </p>
                  </div>
                </div>
                <div className="progressbar">
                  <LinearProgress
                    sx={{
                      height: 8, // Adjust the height to change the size
                      backgroundColor: "lightgray", // Change the background color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "red", // Change the color of the progress bar
                      },
                    }}
                    variant="determinate"
                    value={50}
                  />
                </div>
              </div>
              <div className="trade_items red">
                <div className="trade_item_upper_content">
                  <img src={teslaIcon} alt="teslaIcon" />
                  <div className="text-item">
                    <p>Farari</p>
                    <p>
                      120
                      {/* <span>7.5 </span> */}
                      <span>( 60% )</span>
                    </p>
                  </div>
                </div>
                <div className="progressbar">
                  <LinearProgress
                    sx={{
                      height: 8, // Adjust the height to change the size
                      backgroundColor: "lightgray", // Change the background color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "red", // Change the color of the progress bar
                      },
                    }}
                    variant="determinate"
                    value={50}
                  />
                </div>
              </div>
              <div className="trade_items red">
                <div className="trade_item_upper_content">
                  <img src={teslaIcon} alt="teslaIcon" />
                  <div className="text-item">
                    <p>Skoda</p>
                    <p>
                      120
                      {/* <span>7.5 </span> */}
                      <span>( 60% )</span>
                    </p>
                  </div>
                </div>
                <div className="progressbar">
                  <LinearProgress
                    sx={{
                      height: 8, // Adjust the height to change the size
                      backgroundColor: "lightgray", // Change the background color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "red", // Change the color of the progress bar
                      },
                    }}
                    variant="determinate"
                    value={50}
                  />
                </div>
              </div>
              <div className="trade_items red">
                <div className="trade_item_upper_content">
                  <img src={teslaIcon} alt="teslaIcon" />
                  <div className="text-item">
                    <p>Kia</p>
                    <p>
                      120
                      {/* <span>7.5 </span> */}
                      <span>( 60% )</span>
                    </p>
                  </div>
                </div>
                <div className="progressbar">
                  <LinearProgress
                    sx={{
                      height: 8, // Adjust the height to change the size
                      backgroundColor: "lightgray", // Change the background color
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "red", // Change the color of the progress bar
                      },
                    }}
                    variant="determinate"
                    value={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
