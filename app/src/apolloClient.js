import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const baseUrl = process.env.BASE_URL || 'http://www.reactweekly.co/';
const url = `${baseUrl}api`;

const client = new ApolloClient({
  networkInterface: createNetworkInterface(url),
  queryTransformer: addTypeName,
});

export default client;
