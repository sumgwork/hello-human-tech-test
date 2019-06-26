import gql from "graphql-tag";

/* GRAPHQL Query for fetching tom cruise movies from server */
export const TOM_CRUISE_MOVIES = gql`
  query getMovies {
    person(id: "500") {
      name
      workedOn {
        ... on Movie {
          __typename
          id
          title
          score
          votes
          poster {
            thumbnail
          }
        }
        ... on TV {
          __typename
          id
          title: name
          score
          votes
          poster {
            thumbnail
          }
        }
      }
    }
  }
`;
