import React from "react";
import MovieList from "./MovieList";

const MovieList = ({ movies, TitelSearch, RateSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "1%",
        alignItems: "space-between",
      }}
    >
      {movies
        .filter(
          (el) =>
            el.Titel.toLowerCase().includes(TitelSearch.toLowerCase()) &&
            el.Rate >= RateSearch
        )
        .map((el) => (
          <MovieList movie={el} />
        ))}
    </div>
  );
};
