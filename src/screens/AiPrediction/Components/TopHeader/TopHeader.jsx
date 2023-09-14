import React, { useState } from "react";
import "./TopHeader.scss";
// import menubarIcon from "./../../assets/menubar_icon.svg";

function TopHeader(props) {
  const { tabDataName, setTabDataName } = props;
  return (
    <div className="top_header_wrapper">
      <div className="header_divider">
        <div className="logo_menuWrapper">
          <h5 className="logo_text">Logo</h5>
          <div className="searchBar_tabs">
            {/* <div className="searchBar_wrapper">
                            <img src={searchIconWhite} alt='Search Icon' className="search_icon" />
                            <input type='text' name='searchBar' placeholder='Search here...' />
                        </div> */}
            <div className="tabs_wrapper">
              <div
                className={
                  tabDataName === "TopStocks" ? "active_tabs tabs" : "tabs"
                }
                onClick={() => setTabDataName("TopStocks")}
              >
                Top Stocks
              </div>
              {/* <div className={tabDataName === 'S&P500' ? 'active_tabs tabs' : 'tabs'} onClick={() => setTabDataName('S&P500')}>S&P500</div> */}
              <div
                className={tabDataName === "ETF" ? "active_tabs tabs" : "tabs"}
                onClick={() => setTabDataName("ETF")}
              >
                ETF
              </div>
            </div>
          </div>
        </div>
        <div className="menubarIcon_wrapper">
          {/* <img src={menubarIcon} alt="Menubar" /> */}
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
