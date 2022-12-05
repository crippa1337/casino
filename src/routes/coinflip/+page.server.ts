import { db } from '$lib/server/db';
import { invalid, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(302, '/');
    }

    return {
        rooms: await db.cfrooms.findMany()
    };
};

export const actions: Actions = {
    create_bet: async ({ request, locals }) => {
        const data = await request.formData();
        let get_bet = data.get('betting_input') as string;

        if (!get_bet || typeof get_bet !== 'string') return invalid(400, { incorrect: true });
        if (get_bet.length > 10) return invalid(400, { incorrect: true });
        let bet: number = parseInt(get_bet)
        if (bet > locals.user.balance) return invalid(400, { invalid: true });

        let room = db.cfrooms.findFirst({
            where: {
                occupied: 0
            }
        });
        console.log(room);
    },

    refresh_bets: async () => {
        return {
            rooms: await db.cfrooms.findMany()
        };
    },
};