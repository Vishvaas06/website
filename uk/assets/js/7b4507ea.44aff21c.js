"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[29552],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=m(n),k=r,c=p["".concat(s,".").concat(k)]||p[k]||u[k]||i;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80397:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>c,metadata:()=>N,toc:()=>y});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&d(t,n,e[n]);if(o)for(var n of o(e))m.call(e,n)&&d(t,n,e[n]);return t},u=(t,e)=>i(t,l(e)),k=(t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&m.call(t,a)&&(n[a]=t[a]);return n};const c={title:"$getClientInvite",description:"$getClientInvite will return your bot's invite with specified permissions.",id:"getClientInvite"},g=void 0,N={unversionedId:"functions/client-related/getClientInvite",id:"version-6.4.0/functions/client-related/getClientInvite",title:"$getClientInvite",description:"$getClientInvite will return your bot's invite with specified permissions.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/getClientInvite.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/getClientInvite",permalink:"/uk/docs/functions/client-related/getClientInvite",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$getClientInvite",description:"$getClientInvite will return your bot's invite with specified permissions.",id:"getClientInvite"},sidebar:"docs",previous:{title:"$fetchClientValues",permalink:"/uk/docs/functions/client-related/fetchClientValues"},next:{title:"$killClient",permalink:"/uk/docs/functions/client-related/killClient"}},b={},y=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:y},f="wrapper";function h(t){var e=t,{components:n}=e,r=k(e,["components"]);return(0,a.kt)(f,u(p(p({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$getClientInvite")," will return your bot's invite with specified permissions."),(0,a.kt)("h2",p({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$getClientInvite[...perms?]\n")),(0,a.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"perms?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions you want to be included in the invite."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",null," Discord API Permissions ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Permission"),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createinvite"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create guild invites")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"kickmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to kick guild members")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"banmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to ban guild members")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"administrator"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Administrator Permissions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managechannel"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage guild channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageserver"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions to modify server settings")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"addreactions"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permissions to add reactions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewauditlog"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view the guild's audit log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"priorityspeaker"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Priority Speaker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"stream"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to stream in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewchannel"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendmessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send messages in a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendttsmessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send Text-To-Speech messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managemessages"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"embedlinks"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to embed links")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"attachfiles"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to attach files")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"readmessagehistory"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to read the message history within a certain channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"mentioneveryone"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mention ",(0,a.kt)("inlineCode",{parentName:"td"},"@everyone"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"@here")," and all roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"externalemojis"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use external emojis")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"viewguildinsights"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view guild insights")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"connect"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to connect to voice channels and stages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"mutemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mute members in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"deafenmembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to deafen members in voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"movemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to move members between voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"usevad"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use voice-activity-detection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"changenickname"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to change your own nickname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managenicknames"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage other members nicknames")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageroles"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managewebhooks"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage webhooks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageemojisandstickers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage emojis and stickers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useappcmds"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use application commands")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"requesttospeak"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use request-to-speak in stages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"manageevents"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"managethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createpublicthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use public threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createprivatethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use private threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createpublicthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create public threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"createprivatethreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create private threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"externalstickers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use extrernal stickers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"sendmessageinthreads"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send messages in threads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"startembeddedactivities"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to start activities within voice channels")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"moderatemembers"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Permission to timeout and remove timeouts from guild members"))))),(0,a.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("p",null,"This will return your bot's invite with administrator privileges:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getClientInvite',\n    code: `\n  Invite me here: $getClientInvite[administrator]\n  `\n});\n")))}h.isMDXComponent=!0}}]);