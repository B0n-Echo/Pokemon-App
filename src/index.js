import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app/',
    cache: new InMemoryCache()
  });

  ReactDOM.render(
    <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root')
  );