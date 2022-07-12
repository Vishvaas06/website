"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[53993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(p,".").concat(m)]||d[m]||f[m]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"$joinVC",description:"Makes the bot join a specified voice channel."},i=void 0,l={unversionedId:"functions/joinvc",id:"functions/joinvc",title:"$joinVC",description:"Makes the bot join a specified voice channel.",source:"@site/docs/functions/joinvc.md",sourceDirName:"functions",slug:"/functions/joinvc",permalink:"/docs/functions/joinvc",draft:!1,tags:[],version:"current",frontMatter:{title:"$joinVC",description:"Makes the bot join a specified voice channel."},sidebar:"someSidebar",previous:{title:"$joinSplitText",permalink:"/docs/functions/joinsplittext"},next:{title:"$jsonRequest",permalink:"/docs/functions/jsonrequest"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],s={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Makes the bot join an specified voice channel."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$joinVC[channelID;selfMute?;selfDeaf?;speaker?;debug?]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"channel ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The id of the voice channel where the bot will join"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"selfMute"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to make the bot join as muted"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes/no"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"selfDeaf"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to make the bot join as deafen"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes/no"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"speaker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to make the bot join as speaker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes/no"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"debug"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to make the bot join in debug mode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes/no"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "",\n    code: `Joined!\n    $joinVC[816751491451977768]` \n})\n\n/**\n * This would make the bot join the #Staff VC\n * Located in the official aoi.js server.\n**/\n')))}f.isMDXComponent=!0}}]);