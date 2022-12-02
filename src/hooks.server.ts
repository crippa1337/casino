import { db } from "$lib/server/db";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get("sessionid");
    if (!session) return await resolve(event);
    const sessionUserID = await db.session.findUnique({
        where: {
            session_id: session
        },
        select: {
            user_id: true
        }
    });

    if (!sessionUserID) {
        // @ts-ignore
        event.locals.user = undefined
        return await resolve(event)
    }

    const user = await db.user.findUnique({
        where: {
            id: sessionUserID.user_id
        },
        select: {
            id: true,
            account_name: true,
            balance: true
        }
    });

    if (!user) {
        // @ts-ignore
        event.locals.user = undefined
        return await resolve(event)
    }

    event.locals.user = user;
    console.log(event.locals.user)
    return await resolve(event);
}