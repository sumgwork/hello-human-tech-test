import React from "react";

import { withRouter } from "react-router-dom";
import { Tile } from "./MovieTile.styles";

const MovieTile = props => {
  const { id, title, poster, score, votes } = props;

  const goToMoviePage = () => {
    props.history.push(`/movie/${id}`);
  };

  return (
    <Tile>
      <div className="movie__thumbnail">
        {poster && <img src={poster.thumbnail} alt={title} />}
      </div>
      <div>
        <span className="movie__title">{title}</span>
        <span className="movie__score">
          <span className="movie__score-star">&#9733;</span>
          {score}
          <br />
          <span className="movie__score-votes">({votes} votes)</span>
        </span>
        <button
          className="primary-button movie__button"
          onClick={goToMoviePage}
        >
          View Details
        </button>
      </div>
    </Tile>
  );
};

export default withRouter(MovieTile);
