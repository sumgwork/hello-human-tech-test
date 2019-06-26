import React from "react";
import ApolloClient from "apollo-client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

// Hooking to the GraphQL Server - preparing client
const client = new ApolloClient({
  link: new HttpLink({
    uri:
      "https://112qaej5y9.execute-api.ap-southeast-2.amazonaws.com/dev/graphql"
  }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <Switch>
            <Route path="/movie/:id" exact component={MoviePage} />
            <Route path="/" exact component={Home} />
            <Route path="**" component={Error} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
