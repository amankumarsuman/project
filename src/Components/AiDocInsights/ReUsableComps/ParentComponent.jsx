import React from "react";
import Navbar from "../../Navbar/Navbar";
import Box from "@mui/material/Box";
import DrawerHeader from "../../DrawerHeader/DrawerHeader";

const ParentComponent = ({children}) => {
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
                {children}
            </Box>
        </Box>
    )
};
export default ParentComponent;