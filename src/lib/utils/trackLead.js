import { v4 as uuid } from '@lukeed/uuid';
import { PRODUCT_NAME, PRODUCT_CATEGORY } from '$lib/store/store'

export const trackLead = async (dataForm) => {
    /* 
    Facebook says that deduplication is necessary when sharing the same events from both the browser and the server.
    So we need to ensure that both events use the identical event_name and event_id.
    For more information see: https://www.facebook.com/business/help/823677331451951?id=1205376682832142
    */
    const leadEventID = uuid(); //This will be our 'event_id' for this event.

    //Sending Facebook Pixel Event (from browser).
    fbq && fbq(
        'track',
        'Lead',
        {
            content_name: PRODUCT_NAME,
            content_category: PRODUCT_CATEGORY
        },
        { eventID: leadEventID }
    );

    //Sending Facebook CAPI Event (from server).
    try {
        let payload = dataForm;
        payload.leadEventID = leadEventID;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };
        const response = await fetch('/api/lead', requestOptions);

        if (!response.ok) {
            //const textError = await response.text()
            //throw Error(`Connection failure to the /api/lead endpoint.`);
            throw Error(JSON.stringify(response));
            //throw Error(textError + ' 1 ' + response.statusText + '|');
        } else {
            const responseBody = await response.json();
            console.log('API LEAD RESPONSE: ' + responseBody)

            return responseBody
        }
    } catch (err) {
        console.log('Error (trackLead): ' + err.message + ' | err: ' + JSON.stringify(err));
    }
};