import { createHttpLink } from '@apollo/client';
import unfetch from 'unfetch';

const uriLink = createHttpLink({
  uri: '<FILL-ME>',
  ...(__DEV__ && { fetch: unfetch as NotWorthIt }),
});

export default uriLink;
