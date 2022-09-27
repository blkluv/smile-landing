import cookie from 'cookie';
import { PRODUCT_NAME, PRODUCT_CATEGORY } from '$lib/store/store'
import { v4 as uuid } from '@lukeed/uuid';
import { getEdgeUserData } from '$lib/utils/cfEdgeProperties'
import { sha256 } from '$lib/utils/crypto'
import { sendEventToCapi } from '$lib/utils/sendEventToCapi'


/** @type {import('./$types').PageServerLoad} */
export async function load({ request, url, getClientAddress }) {

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
                "client_ip_address": getClientAddress(),
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
    const r = await sendEventToCapi(payload)
    //example res: {"events_received":1,"messages":[],"fbtrace_id":"A7G1NdOWo6whyDZUcUYuIWS"}

    return {
        eid: eventId,
        capi: r
    }
}

/* 
const payload_example = [
    {
        "event_name": "ViewContent",
        "event_time": 1664227395,
        "action_source": "website",
        "event_id": "4207dcb1-9655-4858-8ef8-c77eec37637d",
        "event_source_url": "https://smile-landing.gerardocastillo.me/",
        "user_data":
        {
            "client_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            "fbp": "fb.1.1664220223394.1660006164",
            "country": ["4bd2c412ba70847f497a7adb5ccd527724bfd229fc9b24f755c32b270459464b"],
            "ct": ["dfb7e5a6e391cf27b332a9176bde628391d1303e12ece4afce50baf25743896e"],
            "st": ["241867938e71ab05babd4ad9b601239ed6583fd52ec114c48e56b0b51f27209c"]
        },
        "custom_data":
        {
            "content_name": "Veneers",
            "content_category": "Cosmetic Dentistry"
        }
    }
]
 */