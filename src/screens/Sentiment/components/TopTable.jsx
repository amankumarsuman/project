import { Box, Avatar, Button } from "@mui/material";
import * as React from "react";

export default function TopTable(props) {
  const hotListTable = props.dailyHotListData;

  return (
    <Box className="top-table" sx={{ height: "90%" }}>
      <table style={{ height: "100%", width: "100%" }}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Mention</th>
            <th>Sentiment</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {hotListTable.map((item, index) => {
            let sentiment = parseFloat(item?.sentiment?.replace("%", ""));
            let status =
              sentiment > 0 ? "Bullish" : sentiment < 0 ? "Bearish" : "Neutral";
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
                    <Box sx={{ py: 0.2 }}>
                      <Avatar
                        alt={item.Symbol}
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 30, height: 30 }}
                      />
                    </Box>
                    {item.Symbol}
                  </Box>
                </td>
                <td>
                  {item.price}{" "}
                  <span style={{ color: "#EE0303", fontSize: "0.7rem" }}>
                    {`(${item.price_change_percentage})`}
                  </span>
                </td>
                <td>{sentiment}</td>
                <td>
                  <Button
                    className="table-sentiment-button"
                    variant="contained"
                    sx={{
                      backgroundColor: sentiment < 0 ? "#EE0303" : "#4EDD70",
                      width: " 60%",
                      py: 0,
                    }}
                    size="small"
                  >
                    {status}
                  </Button>
                </td>
                <td>{index + 1}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
