import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import DrawerHeader from "../../../Components/DrawerHeader/DrawerHeader";
import Box from "@mui/material/Box";
import CalendarElement from "../../../Components/AiDocInsights/Pages/Calendars/Calendars";

const Calendars = () => {
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
                <CalendarElement/>
            </Box>
        </Box>
    )
}
export default Calendars;