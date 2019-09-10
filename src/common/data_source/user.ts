/**
 * UserDataSource to access some REST apis from another microservice
 */
import { DataSource } from 'apollo-datasource';

export interface User {
    userId: string;
    name: string;
    age: number;
}

export default class UserDataSource extends DataSource {
    async getUserById(userId: string): Promise<User> {
        return new Promise(function(resolve) {
            resolve({
                userId: `user-id-${userId}`,
                name: `name-of-${userId}`,
                age: 18,
            });
        });
    }
}
