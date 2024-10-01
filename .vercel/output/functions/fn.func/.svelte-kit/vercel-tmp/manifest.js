export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","smile-landing-preview.jpg","thank-you-page-preview.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.a4277069.js","app":"_app/immutable/entry/app.6a0880b5.js","imports":["_app/immutable/entry/start.a4277069.js","_app/immutable/chunks/index.25c90810.js","_app/immutable/chunks/singletons.f9a83b5c.js","_app/immutable/entry/app.6a0880b5.js","_app/immutable/chunks/index.25c90810.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/crm",
				pattern: /^\/api\/crm\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/crm/_server.js'))
			},
			{
				id: "/api/lead",
				pattern: /^\/api\/lead\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/lead/_server.js'))
			},
			{
				id: "/registration-completed",
				pattern: /^\/registration-completed\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
