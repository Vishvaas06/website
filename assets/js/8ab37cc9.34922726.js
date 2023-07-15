"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12713],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>b});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(o),f=n,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||l;return o?r.createElement(b,a(a({ref:t},s),{},{components:o})):r.createElement(b,a({ref:t},s))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,a[1]=c;for(var p=2;p<l;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},44715:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>j,frontMatter:()=>b,metadata:()=>y,toc:()=>v});var r=o(3905),n=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))i.call(t,o)&&s(e,o,t[o]);if(c)for(var o of c(t))p.call(t,o)&&s(e,o,t[o]);return e},d=(e,t)=>l(e,a(t)),f=(e,t)=>{var o={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(o[r]=e[r]);return o};const b={title:"$globalCooldown",description:"Set a Global cooldown, with all Guilds"},m=void 0,y={unversionedId:"functions/globalcooldown",id:"version-5.5.5/functions/globalcooldown",title:"$globalCooldown",description:"Set a Global cooldown, with all Guilds",source:"@site/versioned_docs/version-5.5.5/functions/globalcooldown.md",sourceDirName:"functions",slug:"/functions/globalcooldown",permalink:"/docs/5.5.5/functions/globalcooldown",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$globalCooldown",description:"Set a Global cooldown, with all Guilds"},sidebar:"docs",previous:{title:"$giveRoles",permalink:"/docs/5.5.5/functions/giveroles"},next:{title:"$globalUserLeaderboard",permalink:"/docs/5.5.5/functions/globaluserleaderboard"}},g={},v=[],w={toc:v},O="wrapper";function j(e){var t=e,{components:o}=t,n=f(t,["components"]);return(0,r.kt)(O,d(u(u({},w),n),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$globalCooldown[time;error when cooldown activated]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "hello", \ncode: `\n$description[Hello!]\n$globalCooldown[1m;Hey, you need to wait 1m!]\n})\n')))}j.isMDXComponent=!0}}]);