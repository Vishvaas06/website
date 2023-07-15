"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7937],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(n),s=r,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(f,i(i({ref:e},c),{},{components:n})):a.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},65121:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(o)for(var n of o(e))d.call(e,n)&&c(t,n,e[n]);return t},u=(t,e)=>l(t,i(e)),s=(t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n};const f={title:"$newApplicationCmd",description:"$newApplicationCmd gets the data from application Callbacks (update and create one).",id:"newApplicationCmd"},k=void 0,g={unversionedId:"functions/event-related/newApplicationCmd",id:"version-6.4.0/functions/event-related/newApplicationCmd",title:"$newApplicationCmd",description:"$newApplicationCmd gets the data from application Callbacks (update and create one).",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/newApplicationCmd.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/newApplicationCmd",permalink:"/hi/docs/functions/event-related/newApplicationCmd",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$newApplicationCmd",description:"$newApplicationCmd gets the data from application Callbacks (update and create one).",id:"newApplicationCmd"},sidebar:"docs",previous:{title:"$isSelectMenuInteraction",permalink:"/hi/docs/functions/event-related/isSelectMenuInteraction"},next:{title:"$newChannel",permalink:"/hi/docs/functions/event-related/newChannel"}},N={},b=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"Options",id:"options",level:3},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],y={toc:b},h="wrapper";function v(t){var e=t,{components:n}=e,r=s(e,["components"]);return(0,a.kt)(h,u(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$newApplicationCmd")," gets the data from application Callbacks (update and create one)."),(0,a.kt)("h2",m({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$newApplicationCmd[name]\n")),(0,a.kt)("h2",m({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Option to retrieve."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h3",m({},{id:"options"}),"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Name of slash commnad.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ID of slash commnad.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Description of slash commnad.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"version"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Version of slash command.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Options of slash command.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"guildID"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Guild ID of slash command.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"applicationID"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Returns application ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"defaultPermission"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Returns Default Permissions of slash command.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"timestamp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Returns timestamp of the creation of slash command (in ms).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"createdAt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Returns the date of creation of slash command.")))),(0,a.kt)("h2",m({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.applicationCmdUpdateCommand({\n    channel: "channelid",\n    code: `\n    Slash command was updated!\n- Name: $newApplicationCmd[name]\n- ID: $newApplicationCmd[id]\n- Application ID: $newApplicationCmd[applicationID]`\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This code will execute when ",(0,a.kt)("strong",{parentName:"li"},"slash command is updated")," (Modified)")))}v.isMDXComponent=!0}}]);