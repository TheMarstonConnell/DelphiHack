(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{93445:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brand",function(){return n(97186)}])},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=u.default,s=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?s.loader=function(){return e}:"function"===typeof e?s.loader=e:"object"===typeof e&&(s=a({},s,e));!1;(s=a({},s,t)).suspense&&(delete s.ssr,delete s.loading);s.loadableGenerated&&delete(s=a({},s,s.loadableGenerated)).loadableGenerated;if("boolean"===typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,l(n,s);delete s.ssr}return n(s)},t.noSSR=l;var a=n(6495).Z,s=n(92648).Z,u=(s(n(67294)),s(n(14302)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(6495).Z,u=(0,n(92648).Z)(n(67294)),l=n(16319),o=n(67294).useSyncExternalStore,i=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=function(){if(!i){var t=new b(e,a);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=function(){n();var e=u.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=u.default.lazy(a.loader));var i=null;if(!c){var f=a.webpack?a.webpack():a.modules;f&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var s,u=f[Symbol.iterator]();!(t=(s=u.next()).done);t=!0){var l=s.value;if(-1!==e.indexOf(l))return n()}}catch(o){r=!0,a=o}finally{try{t||null==u.return||u.return()}finally{if(r)throw a}}}))}var p=a.suspense?function(e,t){return r(),u.default.createElement(a.lazy,s({},e,{ref:t}))}:function(e,t){r();var n=o(i.subscribe,i.getCurrentValue,i.getCurrentValue);return u.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),u.default.useMemo((function(){return n.loading||n.error?u.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:i.retry}):n.loaded?u.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",u.default.forwardRef(p)}(f,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){h(i).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return c=!0,t()};h(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var m=p;t.default=m},97186:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(41799),a=n(85893),s=n(86010),u=["plumbus","black","white"],l=function(e){var t=e.onChange;return(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("span",{className:"text-sm font-bold",children:"Change color:"}),u.map((function(e){return(0,a.jsx)("button",{className:(0,s.Z)("w-8 h-8 rounded border border-black/20","hover:ring-2 focus:ring-2 ring-white/50 transition",{"bg-plumbus":"plumbus"===e,"bg-black":"black"===e,"bg-white":"white"===e}),onClick:function(){return t(e)},type:"button"},"change-color-".concat(e))}))]})},o=n(67294),i=n(89583),d=function(e){var t=e.name,n=e.id,r=void 0===n?"":n,u=e.url,d=e.Asset,c=(0,o.useState)("plumbus"),f=c[0],b=c[1];return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center space-x-4",children:[(0,a.jsx)("a",{className:"text-2xl font-bold hover:underline",href:"#".concat(r),id:r,children:t}),u&&(0,a.jsxs)("a",{className:(0,s.Z)("flex items-center py-2 px-4 space-x-2 bg-plumbus-60 rounded","hover:bg-plumbus-70 transition hover:translate-y-[-2px]"),download:!0,href:"/".concat(u),children:[(0,a.jsx)(i.aBF,{}),(0,a.jsx)("span",{className:"font-bold",children:"Download SVG"})]})]}),(0,a.jsx)("div",{className:"flex flex-col justify-center items-center p-16 max-h-[400px] bg-black/20 rounded",children:(0,a.jsx)(d,{className:(0,s.Z)("transition",{"text-plumbus":"plumbus"===f,"text-black":"black"===f,"text-white":"white"===f})})}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)(l,{onChange:b})}),(0,a.jsx)("br",{})]})},c=n(5152),f=n.n(c),b=n(2962),p=n(83795),h=[{name:"Slate NFT",id:"brand",url:"brand/brand.svg",Asset:f()((function(){return n.e(953).then(n.bind(n,21953))}),{loadableGenerated:{webpack:function(){return[21953]}}})},{name:"Slate NFT Bust",id:"brand-bust",url:"brand/brand-bust.svg",Asset:f()((function(){return n.e(222).then(n.bind(n,66222))}),{loadableGenerated:{webpack:function(){return[66222]}}})},{name:"Slate NFT Text",id:"brand-text",url:"brand/brand-text.svg",Asset:f()((function(){return n.e(694).then(n.bind(n,13551))}),{loadableGenerated:{webpack:function(){return[13551]}}})}],m=(0,p.H)((function(){return(0,a.jsxs)("section",{className:"p-8 pb-16 space-y-8",children:[(0,a.jsx)(b.PB,{title:"Brand Assets"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold",children:"Brand Assets"}),(0,a.jsx)("p",{children:"View and download Slate NFT brand assets"})]}),(0,a.jsx)("hr",{className:"black/20"}),h.map((function(e,t){return(0,a.jsx)(d,(0,r.Z)({},e),"asset-".concat(t))}))]})}),{center:!1})},5152:function(e,t,n){e.exports=n(90638)}},function(e){e.O(0,[774,888,179],(function(){return t=93445,e(e.s=t);var t}));var t=e.O();_N_E=t}]);