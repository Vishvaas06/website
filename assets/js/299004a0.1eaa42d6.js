"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14023],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Translate",description:"Only translate code credits to: API5 :) Errors? tell me in discord.",authors:{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},tags:["v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},s=void 0,l={permalink:"/wikis/posts/translate-qalbzj",source:"@site/forums/posts/translate-qalbzj.md",title:"Translate",description:"Only translate code credits to: API5 :) Errors? tell me in discord.",date:"2023-06-23T13:30:06.000Z",formattedDate:"June 23, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png",imageURL:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"}],frontMatter:{title:"Translate",description:"Only translate code credits to: API5 :) Errors? tell me in discord.",authors:{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png",imageURL:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},tags:["v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"toToggleCase",permalink:"/wikis/posts/totogglecase-dmrmlh"},nextItem:{title:"Unabbreviate",permalink:"/wikis/posts/unabbreviate-lyc9id"}},i={authorsImageUrls:[void 0]},c=[{value:"Content",id:"content",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"content"},"Content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = [{\nname: 'translate',\ncode: `\n:map: **$replaceText[$jsonRequest[https://api5.vercel.app/translate?from=$splitText[1]&to=$splitText[2]&text=$replaceText[$replaceText[$message;$message[1];];$message[2];];output;Uuuh, Failed to get response with API, Try again later.];%20; ]**\n$removeSplitTextElement[2]\n$removeSplitTextElement[1]\n$onlyIf[$splitText[3]!=;:x: <@$authorID> Insert the text to translate]\n$onlyIf[$splitText[2]!=;:x: <@$authorID> Insert the output language.]\n$onlyIf[$splitText[1]!=;:x: <@$authorID> Insert the input language.]\n$textSplit[$message; ]\n`\n}]\n")))}d.isMDXComponent=!0}}]);