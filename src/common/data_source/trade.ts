/**
 * TradeDataSource, used to access trade related data, such as orders
 */
import { DataSource } from 'apollo-datasource';
import { sleep } from '../util/util';

export interface Order {
    orderId: string;
    userId: string;
    productId: string;
    num: number;
    createAt: number;
}

interface BuyArgs {
    userId: string;
    productId: string;
    num: number;
}

// trick database
const orders: Order[] = [];

export default class TradeDataSource extends DataSource {
    async getOrderByUser(userId: string): Promise<Order[]> {
        // mimic the time spent on network
        await sleep(1000);
        return orders.filter(function(order) {
            return order.userId === userId;
        });
    }

    async buy(args: BuyArgs): Promise<Order> {
        await sleep(200);
        const orderId = `order-id-${orders.length}`;
        const order: Order = {
            orderId,
            userId: args.userId,
            productId: args.productId,
            num: args.num,
            createAt: Date.now(),
        };
        orders.push(order);
        return order;
    }
}
