import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchInputField.scss";
import { Button } from "@mui/material";

export default function SearchInputField({onChange, value}) {
  return (
    <div className="seachInputFieldWraper">
      <Autocomplete
        id="country-select-demo"
        sx={{ width: "30vw" }}
        options={companies}
        autoHighlight
           onChange={(event, newValue) => onChange(newValue)}
        getOptionLabel={(option) =>  option.symbol}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {/* <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            /> */}
            {option.symbol}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a comapny"
            sx={{
              input: {
                color: "white",
              },
              "& label": {
                color: "white",
                fontSize: "15px",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
            onChange={  (e)    =>      onChange(e)}
            className="inputField"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <Button variant="contained" className="searchBtn">
        <SearchIcon className="searchIcon" />
      </Button>
    </div>
  );
}

const companies = [
  {s: 'googl', symbol: "Google" },
  {s: 'amzn', symbol: "Amazon" },
  {s: 'twtr', symbol: "Twitter" },
  {s: 'tsla', symbol: "Tesla" },
  {s: 'aapl', symbol: "Apple" },
  {s: 'nvda', symbol: "Nvdia" },
  {s: 'meta', symbol: "Meta" },
];
