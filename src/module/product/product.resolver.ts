import { CustomResolversContext } from 'common/interface/interface';
import { QueryProductDetailArgs, MutationBuyArgs } from '../module.interface';

export default {
    Query: {
        productDetail: async (
            root: any,
            args: QueryProductDetailArgs,
            { dataSources }: CustomResolversContext,
        ) => {
            const product = await dataSources.product.getProductDetail(
                args.productId,
            );
            return product;
        },
        productList: async (
            root: any,
            args: {},
            { dataSources }: CustomResolversContext,
        ) => {
            const productList = await dataSources.product.getProductList();
            return productList;
        },
    },
    Mutation: {
        buy: async (
            root: any,
            args: MutationBuyArgs,
            { dataSources, koaCtx }: CustomResolversContext,
        ) => {
            let order = null;
            if (koaCtx.sessionUser && koaCtx.sessionUser.userId) {
                order = await dataSources.trade.buy({
                    userId: koaCtx.sessionUser.userId,
                    ...args,
                });
            }
            return order;
        },
    },
};
