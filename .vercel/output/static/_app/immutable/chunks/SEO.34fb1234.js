import{S as g,i as w,s as E,k as p,G as _,l as h,h as d,n as t,E as f,F as y,I as A}from"./index.25c90810.js";import{p as M}from"./stores.128d5f73.js";function T(a){let r,o,i,u,m,c,s,l;return document.title=r=a[0],{c(){o=p("meta"),i=p("meta"),u=p("meta"),m=p("meta"),c=p("meta"),s=p("meta"),l=p("meta"),this.h()},l(e){const n=_("svelte-1wqg2z4",document.head);o=h(n,"META",{name:!0,content:!0}),i=h(n,"META",{name:!0,content:!0}),u=h(n,"META",{name:!0,content:!0}),m=h(n,"META",{property:!0,content:!0}),c=h(n,"META",{property:!0,content:!0}),s=h(n,"META",{property:!0,content:!0}),l=h(n,"META",{property:!0,content:!0}),n.forEach(d),this.h()},h(){t(o,"name","description"),t(o,"content",a[1]),t(i,"name","keywords"),t(i,"content",a[2]),t(u,"name","robots"),t(u,"content","index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"),t(m,"property","og:description"),t(m,"content",a[1]),t(c,"property","og:title"),t(c,"content",a[0]),t(s,"property","og:type"),t(s,"content",a[3]),t(l,"property","og:url"),t(l,"content",a[4])},m(e,n){f(document.head,o),f(document.head,i),f(document.head,u),f(document.head,m),f(document.head,c),f(document.head,s),f(document.head,l)},p(e,[n]){n&1&&r!==(r=e[0])&&(document.title=r),n&2&&t(o,"content",e[1]),n&4&&t(i,"content",e[2]),n&2&&t(m,"content",e[1]),n&1&&t(c,"content",e[0]),n&8&&t(s,"content",e[3])},i:y,o:y,d(e){d(o),d(i),d(u),d(m),d(c),d(s),d(l)}}}function k(a,r,o){let i;A(a,M,e=>o(5,i=e));let{title:u}=r,{description:m}=r,{keywords:c}=r,{type:s="website"}=r;const l=i.url.toString();return a.$$set=e=>{"title"in e&&o(0,u=e.title),"description"in e&&o(1,m=e.description),"keywords"in e&&o(2,c=e.keywords),"type"in e&&o(3,s=e.type)},[u,m,c,s,l]}class q extends g{constructor(r){super(),w(this,r,k,T,E,{title:0,description:1,keywords:2,type:3})}}export{q as S};
