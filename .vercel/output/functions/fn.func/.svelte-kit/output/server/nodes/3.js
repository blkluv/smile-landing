

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/registration-completed/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.96c5cc6a.js","_app/immutable/chunks/index.25c90810.js","_app/immutable/chunks/SEO.34fb1234.js","_app/immutable/chunks/stores.128d5f73.js","_app/immutable/chunks/singletons.2bc0ec3b.js"];
export const stylesheets = [];
export const fonts = [];
