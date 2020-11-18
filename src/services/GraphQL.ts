import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  Observable,
} from '@apollo/client';
import unfetch from 'unfetch';

const authLink = new ApolloLink((operation, forward) => {
  const previousContext = operation.getContext();

  return new Observable((observer) => {
    operation.setContext(() => ({
      headers: {
        ...previousContext.headers,
        'Content-Type': 'application/json',
        // 'Access-Token': accessToken,
        // Client,
        // Uid,
      },
    }));

    forward(operation).subscribe(observer);
  });
});

// @ts-expect-error
const uriLink = createHttpLink({
  uri: 'https://egzaminy-pes.herokuapp.com/graphql',
  ...(__DEV__ && { fetch: unfetch }),
});

const GraphQLClient = new ApolloClient({
  link: authLink.concat(uriLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'cache-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default GraphQLClient;
