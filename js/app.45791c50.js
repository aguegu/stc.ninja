(function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],f=0,l=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-3cce03c9":"8ccf9e02","chunk-65f41171":"be1a6d98","chunk-1b0fa2f6":"44c77ca7","chunk-a6049e6c":"41fad9bb","chunk-73ca1bc3":"7d6f97e5","chunk-f96b5a7c":"a24344cd"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-1b0fa2f6":1,"chunk-a6049e6c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-3cce03c9":"31d6cfe0","chunk-65f41171":"31d6cfe0","chunk-1b0fa2f6":"5bef06be","chunk-a6049e6c":"66cc5af7","chunk-73ca1bc3":"31d6cfe0","chunk-f96b5a7c":"31d6cfe0"}[t]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=f;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},5284:function(t,e){t.exports=VueLodash},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),a=n.n(r),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("a",{attrs:{href:"/"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"stc.ninja Logo",contain:"",src:"/favicon.ico",transition:"scale-transition",width:"40"}})],1),n("a",{staticClass:"title white--text",staticStyle:{"text-decoration":"none"},attrs:{href:"https://stc.ninja"}},[t._v("stc.ninja")]),n("span",{staticClass:"ml-2 text-caption"},[t._v(t._s(t.version))])]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{staticClass:"text-none",attrs:{text:"",to:{name:"stc8"}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-memory")]),t._v("STC8/STC32 ")],1),n("v-btn",{staticClass:"text-none",attrs:{text:"",to:{name:"stc15"}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-memory")]),t._v("STC15 ")],1),n("v-btn",{staticClass:"text-none",attrs:{text:"",href:"https://github.com/aguegu/stc.ninja/discussions",target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-forum")]),t._v("Discussion ")],1),n("v-btn",{staticClass:"text-none",attrs:{text:"",to:{name:"about"}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-information")]),t._v("About ")],1)],1)],1),n("v-main",[n("router-view")],1)],1)},o=[],u={name:"App",data:function(){return{version:"0.4.5"}}},i=u,s=(n("034f"),n("2877")),f=Object(s["a"])(i,c,o,!1,null,null,null),l=f.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6389")),d=n.n(p);a.a.use(d.a);var h=[{path:"/stc8",name:"stc8",component:function(){return Promise.all([n.e("chunk-65f41171"),n.e("chunk-a6049e6c")]).then(n.bind(null,"c65bc"))}},{path:"/stc15",name:"stc15",component:function(){return Promise.all([n.e("chunk-65f41171"),n.e("chunk-1b0fa2f6")]).then(n.bind(null,"33b8"))}},{path:"/com",name:"com",component:function(){return n.e("chunk-3cce03c9").then(n.bind(null,"d846"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-73ca1bc3").then(n.bind(null,"f820"))}},{path:"/releases",name:"releases",component:function(){return n.e("chunk-f96b5a7c").then(n.bind(null,"61b6"))}},{path:"/",redirect:"/stc8"}],m=new d.a({routes:h}),v=m,b=n("a2c9"),g=n.n(b),y=n("5284"),k=n.n(y);a.a.use(k.a,{lodash:window._}),a.a.use(g.a);var x=new g.a;a.a.config.productionTip=!1,new a.a({router:v,vuetify:x,render:function(t){return t(l)}}).$mount("#app")},6389:function(t,e){t.exports=VueRouter},"85ec":function(t,e,n){},"8bbf":function(t,e){t.exports=Vue},a2c9:function(t,e){t.exports=Vuetify}});