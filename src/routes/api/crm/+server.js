/* 
This is an example to save data to HubSpot CRM but you can adapt it for any CRM of your choice.
For further customization see: https://legacydocs.hubspot.com/docs/methods/forms/submit_form 
 */

import { CAMPAIGN } from '$lib/store/store'

import {
    PUBLIC_HUBSPOT_PORTAL_ID,
    PUBLIC_HUBSPOT_FORM_ID
} from '$env/static/public';


/** @type {import('./$types').RequestHandler} */

export const POST = async ({ request }) => {
    try {
        const dataForm = await request.json()
        const pageUri = request.url;
        const pageName = CAMPAIGN;

        const payload = {
            submittedAt: Date.now(),
            fields: [
                {
                    name: 'firstname',
                    value: dataForm.firstname
                },
                {
                    name: 'lastname',
                    value: dataForm.lastname
                },
                {
                    name: 'email',
                    value: dataForm.email
                },
                {
                    name: 'phone',
                    value: dataForm.phone
                }
            ],
            context: {
                pageUri,
                pageName
            }
        };

        const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${PUBLIC_HUBSPOT_PORTAL_ID}/${PUBLIC_HUBSPOT_FORM_ID}`
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        }
        const response = await fetch(hubspotEndpoint, requestOptions)

        if (response.ok) {
            return new Response(JSON.stringify(response))
        } else {
            throw new Error(`Hubspot server error. Status: ${response.status}. StatusText: ${response.statusText}`);
        }
    } catch (err) {
        return new Response(JSON.stringify(err), {
            status: 500
        })
    }
}