import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import { Movies } from "./MoviesList.styles";

const MoviesList = props => {
  return (
    <Movies>
      {props.movies.map(movie => (
        <MovieTile {...movie} key={movie.id} />
      ))}
    </Movies>
  );
};

export default MoviesList;
