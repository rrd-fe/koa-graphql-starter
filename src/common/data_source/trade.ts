/**
 * TradeDataSource, used to access trade related data, such as orders
 */
import { DataSource } from 'apollo-datasource';
import { sleep } from '../util/util';

export interface Order {
    orderId: number;
    userId: number;
    productId: number;
    num: number;
    createAt: number;
}

export default class TradeDataSource extends DataSource {
    async getOrderByUser(userId: number): Promise<Order[]> {
        // mimic the time spent on network
        await sleep(1000);
        return [
            {
                orderId: 1,
                userId,
                productId: 1,
                num: 5,
                createAt: Date.now(),
            },
            {
                orderId: 2,
                userId,
                productId: 99,
                num: 2,
                createAt: Date.now(),
            },
        ];
    }
}
