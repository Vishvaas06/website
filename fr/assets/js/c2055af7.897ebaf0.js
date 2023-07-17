"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53280],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>y});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?t.createElement(y,i(i({ref:r},l),{},{components:n})):t.createElement(y,i({ref:r},l))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67743:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>y,metadata:()=>v,toc:()=>g});var t=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&l(e,n,r[n]);if(c)for(var n of c(r))p.call(r,n)&&l(e,n,r[n]);return e},f=(e,r)=>a(e,i(r)),d=(e,r)=>{var n={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&c)for(var t of c(e))r.indexOf(t)<0&&p.call(e,t)&&(n[t]=e[t]);return n};const y={title:"$packageVersion"},m=void 0,v={unversionedId:"functions/packageversion",id:"version-5.5.5/functions/packageversion",title:"$packageVersion",description:"This function returns the current version of aoi.js you are running",source:"@site/versioned_docs/version-5.5.5/functions/packageversion.md",sourceDirName:"functions",slug:"/functions/packageversion",permalink:"/fr/docs/5.5.5/functions/packageversion",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 juil. 2023",frontMatter:{title:"$packageVersion"},sidebar:"docs",previous:{title:"$ownerID",permalink:"/fr/docs/5.5.5/functions/ownerid"},next:{title:"$parseDate",permalink:"/fr/docs/5.5.5/functions/parsedate"}},b={},g=[],O={toc:g},j="wrapper";function k(e){var r=e,{components:n}=r,o=d(r,["components"]);return(0,t.kt)(j,f(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function returns the current version of aoi.js you are running"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'info',\n    code: `Running aoi.js version: v$packageVersion`\n})\n")))}k.isMDXComponent=!0}}]);