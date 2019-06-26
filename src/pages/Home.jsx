import React from "react";
import { Helmet } from "react-helmet";
import MoviesList from "../components/MoviesList/MoviesList";
import { TOM_CRUISE_MOVIES } from "../graphql/TomCruiseMovies.graphql";
import Heading from "../components/Heading";
import withQueryData from "../components/HOC/withQueryData";

const Home = props => {
  return (
    <div>
      <Helmet>
        <title>Cruisey Movie Monday | Home</title>
      </Helmet>
      <Heading>Cruisey Movie Monday</Heading>

      <MoviesList
        movies={props.person.workedOn.filter(
          movie => movie.__typename === "Movie"
        )}
      />
    </div>
  );
};

export default withQueryData(TOM_CRUISE_MOVIES)(Home);
