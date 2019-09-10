import getDataSources from 'common/data_source/index';
import { QueryProductDetailArgs } from '../interface';

const productDataSource = getDataSources().product;

export default {
    Query: {
        productDetail: async (root: any, args: QueryProductDetailArgs) => {
            const product = await productDataSource.getProductDetail(
                args.productId,
            );
            return product;
        },
        productList: async (root: any, args: {}) => {
            const productList = await productDataSource.getProductList();
            return productList;
        },
    },
    Mutation: {
        buy: () => {},
    },
};
