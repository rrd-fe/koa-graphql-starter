/**
 * server entry
 */

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { ApolloServer, gql } from 'apollo-server-koa';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();

// add body parser
app.use(
    bodyParser({
        enableTypes: ['json', 'form'],
        formLimit: '1mb',
        jsonLimit: '1mb',
        textLimit: '1mb',
    }),
);
server.applyMiddleware({ app });
// alternatively you can get a composed middleware from the apollo server
// app.use(server.getMiddleware());

app.listen({ port: 4000 }, () =>
    console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
);
