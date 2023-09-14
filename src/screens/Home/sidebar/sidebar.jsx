import React from "react";
import msgIcon from "../../../assets/icons/message.svg";
import stockIcon from "../../../assets/icons/stocks.svg";
import layoutIcon from "../../../assets/icons/layout.svg";
import barChartIcon from "../../../assets/icons/bar-chart.svg";
import "./sidebar.scss";

export default function Sidebar() {
	return (
		<>
			<div className="sidebar">
				<div className="sidebar-item">
					<div className="icon">
						<img src={stockIcon} alt="stockIcon" />
					</div>
				</div>
				<div className="sidebar-item">
					<div className="icon">
						<img src={layoutIcon} alt="layoutIcon" />
					</div>
				</div>
				<div className="sidebar-item">
					<div className="icon">
						<img src={barChartIcon} alt="barChartIcon" />
					</div>
				</div>
				<div className="sidebar-item">
					<div className="icon">
						<img src={msgIcon} alt="msgIcon" />
					</div>
				</div>
			</div>
		</>
	);
}
