import { Context, Request, Response } from 'koa';
import { IncomingMessage, ServerResponse } from 'http';
import ProductDataSource from '../data_source/product';
import UserDataSource, { User } from '../data_source/user';
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

export interface DemoKoaContext extends Context {
    sessionUser?: User;
}

export interface CustomContext {
    koaCtx: DemoKoaContext;
    req: IncomingMessage;
    res: ServerResponse;
    request: Request;
    response: Response;
}

export interface CustomResolversContext extends CustomContext {
    dataSources: CustomDataSource;
}
