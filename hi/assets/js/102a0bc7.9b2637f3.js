"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&p(e,a,t[a]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a};const f={title:"loadCommands"},g=void 0,v={unversionedId:"class/loadCommands",id:"version-5.5.5/class/loadCommands",title:"loadCommands",description:"Usage",source:"@site/versioned_docs/version-5.5.5/class/loadCommands.md",sourceDirName:"class",slug:"/class/loadCommands",permalink:"/hi/docs/5.5.5/class/loadCommands",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"loadCommands"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"load()",id:"load",level:3},{value:"Usage",id:"usage-1",level:4},{value:"update()",id:"update",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Example",id:"example",level:2}],O={toc:b},k="wrapper";function h(e){var t=e,{components:a}=t,n=m(t,["components"]);return(0,r.kt)(k,u(c(c({},O),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"})," A Custom Handler To Load/Update Commands\n")),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-typescript"})," const loader = new loadCommands(client:Bot,AddThisToClass? : boolean)\n")),(0,r.kt)("h2",c({},{id:"methods"}),"Methods"),(0,r.kt)("h3",c({},{id:"load"}),"load()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Loads The Commands From The Given File")),(0,r.kt)("h4",c({},{id:"usage-1"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-typescript"})," loader.load(cmd:CommandManager , path: string , debug?:boolean) \n")),(0,r.kt)("h3",c({},{id:"update"}),"update()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Updates All The Changes Made")," "),(0,r.kt)("h4",c({},{id:"usage-2"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-typescript"})," loader.update(debug?:boolean)\n")),(0,r.kt)("h2",c({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'const aoijs = require(\'aoi.js\')\n\nconst bot = new aoijs.Bot({\n     prefix: "Your Prefix", //Your Bot Prefix\n     token: "Your Bot Token Here", //Your Bot Token\n     intents: "all" //Intents Your Bot Requires \n     })\n\nconst loader = new aoijs.loadCommands(bot)\nloader.load(bot.cmd,\'./commands/\')\n')))}h.isMDXComponent=!0}}]);