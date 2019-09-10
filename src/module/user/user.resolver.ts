import getDataSources from 'common/data_source/index';
import { MutationLoginArgs } from '../interface';

const userDataSource = getDataSources().user;

export default {
    Query: {
        me: async (parent: any, args: any, context: any) => {
            context.userId = '8';
            const user = await userDataSource.getUserById(context.userId);
            return user;
        },
    },
    Mutation: {
        login: (parent: any, args: MutationLoginArgs) => {},
    },
};
