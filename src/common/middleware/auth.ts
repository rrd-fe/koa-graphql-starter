/**
 * get the current login user
 */
import { Context, Middleware } from 'koa';
import { User } from '../data_source/user';

export default function authMiddleware() {
    return async function auth(ctx: Context, next: Function) {
        // recover the login user and save to ctx
        const userIdFromSession = ctx.headers['x-user-id'];
        if (userIdFromSession) {
            ctx.sessionUser = {
                userId: `${userIdFromSession}`,
                name: `name-of-${userIdFromSession}`,
                age: 18,
            } as User;
        }
        await next();
    };
}
