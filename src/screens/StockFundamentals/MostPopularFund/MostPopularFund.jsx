import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import axios from "axios";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import "./MostPopularFund.scss";
import appleLogo from "../../../assets/images/appleLogo.png";
import amazonLogo from "../../../assets/images/amazonLogo.png";
import teslaLogo from "../../../assets/images/teslaLogo.png";
import googleLogo from "../../../assets/images/googleLogo.png";
// import { BASE_URL } from "../../constants/constant";
import Loader from "../../../Components/Loader/Loader";

function createData(logo, fund, manager) {
  return { logo, fund, manager };
}

const rows = [
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(teslaLogo, "Microsoft", "Bill Gates"),
  createData(googleLogo, "Google", "Larry Page"),
  createData(appleLogo, "Facebook", "Mark Zukerberg"),
  createData(amazonLogo, "Amazon", "Jeff Bezoz"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
  createData(appleLogo, "Berkshire Hathway INC", "Warren Buffet"),
];

const MostPopularFund = () => {
  document.title = "Most Popular Funds";

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  // const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // useEffect(() => {
  //   const getMostPopularFunds = async () => {
  //     try {
  //       const response = await axios.get(
  //         BASE_URL + "/institutional-ownership/list"
  //       );

  //       setRows(response.data.data);
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }

  //     setLoading(false);
  //   };

  //   getMostPopularFunds();
  // }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="mostPopularFundsHeader">
          <span className="header">Most Popular Fund</span>

          <div className="tableContainer">
            <Paper
              sx={{ width: "100%", overflow: "hidden" }}
              className="tableBody"
            >
              <TableContainer sx={{ height: "63vh" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Rank</TableCell>
                      <TableCell align="center">Fund</TableCell>
                      <TableCell align="center">Portfolio Manager</TableCell>
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
                              component={Link}
                              to={`/fundSearch/${row.fund}/Warren Buffet`}
                            >
                              <TableCell scope="row" align="center">
                                {page * rowsPerPage + index + 1}
                              </TableCell>

                              <TableCell align="center">
                                <img
                                  src={row.logo}
                                  alt="Company Logo"
                                  width="30px"
                                />
                                &nbsp; &nbsp;
                                {row.fund}
                              </TableCell>
                              <TableCell align="center">
                                Warren Buffet
                              </TableCell>
                            </TableRow>
                          );
                        })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                className="mostPopularFundPagination"
                rowsPerPageOptions={[10, 20, 50, 100]}
                component="div"
                count={rows !== undefined ? rows.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </section>
      )}
    </>
  );
};

export default MostPopularFund;
