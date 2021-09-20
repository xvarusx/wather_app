import React from "react";

export const ListCards = ({ data }) => {
  console.log(data);
  return (
    <div className="card_container">
      <div className="card">
        <h2>{data.name.toUpperCase()}</h2>
        <h3>
          {data.weather[0].description.toLowerCase()}
          <span>
            {data.wind.speed}km/h <span className="dot">•</span> Precip 0%
          </span>
        </h3>
        <h1>{Math.round(data.main.temp)}</h1>
        <div className="sky">
          <div className="sun"></div>
          <div className="cloud">
            <div className="circle-small"></div>
            <div className="circle-tall"></div>
            <div className="circle-medium"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
