import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_request, previousContext) => {
  return {
    headers: {
      ...previousContext.headers,
      'Content-Type': 'application/json',
      // Authorization: `Bearer: ${accessToken}`,
    },
  };
});

export default authLink;
