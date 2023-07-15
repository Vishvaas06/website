"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=o,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},54571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,s(t)),b=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$sub",description:"Subtracts all values"},m=void 0,y={unversionedId:"functions/sub",id:"version-5.5.5/functions/sub",title:"$sub",description:"Subtracts all values",source:"@site/versioned_docs/version-5.5.5/functions/sub.md",sourceDirName:"functions",slug:"/functions/sub",permalink:"/es/docs/5.5.5/functions/sub",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$sub",description:"Subtracts all values"},sidebar:"docs",previous:{title:"$stringStartsWith",permalink:"/es/docs/5.5.5/functions/stringstartswith"},next:{title:"$sum",permalink:"/es/docs/5.5.5/functions/sum"}},v={},O=[],g={toc:O},j="wrapper";function w(e){var t=e,{components:r}=t,o=b(t,["components"]);return(0,n.kt)(j,f(p(p({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function subtracts all the values given"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$sub[value1;value2;...]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "sub",\ncode: `$sub[5;5]` //Returns 0\n})\n')))}w.isMDXComponent=!0}}]);