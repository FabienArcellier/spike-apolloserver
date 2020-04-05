
import { Query } from './query'
import { ApolloServer } from 'apollo-server';

const query = new Query()
const typeDefs = query.typedefs()
const resolvers = query.resolvers()

const server = new ApolloServer({ typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
