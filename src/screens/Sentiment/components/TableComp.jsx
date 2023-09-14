import { Box, Avatar } from "@mui/material";
import * as React from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
];

export default function TableComp() {
  return (
    <Box className="table-component">
      <table className="make-table" id="customers">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>1 Day Ago</th>
            <th>2 Day Ago</th>
            <th>Last Week</th>
            <th>Last Month</th>
            <th>Last 6 Month</th>
            <th>Last Year</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => {
            return (
              <tr className="table-data-row">
                <td>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 35, height: 35 }}
                    />
                    <span>AAPL</span>
                  </Box>
                </td>
                <td>
                  <span style={{ color: "#00A939" }}>
                    192 <br />
                    <span style={{ fontSize: "0.6rem" }}>1.25 (2.3%)</span>
                  </span>
                </td>
                <td>
                  <span style={{ color: "#00A939" }}>192</span>
                </td>
                <td>
                  <span style={{ color: "#00A939" }}>192</span>
                </td>
                <td>
                  <span style={{ color: "#00A939" }}>192</span>
                </td>
                <td>
                  <span style={{ color: "#00A939" }}>192</span>
                </td>
                <td>
                  <span style={{ color: "#00A939" }}>192</span>
                </td>
                <td>
                  <span style={{ color: "#00A939" }}>192</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
