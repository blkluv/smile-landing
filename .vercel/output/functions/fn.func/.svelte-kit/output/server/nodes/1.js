

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bdf090ed.js","_app/immutable/chunks/index.25c90810.js","_app/immutable/chunks/stores.6e3c085d.js","_app/immutable/chunks/singletons.f9a83b5c.js"];
export const stylesheets = [];
export const fonts = [];
