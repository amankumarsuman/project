/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Box, Grid, Tab, TablePagination } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
import { useParams } from "react-router-dom";

import "./FundSearch.scss";
import Navbar from "../../../Components/Navbar/Navbar";
import appleLogo from "../../../assets/images/appleLogo.png";
import amazonLogo from "../../../assets/images/amazonLogo.png";
import teslaLogo from "../../../assets/images/teslaLogo.png";
import googleLogo from "../../../assets/images/googleLogo.png";
import FundSearchTable from "../../../Components/StockFundamentalComponents/FundSearchTable/FundSearchTable";
import TreeMapFundSearch from "../../../Components/StockFundamentalComponents/TreeMapFundSearch/TreeMapFundSearch";
import PieChartFundSearch from "../../../Components/StockFundamentalComponents/PieChartFundSearch/PieChartFundSearch";
import DrawerHeader from "../../../Components/DrawerHeader/DrawerHeader";
// import { BASE_URL } from "../../constants/constant";
import MiniLoader from "../../../Components/MiniLoader/MiniLoader";

function createDataTopHolding(
  logo,
  stock,
  shares,
  value,
  shareChange,
  weightage
) {
  return { logo, stock, shares, value, shareChange, weightage };
}

const rows = [
  createDataTopHolding(appleLogo, "Apple", 915.56, 4000, 302, 45),
  createDataTopHolding(amazonLogo, "Amazon", 915.56, 3022, 301, 45),
  createDataTopHolding(teslaLogo, "Tesla", 915.56, 1011, 305, 45),
  createDataTopHolding(googleLogo, "Google", 915.56, 2033, 303, 45),
  createDataTopHolding(appleLogo, "Apple", 915.56, 4021, 301, 45),
  createDataTopHolding(amazonLogo, "Amazon", 915.56, 3022, 308, 45),
  createDataTopHolding(teslaLogo, "Tesla", 915.56, 1013, 307, 45),
  createDataTopHolding(googleLogo, "Google", 915.56, 2022, 306, 45),
  createDataTopHolding(teslaLogo, "Tesla", 915.56, 1013, 307, 45),
  createDataTopHolding(googleLogo, "Google", 915.56, 2099, 308, 45),
];

function createDataIncDec(
  logo,
  security,
  shares,
  value,
  portfolio,
  changePortfolio
) {
  return { logo, security, shares, value, portfolio, changePortfolio };
}

const rowsInc = [
  createDataIncDec(appleLogo, "Apple", 915.56, 4000, 302, 45),
  createDataIncDec(amazonLogo, "Amazon", 915.56, 3022, 301, 45),
  createDataIncDec(teslaLogo, "Tesla", 915.56, 1011, 305, 45),
  createDataIncDec(googleLogo, "Google", 915.56, 2033, 303, 45),
  createDataIncDec(appleLogo, "Apple", 915.56, 4021, 301, 45),
  createDataIncDec(amazonLogo, "Amazon", 915.56, 3022, 308, 45),
  createDataIncDec(teslaLogo, "Tesla", 915.56, 1013, 307, 45),
  createDataIncDec(googleLogo, "Google", 915.56, 2022, 306, 45),
  createDataIncDec(teslaLogo, "Tesla", 915.56, 1013, 307, 45),
  createDataIncDec(googleLogo, "Google", 915.56, 2099, 308, 45),
];

