import { onError } from '@apollo/client/link/error';

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    const { operationName } = operation;

    if (graphQLErrors) {
      console.warn(`GraphQL error: ${operationName} operation`);
      console.info('%O', graphQLErrors);
    }
    if (networkError) {
      console.warn(`GraphQL network error: ${operationName} operation`);
      console.info('%O', graphQLErrors);
    }
  },
);

export default errorLink;
