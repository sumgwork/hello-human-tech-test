import React from "react";
import styled from "styled-components";
import moment from "moment";
import Heading from "../Heading";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  padding: 2rem;
  display: grid;
  grid-gap: 2rem;
  @media screen and (min-width: 40rem) {
    grid-template-columns: 2fr 3fr;
  }
  .wrapper {
    &__image {
      text-align: center;
      img {
        max-width: 100%;
        max-height: 50vh;
        @media screen and (min-width: 40rem) {
          max-height: none;
        }
      }
    }
    &__star {
      color: ${props => props.theme.orange};
      display: inline-block;
      margin-right: 3px;
    }
  }
`;

const Detail = styled.div`
  font-size: 1.2rem;
  margin: 1rem;
  .heading {
    font-weight: 700;
    color: black;
    font-size: 1.3rem;
    display: block;
    margin: 0;
    padding: 0;
  }
  .detail {
  }
`;

const MovieDetails = ({
  movie: {
    poster,
    title,
    overview,
    cast,
    genres,
    releaseDate,
    runtime,
    score,
    languages
  }
}) => (
  <Wrapper>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className="wrapper__image">
      {poster && <img src={poster.large} alt={title} />}
    </div>
    <div>
      <Heading>{title}</Heading>
      <Detail>
        <span className="heading">Overview </span>

        {overview}
      </Detail>
      <Detail>
        <span className="heading">Main Cast </span>
        {cast.map(actor => actor.name).join(", ")}
      </Detail>
      <Detail>
        <span className="heading">Genres </span>
        {genres.map(genre => genre.name).join(", ")}
      </Detail>
      <Detail>
        <span className="heading">Languages </span>
        {languages.map(language => language.name).join(", ")}
      </Detail>
      <Detail>
        <span className="heading">Release Date </span>
        {moment(releaseDate).format("DD MMM YYYY")}
      </Detail>
      <Detail>
        <span className="heading">Runtime </span>
        {runtime && `${runtime} mins`}
      </Detail>
      <Detail>
        <span className="heading">Rating </span>
        <span className="wrapper__star">&#9733;</span>
        {score}
      </Detail>
    </div>
  </Wrapper>
);
export default MovieDetails;
