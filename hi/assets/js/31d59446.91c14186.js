"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$round",description:"Rounds a number to the unit"},b=void 0,y={unversionedId:"functions/round",id:"version-5.5.5/functions/round",title:"$round",description:"Rounds a number to the unit",source:"@site/versioned_docs/version-5.5.5/functions/round.md",sourceDirName:"functions",slug:"/functions/round",permalink:"/hi/docs/5.5.5/functions/round",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$round",description:"Rounds a number to the unit"},sidebar:"docs",previous:{title:"$rolePosition",permalink:"/hi/docs/5.5.5/functions/roleposition"},next:{title:"$roundTenth",permalink:"/hi/docs/5.5.5/functions/roundtenth"}},O={},v=[],g={toc:v},h="wrapper";function j(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(h,f(s(s({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function rounds the number to the closest unit"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$round[number]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "round",\ncode: `$round[2.6]` //Returns 3\n})\n')))}j.isMDXComponent=!0}}]);