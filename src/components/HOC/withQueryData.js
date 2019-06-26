import { Query } from "react-apollo";
import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  text-align: center;
  background: url("/loader.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 50px;
  margin: 2rem;
`;

// HOC for wrapping the component with GraphQL data
export default (query, variables = {}, props) => WrappedComponent => {
  const WrapperComponent = () => {
    return (
      <Query query={query} variables={variables}>
        {({ data, loading, error, errors }) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <p className="error">{error.toString()}</p>;
          }
          return (
            <div>
              <WrappedComponent {...data} {...props} />
            </div>
          );
        }}
      </Query>
    );
  };
  return WrapperComponent;
};
