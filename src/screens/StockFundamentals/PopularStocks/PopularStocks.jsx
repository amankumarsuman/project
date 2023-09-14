import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { StockName } from "./components/Stockname";
import { StockCard } from "./components/StockCard";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const PopularStocks = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="w-full mx-auto px-10 mt-8">
      {/* <div className="flex gap-10 item-center mb-4 mx-10">
        <StockName />
        <TextField
          className="w-full pr-7"
          id="outlined-basic"
          size="small"
          label="Search Stock By Name"
          variant="outlined"
        />
      </div> */}
      <div className="h-[calc(100vh-155px)] text-white rounded-3xl">
        <StockCard />
      </div>
    </div>
  </ThemeProvider>
  );
}