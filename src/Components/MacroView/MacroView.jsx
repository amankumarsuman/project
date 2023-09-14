import React, {useState} from "react";
import {Box, Button, Grid, Tab} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import "../../screens/StockFundamentals/StockFundamentals.scss";
import HomeTable from "../../Components/StockFundamentalComponents/HomeTable/HomeTable";
import PieChart from "../../Components/StockFundamentalComponents/PieChart/PieChartFunc";
import LineChartFunc from "../../Components/StockFundamentalComponents/LineChart/LineChartFunc";
import DrawerHeader from "../../Components/DrawerHeader/DrawerHeader";
import Loader from "../../Components/Loader/Loader";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import MostPopularFund from "../../screens/StockFundamentals/MostPopularFund/MostPopularFund";
import TopHoldings from "../../screens/StockFundamentals/TopHoldings/TopHoldings";
import {PopularStocks} from "../../screens/StockFundamentals/PopularStocks/PopularStocks";

const MacroView = () => {
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
            <Box
                component="main"
                sx={{flexGrow: 1, paddingBottom: "6px", paddingTop: "4px"}}
            >
                <PopularStocks/>
            </Box>
        </Box>
    );
};

export default MacroView;
