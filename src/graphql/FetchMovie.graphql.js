import gql from "graphql-tag";

/* GRAPHQL Query for fetching movie details */
export const FETCH_MOVIE_DETAILS = gql`
  query getMovies($id: ID!) {
    movie(id: $id) {
      cast(limit: 5) {
        name
      }
      genres {
        name
      }
      title
      overview
      poster {
        large
      }
      releaseDate
      runtime
      score
      languages {
        name
      }
    }
  }
`;
