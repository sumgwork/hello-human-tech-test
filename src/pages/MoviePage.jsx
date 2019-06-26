import React from "react";
import withQueryData from "../components/HOC/withQueryData";
import { FETCH_MOVIE_DETAILS } from "../graphql/FetchMovie.graphql";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`;

const MoviePage = props => {
  const Movie = withQueryData(
    FETCH_MOVIE_DETAILS,
    { id: props.match.params.id },
    { ...props }
  )(MovieDetails);

  return (
    <div>
      <Movie />
      <Footer>
        <button
          className="primary-button"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Go back
        </button>
      </Footer>
    </div>
  );
};

export default withRouter(MoviePage);
