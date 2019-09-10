/**
 * server entry
 */

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { ApolloServer, gql } from 'apollo-server-koa';

import typeDefs from './module/typeDefs';
import resolvers from './module/resolver';
import getDataSource from './common/data_source/index';
import auth from './common/middleware/auth';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: getDataSource,
});

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
app.use(auth());
server.applyMiddleware({ app });
// alternatively you can get a composed middleware from the apollo server
// app.use(server.getMiddleware());

app.listen({ port: 4000 }, () =>
    console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
);
