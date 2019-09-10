import { Context } from 'koa';

import ProductDataSource from '../data_source/product';
import UserDataSource from '../data_source/user';
import TradeDataSource from '../data_source/trade';

/**
 * 自定义dataSource、context
 * 参考：https://patrickdesjardins.com/blog/apollo-graphql-resolvers-and-data-source-separation
 * */

export interface CustomDataSource {
    product: ProductDataSource;
    user: UserDataSource;
    trade: TradeDataSource;
}

export interface CustomContext {
    koaCtx: Context;
}

export interface CustomResolversContext extends CustomContext {
    dataSources: CustomDataSource;
}
