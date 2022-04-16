import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const movies = useContext(MovieContext);

  return (
    <div style={{ backgroundColor: "lightcoral" }}>
      <h3>Fang-Wen Lee</h3>
      <p>List of Movies:{movies.length}</p>
    </div>
  );
};

export default Nav;
