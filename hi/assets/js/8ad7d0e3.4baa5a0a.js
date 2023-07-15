"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),u=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(m.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(m,".").concat(d)]||s[d]||p[d]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>j,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var o=n(3905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>i(e,a(t)),d=(e,t)=>{var n={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n};const f={title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in."},j=void 0,v={unversionedId:"functions/emojicount",id:"version-5.5.5/functions/emojicount",title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/emojicount.md",sourceDirName:"functions",slug:"/functions/emojicount",permalink:"/hi/docs/5.5.5/functions/emojicount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in."},sidebar:"docs",previous:{title:"$emoji",permalink:"/hi/docs/5.5.5/functions/emoji"},next:{title:"$emojiExists",permalink:"/hi/docs/5.5.5/functions/emojiexists"}},y={},b=[{value:"Types:",id:"types",level:2},{value:"Total emoji count:",id:"total-emoji-count",level:2},{value:"Animated Emojis:",id:"animated-emojis",level:2},{value:"normal Emojis:",id:"normal-emojis",level:2},{value:"Emoji count of another server:",id:"emoji-count-of-another-server",level:2}],g={toc:b},h="wrapper";function O(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,o.kt)(h,p(s(s({},g),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the amount of emojis in a guild"),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$emojiCount[type (optional);guildID (optional)]")),(0,o.kt)("h2",s({},{id:"types"}),"Types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"all")," or empty field =",">"," returns total amount of custom emojis the bot has access to ","(","animated and normal",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"animated")," =",">"," returns amount of animated custom emojis"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"normal")," =",">"," returns amount of non-animated custom emojis")),(0,o.kt)("h2",s({},{id:"total-emoji-count"}),"Total emoji count:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$emojiCount emojis`\n})\n')),(0,o.kt)("h2",s({},{id:"animated-emojis"}),"Animated Emojis:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[animated] emojis`\n})\n')),(0,o.kt)("h2",s({},{id:"normal-emojis"}),"normal Emojis:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[normal] emojis`\n})\n')),(0,o.kt)("h2",s({},{id:"emoji-count-of-another-server"}),"Emoji count of another server:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[all;740866341040291840] emojis`\n})\n')))}O.isMDXComponent=!0}}]);