/**
 * custom dirctives entry
 */

import {
    gql,
    SchemaDirectiveVisitor,
    AuthenticationError,
} from 'apollo-server';
import { GraphQLSchema, GraphQLField, defaultFieldResolver } from 'graphql';

const isLoginFilterDirective = gql`
    directive @loginFilter on FIELD_DEFINITION
`;

class LoginFilterDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field: GraphQLField<any, any>): void {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = function loginFilterResolve(
            parent,
            args,
            context,
            info,
        ) {
            if (!context.koaCtx.sessionUser) {
                throw new AuthenticationError('must login to operate');
            }
            return resolve.call(this, parent, args, context, info);
        };
    }
}

export default {
    typeDefs: [isLoginFilterDirective],
    schemaDirectives: {
        loginFilter: LoginFilterDirective,
    },
};
