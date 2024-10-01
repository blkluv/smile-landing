import { P as PRODUCT_NAME, a as PRODUCT_CATEGORY } from "../../chunks/store.js";
import { v4 } from "@lukeed/uuid";
import { g as getEdgeUserData, s as sha256, a as sendEventToCapi } from "../../chunks/sendEventToCapi.js";
async function load({ request, url, getClientAddress, cookies }) {
  const fbp = cookies.get("_fbp") || null;
  let fbc = cookies.get("_fbc") || null;
  const fbclid = url.searchParams.get("fbclid") || null;
  if (!fbc && fbclid) {
    fbc = "fb.1." + +/* @__PURE__ */ new Date() + "." + fbclid;
  }
  const eventId = v4();
  const current_timestamp = Math.floor(/* @__PURE__ */ new Date() / 1e3);
  const userAgent = request.headers.get("User-Agent");
  const userData = getEdgeUserData(request);
  const country = userData.country ? await sha256(userData.country) : null;
  const ct = userData.city ? await sha256(userData.city) : null;
  const st = userData.region ? await sha256(userData.region) : null;
  const zp = userData.postalCode ? await sha256(userData.postalCode) : null;
  const payload = [
    {
      event_name: "ViewContent",
      event_time: current_timestamp,
      action_source: "website",
      event_id: eventId,
      event_source_url: url.href,
      user_data: {
        client_ip_address: getClientAddress(),
        client_user_agent: userAgent,
        ...fbc && { fbc },
        ...fbp && { fbp },
        ...country && { country: [country] },
        ...ct && { ct: [ct] },
        ...st && { st: [st] },
        ...zp && { zp: [zp] }
      },
      custom_data: {
        ...{ content_name: PRODUCT_NAME },
        ...{ content_category: PRODUCT_CATEGORY }
      }
    }
  ];
  await sendEventToCapi(payload);
  return {
    eid: eventId
  };
}
export {
  load
};
