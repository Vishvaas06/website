"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>k,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=n(3905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$deleteChannels",description:"$deleteChannels will delete multiple channels.",id:"deleteChannels"},h=void 0,g={unversionedId:"functions/guild-related/deleteChannels",id:"version-6.4.0/functions/guild-related/deleteChannels",title:"$deleteChannels",description:"$deleteChannels will delete multiple channels.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/deleteChannels.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/deleteChannels",permalink:"/website-old/docs/functions/guild-related/deleteChannels",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{title:"$deleteChannels",description:"$deleteChannels will delete multiple channels.",id:"deleteChannels"},sidebar:"docs",previous:{title:"$deleteChannel",permalink:"/website-old/docs/functions/guild-related/deleteChannel"},next:{title:"$deleteEmoji",permalink:"/website-old/docs/functions/guild-related/deleteEmoji"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:y},O="wrapper";function k(e){var t=e,{components:n}=t,l=m(t,["components"]);return(0,r.kt)(O,u(p(p({},v),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$deleteChannels")," will delete multiple channels."),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$deleteChannels[...channels]\n")),(0,r.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"...channels"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The channel Ids of the channels which will be deleted."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will delete multiple channels, make sure to replace the arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'deleteChannels',\n    code: `\n  $deleteChannels[channelID1;channelID2;channelID3;channelID4]\n  `\n});\n")))}k.isMDXComponent=!0}}]);