import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.c837a65e.js","_app/immutable/chunks/index.25c90810.js","_app/immutable/chunks/SEO.34fb1234.js","_app/immutable/chunks/stores.128d5f73.js","_app/immutable/chunks/singletons.2bc0ec3b.js","_app/immutable/chunks/store.501c2c76.js"];
export const stylesheets = ["_app/immutable/assets/2.b6e8db3e.css"];
export const fonts = [];
