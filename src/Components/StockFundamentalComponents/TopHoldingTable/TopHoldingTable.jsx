import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./TopHoldingTable.scss";

export default function TopHoldingTable({ header, rows }) {
  return (
    <>
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="topHoldingTableContainer"
      >
        <TableContainer sx={{ height: "22.5vh" }}>
          <Table stickyHeader aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align="center">
                  Stock
                </TableCell>
                <TableCell>{header}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell scope="row">
                    <img src={row.logo} alt="Company Logo" width="25px" />
                  </TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>
                    {row.aggregate}{" "}
                    <span className="tableBarWraper">
                      <span
                        className="tableBar"
                        style={{
                          width: `${row.width}px`,
                        }}
                      ></span>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
