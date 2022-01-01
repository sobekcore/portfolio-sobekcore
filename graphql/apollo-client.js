import { ApolloClient, InMemoryCache } from "@apollo/client";
import enums from "@/utility/enums";

const client = new ApolloClient({
  uri: enums.SANITY_GQL_URL,
  cache: new InMemoryCache(),
});

export default client;