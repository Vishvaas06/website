"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,u=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return r?n.createElement(u,l(l({ref:t},p),{},{components:r})):n.createElement(u,l({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>h,frontMatter:()=>u,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const u={title:"$reactionCollector",description:"Creates a reaction collector for given message ID"},g=void 0,y={unversionedId:"functions/reactioncollector",id:"version-5.5.5/functions/reactioncollector",title:"$reactionCollector",description:"Creates a reaction collector for given message ID",source:"@site/versioned_docs/version-5.5.5/functions/reactioncollector.md",sourceDirName:"functions",slug:"/functions/reactioncollector",permalink:"/tr/docs/5.5.5/functions/reactioncollector",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$reactionCollector",description:"Creates a reaction collector for given message ID"},sidebar:"docs",previous:{title:"$rateLimit",permalink:"/tr/docs/5.5.5/functions/ratelimit"},next:{title:"$reactionCount",permalink:"/tr/docs/5.5.5/functions/reactioncount"}},k={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3}],N={toc:b},v="wrapper";function h(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,d(f(f({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function creates a reaction collector for the given message ID"),(0,n.kt)("h3",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$reactionCollector[channelId;messageId;userFilters;time;reactions;awaits;removeReaction?;awaitData?;endAwait?]\n")),(0,n.kt)("h3",f({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"channelId"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Specific channel for the reaction collector"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"messageId"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The ID of the message to see and recolt all reaction"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"userFilters"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Say if everyone or just someone id can interact with the reaction collector"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"$authorID/@everyone"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"time"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The time during which the reaction collector listens to itself"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"text"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"reaction"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Emoji need to listen"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"emoji"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"command"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Action to do after reaction is used"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"text"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"removeReaction"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Delete reaction after you finish hearing"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes/no"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.awaitedCommand({\n  name: "awaitReaction1",\n  code: `\n  $editMessage[$message[1];\nLeref is cool]`})\n\n\nbot.command({\n  name: "help",\n  code: `\n$reactionCollector[$channelID;$splitText[1];$authorID;1h;\ud83d\ude0b;awaitReaction1;yes]\n$textSplit[$sendMessage[Reaction with \ud83d\ude0b to get a cool message;yes]; ]`})```\n')))}h.isMDXComponent=!0}}]);