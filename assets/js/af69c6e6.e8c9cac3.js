"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(r),c=l,m=p["".concat(u,".").concat(c)]||p[c]||g[c]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),l=(r(67294),r(3905));const i={title:"$guildHighestRole",description:"$guildHighestRole will return the highest guild role of a specific guild.",id:"guildHighestRole"},a=void 0,o={unversionedId:"functions/guild-related/guildHighestRole",id:"version-6.3.0/functions/guild-related/guildHighestRole",title:"$guildHighestRole",description:"$guildHighestRole will return the highest guild role of a specific guild.",source:"@site/versioned_docs/version-6.3.0/functions/guild-related/highestGuildRole.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildHighestRole",permalink:"/docs/functions/guild-related/guildHighestRole",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688623316,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$guildHighestRole",description:"$guildHighestRole will return the highest guild role of a specific guild.",id:"guildHighestRole"},sidebar:"docs",previous:{title:"$guildVerificationLevel",permalink:"/docs/functions/guild-related/guildVerificationLevel"},next:{title:"$kick",permalink:"/docs/functions/guild-related/kick"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:d},p="wrapper";function g(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$guildHighestRole")," will return the highest guild role of a specific guild."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$guildHighestRole[guildID?;option?]\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the guild."),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option?"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The option on how to return the role ",(0,l.kt)("br",null)," 1. ",(0,l.kt)("strong",{parentName:"td"},"name")," (default) ",(0,l.kt)("br",null)," 2. ",(0,l.kt)("strong",{parentName:"td"},"id")," ",(0,l.kt)("br",null)," 3. ",(0,l.kt)("strong",{parentName:"td"},"mention")),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("h2",{id:"examples"},"Example(s)"),(0,l.kt)("p",null,"This will return the name of the highest role of your guild:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildHighestRole',\n    code: `\n  $guildHighestRole[$guildID;name]\n  `\n});\n")))}g.isMDXComponent=!0}}]);