"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".slideshow{margin:0 auto;max-width:100%;overflow:hidden}.slideshowSlider{transition:1s ease;white-space:nowrap}.slide{align-items:center;border-radius:5px;display:inline-block flex;height:200px;justify-content:center;max-height:10%;width:100%}h3{font-family:sans-serif}");exports.Monalisa=({props:e})=>{const a=e,[s,n]=t.default.useState(0),r=t.default.useRef(null),[l,i]=t.default.useState([]);function d(){r.current&&clearTimeout(r.current)}return t.default.useEffect((()=>{(async()=>{try{const e=await window.fetch(`https://vblinds.herokuapp.com/api/screens/${a}/screenVideos`),t=await e.json();i(t),console.log(t),d(),r.current=setTimeout((()=>{n((e=>e===l.length-1?0:e+1))}),2500)}catch(e){console.error(e)}})()}),[s]),t.default.useEffect((()=>()=>{d()}),[]),t.default.createElement("div",null,t.default.createElement("div",{className:"slideshow"},t.default.createElement("div",{className:"slideshowSlider",style:{transform:`translate3d(${100*-s}%, 0, 0)`}},l.map(((e,a)=>t.default.createElement("a",{key:e._id,href:`https://vblinds.herokuapp.com/video/${e._id}`,target:"_blank",rel:"noopener noreferrer"},t.default.createElement("img",{className:"slide",key:a,src:e.thumbnail,alt:e.name})))))))};
