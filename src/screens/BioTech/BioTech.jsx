import React, {useEffect, useLayoutEffect, useState} from "react";
import { Button, Grid, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./BioTech.scss";
import Navbar from "../../Components/Navbar/Navbar";
import DrawerHeader from "../../Components/DrawerHeader/DrawerHeader";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BarGraph from "../../Components/BioTechComponents/BarGraph/Bargraph";
import BigBarGraph from "../../Components/BioTechComponents/BigBarGraph/BigBarGraph";
import TreeMap from "../../Components/BioTechComponents/TreeMap/TreeMap";
import SearchInputField from "../../Components/BioTechComponents/SearchInputField/SearchInputField";
import GainerLoserTable from "../../Components/BioTechComponents/GainerLoserTable/GainerLoserTable";
import BioTechSearchTable from "../../Components/BioTechComponents/BioTechSearchTable/BioTechSearchTable";
import NewsFeed from "../../Components/BioTechComponents/NewsFeed/NewsFeed";
import Calender from "../../Components/BioTechComponents/Calender/Calender";
import TableStage from "../../Components/BioTechComponents/TableStage/TableStage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import teslaLogo from "../../assets/images/teslaLogo.png";
import appleLogo from "../../assets/images/appleLogo.png";
import googleLogo from "../../assets/images/googleLogo.png";
import amazonLogo from "../../assets/images/amazonLogo.png";
import axios from "axios";
function createData(name, daily, monthly, year, yearly) {
  return { name, daily, monthly, year, yearly };
}

const rows = [
  createData("SPY", "2%", "-9%", "4%", "10%"),
  createData("QQQ", "7%", "-5%", "2%", "5%"),
  createData("XLV", "3%", "-5%", "-3%", "-2%"),
  createData("IBB", "5%", "8%", "9%", "-5%"),
];

function createDataCompany(
  logo,
  company,
  price,
  marketCap,
  stage,
  stageValue,
  majorCatalyst,
  catalystDate
) {
  return {
    logo,
    company,
    price,
    marketCap,
    stage,
    stageValue,
    majorCatalyst,
    catalystDate,
  };
}

const BioTech = () => {

    const [ticker, setTicker] = useState({s: 'aapl', symbol: 'AAPL'});
    const [tickerPrice, setTickerPrice] = useState({lp: 'no val', bp: 'no val', ap: 'no val'});
    const [companyRows, setCompanyRows] = useState( [
  {logo: amazonLogo, s: "btcusd",symbol: "BTCUSD", price: null, ap: null, lp: null ,  bp: null,percentage:0,secondValue: "+7.45%"},//20000, 1, "1", "4", "10"
  {logo: amazonLogo, s: "eurusd",symbol: "EURUSD", price: null, ap: null, lp: null ,  bp: null,percentage:0,secondValue: "+7.45%"},//20000, 1, "1", "4", "10"
  {logo: amazonLogo, s: "amzn",symbol: "AMZN", price: null, ap: null, lp: null ,  bp: null,percentage:0,secondValue: "+7.45%"},//20000, 1, "1", "4", "10"
  {logo: appleLogo, s: "aapl",symbol: "AAPL", price: null,  ap: null, lp: null, bp: null,percentage:0, secondValue: "+7.45%"},//20000, 5, "4", "2", "5"
  {logo: amazonLogo, s: "meta" ,symbol: "META", price: null,  ap: null, lp: null, bp: null, percentage:0,secondValue: "+7.45%"},//20000, 4, "3", "-3", "-2"
  {logo: googleLogo, s: "nvda",symbol: "NVDA", price: null, ap: null, lp: null, bp: null,percentage:0, secondValue: "+7.45%"}, // 20000, 3, "2B", "9", "-5"
  {logo: googleLogo, s: "googl",symbol: "GOOGL", price: null, ap: null, lp: null, bp: null,percentage:0, secondValue: "+7.45%"}, // 20000, 3, "2B", "9", "-5"
    {logo: teslaLogo, s: "tsla",symbol: "TSLA", price: null, ap: null, lp: null, bp: null, percentage:0,secondValue: "+7.45%"}, //, 20000, 2, "2A", "-3", "-2"
    {logo: teslaLogo, s: "twtr",symbol: "TWTR", price: null, ap: null, lp: null, bp: null, percentage:0,secondValue: "+7.45%"}, //, 20000, 2, "2A", "-3", "-2"
]);
    const [percentages, setPercentages] = useState( [
  {symbol: "BTCUSD",changePercentage:0, change: 0},//20000, 1, "1", "4", "10"
  {symbol: "AMZN", changePercentage:0, change: 0},//20000, 1, "1", "4", "10"
  {symbol: "AAPL", changePercentage:0, change: 0},//20000, 5, "4", "2", "5"
  {symbol: "META",  changePercentage:0, change: 0},//20000, 4, "3", "-3", "-2"
  {symbol: "NVDA", changePercentage:0, change: 0}, // 20000, 3, "2B", "9", "-5"
  {symbol: "GOOGL", changePercentage:0,  change: 0}, // 20000, 3, "2B", "9", "-5"
    {symbol: "TSLA",  changePercentage:0, change: 0}, //, 20000, 2, "2A", "-3", "-2"
    {symbol: "TWTR",  changePercentage:0, change: 0}, //, 20000, 2, "2A", "-3", "-2"
]);
  let socket = null;

  const startWebSocket = () => {
    try {
      socket.send(
        JSON.stringify({
          type: "real-time-price",
            msg: 'hello',
          // tickers: ["btcusd", 'eurusd'],
          tickers: ['amzn', 'aapl', 'meta', 'nvda', 'googl', 'tsla', 'twtr']
        })
      );
    } catch (e) {
      console.log('error', e);
    }
  };

  const createConnection = () => {
    socket = new WebSocket(`wss://127.0.0.1:8000/ws/`); //dev-websocket.stockiworld.com
    socket.onopen = function (e) {
      startWebSocket();
    };

    socket.onclose = function (event) {
      console.log('event', event)
      if (event.wasClean) {
        console.log(`Closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error('Connection problem');
      }
      if (window.location.pathname === '/bioTech'){
      console.log('WebSocket closed. Reconnecting...');
      setTimeout(createConnection, 1000); // Reconnect after 1 second if connection lost
      }
    };

    socket.onmessage = function (e) {
      console.log('onmessage', e)
      try {
        let data = JSON.parse(e.data);
        if (data.s) {
          if(data.s === ticker.s){
            setTickerPrice({ap: data.ap, lp: data.lp, bp: data.bp})
          }
          const updatedArray = companyRows.map((val) => {
            if (val.s === data.s) {
              if(data.lp) {
                val.price = data.lp
              } else if(data.bp){
                val.bp = data.bp
              }
              else{
                val.ap = data.ap
              }
            }
            return val;
          });
          setCompanyRows(updatedArray);
        }
      } catch (e) {
        console.log("error on message", e);
      }
    };
  };
  const getPercentages = ()=> {
    // 'amzn', 'aapl', 'meta', 'nvda', 'googl', 'tsla', 'twtr'
    const endpoint = `https://financialmodelingprep.com/api/v3/quote/AAPL,AMZN,META,NVDA,GOOGL,TSLA,TWTR?apikey=ff170cfbc214454f0a10844eb6e9606e`
    try{

      axios.post(endpoint).then((res)=>{
        let responseData = res.data;
            setPercentages(responseData)
      })
      if (window.location.pathname === '/bioTech'){
        setTimeout(getPercentages, 10000);
      }
    }catch (e){
      console.log('e getPercentages', e)
    }
  }
  useEffect(() => {
    createConnection();
    getPercentages();
    return ()=>socket.close(1000, 'Connection closed');
  }, []);
  //   let socket = new WebSocket(`ws://127.0.0.1:8000/ws/`);
  //
  // useLayoutEffect(() => {
  //     createConnection()
  // }, []);
  // useEffect(() => {
  //   startWebSocket()
  // }, []);
  //
  // const startWebSocket = () => {
  //   try{
  //     socket.send(JSON.stringify({
  //         'msg': "hello from client",
  //       "type": "real-time-price",
  //     }))
  //   }catch (e){
  //     console.log('ere', e);
  //   }
  // };
  // const createConnection = ()=> {
  //   socket.onopen = function (e) {
  //     console.log('e', e)
  //       socket.send(JSON.stringify({
  //           'msg': "hello from client"
  //       }))
  //   }
  // };
  // socket.onmessage = function (e) {
  //   try{
  //     let data = JSON.parse(e.data);
  //     if (data.s){
  //       console.log('data', data);
  //       const updatedArray = companyRows.filter((val)=> {
  //         if (val.s === data.s){
  //             val.price = `${data.lp ? data.lp : data.ap ? data.ap : data.as ? data.as : 'No val'}`
  //         }
  //         return val;
  //       })
  //       console.log('updatedArray', updatedArray)
  //       setCompanyRows(updatedArray);
  //     }
  //
  //   }catch (e){
  //     console.log("err onmsg", e)
  //   }
  // };
  document.title = "Bio Tech";

  const [value, setValue] = useState("1");
  const onChange = (e) => {
    try{
      const filteredComp = companyRows.filter((c)=>c.s === e.s)
      const valToBeSet = filteredComp ? filteredComp[0] : {}
      setTicker({s: valToBeSet.s, symbol: valToBeSet.symbol})
      setTickerPrice({lp: valToBeSet.lp, ap: valToBeSet.ap, bp: valToBeSet.bp})
    }catch (e){
      console.log("err bio tech onChange", onChange)
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <section className="bioTechPage">
        <Box component="main" sx={{ flexGrow: 1, paddingTop: "10px" }}>
          <DrawerHeader />

          <TabContext value={value}>
            {/* Header */}
            <section className="bioTechMainHeader">
              <Grid container spacing={2}>
                <Grid item sm={8}>
                  <span className="header">BIOTECH</span>
                </Grid>
                <Grid item sm={4}>
                  <div className="bioTechTabPages">
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        className="tabList"
                      >
                        <Button
                          variant="outlined"
                          component={Tab}
                          value="1"
                          className="tabLabel"
                          label="BioTech"
                        />
                        <Button
                          variant="outlined"
                          component={Tab}
                          value="2"
                          className="tabLabel"
                          label="Search"
                        />
                        <Button
                          variant="outlined"
                          component={Tab}
                          value="3"
                          className="tabLabel"
                          label="Table"
                        />
                        <Button
                          variant="outlined"
                          component={Tab}
                          value="4"
                          className="tabLabel"
                          label="Calender"
                        />
                      </TabList>
                    </Box>
                  </div>
                </Grid>
              </Grid>
            </section>

            <TabPanel value="1">
              {/* Bar Graphs */}
              <section className="bioTechBarGraphs">
                <Grid container spacing={2}>
                  <Grid item sm={4}>
                    <BarGraph />
                  </Grid>
                  <Grid item sm={4}>
                    <TreeMap />
                  </Grid>
                  <Grid item sm={4}>
                    <div className="calenderEvents">
                      <span>UPCOMING</span>
                    </div>
                  </Grid>
                </Grid>
              </section>

              {/* heatmap */}
              <section className="bioTechHeatMap">
                <Grid container spacing={2}>
                  <Grid item sm={4}>
                    <BigBarGraph />
                  </Grid>
                  <Grid item sm={4}>
                    <GainerLoserTable
                      containerHeight="37vh"
                      tableHeight="29vh"
                      companyData={companyRows}
                      percentages={percentages}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <div className="newsFeedBox">
                      <span className="headerSpan">NEWS FEED</span>
                      <NewsFeed />
                    </div>
                  </Grid>
                </Grid>
              </section>
            </TabPanel>

            <TabPanel value="2">
              <section className="searchBarSection">
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <SearchInputField onChange={onChange} value={ticker.symbol}/>
                  </Grid>
                  <Grid item sm={6}>
                    <div className="companyLogoWraper">
                      <div className="companyLogo">
                        <img src={teslaLogo} alt="Company Logo" width={40} />
                      </div>
                      <div className="companyDetails">
                        <span className="shortName">{ticker.symbol}</span>
                        <span className="fullName">{ticker.symbol} INC</span>
                      </div>
                      <div className="companyValue">
                        <span className="amount1">${tickerPrice.lp ?tickerPrice.lp : tickerPrice.bp ?tickerPrice.bp: tickerPrice.ap }</span>
                        <span className="amount2">
                          <ArrowDropDownIcon className="icon" />
                          0.11%
                        </span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </section>

              <section className="graphAndTableBioTechSection">
                <Grid container spacing={2}>
                  <Grid item sm={4}>
                    <BarGraph />
                  </Grid>
                  <Grid item sm={4}>
                    <TreeMap />
                  </Grid>
                  <Grid item sm={4}>
                    <div className="newsFeedBox">
                      <span className="headerSpan">NEWS FEED</span>
                      <div className="newsFeedContainer">
                        <NewsFeed />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </section>

              {/* tree map and gainer and loses table */}
              <section className="treeMapGainerLosesSection">
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Paper
                      sx={{ width: "100%", overflow: "hidden" }}
                      className="bioTechTableContainer"
                    >
                      <span className="header">TITLE</span>
                      <TableContainer sx={{ height: "29vh" }}>
                        <Table
                          stickyHeader
                          aria-label="simple table"
                          size="medium"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell colSpan={2} align="right">
                                Daily
                              </TableCell>
                              <TableCell>Monthly</TableCell>
                              <TableCell>Year to date</TableCell>
                              <TableCell>Yearly</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={index} hover>
                                <TableCell scope="row">{row.name}</TableCell>
                                <TableCell>{row.daily}</TableCell>
                                <TableCell>{row.monthly}</TableCell>
                                <TableCell>{row.year}</TableCell>
                                <TableCell>{row.yearly}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>
                  </Grid>
                  <Grid item sm={9}>
                    <Paper
                      sx={{ width: "100%" }}
                      className="bioTechSmallSearchTableContainer"
                    >
                      <span className="header">TITLE</span>
                      <TableContainer sx={{ height: "29vh" }}>
                        <Table
                          stickyHeader
                          aria-label="simple table"
                          size="small"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell>Sr.No</TableCell>
                              <TableCell>Company</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Market Cap</TableCell>
                              <TableCell>
                                <span className="stageHeader">Stage</span>
                                <br />
                                <span className="stageHeaderWraper">
                                  <span className="stageHead one">1</span>
                                  <span className="stageHead 2A">2A</span>
                                  <span className="stageHead 2B">2B</span>
                                  <span className="stageHead three">3</span>
                                  <span className="stageHead four">4</span>
                                </span>
                              </TableCell>
                              <TableCell>Stage</TableCell>
                              <TableCell>Major Catalyst</TableCell>
                              <TableCell>Catalyst Date</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {companyRows.map((row, index) => (
                              <TableRow key={index} hover>
                                <TableCell scope="row">{index + 1}</TableCell>
                                <TableCell>
                                  {/*<img*/}
                                  {/*  src={row.logo}*/}
                                  {/*  alt="Company Logo"*/}
                                  {/*  width={30}*/}
                                  {/*/>{" "}*/}
                                  &nbsp;&nbsp;
                                  {row.s}
                                  {/*symbol*/}
                                </TableCell>
                                <TableCell>{row.lp ? row.lp : row.bp ? row.bp : row.ap}</TableCell>
                                <TableCell>{row.marketCap}</TableCell>
                                <TableCell>
                                  <TableStage colorCode={row.stage} />
                                </TableCell>
                                <TableCell>{row.stageValue}</TableCell>
                                <TableCell>{row.majorCatalyst}</TableCell>
                                <TableCell>{row.catalystDate}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>
                  </Grid>
                </Grid>
              </section>
            </TabPanel>

            <TabPanel value="3">
              {/* Search Table */}
              <section className="seachTableSection">
                <BioTechSearchTable />
              </section>
            </TabPanel>

            <TabPanel value="4">
              <section className="calenderSection">
                <Grid container spacing={2}>
                  <Grid item sm={8}>
                    <section className="eventCalender">
                      <Calender />
                    </section>
                  </Grid>
                  <Grid item sm={4}>
                    <div className="eventList">
                      <span className="header">EVENTS THIS MONTH</span>

                      <div className="list">
                        <p>28/07/2023</p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </section>
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    </Box>
  );
};

export default BioTech;
