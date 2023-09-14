import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { StockOverview } from "./StockOverview";
import { StockDaily } from "./StockDaily";
import { StockMonthly } from "./StockMonthly";
import { StockYearly } from "./StockYearly";

export const StockCard = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="h-full">
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              disableRipple={true}
              style={{
                fontSize: "16px",
                padding: "4px 10px",
                textTransform: "capitalize",
              }}
              label="Overview"
              value="1"
            />
            <Tab
              disableRipple={true}
              style={{
                fontSize: "16px",
                padding: "4px 10px",
                textTransform: "capitalize",
              }}
              label="Daily Return"
              value="2"
            />
            <Tab
              disableRipple={true}
              style={{
                fontSize: "16px",
                padding: "4px 10px",
                textTransform: "capitalize",
              }}
              label="Monthly Return"
              value="3"
            />
            <Tab
              disableRipple={true}
              style={{
                fontSize: "16px",
                padding: "4px 10px",
                textTransform: "capitalize",
              }}
              label="Yearly Return"
              value="4"
            />
          </TabList>

          <TabPanel className="h-[calc(100%-48px)] overflow-y-auto" value="1">
            <StockOverview />
          </TabPanel>
          <TabPanel className="h-[calc(100%-48px)] overflow-y-auto" value="2">
            <StockDaily />
          </TabPanel>
          <TabPanel className="h-[calc(100%-48px)] overflow-y-auto" value="3">
            <StockMonthly />
          </TabPanel>
          <TabPanel className="h-[calc(100%-48px)] overflow-y-auto" value="4">
            <StockYearly />
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
};
