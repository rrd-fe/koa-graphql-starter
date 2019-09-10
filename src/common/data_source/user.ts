/**
 * UserDataSource to access some REST apis from another microservice
 */
import { DataSource } from 'apollo-datasource';

export interface User {
    userId: number;
    name: string;
    age: number;
}

export default class UserDataSource extends DataSource {
    async getUserById(userId: number): Promise<User> {
        return new Promise(function(resolve) {
            resolve({
                userId: userId,
                name: `name-of-${userId}`,
                age: 18,
            });
        });
    }
}
