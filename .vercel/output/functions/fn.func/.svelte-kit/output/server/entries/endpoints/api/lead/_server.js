import { e as error } from "../../../../chunks/index.js";
import { s as sha256, g as getEdgeUserData, a as sendEventToCapi } from "../../../../chunks/sendEventToCapi.js";
import { P as PRODUCT_NAME, a as PRODUCT_CATEGORY } from "../../../../chunks/store.js";
const POST = async ({ request, url, getClientAddress, cookies }) => {
  try {
    const { firstname, lastname, email, phone, leadEventID } = await request.json();
    const fbp = cookies.get("_fbp") || null;
    let fbc = cookies.get("_fbc") || null;
    const fbclid = url.searchParams.get("fbclid") || null;
    if (!fbc && fbclid) {
      fbc = "fb.1." + +/* @__PURE__ */ new Date() + "." + fbclid;
    }
    const current_timestamp = Math.floor(/* @__PURE__ */ new Date() / 1e3);
    const userAgent = request.headers.get("User-Agent");
    const firstnameHash = firstname ? await sha256(firstname) : null;
    const lastnameHash = lastname ? await sha256(lastname) : null;
    const emailHash = email ? await sha256(email) : null;
    const country_code = 58;
    const phoneHash = phone ? await sha256(country_code + Number(phone)) : null;
    const userData = getEdgeUserData(request);
    const country = userData.country ? await sha256(userData.country) : null;
    const ct = userData.city ? await sha256(userData.city) : null;
    const st = userData.region ? await sha256(userData.region) : null;
    const zp = userData.postalCode ? await sha256(userData.postalCode) : null;
    const payload = [
      {
        "event_name": "Lead",
        "event_time": current_timestamp,
        "action_source": "website",
        event_id: leadEventID,
        "event_source_url": url.origin,
        "user_data": {
          ...emailHash && { "em": [emailHash] },
          ...phoneHash && { "ph": [phoneHash] },
          ...firstnameHash && { "fn": [firstnameHash] },
          ...lastnameHash && { "ln": [lastnameHash] },
          "client_ip_address": getClientAddress(),
          "client_user_agent": userAgent,
          ...fbc && { fbc },
          ...fbp && { fbp },
          ...country && { "country": [country] },
          ...ct && { "ct": [ct] },
          ...st && { "st": [st] },
          ...zp && { "zp": [zp] }
        },
        "custom_data": {
          ...PRODUCT_NAME && { "content_name": PRODUCT_NAME },
          ...PRODUCT_CATEGORY && { "content_category": PRODUCT_CATEGORY }
        }
      }
    ];
    const response = await sendEventToCapi(payload);
    if (response && response.events_received === 1) {
      return new Response(JSON.stringify({ payload, response }));
    } else {
      throw new Error(JSON.stringify(response));
    }
  } catch (err) {
    return error(400, "Error: " + JSON.stringify(err));
  }
};
export {
  POST
};
