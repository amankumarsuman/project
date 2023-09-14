import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import DrawerHeader from "../../../Components/DrawerHeader/DrawerHeader";
import Box from "@mui/material/Box";
import MarketBroadView from "../../../Components/MarketBroadView/Pages/MarketBroadView";
import TradingElement from '../../../Components/AiDocInsights/Pages/Trading/TradingElement'

const Trading = () => {
    return (
        <Box sx={{display: "flex"}}>
            <Navbar/>
            <Box
                component="main"
                sx={{
                    flexGrow: 1, paddingBottom: "6px", paddingTop: "4px", height: '100vh',
                    overflowY: 'scroll'
                }}
            >
                <DrawerHeader/>
                <TradingElement/>
            </Box>
        </Box>
    )
}
export default Trading;