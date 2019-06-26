import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ApolloConsumer } from "react-apollo";
import Downshift, { resetIdCounter } from "downshift";
import debounce from "lodash.debounce";
import { SEARCH_MOVIES_QUERY } from "../../graphql/SearchMovies.graphql";
import { DropDown, DropDownItem, SearchStyles } from "./Search.styles";

const Search = props => {
  const [loading, setLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState([]);

  //debounce is used to wait for intermediate events to cease
  const onChange = debounce(async (e, client) => {
    setLoading(true);

    //Manually query Apollo client
    const res = await client.query({
      query: SEARCH_MOVIES_QUERY,
      variables: {
        query: e.target.value
      }
    });
    setLoading(false);
    setSearchMovies(res.data.searchMovies);
  }, 350);

  const routeToItem = movie => {
    props.history.push(`/movie/${movie.id}`);
    setSearchMovies([]);
    setLoading(false);
  };

  resetIdCounter();
  return (
    <SearchStyles>
      <Downshift
        onChange={routeToItem}
        itemToString={movie => (movie === null ? "" : movie.title)}
      >
        {({
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
          inputValue
        }) => (
          <div>
            <ApolloConsumer>
              {client => (
                <input
                  {...getInputProps({
                    onChange: e => {
                      e.persist();
                      onChange(e, client);
                    },
                    placeholder: "Search for a movie",
                    type: "search",
                    id: "search",
                    className: loading ? "loading" : null
                  })}
                />
              )}
            </ApolloConsumer>
            {isOpen && (
              <DropDown>
                {searchMovies.map((movie, index) => (
                  <DropDownItem
                    {...getItemProps({ item: movie })}
                    key={movie.id}
                    highlighted={index === highlightedIndex}
                  >
                    {movie.poster && (
                      <img
                        width="50"
                        src={movie.poster.thumbnail}
                        alt={movie.title}
                      />
                    )}
                    <p>{movie.title}</p>
                  </DropDownItem>
                ))}
                {!searchMovies.length && !loading && (
                  <DropDownItem>No matching item</DropDownItem>
                )}
              </DropDown>
            )}
          </div>
        )}
      </Downshift>
    </SearchStyles>
  );
};

export default withRouter(Search);
