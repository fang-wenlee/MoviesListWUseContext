import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
