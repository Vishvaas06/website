"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&l(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$sum",description:"Sums up all the given number value"},v=void 0,b={unversionedId:"functions/sum",id:"version-5.5.5/functions/sum",title:"$sum",description:"Sums up all the given number value",source:"@site/versioned_docs/version-5.5.5/functions/sum.md",sourceDirName:"functions",slug:"/functions/sum",permalink:"/fr/docs/5.5.5/functions/sum",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$sum",description:"Sums up all the given number value"},sidebar:"docs",previous:{title:"$sub",permalink:"/fr/docs/5.5.5/functions/sub"},next:{title:"$suppressErrors",permalink:"/fr/docs/5.5.5/functions/suppresserrors"}},y={},O=[],g={toc:O},j="wrapper";function h(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(j,f(p(p({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function adds up all the values"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$sum[value1;value2;...]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "sum",\ncode: `$sum[5;5]` //Returns 10\n})\n')))}h.isMDXComponent=!0}}]);