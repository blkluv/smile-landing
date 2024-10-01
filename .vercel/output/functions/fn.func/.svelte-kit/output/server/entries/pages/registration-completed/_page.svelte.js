import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/index3.js";
import { S as SEO } from "../../../chunks/SEO.js";
const Logo1Avif = "/_app/immutable/assets/logo.409a1929.avif 400w, /_app/immutable/assets/logo.d8f9e5c3.avif 800w, /_app/immutable/assets/logo.f82af6d6.avif 1200w";
const Logo1Webp = "/_app/immutable/assets/logo.9e431000.webp 400w, /_app/immutable/assets/logo.95ba6737.webp 800w, /_app/immutable/assets/logo.e9085c5d.webp 1200w";
const Logo1Png = "/_app/immutable/assets/logo.02025a07.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const seoProps = {
    title: "Thank You | Dr. John Doe",
    description: "A smile is the universal welcome",
    keywords: "smile design, veneers treatment",
    type: "website"
  };
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign({}, seoProps), {}, {})}

<div class="flex justify-center"><div class="max-w-sm sm:max-w-xl md:max-w-2xl sm:mt-16 md:mt-24"><div class="flex justify-center"><div></div></div>
		<a href="/" class="flex w-56 aspect-square mx-auto" aria-label="Logo"><picture><source${add_attribute("srcset", Logo1Avif, 0)} type="image/avif">
				<source${add_attribute("srcset", Logo1Webp, 0)} type="image/webp">
				<img class="w-56 h-56" loading="eager" decoding="sync"${add_attribute("src", Logo1Png, 0)} alt="Persona con tratamiento"></picture></a>
		<p class="font-bold text-2xl text-center mt-4">¡Thank You!</p>
		<p class="text-md mt-6 md:w-[560px] text-center mb-20">We will get back to you as soon as possible.
		</p></div></div>`;
});
export {
  Page as default
};
