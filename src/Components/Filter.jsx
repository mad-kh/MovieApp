import React from "react";
import MovieList from "../Components/MovieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, InputGroup } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function Filter({ setTitleSearch, setRateSearch, Rate, getSearchInput,Titel }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "30%",
        background: "Pink",
      }}
    >
      <div>
        <InputGroup>
          <FormControl
            placeholder="Search for a movie..."
            aria-label="Title"
            aria-describedby="basic-addon1"
            onChange={(e) => getSearchInput(e.target.value)}
            width="30px"
          />
        </InputGroup>

        <ReactStars
          count={8}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <MovieList Titel={movies.Titel} Rate={movies.Rate/>}
    </div>
  );
}

export default Filter;
