"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39399],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=r,g=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},91958:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>s,default:()=>v,frontMatter:()=>g,metadata:()=>N,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&u(t,n,e[n]);if(o)for(var n of o(e))d.call(e,n)&&u(t,n,e[n]);return t},c=(t,e)=>l(t,i(e)),k=(t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n};const g={title:"$editChannel",description:"$editChannel will edit a channel.",id:"editChannel"},s=void 0,N={unversionedId:"functions/guild-related/editChannel",id:"version-6.4.0/functions/guild-related/editChannel",title:"$editChannel",description:"$editChannel will edit a channel.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/editChannel.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/editChannel",permalink:"/hi/docs/functions/guild-related/editChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$editChannel",description:"$editChannel will edit a channel.",id:"editChannel"},sidebar:"docs",previous:{title:"$deleteWebhook",permalink:"/hi/docs/functions/guild-related/deleteWebhook"},next:{title:"$fetchActiveThreads",permalink:"/hi/docs/functions/guild-related/fetchActiveThreads"}},h={},b=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],y={toc:b},f="wrapper";function v(t){var e=t,{components:n}=e,r=k(e,["components"]);return(0,a.kt)(f,c(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$editChannel")," will edit a channel."),(0,a.kt)("h2",m({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$editChannel[channelID;name?;type?;position?;topic?;nsfw?;bitrate?;userlimit?;parent?;lockPermissions?;permissionOverwrites?;rateLimitPerUser?;defaultAutoArchiveDuration?;rtcRegion?;reason?]\n")),(0,a.kt)("h2",m({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"channelID"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The ID of the channel which will be notified."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"name?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The new channel name."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The new channel type. (listed below)"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"position?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The new channel position."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"topic?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The new channel topic."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"nsfw?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"If it should mark the channel as NSFW or not."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bitrate?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Voice Channel bitrate."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"userlimit?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Voice Channel userlimit."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"parent?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The new parent of the channel. (category ID)"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"lockPermissions?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The new channels lock permissions."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"permissionOverwrites?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The new channels permission overwrites."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"rateLimitPerUser?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The channel slowmode of the edited channel."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"defaultAutoArchiveDuration?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Thread/Forum archive duration. (in ms)"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"rtcRegion?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Voice Channel RTC region."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"reason?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Reason which will be displayed in the guild's audit logs."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: you can use ",(0,a.kt)("inlineCode",{parentName:"strong"},"$default")," to keep the current property.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",null," Channel Types ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Channel Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Text Channel"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Text")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Voice Channel"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Voice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Category"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Category")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Stage Channel"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Stage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Private Thread"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PrivateThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Public Thread"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PublicThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Forum"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Forum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Announcement Thread"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"AnnouncementThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Announcement Channel"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Announcement")))),(0,a.kt)("p",null,"Note: all channel types are ",(0,a.kt)("strong",{parentName:"p"},"case-sensitive"),".")),(0,a.kt)("h2",m({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,a.kt)("p",null,'This will change the current channel name to "i-love-aoijs":'),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'editChannel',\n    code: `\n  $editChannel[$channelID;i-love-aoi-js]\n  `\n});\n")))}v.isMDXComponent=!0}}]);