"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[34372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",id:"isCustomEmoji"},a=void 0,l={unversionedId:"functions/util/isCustomEmoji",id:"functions/util/isCustomEmoji",title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",source:"@site/docs/functions/util/isCustomEmoji.md",sourceDirName:"functions/util",slug:"/functions/util/isCustomEmoji",permalink:"/docs/functions/util/isCustomEmoji",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1672524727,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",id:"isCustomEmoji"},sidebar:"docs",previous:{title:"$isChannelManageable",permalink:"/docs/functions/util/isChannelManageable"},next:{title:"$isDeafen",permalink:"/docs/functions/util/isDeafen"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Please note that your bot has to be in the server where the custom emoji is present in, in order for the function to work properly.",id:"please-note-that-your-bot-has-to-be-in-the-server-where-the-custom-emoji-is-present-in-in-order-for-the-function-to-work-properly",level:3},{value:"Example",id:"example",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$isCustomEmoji")," will check if the given emoji is a custom emoji or not."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$isCustomEmoji[emoji;guildID?]\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"emoji"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"emoji you want to check if it is a custom emoji"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"guild ID of where the emoji was created in"),(0,o.kt)("td",{parentName:"tr",align:null},"no")))),(0,o.kt)("h3",{id:"please-note-that-your-bot-has-to-be-in-the-server-where-the-custom-emoji-is-present-in-in-order-for-the-function-to-work-properly"},"Please note that your bot has to be in the server where the custom emoji is present in, in order for the function to work properly."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," as the ",(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless",alt:"emoji"})," emoji exists:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'isCustomEmoji',\n  code: `\n  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]\n  `\n});\n")))}p.isMDXComponent=!0}}]);