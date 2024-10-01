

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b4674b4a.js","_app/immutable/chunks/index.25c90810.js","_app/immutable/chunks/stores.128d5f73.js","_app/immutable/chunks/singletons.2bc0ec3b.js"];
export const stylesheets = [];
export const fonts = [];
