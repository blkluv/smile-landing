

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0df53235.js","_app/immutable/chunks/index.25c90810.js","_app/immutable/chunks/store.501c2c76.js","_app/immutable/chunks/singletons.2bc0ec3b.js","_app/immutable/chunks/stores.128d5f73.js"];
export const stylesheets = ["_app/immutable/assets/0.afad8888.css"];
export const fonts = [];
