"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[73654],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,v=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(v,s(s({ref:r},u),{},{components:t})):n.createElement(v,s({ref:r},u))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99188:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>m,default:()=>w,frontMatter:()=>v,metadata:()=>b,toc:()=>O});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&u(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&u(e,t,r[t]);return e},f=(e,r)=>o(e,s(r)),d=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const v={title:"$setUserVar",description:"Sets a user variable value (Local)"},m=void 0,b={unversionedId:"functions/setuservar",id:"version-5.5.5/functions/setuservar",title:"$setUserVar",description:"Sets a user variable value (Local)",source:"@site/versioned_docs/version-5.5.5/functions/setuservar.md",sourceDirName:"functions",slug:"/functions/setuservar",permalink:"/uk/docs/5.5.5/functions/setuservar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$setUserVar",description:"Sets a user variable value (Local)"},sidebar:"docs",previous:{title:"$setTimeout",permalink:"/uk/docs/5.5.5/functions/settimeout"},next:{title:"$setVar",permalink:"/uk/docs/5.5.5/functions/setvar"}},y={},O=[],g={toc:O},j="wrapper";function w(e){var r=e,{components:t}=r,a=d(r,["components"]);return(0,n.kt)(j,f(p(p({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function set's a users variable. The value will be assigned to the user and only will be for the current/specified guild"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$setUserVar[variable;value;user ID (optional);guild ID]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "setUserVar",\ncode: `Set a user var\n$setUserVar[money;5]`\n})\n')))}w.isMDXComponent=!0}}]);