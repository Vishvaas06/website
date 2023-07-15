"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23337],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>v});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,v=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?t.createElement(v,i(i({ref:r},p),{},{components:n})):t.createElement(v,i({ref:r},p))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},760:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>y,contentTitle:()=>b,default:()=>j,frontMatter:()=>v,metadata:()=>m,toc:()=>O});var t=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&p(e,n,r[n]);if(s)for(var n of s(r))l.call(r,n)&&p(e,n,r[n]);return e},f=(e,r)=>a(e,i(r)),d=(e,r)=>{var n={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))r.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const v={title:"$serverBanner",description:"Displays the server banner (If the guild has one)"},b=void 0,m={unversionedId:"functions/serverbanner",id:"version-5.5.5/functions/serverbanner",title:"$serverBanner",description:"Displays the server banner (If the guild has one)",source:"@site/versioned_docs/version-5.5.5/functions/serverbanner.md",sourceDirName:"functions",slug:"/functions/serverbanner",permalink:"/tr/docs/5.5.5/functions/serverbanner",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$serverBanner",description:"Displays the server banner (If the guild has one)"},sidebar:"docs",previous:{title:"$serverAvailable",permalink:"/tr/docs/5.5.5/functions/serveravailable"},next:{title:"$serverBoostCount",permalink:"/tr/docs/5.5.5/functions/serverboostcount"}},y={},O=[],g={toc:O},h="wrapper";function j(e){var r=e,{components:n}=r,o=d(r,["components"]);return(0,t.kt)(h,f(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function displays the server's banner"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$serverBanner[guildID (optional);size (optional);dynamic (optional)]\n")),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "serverBanner",\ncode: `Heres the server banner: \n$image[$serverBanner[$guildID;2048]]`\n})\n')))}j.isMDXComponent=!0}}]);