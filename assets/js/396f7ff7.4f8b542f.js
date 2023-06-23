"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(b,s(s({ref:t},p),{},{components:n})):o.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"$sendWebhook",description:"Sends a webhook message to the specified webhook"},s=void 0,i={unversionedId:"functions/sendwebhook",id:"version-5.5.5/functions/sendwebhook",title:"$sendWebhook",description:"Sends a webhook message to the specified webhook",source:"@site/versioned_docs/version-5.5.5/functions/sendwebhook.md",sourceDirName:"functions",slug:"/functions/sendwebhook",permalink:"/docs/5.5.5/functions/sendwebhook",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687527006,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"$sendWebhook",description:"Sends a webhook message to the specified webhook"},sidebar:"docs",previous:{title:"$sendTTS",permalink:"/docs/5.5.5/functions/sendtts"},next:{title:"$serverAvailable",permalink:"/docs/5.5.5/functions/serveravailable"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function sends a message through a webhook"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$sendWebhook[webhookID;webhookToken;message;options...]\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "send-webhook",\ncode: `$sendWebhook[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA;Hello!;{title:Embed<3} {color:RANDOM};{title:Embed 2 WOW} {color:RANDOM}]\n`\n})\n/*\nHow to find your webhookID/Token\nurl: https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA\nYour ID: 793312378162642975\nYour Token: paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA\n*/\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Heres a better example",src:n(95093).Z,width:"1126",height:"568"})))}u.isMDXComponent=!0},95093:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image (7)-b925345acf48a9dd24c352d7f47635ef.png"}}]);