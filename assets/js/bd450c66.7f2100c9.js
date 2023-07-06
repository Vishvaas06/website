"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"$getEmbed",description:"Gets information on an embed"},i=void 0,l={unversionedId:"functions/getembed",id:"version-5.5.5/functions/getembed",title:"$getEmbed",description:"Gets information on an embed",source:"@site/versioned_docs/version-5.5.5/functions/getembed.md",sourceDirName:"functions",slug:"/functions/getembed",permalink:"/docs/5.5.5/functions/getembed",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688605413,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$getEmbed",description:"Gets information on an embed"},sidebar:"docs",previous:{title:"$getCustomStatus",permalink:"/docs/5.5.5/functions/getcustomstatus"},next:{title:"$getGlobalUserVar",permalink:"/docs/5.5.5/functions/getglobaluservar"}},s={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function gets the ","<","property",">"," of the embed"),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("p",null,"This function has 4 required fields."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Channel ID ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Message ID ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Index ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$getEmbed[Channel ID;Message ID;Index;Property]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Channel ID - Channel Where the message is located."),(0,o.kt)("li",{parentName:"ul"},"Message ID - Message which you want to get the embed info."),(0,o.kt)("li",{parentName:"ul"},"Index - The index of the embed."),(0,o.kt)("li",{parentName:"ul"},"Property ","(","type, title, description, url, color, timestamp, fields, fvalue, thumbnail, image, video, author, provider, footer, files, createdAt, hexColor, length",")"," - The embed property you want to get.")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "getEmbed",\ncode: `Embed Title Info: $getEmbed[773357387062968400;780877316380688444;1;title]`\n})\n')))}d.isMDXComponent=!0}}]);