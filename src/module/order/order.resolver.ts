import { CustomResolversContext } from 'common/interface/interface';

export default {
    Order: {
        product: async (
            { productId }: any,
            args: any,
            { dataSources }: CustomResolversContext,
        ) => {
            const product = await dataSources.product.getProductDetail(
                productId,
            );
            return product;
        },
        user: async (
            { userId }: any,
            args: any,
            { dataSources }: CustomResolversContext,
        ) => {
            const user = await dataSources.user.getUserById(userId);
            return user;
        },
    },
};
