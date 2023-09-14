/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";
// import axios from "axios";
// import moment from "moment";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import { toast } from "react-toastify";

import appleLogo from "../../../assets/images/appleLogo.png";
import amazonLogo from "../../../assets/images/amazonLogo.png";
import teslaLogo from "../../../assets/images/teslaLogo.png";
import googleLogo from "../../../assets/images/googleLogo.png";
import "./HomeTable.scss";
import { useState } from "react";
// import { useEffect } from "react";
// import { BASE_URL } from "../../../constants/constant";
import MiniLoader from "../../MiniLoader/MiniLoader";

function createData(
  logo,
  currentPrice,
  analystCompany,
  analystName,
  action,
  priceTarget,
  rating,
  date
) {
  return {
    logo,
    currentPrice,
    analystCompany,
    analystName,
    action,
    priceTarget,
    rating,
    date,
  };
}

const rows = [
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    amazonLogo,
    500,
    "Amazon",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    teslaLogo,
    500,
    "Tesla",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    googleLogo,
    500,
    "Google",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    googleLogo,
    500,
    "Google",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    amazonLogo,
    500,
    "Amazon",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    teslaLogo,
    500,
    "Tesla",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    teslaLogo,
    500,
    "Tesla",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    teslaLogo,
    500,
    "Tesla",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    googleLogo,
    500,
    "Google",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
  createData(
    appleLogo,
    500,
    "Apple",
    "Peter Parker",
    "Downgraded",
    6000,
    "5 Star",
    "5 Days Ago"
  ),
];

export default function HomeTable() {
  const [page, setPage] = useState(0);
  // const [prevPage, setPrevPage] = useState(-1);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  // const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getGetDetailedList = async () => {
  //     setLoading(true);
  //     if (prevPage >= page) {
  //       setLoading(false);
  //       return;
  //     }
  //     try {
  //       const response = await axios.post(BASE_URL + "/price-target-rss-feed", {
  //         page: page,
  //       });

  //       tableData.length > 0
  //         ? setTableData([...tableData, ...response.data.data])
  //         : setTableData(response.data.data);

  //       setPrevPage(page);
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }

  //     setLoading(false);
  //   };

  //   getGetDetailedList();
  // }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="tableContainer">
      <span className="header">Detailed List of Analyst Forecasts​</span>
      <Paper sx={{ width: "100%" }} className="tableBody">
        <TableContainer sx={{ height: "64vh" }}>
          <Table aria-label="sticky table" stickyHeader size="small">
            {loading ? (
              <MiniLoader />
            ) : (
              <>
                <TableHead style={{ backgroundColor: "#e7e7e7" }}>
                  <TableRow>
                    <TableCell align="center">Current Price</TableCell>
                    <TableCell align="center" colSpan={2}>
                      Analyst Company
                    </TableCell>
                    <TableCell align="center">Analyst Name</TableCell>
                    <TableCell align="center">Action</TableCell>
                    <TableCell align="center">Price Target</TableCell>
                    <TableCell align="center">Rating</TableCell>
                    <TableCell align="center">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows !== undefined &&
                    rows
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            <TableCell scope="row" align="center">
                              {row.currentPrice}
                            </TableCell>
                            <TableCell align="center">
                              <img
                                src={row.logo}
                                alt="Company Logo"
                                width="30px"
                              />
                            </TableCell>
                            <TableCell align="center">
                              {row.analystCompany}
                            </TableCell>
                            <TableCell align="center">
                              {row.analystName}
                            </TableCell>
                            <TableCell align="center">{row.action}</TableCell>
                            <TableCell align="center">
                              {row.priceTarget}
                            </TableCell>
                            <TableCell align="center">{row.rating}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                          </TableRow>
                        );
                      })}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          className="mostPopularFundPagination"
          rowsPerPageOptions={[100, 200, 500, 1000]}
          component="div"
          count={rows !== undefined ? rows.length + 1 : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
