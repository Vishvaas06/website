"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67237],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),c=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(f,s(s({ref:r},p),{},{components:t})):o.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85266:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>E,toc:()=>b});var o=t(3905),n=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&p(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&p(e,t,r[t]);return e},m=(e,r)=>a(e,s(r)),d=(e,r)=>{var t={};for(var o in e)i.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))r.indexOf(o)<0&&c.call(e,o)&&(t[o]=e[o]);return t};const f={},g="aoiError",E={unversionedId:"class/aoiError",id:"version-5.5.5/class/aoiError",title:"aoiError",description:"AoiError",source:"@site/versioned_docs/version-5.5.5/class/aoiError.md",sourceDirName:"class",slug:"/class/aoiError",permalink:"/tr/docs/5.5.5/class/aoiError",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{}},v={},b=[{value:"AoiError",id:"aoierror-1",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"makeMessageError()",id:"makemessageerror",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Example",id:"example",level:4},{value:"consoleError()",id:"consoleerror",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Example",id:"example-1",level:4}],y={toc:b},k="wrapper";function O(e){var r=e,{components:t}=r,n=d(r,["components"]);return(0,o.kt)(k,m(u(u({},y),n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",u({},{id:"aoierror"}),"aoiError"),(0,o.kt)("h2",u({},{id:"aoierror-1"}),"AoiError"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),' A Custom Error Class Utilised By "aoi.js".\n')),(0,o.kt)("h2",u({},{id:"usage"}),"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"bot.aoiError = aoijs.AoiError")),(0,o.kt)("h2",u({},{id:"methods"}),"Methods"),(0,o.kt)("h3",u({},{id:"makemessageerror"}),"makeMessageError()"),(0,o.kt)("h4",u({},{id:"usage-1"}),"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"AoiError.makeMessageError(client:Bot,channel:TextChannel | ThreadChannel | NewsChannel ,message:MessageOptions,extraOption:MessageExtraOptions)\n")),(0,o.kt)("p",null,(0,o.kt)("a",u({parentName:"p"},{href:"/tr/docs/5.5.5/options/messageOptions"}),(0,o.kt)("strong",{parentName:"a"},"MessageOptions"))),(0,o.kt)("h4",u({},{id:"example"}),"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),' const aoijs = require(\'aoi.js\');\n const bot = new aoijs.Bot({\n   token: "Your Bot Token",\n   prefix: ".",\n   intents: "all"\n});\n\n bot.AoiError = aoijs.AoiError;\n\n bot.command({\n   name: "custom-error",\n   code: `$djsEval[client.AoiError.makeMessageError(client,channel,{\n          content:"An Error Occurred",\n          embeds:"{newEmbed:{title:This is An Error}{description:Yup This Is An Error}}"\n.         })]`\n});\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",u({},{id:"consoleerror"}),"consoleError()"),(0,o.kt)("h4",u({},{id:"usage-2"}),"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"AoiError.consoleError(ErrorName:string,ErrorMessage:any)\n")),(0,o.kt)("h4",u({},{id:"example-1"}),"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),' const aoijs = require(\'aoi.js\')\n const bot = new aoijs.Bot({\n   token: "Your Bot Token",\n   prefix: "Your Prefix",\n   intents: "all"\n})\n\n bot.AoiError = aoijs.AoiError \n\n bot.command({\n   name: "console-error",\n   code: `$djsEval[client.AoiError.consoleError("CustomError","This Is A Custom Error")]`\n})\n')))}O.isMDXComponent=!0}}]);