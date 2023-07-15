"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[34810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},34044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),b=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$setGlobalUserVar",description:"Sets a global user var value"},v=void 0,m={unversionedId:"functions/setglobaluservar",id:"version-5.5.5/functions/setglobaluservar",title:"$setGlobalUserVar",description:"Sets a global user var value",source:"@site/versioned_docs/version-5.5.5/functions/setglobaluservar.md",sourceDirName:"functions",slug:"/functions/setglobaluservar",permalink:"/tr/docs/5.5.5/functions/setglobaluservar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$setGlobalUserVar",description:"Sets a global user var value"},sidebar:"docs",previous:{title:"$setChannelVar",permalink:"/tr/docs/5.5.5/functions/setchannelvar"},next:{title:"$setGuildIcon",permalink:"/tr/docs/5.5.5/functions/setguildicon"}},y={},g=[],O={toc:g},j="wrapper";function h(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(j,f(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function sets a value to a user. The value will remain the same throughout all guilds but will remain assigned to 1 user"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$setGlobalUserVar[variable;value;user ID (optional)]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "setGlobalUserVar",\ncode: `Set your variable value to 4\n$setGlobalUserVar[money;4]`\n})\n')))}h.isMDXComponent=!0}}]);