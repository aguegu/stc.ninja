(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73ca1bc3"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=x(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function g(){}function y(){}function w(){}var v={};c(v,i,(function(){return this}));var b=Object.getPrototypeOf,S=b&&b(b(P([])));S&&S!==r&&n.call(S,i)&&(v=S);var k=w.prototype=g.prototype=Object.create(v);function T(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function x(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return A()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=w,c(k,"constructor",w),c(w,"constructor",y),y.displayName=c(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},T(C.prototype),c(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new C(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(k),c(k,s,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[this.converter?r("v-card",[r("v-card-title",[t._v(" About stc.ninja ")]),r("v-card-text",{domProps:{innerHTML:t._s(t.converter.makeHtml(t.about))}})],1):t._e()],1)},o=[],i=r("1da1"),a=(r("96cf"),'Author: aGuegu [<span class="mdi mdi-github" style="color: #000;"></span>](https://github.com/aguegu/) [<span class="mdi mdi-twitter" style="color: #1da1f2;"></span>](https://twitter.com/BG5USN)\n\n[stc.ninja](https://stc.ninja) is a Flash programmer for [STC](http://stcmcudata.com/) 8051 series microcontrollers in Modern Browsers. It is based on [Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Serial) and [Web FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader). So it only supports chrome/chromium/Edge for the time being.\n\nBesides basic traffic analytics, [stc.ninja](https://stc.ninja) does not upload any user data to anywhere. It is a Single Page Application, aka SPA. Once the website is loaded, it can run offline. The hex file loaded is cached in local browser and flashed to your MCU chip by your local serial ports. No backend API got involved in this process.\n\nCurrently, only STC8H/STC8G/STC8C (probably works with STC8A/STC8F), STC15(FWVER > 0x72) series are supported. (See more in [Release Notes](#/releases))\n\n**How to use**\n\nVideo Instruction: https://twitter.com/BG5USN/status/1392812912104906752\n\nThe hardware is the typical STC flash programming setup. Usually it contains an USB to TTL device module, like CP210X/FT232/CH340 that connects the MCU to the computer. Select the serial port, choose the hex file from local file system and click `Flash`. The MCU is required to be power recycled, aka RESET, in this process. After the MCU bootloader pickups the ISP protocol (aka handshake), the flash would be written within seconds. :)\n\n**Helps & Improvement**\n\nAll users are welcome to send us feedbacks on [Discussions](https://github.com/aguegu/stc.ninja/discussions). Feel free to share us the experience on stc.ninja. What chip model and package you use? How is the flashing work? Do you have to adjust handshake baudrate to make it work? There are so many variants of STC microcontrollers. We are incapable to verify all of them. So the helps from the community is appreciated.\n\n**Background Story**\n\nI got a small project on STC8H to develop. Have been working on Linux and Mac for quite a few years and got the project scaffold work out based on Makefile and SDCC, I really do not feel like to work back on Windows for the finally step, the flash programming, especially with the official STC-ISP tool. When I look into [stcgal](https://github.com/grigorig/stcgal), it does not work with STC8H so far. Thankfully, there is a code sample for flash programming on [STC8H datasheet](http://www.stcmcudata.com/STC8F-DATASHEET/STC8H.pdf), appendix O. So I work it out in nodejs with [SerialPort](https://www.npmjs.com/package/serialport). Then I saw [serialterminal.com](https://www.serialterminal.com), a local serial terminal in browser. Therefor I believe browsers that support [Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Serial) got all the infrastructure required to do the STC-ISP job. To run it on local browser, all I need to do is replacing the serial port layer with Web Serial API. And there is quite a few tools already get that done, such as [Microsoft Makecode](https://makecode.microbit.org/) and [Arduino Create](https://store.arduino.cc/digital/create).\n\nThe STC-ISP Application developed by STC officially is closed-source and quite annoying for me. It only runs on Windows and it is in Chinese. It has grown way too complicated over years as an all-in-one giant app. So users that do not read Chinese could get very frustrated when they want to try STC products.\n\nI hope [stc.ninja](https://stc.ninja) could be a good starter to bring STC micro controllers to everyone. We have not received official support from STC office yet. And it looks like [stcgal](https://github.com/grigorig/stcgal) has been doing quite a lot of reverse engineering on STC-ISP to make it work full-functionally. But there is no hurry to implement all these 3rd party protocols. Our work has just begun. Hope we could get some attention from STC and get their support soon.\n\nFeel welcome to cast questions and requests in [stc.ninja forum](https://github.com/aguegu/stc.ninja/discussions).\n\n**Use Case**\n\n[![retio](https://cdn.shopify.com/s/files/1/0558/4653/5375/files/retio_logo3_472x216.png)](https://update.omnixie.io/)\n\nIf your STC based projects looks for online firmware upgrade tool that looks nice and works cross-platform. Please feel free to contact [me](mailto:weihong.guan@gmail.com).\n\n&copy; 2022 [stc.ninja](https://stc.ninja)\n'),s={name:"ViewAbout",data:function(){return{converter:null,about:a}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.showdown.setFlavor("github"),t.converter=new window.showdown.Converter;case 2:case"end":return e.stop()}}),e)})))()}},c=s,l=r("2877"),u=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=u.exports}}]);