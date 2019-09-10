/**
 * get the current login user
 */
import { Context, Middleware } from 'koa';

export default function authMiddleware() {
    return async function auth(ctx: Context, next: Function) {
        // TODO recover the login user and save to ctx
        await next();
    };
}
