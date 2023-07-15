"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57120],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$botLeave",description:"Forces the bot to leave the specified server."},b=void 0,v={unversionedId:"functions/botleave",id:"version-5.5.5/functions/botleave",title:"$botLeave",description:"Forces the bot to leave the specified server.",source:"@site/versioned_docs/version-5.5.5/functions/botleave.md",sourceDirName:"functions",slug:"/functions/botleave",permalink:"/hi/docs/5.5.5/functions/botleave",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$botLeave",description:"Forces the bot to leave the specified server."},sidebar:"docs",previous:{title:"$botCount",permalink:"/hi/docs/5.5.5/functions/botcount"},next:{title:"$botOwnerID",permalink:"/hi/docs/5.5.5/functions/botownerid"}},y={},h=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],g={toc:h},k="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,f(u(u({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function makes the bot leave the current / specified server"),(0,n.kt)("h3",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$botLeave[serverID?]\n")),(0,n.kt)("h3",u({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"guild ID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The guild ID of the server from which the bot will leave"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("p",null,"Using this function will make your bot leave the specified server, we recommend using $onlyForIDs","[","Your ID;Only for my owner","]"),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Without optional fields")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "exit",\n    code: `\n    $botLeave\n    $onlyForIDs[278342221202194434;You\'re not Chiwi!]\n    `\n});\n\n// I just used my ID but you can replace it with yours.\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With optional fields")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "exit",\n    code: `\n    $botLeave[773352845738115102] \n    $onlyForIDs[278342221202194434;You\'re not Chiwi!]\n    `\n});\n\n// I just used my ID but you can replace it with yours.\n// In this example, when Chiwi executes the command the bot leaves from the Akarui Development server.\n')))}O.isMDXComponent=!0}}]);