import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ypl2q7wt.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

export default client;
