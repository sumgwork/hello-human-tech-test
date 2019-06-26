import gql from "graphql-tag";

/* GRAPHQL Query for searching movies from server */
export const SEARCH_MOVIES_QUERY = gql`
  query searchMovies($query: String!) {
    searchMovies(query: $query) {
      id
      title
      poster {
        thumbnail
      }
      score
      votes
    }
  }
`;
