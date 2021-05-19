import React from "react";
import "../MovieList/MovieList.css";
import Rating from "../Rating";

const MovieList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "Center",
        backgroundColor: "aqua",
      }}
    >
      {props.movies.map((movie, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "100px",
          }}
          className="image-container d-flex justify-content-start m-3"
        >
          <img
            src={movie.PosterURL}
            alt="movie"
            width="300px"
            height="300px"
          ></img>
          <h1>{movie.Titel}</h1>
          <p>{movie.Description}</p>
          <Rating Rate={movie.Rate} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
