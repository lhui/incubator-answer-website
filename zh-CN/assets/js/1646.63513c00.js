/*! For license information please see 1646.63513c00.js.LICENSE.txt */
(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[1646],{1030:(e,t,n)=>{"use strict";n.d(t,{C:()=>s,n:()=>a});var r=n(9496),o=n(5745);const i=r.createContext(null);function a(e){let{children:t,content:n,isBlogPostPage:o=!1}=e;const a=function(e){let{content:t,isBlogPostPage:n}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:o});return r.createElement(i.Provider,{value:a},t)}function s(){const e=(0,r.useContext)(i);if(null===e)throw new o.i6("BlogPostProvider");return e}},8135:(e,t,n)=>{"use strict";n.d(t,{S:()=>c});var r=n(9496),o=n(3337);function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function a(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>i(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function s(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:s}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let o=t;o<=n;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),l=a(c,{anchorTopOffset:n.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}},6768:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});var r=n(9496);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):r.push(o)})),r}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}},4875:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3270:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(4875),o=n.n(r),i=n(9496),a=n(3519),s=n(4637);const c=i.forwardRef(((e,t)=>{const[{className:n,...r},{as:i="div",bsPrefix:c,spans:l}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,a.vE)(t,"col");const i=(0,a.pi)(),s=(0,a.zG)(),c=[],l=[];return i.forEach((e=>{const n=r[e];let o,i,a;delete r[e],"object"==typeof n&&null!=n?({span:o,offset:i,order:a}=n):o=n;const u=e!==s?`-${e}`:"";o&&c.push(!0===o?`${t}${u}`:`${t}${u}-${o}`),null!=a&&l.push(`order${u}-${a}`),null!=i&&l.push(`offset${u}-${i}`)})),[{...r,className:o()(n,...c,...l)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,s.jsx)(i,{...r,ref:t,className:o()(n,!l.length&&c)})}));c.displayName="Col";const l=c},2241:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(4875),o=n.n(r),i=n(9496),a=n(3519),s=n(4637);const c=i.forwardRef((({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...i},c)=>{const l=(0,a.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,s.jsx)(n,{ref:c,...i,className:o()(r,t?`${l}${u}`:l)})}));c.displayName="Container";const l=c},3963:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(4875),o=n.n(r),i=n(9496),a=n(3519),s=n(4637);const c=i.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},i)=>{const c=(0,a.vE)(e,"row"),l=(0,a.pi)(),u=(0,a.zG)(),f=`${c}-cols`,d=[];return l.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const o=e!==u?`-${e}`:"";null!=n&&d.push(`${f}${o}-${n}`)})),(0,s.jsx)(n,{ref:i,...r,className:o()(t,c,...d)})}));c.displayName="Row";const l=c},3519:(e,t,n)=>{"use strict";n.d(t,{SC:()=>f,pi:()=>l,vE:()=>c,zG:()=>u});var r=n(9496);n(4637);const o=["xxl","xl","lg","md","sm","xs"],i=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:a,Provider:s}=i;function c(e,t){const{prefixes:n}=(0,r.useContext)(i);return e||n[t]||t}function l(){const{breakpoints:e}=(0,r.useContext)(i);return e}function u(){const{minBreakpoint:e}=(0,r.useContext)(i);return e}function f(){const{dir:e}=(0,r.useContext)(i);return"rtl"===e}},8817:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(1130),o=n(3704);const i=(0,n(4385).Z)("facebook",(function(e,t){var n=t.quote,i=t.hashtag;return(0,r.Z)(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,o.Z)({u:e,quote:n,hashtag:i})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400})},4940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(1130),o=n(3704);const i=(0,n(4385).Z)("linkedin",(function(e,t){var n=t.title,i=t.summary,a=t.source;return(0,r.Z)(e,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,o.Z)({url:e,mini:"true",title:n,summary:i,source:a})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600})},3472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(1130),o=n(3704);const i=(0,n(4385).Z)("twitter",(function(e,t){var n=t.title,i=t.via,a=t.hashtags,s=void 0===a?[]:a,c=t.related,l=void 0===c?[]:c;return(0,r.Z)(e,"twitter.url"),(0,r.Z)(Array.isArray(s),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:e,text:n,via:i,hashtags:s.length>0?s.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400})},4385:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r,o=n(9496),i=n(4875),a=n.n(i),s=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},d=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},p=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},h=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function w(e,t,n){var r=t.height,o=t.width,i=f(t,["height","width"]),a=c({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),s=window.open(e,"",Object.keys(a).map((function(e){return"".concat(e,"=").concat(a[e])})).join(", "));if(n)var l=window.setInterval((function(){try{(null===s||s.closed)&&(window.clearInterval(l),n(s))}catch(e){console.error(e)}}),1e3);return s}const v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,s=void 0===a?"windowCenter":a,l=n.windowWidth,u=void 0===l?550:l;w(e,c({height:i,width:u},"windowCenter"===s?p(u,i):h(u,i)),r)},t.handleClick=function(e){return l(t,void 0,void 0,(function(){var t,n,r,o,i,a,s,c,l,f;return u(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,s=t.openShareDialogOnClick,c=t.opts,l=o(a,c),r?[2]:(e.preventDefault(),n?(f=n(),d(f)?[4,f]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return s&&this.openShareDialog(l),i&&i(e,l),[2]}}))}))},t}return s(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,s=e.forwardedRef,l=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),d=e.style,p=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,f(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=a()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),w=c(c(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},d),r&&i);return o.createElement("button",c({},p,{"aria-label":p["aria-label"]||l,className:h,onClick:this.handleClick,ref:s,style:w}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component);var y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},y.apply(this,arguments)};const m=function(e,t,n,r){function i(i,a){var s=n(i),c=y({},i);return Object.keys(s).forEach((function(e){delete c[e]})),o.createElement(v,y({},r,c,{forwardedRef:a,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-".concat(e),(0,o.forwardRef)(i)}},1130:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r,o=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return o(t,e),t}(Error);function a(e,t){if(!e)throw new i(t)}},3704:(e,t,n)=>{"use strict";function r(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(n)))}));return t.length>0?"?".concat(t.join("&")):""}n.d(t,{Z:()=>r})},2945:(e,t,n)=>{"use strict";n(2767);var r=n(9496),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.jsx=l,t.jsxs=l},4637:(e,t,n)=>{"use strict";e.exports=n(2945)}}]);