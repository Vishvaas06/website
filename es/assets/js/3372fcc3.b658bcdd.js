"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(r),d=o,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>j,default:()=>h,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))m.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>i(e,a(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",id:"isCustomEmoji"},j=void 0,g={unversionedId:"functions/util-related/isCustomEmoji",id:"version-6.4.0/functions/util-related/isCustomEmoji",title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isCustomEmoji.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isCustomEmoji",permalink:"/es/docs/functions/util-related/isCustomEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$isCustomEmoji",description:"$isCustomEmoji will check if the given emoji is a custom emoji or not.",id:"isCustomEmoji"},sidebar:"docs",previous:{title:"$isChannelManageable",permalink:"/es/docs/functions/util-related/isChannelManageable"},next:{title:"$isDM",permalink:"/es/docs/functions/util-related/isDM"}},y={},v=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],b={toc:v},k="wrapper";function h(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(k,p(c(c({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$isCustomEmoji")," will check if the given emoji is a custom emoji or not."),(0,n.kt)("h2",c({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$isCustomEmoji[emojiResolver;guildID?]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"emojiResolver"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Emoji you want to check if it is a custom emoji."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ID of the guild where the emoji was created in."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," as the ",(0,n.kt)("img",c({parentName:"p"},{src:"https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless",alt:"emoji"}))," emoji is indeed a custom emoji:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isCustomEmoji',\n    code: `\n  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]\n  `\n});\n")))}h.isMDXComponent=!0}}]);