import { error } from '@sveltejs/kit';
import cookie from 'cookie';
import { getEdgeUserData } from '$lib/utils/cfEdgeProperties'
import { PRODUCT_NAME, PRODUCT_CATEGORY } from '$lib/store/store'
import { sha256 } from '$lib/utils/crypto'
import { sendEventToCapi } from '$lib/utils/sendEventToCapi'

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request, url, clientAddress, platform }) => {
    //platform.env.LOGS && await platform.env.LOGS.put('FLAG' + (+new Date()), 'FLAG')
    const outTest = {
        ok: 1
    }
    return new Response(JSON.stringify(outTest))

    try {
        const { firstname, lastname, email, phone, leadEventID } = await request.json()

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

        const current_timestamp = Math.floor(new Date() / 1000);
        const userAgent = request.headers.get('User-Agent')

        /* 
            Facebook says that they use contact information for matching purposes only so that for 
            information that personally identifies individuals, such as names, email addresses, and
            phone numbers, they only accept hashes. 
            For more information see: https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters/
        */
        const firstnameHash = firstname ? await sha256(firstname) : null
        const lastnameHash = lastname ? await sha256(lastname) : null
        const emailHash = email ? await sha256(email) : null

        /* 
            Before hashing the phone number, you can even check the phone number format programmatically
            or use a service like ClickSend. 
            Hint: a lookup table (country/country code) can be helpful (https://countrycode.org). 
            For this example I am going to pretend that the country is always Venezuela (country code 58).
        */
        const country_code = 58
        const phoneHash = phone ? await sha256(country_code + Number(phone)) : null

        /* 
            Facebook says that sending additional customer information parameters may help increase Event Match Quality.
            We can get some additional parameters for free (CloudFlare specific).
            For more information see: https://developers.facebook.com/docs/marketing-api/conversions-api/best-practices/#req-rec-params
         */
        const userData = getEdgeUserData(request) //This is platform dependent (this is an example using CloudFlare workers)

        const country = userData.country ? await sha256(userData.country) : null
        const ct = userData.city ? await sha256(userData.city) : null
        const st = userData.region ? await sha256(userData.region) : null
        const zp = userData.postalCode ? await sha256(userData.postalCode) : null

        /* 
            Crafting the Payload
            For more information see: https://developers.facebook.com/docs/marketing-api/conversions-api/payload-helper/
        */
        const payload = [
            {
                "event_name": "Lead",
                "event_time": current_timestamp,
                "action_source": "website",
                event_id: leadEventID,
                "event_source_url": url.origin,
                "user_data": {
                    ...(emailHash && { "em": [emailHash] }),
                    ...(phoneHash && { "ph": [phoneHash] }),
                    ...(firstnameHash && { "fn": [firstnameHash] }),
                    ...(lastnameHash && { "ln": [lastnameHash] }),
                    "client_ip_address": clientAddress,
                    "client_user_agent": userAgent,
                    ...(fbc && { fbc }),
                    ...(fbp && { fbp }),
                    ...(country && { "country": [country] }),
                    ...(ct && { "ct": [ct] }),
                    ...(st && { "st": [st] }),
                    ...(zp && { "zp": [zp] }),
                },
                "custom_data": {
                    ...(PRODUCT_NAME && { "content_name": PRODUCT_NAME }),
                    ...(PRODUCT_CATEGORY && { "content_category": PRODUCT_CATEGORY })
                }
            }
        ]
        platform.env.LOGS && await platform.env.LOGS.put('ApiLeadBefore_' + leadEventID, JSON.stringify(payload))

        const response = await sendEventToCapi(payload, platform)
        //example response: {"events_received":1,"messages":[],"fbtrace_id":"A7G1NdOWo6whyDZUcUYuIWS"}


        if (response && response.events_received === 1) {
            // 👉️ CAPI ok
            return new Response(JSON.stringify(payload))
        } else {
            throw new Error(JSON.stringify(response));
        }
    } catch (err) {
        return error(400, 'Error>> ' + JSON.stringify(err))
        //return new Response(JSON.stringify(err))
        /* return new Response(JSON.stringify(err), {
            status: 500,
            statusText: JSON.stringify(err)
        }) */
    }
}

/* 
const payload_example = [
        {
            "event_name": "Lead",
            "event_time": 1659617113,
            "action_source": "website",
            "event_id": "642f6ff9-044f-42cb-8814-087d2ad4e6ab",
            "event_source_url": "https://smile-landing.gerardocastillo.me/",
            "user_data":
            {
                "em": ["ef500fc4f3ae928c8faa209cea86ac55e7c1d102f5757dd52b72d77a63d36a89"],
                "ph": ["ba8c5e1c56d67c79e7a011df545946aca0371f1be8ed8f794dfeda4a52a06785"],
                "fn": ["79063e8037fff16d297a1fe65136f1251126cddb2cc9870ecf8d653835538e85"],
                "ln": ["834c454ed94cfd76afee72321e9e339d7300b6991bd77a0685e6ca48f68088cb"],
                "client_ip_address": "200.109.43.36",
                "client_user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 245.0.0.13.110 (iPhone14,3; iOS 15_6; es_DO; es-DO; scale=3.00; 1284x2778; 384816942)",
                "fbp": "fb.1.1659617033132.1628354272",
                "country": ["4bd2c412ba70847f497a7adb5ccd527724bfd229fc9b24f755c32b270459464b"],
                "ct": ["2e4a7d0b61342c21dc6fb394b53ce30b3ce3dccf18c208b9c47a35cfddbc5da3"],
                "st": ["4d9cb7a511c6f91c59281da6b82487e928c90b9f812f688b78ed7d6139719bdc"]
            },
            "custom_data":
            {
                "content_name": "Veneers",
                "content_category": "Cosmetic"
            }
        }
    ]
*/