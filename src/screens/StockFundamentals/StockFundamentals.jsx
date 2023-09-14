import React, {useState} from "react";
import {Box, Button, Grid, Tab} from "@mui/material";
// import { toast } from "react-toastify";
// import axios from "axios";

import Navbar from "../../Components/Navbar/Navbar";
import "./StockFundamentals.scss";
import HomeTable from "../../Components/StockFundamentalComponents/HomeTable/HomeTable";
import PieChart from "../../Components/StockFundamentalComponents/PieChart/PieChartFunc";
import LineChartFunc from "../../Components/StockFundamentalComponents/LineChart/LineChartFunc";
import DrawerHeader from "../../Components/DrawerHeader/DrawerHeader";
import Loader from "../../Components/Loader/Loader";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import MostPopularFund from "./MostPopularFund/MostPopularFund";
import TopHoldings from "./TopHoldings/TopHoldings";
import {PopularStocks} from "./PopularStocks/PopularStocks";
import InsiderTrading from "../../Components/InsiderTrading/InsiderTrading";
import TradingElement from "../../Components/AiDocInsights/Pages/Trading/TradingElement";
// import { BASE_URL } from "../../constants/constant";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("1");
    const [maintab, setMainTab] = useState("1");
    // const [pieChartData, setPieChartData] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleMainTabsetMacroView = (event, newValue) => {
        setMainTab("2");
    };

    const handleMainTabsetAnalyst = (event, newValue) => {
        setMainTab("1");
    };

    // useEffect(() => {
    //   const getPieChartData = async () => {
    //     try {
    //       const response = await axios.post(
    //         BASE_URL + "/upgrades-downgrades-consensus",
    //         {
    //           symbol: "AAPL",
    //         }
    //       );

    //       setPieChartData(response.data.data);
    //     } catch (error) {
    //       toast.error(error.response.data.message);
    //     }

    //     setLoading(false);
    //   };

    //   getPieChartData();
    // }, []);

    return (
        <Box sx={{display: "flex"}}>
            <Navbar/>
            <Box
                component="main"
                sx={{flexGrow: 1, paddingBottom: "6px", paddingTop: "4px"}}
            >
                <DrawerHeader/>
                <TabContext value={value}>
                    {/* Header */}

                    {loading ? (
                        <Loader/>
                    ) : (
                        <>
                            <section className="mainHeader">
                                <div className="stockFundamentalsmaintab ml-4">
                                    <button
                                        onClick={handleMainTabsetMacroView}
                                        className={`px-4 py-2 text-xl border-[#00dae2] border-2 mr-6 rounded-lg ${
                                            maintab === "2" && "bg-[#00dae2] text-black"
                                        } ${maintab === "1" && "text-[#00dae2]"}}`}
                                    >
                                        Insider Trading
                                    </button>
                                    <button
                                        onClick={handleMainTabsetAnalyst}
                                        className={`px-4 py-2 text-xl border-[#00dae2] border-2 mr-6 rounded-lg ${
                                            maintab === "1" && "bg-[#00dae2] text-black"
                                        } ${maintab === "2" && "text-[#00dae2]"}}`}
                                    >
                                        Analyst Corner
                                    </button>
                                </div>
                            </section>
                            {maintab === "1" ? (
                                <div>
                                    <section className="mainHeader px-8">
                                        <div className="stockFundamentalsTabPages">
                                            <Box sx={{borderBottom: 1, borderColor: "divider"}}>
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
                                                        label="Analyst Forecast"
                                                    />
                                                    <Button
                                                        variant="outlined"
                                                        component={Tab}
                                                        value="2"
                                                        className="tabLabel"
                                                        label="Popular Fund"
                                                    />
                                                    <Button
                                                        variant="outlined"
                                                        component={Tab}
                                                        value="3"
                                                        className="tabLabel"
                                                        label="Top Holding"
                                                    />
                                                </TabList>
                                            </Box>
                                        </div>
                                    </section>
                                    <TabPanel value="1">
                                        {/* charts and table */}
                                        <section className="chartTableSection">
                                            <Grid container spacing={2}>
                                                <Grid item sm={4}>
                                                    <div className="chartWraper">
                                                        <PieChart pieChartData={[]}/>
                                                        <LineChartFunc/>
                                                    </div>
                                                </Grid>
                                                <Grid item sm={8}>
                                                    <div className="homeTableWraper">
                                                        <HomeTable/>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </section>
                                    </TabPanel>

                                    <TabPanel value="2">
                                        <MostPopularFund/>
                                    </TabPanel>

                                    <TabPanel value="3">
                                        <TopHoldings/>
                                    </TabPanel>
                                </div>
                            ) : (
                                <TradingElement/>
                            )}
                        </>
                    )}
                </TabContext>
            </Box>
        </Box>
    );
};

export default Home;
