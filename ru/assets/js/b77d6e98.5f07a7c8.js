"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,s(t)),m=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",id:"status"},g=void 0,b={unversionedId:"guides/client/status",id:"version-6.4.0/guides/client/status",title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",source:"@site/versioned_docs/version-6.4.0/guides/client/5status.md",sourceDirName:"guides/client",slug:"/guides/client/status",permalink:"/ru/docs/guides/client/status",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"11 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",id:"status"},sidebar:"docs",previous:{title:"Variables",permalink:"/ru/docs/guides/client/variables"},next:{title:"Client Sharding",permalink:"/ru/docs/guides/client/sharding"}},y={},v=[{value:"This guide will be covering statuses and client presences.",id:"this-guide-will-be-covering-statuses-and-client-presences",level:4},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Bot Status",id:"bot-status",level:3},{value:"This section will cover how to customize your bot&#39;s status.",id:"this-section-will-cover-how-to-customize-your-bots-status",level:4},{value:"Client Presence",id:"client-presence",level:3}],k={toc:v},h="wrapper";function N(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,d(p(p({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",p({},{id:"this-guide-will-be-covering-statuses-and-client-presences"}),"This guide will be covering statuses and client presences."),(0,r.kt)("h3",p({},{id:"table-of-contents"}),"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",p({parentName:"strong"},{href:"#bot-status"}),"Statuses"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",p({parentName:"strong"},{href:"#client-presence"}),"Client Presence")))),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"bot-status"}),"Bot Status"),(0,r.kt)("h4",p({},{id:"this-section-will-cover-how-to-customize-your-bots-status"}),"This section will cover how to customize your bot's status."),(0,r.kt)("p",null,"First of all we have to add the following piece of code to our main file:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.status({\n    text: string,\n    type: string,\n    time: number,\n    URL?: string,\n    afk?: boolean\n});\n")),(0,r.kt)("p",null,"When you use sharding you can individually change the status of each shard:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.status({\n    text: string,\n    type: string,\n    time: number,\n    shard: number\n});\n")),(0,r.kt)("p",null,'This will display the text "Example Text!" as bot status, of course you can modify it.'),(0,r.kt)("p",null,"If you want to have multiple statuses just add multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.status({...})"),", simple do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),'bot.status({\n    text: "Example Text one!",\n    type: "PLAYING",\n    time: 12\n});\n\nbot.status({\n    text: "Example Text two!",\n    type: "STREAMING",\n    URL: "some URL"\n});\n')),(0,r.kt)("p",null,"There are various types of statuses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PLAYING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WATCHING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STREAMING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LISTENING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"COMPETING"))),(0,r.kt)("h3",p({},{id:"client-presence"}),"Client Presence"),(0,r.kt)("p",null,"You can also set the bot's presence, by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," property, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),'bot.status({\n    text: "Example Text!",\n    type: "PLAYING",\n    status: "dnd",\n    time: 12\n});\n')),(0,r.kt)("p",null,"There are multiple types of presences:"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"idle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dnd")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"invisible")))))}N.isMDXComponent=!0}}]);