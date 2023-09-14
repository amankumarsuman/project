import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./GainerLoserTable.scss";
import teslaLogo from "../../../assets/images/teslaLogo.png";
import appleLogo from "../../../assets/images/appleLogo.png";
import googleLogo from "../../../assets/images/googleLogo.png";
import amazonLogo from "../../../assets/images/amazonLogo.png";
import AreaChart from "../AreaChart/AreaChart";

function createData(logo, company, firstValue, secondValue, chartColor) {
  return { logo, company, firstValue, secondValue, chartColor };
}

const rows = [
  createData(teslaLogo, "JNJ", "24.00", "+7.45%", "#03FB75"),
  createData(appleLogo, "LLY", "24.00", "+7.45%", "#03FB75"),
  createData(amazonLogo, "UNH", "24.00", "+7.45%", "#03FB75"),
  createData(googleLogo, "JNJ", "24.00", "+7.45%", "#03FB75"),
  createData(googleLogo, "JNJ", "24.00", "+7.45%", "#03FB75"),
  createData(teslaLogo, "JNJ", "24.00", "+7.45%", "#F22323"),
  createData(appleLogo, "LLY", "24.00", "+7.45%", "#F22323"),
  createData(amazonLogo, "UNH", "24.00", "+7.45%", "#F22323"),
  createData(googleLogo, "JNJ", "24.00", "+7.45%", "#F22323"),
  createData(googleLogo, "JNJ", "24.00", "+7.45%", "#F22323"),
];

const GainerLoserTable = (props) => {
  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden", height: props.containerHeight }}
      className="gainerLoserTableContainer"
    >
      <span className="header">Top Gainers & Losers</span>

      <TableContainer
        sx={{ height: props.tableHeight }}
        className="gainerLoserTableBody"
      >
        <Table stickyHeader aria-label="simple table" size="small">
          <TableBody>
            {props.companyData?.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell scope="row">
                  <img src={row.logo} alt="Company logo" width={30} />
                </TableCell>
                <TableCell>{row.symbol}</TableCell>
                <TableCell className={'flex justify-center items-center'}>
                  {row.price ? Number(row.price).toFixed(2) : row.bp ? Number(row.bp).toFixed(2) : row.ap ?  Number(row.ap).toFixed(2) : 'No Val'}
                  {props.percentages.map((p)=>p && p.symbol === row.symbol ? <span className="secondValue">
                    <div className={`flex justify-center items-center ${p.changesPercentage >= 0 ? 'green':'red'}`}>{p.changesPercentage}</div>
                    <div className={`flex justify-center items-center ${p.changesPercentage >= 0 ? 'green':'red'}`}>{p.change}</div>
                  </span>:null)}
                </TableCell>
                <TableCell>
                  <AreaChart chartColor={row.chartColor} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default GainerLoserTable;
