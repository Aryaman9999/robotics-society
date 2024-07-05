// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import React from 'react';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/0z1ck6ir8wrt`,
  headers: {
    Authorization: `Bearer KedyVo0s5FOqHnj8XG1CHmk8eXTsrmsPh36LDmX6hS4`,
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export const ApolloProviderWrapper = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);
