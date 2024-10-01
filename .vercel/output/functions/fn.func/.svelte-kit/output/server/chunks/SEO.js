import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "./index3.js";
import { p as page } from "./stores.js";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title } = $$props;
  let { description } = $$props;
  let { keywords } = $$props;
  let { type = "website" } = $$props;
  const url = $page.url.toString();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1wqg2z4_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:type"${add_attribute("content", type, 0)}><meta property="og:url"${add_attribute("content", url, 0)}><!-- HEAD_svelte-1wqg2z4_END -->`, ""}`;
});
export {
  SEO as S
};
