import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index3.js";
import { e as event_id } from "../../chunks/store.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-gray-600 text-white font-body pt-10 pb-4 px-8"><div class="max-w-5xl mx-auto"><div class="flex flex-col md:flex-row items-center justify-between flex-wrap space-y-5 md:space-y-0"><div class="flex flex-col items-center md:items-start md:self-start basis-2/5 md:flex-1"><h4 class="text-base tracking-tight uppercase">social networks</h4>
				<div class="mt-2 border-t-2 border-white rounded-lg w-16"></div>
				<ul class="flex gap-3 md:gap-5 mt-6"><li><a href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg></a></li>
					<li><a href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white"><path d="M4.652 0h1.44l.988 3.702L7.996 0H9.45L7.785 5.505v3.757H6.354V5.505L4.652 0zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831V4.208c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646V4.321c0-.374.172-.651.529-.651.39 0 .557.269.557.651V7.5zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46V2.43h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27V2.43h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04a.927.927 0 0 0-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0C2.353 11.325 2.021 13.025 2 17.5c.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zM6.509 21.819H5.146v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718a2.645 2.645 0 0 1-.696.605c-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"></path></svg></a></li>
					<li><a href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path></svg></a></li></ul></div>
			<div class="flex flex-col items-center md:items-start md:self-start basis-3/5 md:flex-1"><h4 class="text-base tracking-tight">WORK HOURS</h4>
				<div class="mt-2 border-t-2 border-white rounded-lg w-16"></div>
				<div class="flex flex-col gap-3 mt-3 md:mt-5 w-52 text-sm"><div class="flex justify-between leading-none"><p class="font-semibold">Mon</p>
						<p>10:00am - 6:00pm</p></div>
					<div class="flex justify-between leading-none"><p class="font-semibold">Tue</p>
						<p>10:00am - 6:00pm</p></div>
					<div class="flex justify-between leading-none"><p class="font-semibold">Wed</p>
						<p>10:00am - 6:00pm</p></div>
					<div class="flex justify-between leading-none"><p class="font-semibold">Thu</p>
						<p>10:00am - 6:00pm</p></div>
					<div class="flex justify-between leading-none"><p class="font-semibold">Fri</p>
						<p>10:00am - 6:00pm</p></div>
					<div class="flex justify-between leading-none"><p class="font-semibold flex-1">Sat - Sun</p>
						<p class="text-sm pl-8 flex-1">Closed</p></div></div></div>
			<div class="flex flex-col items-center md:items-start md:self-start flex-1"><h4 class="text-base tracking-tight uppercase">contact us</h4>
				<div class="mt-2 border-t-2 border-white rounded-lg w-16"></div>
				<ul class="flex flex-col gap-3 md:gap-5 mt-6 text-sm"><li><a href="/" target="_blank" class="flex items-start gap-2" aria-label="Map icon" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"></path></svg>
							<span class="flex-1">75 North Fictional Street, Roselle, IL 60172 </span></a></li>
					<li><a href="/" target="_blank" class="flex gap-2 items-start" aria-label="Phone icon" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"></path></svg>
							<span>+1 234 567 890</span></a></li>
					<li><a href="/" target="_blank" class="flex gap-2 items-start" aria-label="Whatsapp icon" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-gray-200"><path d="m.057 24 1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
							<span>Go to Whatsapp</span></a></li></ul></div></div></div>
	<p class="text-[10px] md:text-xs text-center mt-4">© 2022 Dr. John Doe. All rights reserved. <a href="/">Privacy Policy</a>.
	</p></footer>`;
});
const GoogleAnalytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-7G4D5LM10Z", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1jvvp8o_START --><script defer src="https://www.googletagmanager.com/gtag/js?id=G-7G4D5LM10Z"><\/script><script>window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-7G4D5LM10Z');
	<\/script><!-- HEAD_svelte-1jvvp8o_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_event_id;
  $$unsubscribe_event_id = subscribe(event_id, (value) => value);
  $$unsubscribe_event_id();
  return `<div class="flex flex-col min-h-screen overflow-hidden"><main class="flex-1">${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>

${validate_component(GoogleAnalytics, "GoogleAnalytics").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
