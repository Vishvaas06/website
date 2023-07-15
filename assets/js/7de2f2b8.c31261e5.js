"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>x,frontMatter:()=>d,metadata:()=>y,toc:()=>j});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(a)for(var r of a(t))l.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>i(e,s(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$serverEmojiExists"},v=void 0,y={unversionedId:"functions/serveremojiexists",id:"version-5.5.5/functions/serveremojiexists",title:"$serverEmojiExists",description:"This function will return true or false depending if the provided emoji exists inside of the guild or not.",source:"@site/versioned_docs/version-5.5.5/functions/serveremojiexists.md",sourceDirName:"functions",slug:"/functions/serveremojiexists",permalink:"/docs/5.5.5/functions/serveremojiexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$serverEmojiExists"},sidebar:"docs",previous:{title:"$serverDescription",permalink:"/docs/5.5.5/functions/serverdescription"},next:{title:"$serverEmojis",permalink:"/docs/5.5.5/functions/serveremojis"}},b={},j=[],O={toc:j},g="wrapper";function x(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(g,f(u(u({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," depending if the provided emoji exists inside of the guild or not."),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$serverEmojiExists[ID]")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "emojiexists",\n    code: `The emoji with id $message exists inside this server?\n    $serverEmojiExists[$message]\n    `\n});\n')))}x.isMDXComponent=!0}}]);