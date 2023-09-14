import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";

import "./App.scss";
import StockFundamentals from "./screens/StockFundamentals/StockFundamentals";

import FundSearch from "./screens/StockFundamentals/FundSearch/FundSearch";
import BioTech from "./screens/BioTech/BioTech";
import Sentiment from "./screens/Sentiment/Sentiment";
import AiPrediction from "./screens/AiPrediction/AiPrediction";
import AiDocInsights from "./screens/AiDocInsights/AiDocInsights";
import Calendars from "./screens/AiDocInsights/Calendars/Calendars";
import MarketBroadViewScreen from "./screens/MarketBroadView/MarketBroadViewScreen";
import MacroViewScreen from "./screens/MacroView/MacroViewScreen";
import Home from "./screens/Home/Home";
import DetailPage from "./screens/Home/DetailPage";
import WSPage from "./screens/WSPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StockFundamentals />} />
      <Route path="/stockFundamentals" element={<StockFundamentals />} />
      <Route path="/fundSearch/:fund/:manager" element={<FundSearch />} />
      <Route path="/bioTech" element={<BioTech />} />
      <Route path="/dailytrade" element={<Home />} />
      <Route path="/sentimentAnalysis" element={<Sentiment />} />
      <Route path="/aiPrediction" element={<AiPrediction />} />
      <Route path="/technicalanalysis" element={<DetailPage />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
      <Route path="/AiDocInsights" element={<AiDocInsights />} />
      <Route path="/marketBroadView" element={<MarketBroadViewScreen />} />
      <Route path="/macroView" element={<MacroViewScreen />} />
      <Route path="/calendars" element={<Calendars />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
      <Route path="/ws_page" element={<WSPage/>}/>
    </Routes>
  );
};

export default App;
