import React from "react";
import { Grid, InputBase, Typography } from "@mui/material";
import TopCircleChart from "./TopCircleChart";

const SearchCard = (props) => {
  const topSearchData = props.searchData[0];
  const priceChange = parseFloat(topSearchData?.price_change || 0);
  const percentChange = parseFloat(topSearchData?.price_change_percentage || 0);

  const dataObj = {
    circleColour: priceChange > 0 ? "#00DE4C" : "#DE0000",
    bgColor: priceChange > 0 ? "#004B19" : "#4B0000",
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={10} xs={10} sm={12}>
        <InputBase
          fullWidth
          sx={{ backgroundColor: "white", borderRadius: "3px", px: 1 }}
          placeholder="Search"
        />
      </Grid>
      <Grid container item md={12} sm={12}>
        <Grid item md={6} xs={6} sm={6} sx={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "80%", maxHeight: "80%" }}
            src="https://www.freepnglogos.com/uploads/tesla-logo-png-27.png"
            alt=""
          />
          <Typography variant="h6">{topSearchData?.Symbol}</Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>
            ${topSearchData?.price.toFixed(2)}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: dataObj.circleColour,
            }}
          >
            {`${priceChange.toFixed(2)} (${percentChange.toFixed(2)}%)`}
          </Typography>
        </Grid>
        <Grid item md={6} xs={6} sm={6}>
          <TopCircleChart item={dataObj} topSearchData={topSearchData} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchCard;
