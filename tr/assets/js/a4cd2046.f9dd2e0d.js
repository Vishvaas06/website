"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81017:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&c(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),f=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={id:"setup",title:"Setup"},g=void 0,y={unversionedId:"guides/setup",id:"version-5.5.5/guides/setup",title:"Setup",description:"Installation",source:"@site/versioned_docs/version-5.5.5/guides/setup.md",sourceDirName:"guides",slug:"/guides/setup",permalink:"/tr/docs/5.5.5/guides/setup",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{id:"setup",title:"Setup"},sidebar:"docs",previous:{title:"Introduction",permalink:"/tr/docs/5.5.5/"},next:{title:"Variables",permalink:"/tr/docs/5.5.5/guides/variables"}},b={},v=[{value:"Installation",id:"installation",level:2},{value:"package.json",id:"packagejson",level:2}],O={toc:v},j="wrapper";function k(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(j,d(u(u({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",u({},{id:"installation"}),"Installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"node.js 16.6.0 or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm install aoi.js\n")),(0,r.kt)("p",null,"Once this has installed you can begin the following file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," to setup aoi.js"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'const aoijs = require("aoi.js")\n\nconst bot = new aoijs.AoiClient({\n  token: "DISCORD BOT TOKEN",\n  prefix: "DISCORD BOT PREFIX",\n  intents: ["GUILDS", "GUILD_MESSAGES"]\n})\n\n//Events\nbot.onMessage()\n\n//Command Example (ping)\nbot.command({\nname: "ping",\ncode: `Pong! $pingms`\n})\n\n//Ready Event\nbot.readyCommand({\n    channel: "",\n    code: `$log[Ready on $userTag[$clientID]]`\n})\n')),(0,r.kt)("h2",u({},{id:"packagejson"}),"package.json"),(0,r.kt)("p",null,'The file where your project can "get" aoi.js'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'{\n    "name": "-asdf",\n    "version": "1.0.0",\n    "description": "",\n    "main": "index.js",\n    "scripts": {\n      "start": "node index.js"\n    },\n    "engines": {\n      "node": "16.x"\n    },\n    "author": "",\n    "license": "ISC",\n    "dependencies": {\n      "aoi.js": "^5.5.5"\n    }\n  }\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"5.5.5")," can be changed to any version number as you want."))}k.isMDXComponent=!0}}]);