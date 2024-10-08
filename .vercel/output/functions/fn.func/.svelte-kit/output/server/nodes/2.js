import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.7759f26a.js","_app/immutable/chunks/index.25c90810.js","_app/immutable/chunks/SEO.f067668e.js","_app/immutable/chunks/stores.6e3c085d.js","_app/immutable/chunks/singletons.f9a83b5c.js","_app/immutable/chunks/store.44ab90d0.js"];
export const stylesheets = ["_app/immutable/assets/2.b6e8db3e.css"];
export const fonts = [];
