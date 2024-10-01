

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/registration-completed/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7fcaf07c.js","_app/immutable/chunks/index.25c90810.js","_app/immutable/chunks/SEO.f067668e.js","_app/immutable/chunks/stores.6e3c085d.js","_app/immutable/chunks/singletons.f9a83b5c.js"];
export const stylesheets = [];
export const fonts = [];