const FundSearch = () => {
  document.title = "Fund Search";

  const params = useParams();
  const { fund, manager } = params;

  const [value, setValue] = useState("1");
  const [page, setPage] = useState(0);
  // const [prevPage, setPrevPage] = useState(-1);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  // const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getInstitutionalHolders = async () => {
  //     setLoading(true);
  //     if (prevPage >= page) {
  //       setLoading(false);
  //       return;
  //     }
  //     try {
  //       const response = await axios.post(
  //         BASE_URL +
  //           "/institutional-ownership/institutional-holders/symbol-ownership-percent",
  //         {
  //           page: page,
  //           date: "2021-09-30",
  //           symbol: "AAPL",
  //         }
  //       );

  //       tableData.length > 0
  //         ? setTableData([...tableData, ...response.data.data])
  //         : setTableData(response.data.data);

  //       setPrevPage(page);
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }

  //     setLoading(false);
  //   };

  //   getInstitutionalHolders();
  // }, [page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeader />
        {/* Header */}
        <TabContext value={value}>
          <section className="fundSearchHeader">
            <Grid container spacing={2}>
              <Grid item sm={8}>
                <span className="header">
                  <span className="fundName">Fund Name: {fund}</span>
                </span>
              </Grid>
              <Grid item sm={4}>
                <span className="header">
                  <span className="managerName">Manager Name: {manager}</span>
                </span>
              </Grid>
            </Grid>
          </section>

          {/* treePieMap and table */}
          <TabPanel value="1">
            <section className="treePieMapTableSection">
              <Grid container spacing={2}>
                <Grid item sm={4}>
                  <div className="treePieMapWraper">
                    <PieChartFundSearch fund={fund} />
                    <TreeMapFundSearch />
                  </div>
                </Grid>
                <Grid item sm={8}>
                  <div className="homeTableWraper">
                    <section className="topHoldingSection">
                      <span className="header">
                        Top Holding as of 03-04-2023​
                      </span>
                      <div className="topHoldingTable">
                        <Paper
                          sx={{ width: "100%" }}
                          className="topHoldingTableContainer"
                        >
                          <TableContainer sx={{ height: "56vh" }}>
                            <Table stickyHeader size="small">
                              {loading ? (
                                <MiniLoader />
                              ) : (
                                <>
                                  <TableHead>
                                    <TableRow>
                                      <TableCell align="center" colSpan={2}>
                                        Stock
                                      </TableCell>
                                      <TableCell align="center">
                                        Shares <br /> (MM)
                                      </TableCell>
                                      <TableCell align="center">
                                        Value (1000) <br /> (MM$)
                                      </TableCell>
                                      <TableCell align="center">
                                        Share Change
                                      </TableCell>
                                      <TableCell align="center">
                                        Weightage
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rows !== undefined &&
                                      rows
                                        ?.slice(
                                          page * rowsPerPage,
                                          page * rowsPerPage + rowsPerPage
                                        )
                                        .map((row, index) => (
                                          <TableRow key={index} hover>
                                            <TableCell
                                              align="center"
                                              scope="row"
                                            >
                                              <img
                                                src={row.logo}
                                                alt="Company Logo"
                                                width="31px"
                                              />
                                            </TableCell>
                                            <TableCell align="center">
                                              {row.stock}
                                            </TableCell>
                                            <TableCell align="center">
                                              {row.shares}
                                            </TableCell>
                                            <TableCell align="center">
                                              {row.value}
                                            </TableCell>
                                            <TableCell align="center">
                                              {row.shareChange}
                                            </TableCell>
                                            <TableCell align="center">
                                              {row.weightage}
                                            </TableCell>
                                          </TableRow>
                                        ))}
                                  </TableBody>
                                </>
                              )}
                            </Table>
                          </TableContainer>
                          <TablePagination
                            className="mostPopularFundPagination"
                            rowsPerPageOptions={[50, 100, 400, 800]}
                            component="div"
                            count={rows !== undefined ? rows.length + 1 : 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                          />
                        </Paper>
                      </div>
                    </section>
                  </div>
                </Grid>
              </Grid>
            </section>
          </TabPanel>

          {/* Increase Decrease table */}

          <TabPanel value="2">
            <section className="increaseDecreaseTable">
              <Grid container spacing={4}>
                <Grid item sm={6}>
                  <span className="header">Top Increases This Quarter​</span>

                  <FundSearchTable rows={rowsInc} />
                </Grid>
                <Grid item sm={6}>
                  <span className="header">Top Decreases This Quarter</span>

                  <FundSearchTable rows={rowsInc} />
                </Grid>
              </Grid>
            </section>
          </TabPanel>

          {/* Tab Pages */}

          <section className="fundTabPages">
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
      </Box>
    </Box>
  );
};

export default FundSearch;
