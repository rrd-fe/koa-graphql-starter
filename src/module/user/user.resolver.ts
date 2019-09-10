import { CustomResolversContext } from 'common/interface/interface';
import { MutationLoginArgs } from '../module.interface';

export default {
    Query: {
        me: (parent: any, args: any, { koaCtx }: CustomResolversContext) => {
            return koaCtx.sessionUser;
        },
    },
    Mutation: {
        login: (parent: any, args: MutationLoginArgs) => {},
    },
    User: {
        orders: async (
            { userId }: any,
            args: any,
            { dataSources }: CustomResolversContext,
        ) => {
            const orders = dataSources.trade.getOrderByUser(userId);
            return orders;
        },
    },
};
