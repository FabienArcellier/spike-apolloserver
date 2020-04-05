import { Query } from '../src/query'
import { ApolloServer } from 'apollo-server';
import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing';


describe('Query', () => {
    let tested: Query;
    let query: any;

    beforeEach(() => {
        tested = new Query()
        const typeDefs = tested.typedefs()
        const resolvers = tested.resolvers()
        const server = new ApolloServer({
            typeDefs,
            resolvers
          });

        let client = createTestClient(server);
        query = client.query
    });

    test('shoud have valid schema in typeDefs', () => {
        tested.typedefs()
    });

    test('user should work without argument', async () => {
        // Acts
        // Assign
        const res = await query({ query: '{ user { name, age } }' });
        // Assert
        expect(res.data.user.name).toEqual('My name is stranger !')
    })
});