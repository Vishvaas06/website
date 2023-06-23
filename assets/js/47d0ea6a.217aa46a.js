"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"$reactionCount",description:"Returns amount of people that have given a reaction to a certain message"},i=void 0,c={unversionedId:"functions/reactioncount",id:"version-5.5.5/functions/reactioncount",title:"$reactionCount",description:"Returns amount of people that have given a reaction to a certain message",source:"@site/versioned_docs/version-5.5.5/functions/reactioncount.md",sourceDirName:"functions",slug:"/functions/reactioncount",permalink:"/docs/5.5.5/functions/reactioncount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687526618,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"$reactionCount",description:"Returns amount of people that have given a reaction to a certain message"},sidebar:"docs",previous:{title:"$reactionCollector",permalink:"/docs/5.5.5/functions/reactioncollector"},next:{title:"$readFile",permalink:"/docs/5.5.5/functions/readfile"}},l={},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function will return the amount of people who reacted with given emoji to given message in the given channel."),(0,o.kt)("p",null,"The list of properties for this function are the next:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Channel ID."),(0,o.kt)("li",{parentName:"ol"},"Message ID."),(0,o.kt)("li",{parentName:"ol"},"Emoji.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "how-many",\n    code: `\n    $reactionCount[782007668831027201;804000541675749416;\ud83c\udf89] Users joined the giveaway in DBD.JS Official Server\n    `\n});\n')))}f.isMDXComponent=!0}}]);