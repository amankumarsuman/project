import { Box, Avatar, Button } from "@mui/material";
import * as React from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("AAPL", 159, 6.0, 24, 4.0),
  createData("AAPL", 237, 9.0, 37, 4.3),
  createData("AAPL", 262, 16.0, 24, 6.0),
  createData("AAPL", 305, 3.7, 67, 4.3),
  createData("AAPL", 305, 3.7, 67, 4.3),
  createData("AAPL", 305, 3.7, 67, 4.3),
  createData("AAPL", 305, 3.7, 67, 4.3),
];

export default function SPTable() {
  return (
    <Box className="top-table" sx={{ height: "100%" }}>
      <table id="sp-table" style={{ height: "100%", width: "100%" }}>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Stock Name</th>
            <th>Today</th>
            <th>1Day Ago</th>
            <th>2Day Ago</th>
            <th>Last Week</th>
            <th>Last Month</th>
            <th>Last 3 Month</th>
            <th>Last 6 Month</th>
            <th>Last Year</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => {
            return (
              <tr>
                <td>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    {item.name}
                  </Box>
                </td>
                <td>
                  192.98 <span style={{ color: "#EE0303" }}>(1.09%)</span>
                </td>
                <td>
                  <Box className="table-data-box">0.22</Box>
                </td>
                <td>
                  <Box className="table-data-box">0.22</Box>
                </td>
                <td>
                  <Box className="table-data-box">0.22</Box>
                </td>
                <td>
                  <Box className="table-data-box">0.22</Box>
                </td>
                <td>
                  <Box className="table-data-box">0.22</Box>
                </td>
                <td>
                  <Box className="table-data-box">0.22</Box>
                </td>
                <td>
                  <Box className="table-data-box">0.22</Box>
                </td>
                <td>
                  <Box className="table-data-box">0.22</Box>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
