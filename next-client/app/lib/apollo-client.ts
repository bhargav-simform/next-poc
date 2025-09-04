import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const backendURL = process.env.NEXT_PUBLIC_API_URL;

const httpLink = createHttpLink({
  uri: `${backendURL}/graphql`,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
