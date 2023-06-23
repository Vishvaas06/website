"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40769],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),b=o,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},42453:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"$globalUserLeaderboard",description:"A global Leaderboard, with all Guilds."},l=void 0,i={unversionedId:"functions/globaluserleaderboard",id:"version-5.5.5/functions/globaluserleaderboard",title:"$globalUserLeaderboard",description:"A global Leaderboard, with all Guilds.",source:"@site/versioned_docs/version-5.5.5/functions/globaluserleaderboard.md",sourceDirName:"functions",slug:"/functions/globaluserleaderboard",permalink:"/docs/5.5.5/functions/globaluserleaderboard",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687527006,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"$globalUserLeaderboard",description:"A global Leaderboard, with all Guilds."},sidebar:"docs",previous:{title:"$globalCooldown",permalink:"/docs/5.5.5/functions/globalcooldown"},next:{title:"$guild",permalink:"/docs/5.5.5/functions/guild"}},s={},c=[],u={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns a user leaderboard for a global user variable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$globalUserLeaderboard[variable;asc/dec (optional);{top} - {username} - {value}]\n")),(0,o.kt)("p",null,"asc - The values will be from greatest to least ","(","top to bottom",")"),(0,o.kt)("p",null,"desc - The values will be from least to greatest ","(","bottom to top",")"),(0,o.kt)("p",null,"{top} - Their leaderboard position ","(","1./2./3./etc",")"),(0,o.kt)("p",null,"{username} - The users username"),(0,o.kt)("p",null,"{value} - The users value of the given var"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "topcash", \ncode: `\n$globalUserLeaderboard[cash]\n})\n')))}p.isMDXComponent=!0}}]);