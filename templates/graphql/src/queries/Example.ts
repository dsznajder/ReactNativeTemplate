import { gql } from '@apollo/client';

/**
 * Queries
 */
export const GetUser = gql`
  query GetUser {
    user {
      id
    }
  }
`;
