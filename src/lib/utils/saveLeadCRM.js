export const saveLeadCRM = async (dataForm) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForm)
        };
        const response = await fetch('/api/crm', requestOptions);

        if (response.ok) {
            const crmResponse = await response.json()
            return {
                status: 200,
                body: crmResponse
            }

        } else {
            throw Error(`Connection failure to the /api/crm endpoint.`);
        }
    } catch (err) {
        console.log('Error (saveLeadCRM): ' + err.message);
    }
};

/* 
const crmResponse_HubSpotCRM_example =
{
    "status": 200,
    "body": {
        "webSocket": null,
        "url": "https://api.hsforms.com/submissions/v3/integration/submit/20634179/1b83b53f-a5d8-413b-b6da-8e0e9d9706ba",
        "redirected": false,
        "ok": true,
        "headers": {},
        "statusText": "OK",
        "status": 200,
        "bodyUsed": false,
        "body": {
            "locked": false
        }
    }
}
 */