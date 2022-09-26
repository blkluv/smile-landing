import { PUBLIC_PIXEL } from '$env/static/public';
import { ACCESS_TOKEN, TEST_EVENT_CODE } from '$env/static/private';

export const sendEventToCapi = async payload => {
    try {
        const body = new FormData()
        body.append('data', JSON.stringify(payload));
        body.append("access_token", ACCESS_TOKEN)
        TEST_EVENT_CODE && body.append("test_event_code", TEST_EVENT_CODE)

        const requestOptions = {
            method: "POST",
            body
        }

        const response = await fetch(`https://graph.facebook.com/v13.0/${PUBLIC_PIXEL}/events`, requestOptions)

        if (!response.ok) {
            //throw new Error(`Connection failure to Facebook Server.`)
            throw new Error(response.message)
        } else {
            const capiResponse = await response.json()

            const logTx = {
                capiResponse,
                PUBLIC_PIXEL,
                ACCESS_TOKEN,
                TEST_EVENT_CODE
            }

            //json response example: 
            //{"events_received":1,"messages":[],"fbtrace_id":"AlEbQv4iavf_SbArt9iFKA2"}
            return logTx
        }

    } catch (err) {
        return {
            error: err.name,
            message: err.message
        }

    }
}