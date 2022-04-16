import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 13124
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2566124
    },
    {
      name: "Roal of Ring",
      price: "$12",
      id: 235244
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
