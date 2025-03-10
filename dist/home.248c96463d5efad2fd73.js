(()=>{"use strict";var e={56:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function o(e){for(var o=-1,r=0;r<t.length;r++)if(t[r].identifier===e){o=r;break}return o}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var m=e[s],l=r.base?m[0]+r.base:m[0],c=i[l]||0,d="".concat(l," ").concat(c);i[l]=c+1;var h=o(d),p={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var u=n(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function n(e,t){var o=t.domAPI(t);o.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,n){var i=r(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=o(i[a]);t[s].references--}for(var m=r(e,n),l=0;l<i.length;l++){var c=o(i[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=m}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},118:(e,t,o)=>{o.d(t,{A:()=>s});var r=o(601),n=o.n(r),i=o(314),a=o.n(i)()(n());a.push([e.id,'*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%}body{box-sizing:border-box;font-family:"Montserrat",sans-serif}',""]);const s=a},312:(e,t,o)=>{o.d(t,{A:()=>h});var r=o(601),n=o.n(r),i=o(314),a=o.n(i),s=o(417),m=o.n(s),l=new URL(o(698),o.b),c=a()(n()),d=m()(l);c.push([e.id,`@media only screen and (min-width: 320px){:root{--primary: rgba(1, 140, 240, 0.9);--secondary: rgba(4, 50, 116, 0.9);--white: #fff;--light-blue-1: #018CF0;--light-grey-1: #727272}.home{position:relative;background:linear-gradient(89.88deg, var(--primary) 0.1%, var(--secondary) 99.9%),url(${d});background-repeat:no-repeat;background-position:center center;background-size:cover;overflow:hidden;height:95rem}.home__main-heading,.home__sub-heading{color:#fff}.home__main-heading{font-size:3.2rem;font-weight:700}.home__sub-heading{font-size:2.4rem;font-weight:400;margin-top:2rem}.home__logo{color:var(--white);font-weight:700}.home__logo-upper-text{font-size:1.4rem;margin-top:0;font-weight:inherit}.home__logo-lower-text{font-size:.8rem;margin-top:0;font-weight:inherit}.home__nav{display:flex;justify-content:space-between;align-items:center;padding:2rem 0 0;margin:0 auto;width:90%}.home__nav-toggle{position:relative;border:none;background-color:rgba(0,0,0,0)}.home__nav-toggle-element{position:relative;width:1.8rem;height:2px;background-color:var(--white);border:none;margin:0}.home__nav-toggle-element::before{content:"";position:absolute;width:100%;height:2px;top:5px;background-color:inherit;left:0}.home__nav-toggle-element::after{content:"";position:absolute;width:100%;height:2px;background-color:inherit;bottom:5px;left:0}.home__mid-screen-plus-nav{display:none}.home__mid-screen-plus-buttons__container{display:none}.home__image-text{position:absolute;left:50%;transform:translateX(-50%);top:10%;width:90%;margin:3rem auto}.home__start-therapy-btn{border:none;background-color:rgba(0,0,0,0);border-radius:100px;color:#fff;outline:2px solid #fff;padding:1rem 1.5rem;font-size:2.4rem;margin-top:3rem}.home__couple-image{position:absolute;border-radius:10rem 10rem 10rem 0;width:22rem;height:47.8rem;object-fit:cover;bottom:-8rem;left:-4rem}.home__couple-image-container{position:absolute;height:47.8rem;width:22rem;outline:3px solid var(--white);border-radius:10rem 10rem 10rem 0;bottom:-5rem;left:-6rem;z-index:1}.home__man-in-pocket{display:none}.home__man-in-pocket-container{display:none}.home__inverted-couple{display:none}.home__inverted-couple-container{display:none}.home__features__item{width:30rem;display:flex;flex-direction:column;align-items:center}.home__features__item:not(:first-child){margin-top:5rem}.home__features__item>img{width:10rem;height:10rem}.home__features__item>p{margin-top:5px;font-size:2rem;text-align:center}.home__features,.home__how-it-works{list-style:none;padding:0;display:flex;flex-direction:column;align-items:center}.home__features-section{padding:5rem 2rem}.home__how-it-works{padding:5rem 2rem}.home__how-it-works__item{width:80%;display:flex;flex-direction:column;align-items:center}.home__how-it-works__item:not(:first-child){margin-top:1rem}.home__how-it-works__item>img{width:15rem;object-fit:cover;height:15rem}.home__how-it-works__item-text{display:flex;flex-direction:column;align-items:center}.home__how-it-works__item-text>h1{margin-top:2rem;font-size:2rem;text-align:center;font-weight:500}.home__how-it-works__item-text>p{text-align:center;font-size:1.6rem;margin-top:1.5rem;color:var(var(--light-grey-1))}.home__how-it-works__arrow-downward{font-family:"sans-serif";color:var(--light-blue-1)}.home__how-it-works__arrow-downward::after{content:"↓";font-size:100px}.home__how-it-works-section__heading{display:inline-block;padding:10px;font-size:3rem;font-weight:500;margin-left:50%;width:80%;text-align:center;transform:translateX(-50%);border-bottom:5px solid var(--light-blue-1)}}@media only screen and (min-width: 600px){.home{overflow:initial}.home__nav{padding:2rem 0 0;width:100%}.home__logo{margin-left:10rem}.home__nav-toggle{display:none}.home__nav-toggle-element{display:none}.home__mid-screen-plus-nav{display:block;list-style:none;display:flex;align-items:center}.home__mid-screen-plus-nav>li{color:var(--white);font-size:1.6rem}.home__mid-screen-plus-nav>li:not(:first-child){margin-left:1.5rem}.home__mid-screen-plus-buttons__container{display:flex;margin-right:10rem}.home__mid-screen-plus-button{display:block;font-size:1.6rem}.home__mid-screen-plus-button--login,.home__mid-screen-plus-button--get-started{border-radius:10rem;color:var(--white);padding:1rem 1.5rem}.home__mid-screen-plus-button--login{border:1px solid var(--white);background-color:rgba(0,0,0,0);margin-right:1rem}.home__mid-screen-plus-button--get-started{border:none;background-color:var(--light-blue-1)}.home__image-text{transform:translateX(0);left:0;margin-left:10rem;position:relative;width:45%}.home__main-heading{font-size:3.2rem;font-weight:700}.home__sub-heading{font-size:2.4rem;font-weight:400;margin-top:2rem}.home__couple-image{height:25rem;width:21rem;bottom:26%;left:40%}.home__couple-image-container{height:25rem;width:21rem;bottom:28%;left:38%}.home__man-in-pocket{display:inline-block;position:absolute;object-fit:cover;height:25rem;width:21rem;outline:3px solid var(--white);border-radius:10rem 10rem 10rem 0;right:10%;bottom:-4%}.home__man-in-pocket-container{display:inline-block;position:absolute;height:25rem;width:21rem;outline:3px solid var(--white);border-radius:10rem 10rem 10rem 0;bottom:-2%;right:12%;z-index:2}.home__inverted-couple{display:inline-block;position:absolute;object-fit:cover;height:20rem;width:25rem;bottom:52%;border-radius:10rem 0 0 0;right:0}.home__inverted-couple-container{display:inline-block;position:absolute;outline:3px solid var(--white);border-radius:10rem 0 0 0;height:20rem;width:25rem;bottom:50%;right:2%;z-index:2}}@media only screen and (min-width: 768px){.home__features__item{flex-direction:column;flex-basis:33.3%}.home__features__item:not(:first-child){margin-top:0}.home__features{padding:5rem 0;flex-direction:row;align-items:center;justify-content:center}.home__how-it-works-section{text-align:center}.home__how-it-works-section__heading{display:inline;margin:0}.home__how-it-works__item{justify-content:space-between}.home__how-it-works__item--row{flex-direction:row}.home__how-it-works__item--row-reverse{flex-direction:row-reverse}.home__how-it-works__item:not(:first-child){margin-top:0}.home__how-it-works__item>img{width:40rem;height:auto;object-fit:cover}}`,""]);const h=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,r,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var m=this[s][0];null!=m&&(a[m]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),t.push(c))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},445:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var r=o(72),n=o.n(r),i=o(825),a=o.n(i),s=o(659),m=o.n(s),l=o(56),c=o.n(l),d=o(540),h=o.n(d),p=o(113),u=o.n(p),_=o(312),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=m().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=h();n()(_.A,f);const g=_.A&&_.A.locals?_.A.locals:void 0},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,o){var r=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},698:(e,t,o)=>{e.exports=o.p+"assets/images/home-cover-sm.png"},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},879:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var r=o(72),n=o.n(r),i=o(825),a=o.n(i),s=o(659),m=o.n(s),l=o(56),c=o.n(l),d=o(540),h=o.n(d),p=o(113),u=o.n(p),_=o(118),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=m().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=h();n()(_.A,f);const g=_.A&&_.A.locals?_.A.locals:void 0}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,o),i.exports}o.m=e,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o.b=document.baseURI||self.location.href,o.nc=void 0;o(879),o(445)})();