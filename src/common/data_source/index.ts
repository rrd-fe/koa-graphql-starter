/**
 * entry for data sources
 */

import ProductDataSource, { Product } from './product';
import UserDataSource, { User } from './user';
import TradeDataSource, { Order } from './trade';

export { Product, User, Order };

export default function getDataSources() {
    return {
        product: new ProductDataSource(),
        user: new UserDataSource(),
        trade: new TradeDataSource(),
    };
}
