"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),g=r,d=p["".concat(i,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var m=2;m<o;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={title:"$messageWebhookID",description:"$messageWebhookID will return the ID of the webhook which sent the given message.",id:"messageWebhookID"},s=void 0,l={unversionedId:"functions/message-related/messageWebhookID",id:"version-6.2.6/functions/message-related/messageWebhookID",title:"$messageWebhookID",description:"$messageWebhookID will return the ID of the webhook which sent the given message.",source:"@site/versioned_docs/version-6.2.6/functions/message-related/messageWebhookID.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/messageWebhookID",permalink:"/docs/functions/message-related/messageWebhookID",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687527006,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"$messageWebhookID",description:"$messageWebhookID will return the ID of the webhook which sent the given message.",id:"messageWebhookID"},sidebar:"docs",previous:{title:"$messageURL",permalink:"/docs/functions/message-related/messageURL"},next:{title:"$addObjectProperty",permalink:"/docs/functions/misc-related/addObjectProperty"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$messageWebhookID")," will return the ID of the webhook which sent the given message."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$messageWebhookID[messageID?;channelID?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the message."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the message where the message is located in."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,'This will return the ID of a webhook, make sure to replace "messageID" with an actual message ID sent from a webhook:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'messageWebhookID',\n    code: `\n  $messageWebhookID[messageID;$channelID] //replace messageID\n  `\n});\n")))}u.isMDXComponent=!0}}]);