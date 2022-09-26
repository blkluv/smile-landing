import cookie from 'cookie';
import { PRODUCT_NAME, PRODUCT_CATEGORY } from '$lib/store/store'
import { v4 as uuid } from '@lukeed/uuid';
import { getEdgeUserData } from '$lib/utils/cfEdgeProperties'
import { sha256 } from '$lib/utils/crypto'
import { sendEventToCapi } from '$lib/utils/sendEventToCapi'


/** @type {import('./$types').PageServerLoad} */
export async function load({ request, url, clientAddress, platform }) {

    /* 
        Facebook recommend that you always send _fbc and _fbp browser cookie values in the fbc and fbp event parameters, respectively, when available. 
        For more information see: https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/
     */
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const fbp = cookies._fbp || null
    let fbc = cookies._fbc || null
    const fbclid = url.searchParams.get('fbclid') || null

    if (!fbc && fbclid) {
        //Example: fb.1.1642304960291.IwAR0TWG8gs67UHw1jXZm0pWc3BInu-0D28jmHsuZxj3GLrxthCPetfenjOVQ
        fbc = 'fb.1.' + (+new Date()) + '.' + fbclid
    }

    /* 
        Facebook says that deduplication is necessary when sharing the same events from both the browser and the server.
        So we need to ensure that both events use the identical event_name and event_id.
        For more information see: https://www.facebook.com/business/help/823677331451951?id=1205376682832142
    */
    const eventId = uuid() ////This will be our 'event_id' for this event.

    const current_timestamp = Math.floor(new Date() / 1000);
    const userAgent = request.headers.get('User-Agent')

    /* 
       Facebook says that sending additional customer information parameters may help increase Event Match Quality (only accept hashed data for some properties).
       We can get some additional parameters for free (CloudFlare specific).
       For more information see: https://developers.facebook.com/docs/marketing-api/conversions-api/best-practices/#req-rec-params
    */
    const userData = getEdgeUserData(request)
    const country = userData.country ? await sha256(userData.country) : null
    const ct = userData.city ? await sha256(userData.city) : null
    const st = userData.region ? await sha256(userData.region) : null
    const zp = userData.postalCode ? await sha256(userData.postalCode) : null


    const payload = [
        {
            "event_name": "ViewContent",
            "event_time": current_timestamp,
            "action_source": "website",
            event_id: eventId,
            "event_source_url": url.href,
            "user_data": {
                "client_ip_address": clientAddress,
                "client_user_agent": userAgent,
                ...(fbc && { fbc }),
                ...(fbp && { fbp }),
                ...(country && { "country": [country] }),
                ...(ct && { "ct": [ct] }),
                ...(st && { "st": [st] }),
                ...(zp && { "zp": [zp] })
            },
            "custom_data": {
                ...(PRODUCT_NAME && { "content_name": PRODUCT_NAME }),
                ...(PRODUCT_CATEGORY && { "content_category": PRODUCT_CATEGORY })
            }
        }
    ]
    const res = await sendEventToCapi(payload)
    //example res: {"events_received":1,"messages":[],"fbtrace_id":"A7G1NdOWo6whyDZUcUYuIWS"}

    const logTxAPI = {
        payload,
        response
    }
    platform.env.LOGS && await platform.env.LOGS.put('ViewContent_' + eventId, JSON.stringify(logTxAPI))


    return {
        eid: eventId
    }
}

/* 
const payload_example = [
    {
        "event_name": "ViewContent",
        "event_time": 1659612529,
        "action_source": "website",
        "event_id": "d6c7ebb1-f654-45c2-b301-ed081f2cc907",
        "event_source_url": "https://example.com/?utm_source=facebook&utm_medium=ads&utm_campaign=Veneers&utm_content=23850656687990085&fbclid=IwAR1w7nxsLLvq8Jnif3dcq0tbEdqn72MH-A2g-LhuMRbrEF1eS7yjRajwIhs",
        "user_data": {
            "client_ip_address": "201.234.221.180",
            "client_user_agent": "Mozilla/5.0 (Linux; Android 12; SM-A515F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/377.0.0.22.107;]",
            "fbc": "fb.1.1659612529980.IwAR1w7nxsLLvq8Jnif3dcq0tbEdqn72MH-A2g-LhuMRbrEF1eS7yjRajwIhs",
            "country": ["4bd2c412ba70847f497a7adb5ccd527724bfd229fc9b24f755c32b270459464b"],
            "ct": ["74b0c5234400b1cfd7deb0ebdc341f1b7a87d53ee3acf609bd9f7aabc109db0e"],
            "st": ["12eaaece68d5b9f82e3490b7705ee7a60df2fd96184572f9af0bedac3cee826a"]
        },
        "custom_data":
        {
            "content_name": "Veneers",
            "content_category": "Cosmetic"
        }
    }
]
 */