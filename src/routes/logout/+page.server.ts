import { db } from '$lib/server/db';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    throw redirect(302, '/');
};

export const actions: Actions = {
    default: async ({ cookies }) => {
        const sessionCookie = cookies.get('sessionid');

        if (!sessionCookie) return redirect(302, '/login');

        await db.session.delete({
            where: {
                session_id: sessionCookie
            }
        });

        cookies.delete('sessionid');

        throw redirect(302, '/login');
    }
};