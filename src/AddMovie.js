import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        placeholder="Enter Movie Name"
        name="name"
        value={name}
        onChange={updateName}
      />
      <input
        type="text"
        placeholder="Enter Movie Price"
        price="price"
        value={price}
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
