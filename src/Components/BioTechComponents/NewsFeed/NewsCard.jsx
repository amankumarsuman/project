import React from "react";

import "./NewsCard.scss";

const NewsCard = (props) => {
  return (
    <div className="newsCardContainer">
      <div className="imgTitle">
        <div className="image">
          <img alt="Company Logo" height={80} width={80} src={props.logo} />
        </div>
        <div className="title">
          <span className="header">{props.title}</span>
          <span className="date">12/08/2023</span>
        </div>
      </div>
      <div className="descriptionWraper">
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};
export default NewsCard;
