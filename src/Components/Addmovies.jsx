import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Form, FormGroup } from "react-bootstrap";
import MovieList from "./MovieList/MovieList";

const AddMovie = (props) => {
  const [Add, setAdd] = useState(false);
  const handleAdd = (newMovie) => {
    setNewMovie(newMovie);
  };
  const [newMovie, setNewMovie] = useState({
    Titel: "",
    Description: "",
    PosterURl: "",
    Rate: 1,
  });

  const toggleAdd = () => setAdd(!Add);
  const handelChange = (input) => {
    setNewMovie({ input });
  };

  return (
    <div>
      <Button onClick={toggleAdd}>{Add ? "Add Movies" : "+"}</Button>
      {Add ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            margin: "10px",
          }}
        >
          <Form.Control
            type="text"
            placeholder="Movie's Titel"
            name="Title"
            onChange={(e) => handelChange(e.target.value)}
          />
          <Form.Control
            type="text"
            name="Description"
            placeholder="Description"
            onChange={(e) => handelChange(e.target.value)}
          />
          <Form.Control
            type="text"
            name="PosterURL"
            placeholder="Poster URL"
            onChange={(e) => handelChange(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Rating"
            name="Rate"
            onChange={(e) => handelChange(e.target.value)}
          />
          <Button
            color="primary"
            onClick={(e) => {
              handleAdd(newMovie);
              toggleAdd();
              setNewMovie({
                Titel: "",
                Description: "",
                PosterURL: "",
                rate: 1,
              });
            }}
          >
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggleAdd}>
            Cancel
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddMovie;
