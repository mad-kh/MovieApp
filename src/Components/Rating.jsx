import React from "react";
function Rate({ Rate, setRateSearch }) {
  const stars = (x) => {
    let starArray = [];
    for (let i = 1; i <= 8; i++) {
      if (i <= x) {
        starArray.push(
          <span className="stars" key={i} onClick={() => setRateSearch(i)}>
            ★
          </span>
        );
      } else {
        starArray.push(
          <span className="stars" key={i} onClick={() => setRateSearch(i)}>
            ☆
          </span>
        );
      }
    }
    return starArray;
  };

  return <div>{stars(Rate)}</div>;
}

export default Rate;
