import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./FundSearchTable.scss";

export default function FundSearchTable({ rows }) {
  return (
    <TableContainer component={Paper} className="fundSearchTableContainer">
      <Table
        sx={{ minWidth: 360, height: "70vh" }}
        aria-label="simple table"
        size="small"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Security
            </TableCell>
            <TableCell align="center">Shares (MM)</TableCell>
            <TableCell align="center">Value (MM$)</TableCell>
            <TableCell align="center">Portfolio %</TableCell>
            <TableCell align="center">Change Portfolio %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} hover>
              <TableCell scope="row" align="center">
                <img src={row.logo} alt="Company Logo" width="25px" />
              </TableCell>
              <TableCell align="center">{row.security}</TableCell>
              <TableCell align="center">{row.shares}</TableCell>
              <TableCell align="center">{row.value}</TableCell>
              <TableCell align="center">{row.portfolio}</TableCell>
              <TableCell align="center">{row.changePortfolio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
