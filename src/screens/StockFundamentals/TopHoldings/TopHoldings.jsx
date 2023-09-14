import React from "react";
import { Box, Grid, Tab } from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "./TopHoldings.scss";
import TopHoldingTable from "../../../Components/StockFundamentalComponents/TopHoldingTable/TopHoldingTable";
import appleLogo from "../../../assets/images/appleLogo.png";
import amazonLogo from "../../../assets/images/amazonLogo.png";
import teslaLogo from "../../../assets/images/teslaLogo.png";
import googleLogo from "../../../assets/images/googleLogo.png";
import { TabContext } from "@mui/lab";

function createData(logo, stock, aggregate, width) {
  return { logo, stock, aggregate, width };
}

const byValueRows = [
  createData(appleLogo, "Apple", `$${1758} mm`, 40),
  createData(amazonLogo, "Amazon", `$${4544} mm`, 30),
  createData(teslaLogo, "Tesla", `$${2132} mm`, 10),
  createData(googleLogo, "Google", `$${8998} mm`, 20),
  createData(appleLogo, "Apple", `$${1758} mm`, 40),
  createData(amazonLogo, "Amazon", `$${4544} mm`, 30),
  createData(teslaLogo, "Tesla", `$${2132} mm`, 10),
  createData(googleLogo, "Google", `$${8998} mm`, 20),
  createData(teslaLogo, "Tesla", `$${2132} mm`, 10),
  createData(googleLogo, "Google", `$${8998} mm`, 20),
];

const byFilersRows = [
  createData(appleLogo, "Apple", 4566, 40),
  createData(amazonLogo, "Amazon", 8977, 10),
  createData(teslaLogo, "Tesla", 7895, 30),
  createData(googleLogo, "Google", 5222, 20),
  createData(appleLogo, "Apple", 4566, 40),
  createData(amazonLogo, "Amazon", 8977, 10),
  createData(teslaLogo, "Tesla", 7895, 30),
  createData(googleLogo, "Google", 5222, 20),
  createData(teslaLogo, "Tesla", 7895, 30),
  createData(googleLogo, "Google", 5222, 20),
];

const byIncreaseRows = [
  createData(appleLogo, "Apple", `${1758}%`, 40),
  createData(amazonLogo, "Amazon", `${4544}%`, 30),
  createData(teslaLogo, "Tesla", `${2132}%`, 10),
  createData(googleLogo, "Google", `${8998}%`, 20),
  createData(appleLogo, "Apple", `${1758}%`, 40),
  createData(amazonLogo, "Amazon", `${4544}%`, 30),
  createData(teslaLogo, "Tesla", `${2132}%`, 10),
  createData(googleLogo, "Google", `${8998}%`, 20),
  createData(teslaLogo, "Tesla", `${2132}%`, 10),
  createData(googleLogo, "Google", `${8998}%`, 20),
];

const TopHoldings = () => {
  document.title = "Top Holding";

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      {/* Header */}
      <section className="topHoldingHeader">
        <Grid container spacing={2}>
          <Grid item sm={8} className="headerWraper">
            <span className="header">Institutional Investor Top Holdings</span>
          </Grid>
        </Grid>
      </section>

      {/* Investor tables */}

      <section className="investorTablesSection">
        <div>
          <TabPanel value="1">
            <Grid container spacing={4} className="investorTableContainer">
              <Grid item sm={6}>
                <div className="tableWraper">
                  <div className="investorHeader byValue">
                    <span className="text">Top holdings by value</span>
                    <span className="date">Jun 2023</span>
                  </div>

                  <TopHoldingTable
                    header="Aggregate value"
                    rows={byValueRows}
                  />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="tableWraper">
                  <div className="investorHeader byFilers">
                    <span className="text">
                      Top holdings by number of filers
                    </span>
                    <span className="date">Jun 2023</span>
                  </div>

                  <TopHoldingTable header="Total filers" rows={byFilersRows} />
                </div>
              </Grid>
            </Grid>

            <br />

            <Grid container spacing={4} className="investorTableContainer">
              <Grid item sm={6}>
                <div className="tableWraper">
                  <div className="investorHeader byValue">
                    <span className="text">
                      Largest % increase in shares held
                    </span>
                    <span className="date">Jun 2023</span>
                  </div>

                  <TopHoldingTable header="% increase" rows={byIncreaseRows} />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="tableWraper">
                  <div className="investorHeader byFilers">
                    <span className="text">
                      Largest % decrease in shares held
                    </span>
                    <span className="date">Jun 2023</span>
                  </div>

                  <TopHoldingTable header="% decrease" rows={byIncreaseRows} />
                </div>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value="2">
            <Grid container spacing={4} className="investorTableContainer">
              <Grid item sm={6}>
                <div className="tableWraper">
                  <div className="investorHeader byValue">
                    <span className="text">Most positions opened</span>
                    <span className="date">Jun 2023</span>
                  </div>

                  <TopHoldingTable
                    header="Positions opened"
                    rows={byFilersRows}
                  />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="tableWraper">
                  <div className="investorHeader byFilers">
                    <span className="text">Most positions closed</span>
                    <span className="date">Jun 2023</span>
                  </div>

                  <TopHoldingTable
                    header="Positions closed"
                    rows={byFilersRows}
                  />
                </div>
              </Grid>
            </Grid>

            <br />

            <Grid container spacing={4} className="investorTableContainer">
              <Grid item sm={6}>
                <div className="tableWraper">
                  <div className="investorHeader byValue">
                    <span className="text">
                      Top stocks by total value of calls
                    </span>
                    <span className="date">Jun 2023</span>
                  </div>

                  <TopHoldingTable header="Calls value" rows={byValueRows} />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="tableWraper">
                  <div className="investorHeader byFilers">
                    <span className="text">
                      Top stocks by total call-to-put ratio
                    </span>
                    <span className="date">Jun 2023</span>
                  </div>

                  <TopHoldingTable header="Call-to-put" rows={byFilersRows} />
                </div>
              </Grid>
            </Grid>
          </TabPanel>
        </div>
      </section>

      {/* Tab Pages */}

      <section className="tabPages">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tabList"
          >
            <Tab label="Page 1" value="1" className="tabLabel" />
            <Tab label="Page 2" value="2" className="tabLabel" />
          </TabList>
        </Box>
      </section>
    </TabContext>
  );
};

export default TopHoldings;
