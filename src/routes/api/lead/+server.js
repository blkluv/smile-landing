
/** @type {import('./$types').RequestHandler} */

export const POST = async ({ request }) => {
    const payload = await request.json()
    payload.ok = 1

    return new Response(JSON.stringify(payload))

}