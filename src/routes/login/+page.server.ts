import type { PageServerLoad, Actions } from './$types';
import { db } from '$lib/server/db';
import { v4 as uuid } from 'uuid';
import { invalid, redirect } from '@sveltejs/kit';
import * as argon2 from 'argon2'
import { writable } from 'svelte/store'

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.user) {
        throw redirect(302, '/');
    }

    const genRand = (len: number) => {
        return Math.random().toString(36).substring(2, len + 2).toUpperCase();
    }
};

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const account_name = data.get('account_name');
        const password = data.get('password');
        console.log(account_name, password)

        if (!account_name || !password || typeof account_name !== 'string' || typeof password !== 'string') {
            return invalid(400, { invalid: true })
        }

        const user = await db.user.findUnique({ where: { account_name } });
        const sessionid = uuid();
        console.log(user, sessionid)
        if (!user) {
            const hashPass = await argon2.hash(password)
            const newUser = await db.user.create({
                data: {
                    account_name,
                    password: hashPass,
                },
            });
            await db.session.create({
                data: {
                    session_id: sessionid,
                    user: {
                        connect: {
                            id: newUser.id,
                        },
                    }
                },
            })
            cookies.set('sessionid', sessionid);
        } else {
            if (!await argon2.verify(user.password, password)) return invalid(400, { incorrect: true });

            await db.session.deleteMany({
                where: {
                    user_id: user.id,
                }
            })

            await db.session.create({
                data: {
                    session_id: sessionid,
                    user: {
                        connect: {
                            id: user.id,
                        },
                    }
                },
            })
            cookies.set('sessionid', sessionid);
        };
        throw redirect(302, '/')
    },
};