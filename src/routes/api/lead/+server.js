/* import { error } from '@sveltejs/kit';
import cookie from 'cookie';
import { getEdgeUserData } from '$lib/utils/cfEdgeProperties'
import { PRODUCT_NAME, PRODUCT_CATEGORY } from '$lib/store/store'
import { sha256 } from '$lib/utils/crypto'
import { sendEventToCapi } from '$lib/utils/sendEventToCapi' */

/** @type {import('./$types').RequestHandler} */

export const POST = async ({ request, url, clientAddress }) => {
    const payload = await request.json()
    payload.ok = 1
    payload.url = url
    payload.clientAddress = clientAddress

    return new Response(JSON.stringify(payload))

}