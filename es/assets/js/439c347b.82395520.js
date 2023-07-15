"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var o=n(3905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>i(e,a(t)),m=(e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n};const d={title:"$moveSong"},v=void 0,y={unversionedId:"functions/movesong",id:"version-5.5.5/functions/movesong",title:"$moveSong",description:"This function moves a song from x to y. If y is an invalid position, it will remove the song from the queue",source:"@site/versioned_docs/version-5.5.5/functions/movesong.md",sourceDirName:"functions",slug:"/functions/movesong",permalink:"/es/docs/5.5.5/functions/movesong",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$moveSong"},sidebar:"docs",previous:{title:"$month",permalink:"/es/docs/5.5.5/functions/month"},next:{title:"$moveUser",permalink:"/es/docs/5.5.5/functions/moveuser"}},g={},b=[],O={toc:b},h="wrapper";function k(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,o.kt)(h,f(p(p({},O),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function moves a song from x to y. If ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," is an invalid position, it will remove the song from the queue"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$moveSong[from;to]\n")),(0,o.kt)("p",null,"First thing we should recognize our queue. Lets make up a queue to use for moveSong"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Marshmello ft. Bastille - Happier ","(","Official Music Video",")"),(0,o.kt)("li",{parentName:"ol"},"Lukas Graham - 7 Years ","[","Official Music Video","]"),(0,o.kt)("li",{parentName:"ol"},"Gotye - Somebody That I Used To Know ","(","feat. Kimbra",")"," - official music video")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "moveSong",\ncode: `\n$moveSong[2;3]\n`\n/*\nUsing our example queue, our code just moved\nthe second song in queue (Lukas Graham - 7 Years [Official Music Video])\nto the third song in queue\n\nSo our new queue will look like:\n1. Marshmello ft. Bastille - Happier (Official Music Video)\n2. Gotye - Somebody That I Used To Know (feat. Kimbra) - official music video\n3. Lukas Graham - 7 Years [Official Music Video]\n*/\n})\n')))}k.isMDXComponent=!0}}]);