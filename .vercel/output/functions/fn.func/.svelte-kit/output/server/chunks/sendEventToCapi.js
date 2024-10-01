import { b as PUBLIC_PIXEL } from "./public.js";
const getEdgeUserData = (request) => {
  const cf = request.cf;
  return cf ? {
    /* Country of the incoming request. The two-letter country code in the request.
            This is the same value as that provided in the CF-IPCountry header, for example, "US". */
    ...(typeof cf.country === "undefined" ? null : cf.country) && { country: cf.country },
    //City of the incoming request, for example, "Austin".
    ...(typeof cf.city === "undefined" ? null : cf.city) && { city: cf.city },
    //Latitude of the incoming request, for example, "30.27130".
    ...(typeof cf.latitude === "undefined" ? null : cf.latitude) && { latitude: cf.latitude },
    //Longitude of the incoming request, for example, "-97.74260".
    ...(typeof cf.longitude === "undefined" ? null : cf.longitude) && {
      longitude: cf.longitude
    },
    /* If known, the ISO 3166-2 name for the first level region associated with the IP address of
            the incoming request, for example, "Texas". */
    ...(typeof cf.region === "undefined" ? null : cf.region) && { region: cf.region },
    //Estado o Provincia
    //Timezone of the incoming request, for example, "America/Chicago".
    ...(typeof cf.timezone === "undefined" ? null : cf.timezone) && { timezone: cf.timezone },
    /* If known, the ISO 3166-2 code for the first-level region associated with the IP address of
            the incoming request, for example, "TX". */
    ...(typeof cf.regionCode === "undefined" ? null : cf.regionCode) && {
      regionCode: cf.regionCode
    },
    //Postal code of the incoming request, for example, "78701".
    ...(typeof cf.postalCode === "undefined" ? null : cf.postalCode) && {
      postalCode: cf.postalCode
    },
    //Código Postal
    /* The three-letter IATA airport code of the data center that the request hit, for example, "DFW". */
    ...(typeof cf.colo === "undefined" ? null : cf.colo) && { colo: cf.colo },
    //Metro code (DMA) of the incoming request, for example, "635".
    ...(typeof cf.metroCode === "undefined" ? null : cf.metroCode) && {
      metroCode: cf.metroCode
    },
    //Continent of the incoming request, for example, "NA".
    ...(typeof cf.continent === "undefined" ? null : cf.continent) && {
      continent: cf.continent
    },
    /* Only set when using Cloudflare Bot Management. Object with the following properties: score, verifiedBot,
            staticResource, and ja3Hash. Refer to Bot Management Variables for more details. */
    ...(typeof cf.botManagement === "undefined" ? null : cf.botManagement) && {
      botManagement: cf.botManagement
    },
    /* If the country of the incoming request is in the EU, this will return "1". Otherwise, this property will
            be omitted. */
    ...(typeof cf.isEUCountry === "undefined" ? null : cf.isEUCountry) && {
      isEUCountry: cf.isEUCountry
    },
    //ASN of the incoming request, for example, 395747.
    ...(typeof cf.asn === "undefined" ? null : cf.asn) && { asn: cf.asn },
    //The organization which owns the ASN of the incoming request, for example, Google Cloud.
    ...(typeof cf.asOrganization === "undefined" ? null : cf.asOrganization) && {
      asOrganization: cf.asOrganization
    }
  } : {};
};
function buf2hex(buffer) {
  return Array.prototype.map.call(new Uint8Array(buffer), (x) => ("00" + x.toString(16)).slice(-2)).join("");
}
async function sha256(input) {
  let inputStr = new String(input);
  inputStr = inputStr.toLowerCase();
  inputStr = inputStr.split(" ").join("");
  const myText = new TextEncoder().encode(inputStr);
  const myDigest = await crypto.subtle.digest(
    {
      name: "SHA-256"
    },
    myText
    // The data you want to hash as an ArrayBuffer
  );
  const res = buf2hex(myDigest);
  return res;
}
const ACCESS_TOKEN = "EAADZCQj4QvEwGDOOwbIs6ZAXzRHPxYwfZCJz0ZCTCWlR0NLSq1yE2tJEwWDcA3cvaPyalxXNZCEUd0bES2xZAoLpqFD7PK1oGZBEIh66KlqZAE1FqH4bfy2dDOLS3ZBlJ5V7ZCir0Gx005ZAiLBPTQB9K4DLI93nxHtqPcJoNusBsMV9miSKLmwLph1";
const TEST_EVENT_CODE = "TEST41416";
const sendEventToCapi = async (payload) => {
  try {
    const body = new FormData();
    body.append("data", JSON.stringify(payload));
    body.append("access_token", ACCESS_TOKEN);
    TEST_EVENT_CODE && body.append("test_event_code", TEST_EVENT_CODE);
    const requestOptions = {
      method: "POST",
      body
    };
    const response = await fetch(`https://graph.facebook.com/v13.0/${PUBLIC_PIXEL}/events`, requestOptions);
    if (!response.ok) {
      const textError = await response.text();
      throw new Error(textError);
    } else {
      const capiResponse = await response.json();
      return capiResponse;
    }
  } catch (err) {
    return {
      error: err.name,
      message: err.message
    };
  }
};
export {
  sendEventToCapi as a,
  getEdgeUserData as g,
  sha256 as s
};
