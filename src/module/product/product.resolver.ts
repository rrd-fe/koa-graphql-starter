import { CustomResolversContext } from 'common/interface/interface';
import { QueryProductDetailArgs } from '../module.interface';

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
        buy: () => {},
    },
};
