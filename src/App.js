import "./App.css";
import React, { useState } from "react";
import Addmovies from "./Components/Addmovies";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      Titel: "Moana",
      Description:
        "The film tells the story of Moana, the strong-willed daughter of a chief of a Polynesian village, who is chosen by the ocean itself to reunite a mystical relic with the goddess Te Fiti.",
      PosterURL:
        "https://images-na.ssl-images-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg",

      Rate: 6,
    },
    {
      Titel: "Soul",
      Description:
        "The story follows a middle school music teacher named Joe Gardner, who seeks to reunite his soul and his body after they are accidentally separated, just before his big break as a jazz musician. Soul is the first Pixar film to feature an African-American protagonist.",
      PosterURL:
        "https://upload.wikimedia.org/wikipedia/en/9/95/Soul_Poster.jpeg",
      Rate: 5,
    },
    {
      Titel: "Frozen",
      Description:
        "The film depicts a princess who sets off on a journey alongside an iceman, his reindeer, and a snowman to find her estranged sister, whose icy powers have inadvertently trapped their kingdom in eternal winter.",
      PosterURL:
        "https://images-na.ssl-images-amazon.com/images/I/81zbSEXnDOL.jpg",
      Rate: 7,
    },
  ]);
  const [RateSearch, setRateSearch] = useState(0);

  const [TitelSearch, setTitelSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const getSearchInput = (input) => {
    setSearchInput(input);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            background: "Pink",
          }}
        >
          <Filter movies={movies} getSearchInput={getSearchInput} />

          <MovieList movies={movies} />
          <Addmovies movies={movies} />
        </div>
      </header>
    </div>
  );
}

export default App;
