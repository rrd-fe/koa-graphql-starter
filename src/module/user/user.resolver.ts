import { CustomResolversContext } from 'common/interface/interface';
import { MutationLoginArgs } from '../module.interface';

export default {
    Query: {
        me: async (
            parent: any,
            args: any,
            { dataSources }: CustomResolversContext,
        ) => {
            const userId = '8'; // 从 koaCtx上获取
            return dataSources.user.getUserById(userId);
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
