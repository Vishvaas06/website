"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>k,frontMatter:()=>d,metadata:()=>v,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$mentionType",description:"Uses an argument to determine the type of the mention."},y=void 0,v={unversionedId:"functions/mentiontype",id:"version-5.5.5/functions/mentiontype",title:"$mentionType",description:"Uses an argument to determine the type of the mention.",source:"@site/versioned_docs/version-5.5.5/functions/mentiontype.md",sourceDirName:"functions",slug:"/functions/mentiontype",permalink:"/uk/docs/5.5.5/functions/mentiontype",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$mentionType",description:"Uses an argument to determine the type of the mention."},sidebar:"docs",previous:{title:"$mentionedUsersCount",permalink:"/uk/docs/5.5.5/functions/mentioneduserscount"},next:{title:"$message",permalink:"/uk/docs/5.5.5/functions/message"}},b={},g=[{value:"Mention types:",id:"mention-types",level:4},{value:"Example command:",id:"example-command",level:4}],O={toc:g},h="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(h,m(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns what type of mention the given argument is."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$mentionType[mention argument]")),(0,r.kt)("h4",u({},{id:"mention-types"}),"Mention types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"user"),(0,r.kt)("li",{parentName:"ul"},"role"),(0,r.kt)("li",{parentName:"ul"},"channel"),(0,r.kt)("li",{parentName:"ul"},"none")),(0,r.kt)("h4",u({},{id:"example-command"}),"Example command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "mention",\ncode: `\nMention type in your message: $mentionType[$message]\n`\n})\n')))}k.isMDXComponent=!0}}]);