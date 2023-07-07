import { db } from '~/utils/db.server'

export async function getPosts() {
    return await db.cryptoCurrency.findMany()
}