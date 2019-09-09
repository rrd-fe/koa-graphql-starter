/**
 * ProductDataSource for accessing product related api
 */
import { DataSource } from 'apollo-datasource';
import { sleep } from '../util/util';

export interface Product {
    productId: number;
    name: string;
    img: string;
    price: number;
}

export default class ProductDataSource extends DataSource {
    async getProductList(): Promise<Product[]> {
        await sleep(300);
        return [
            {
                productId: 1,
                name: 'TV',
                img: 'https://www.xx.com/aaa',
                price: 100,
            },
            {
                productId: 2,
                name: 'Car',
                img: 'https://www.11.com/car',
                price: 5000,
            },
        ];
    }
    async getProductDetail(productId: number): Promise<Product | null> {
        await sleep(500);
        return {
            productId,
            name: `name-for-product-${productId}`,
            img: `Product Image url`,
            price: 10,
        };
    }
}
