import { ApolloClient } from '@apollo/client';

import authLink from './authLink';
import cache from './cache';
import errorLink from './errorLink';
import uriLink from './uriLink';

const GraphQLClient = new ApolloClient({
  link: errorLink.concat(authLink).concat(uriLink),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default GraphQLClient;
