"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),s=n,m=u["".concat(o,".").concat(s)]||u[s]||h[s]||i;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},64096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&p(e,r,t[r]);return e},h=(e,t)=>i(e,l(t)),s=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const m={title:"$archiveThread",description:"$archiveThread will archive or unarchive a specific thread.",id:"archiveThread"},f=void 0,v={unversionedId:"functions/guild-related/archiveThread",id:"version-6.4.0/functions/guild-related/archiveThread",title:"$archiveThread",description:"$archiveThread will archive or unarchive a specific thread.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/archiveThread.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/archiveThread",permalink:"/hi/docs/functions/guild-related/archiveThread",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$archiveThread",description:"$archiveThread will archive or unarchive a specific thread.",id:"archiveThread"},sidebar:"docs",previous:{title:"$addThreadMember",permalink:"/hi/docs/functions/guild-related/addThreadMember"},next:{title:"$ban",permalink:"/hi/docs/functions/guild-related/ban"}},g={},b=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],y={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(k,h(u(u({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$archiveThread")," will archive or unarchive a specific thread."),(0,a.kt)("h2",u({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$archiveThread[threadID;channelID?;archive?;reason?]\n")),(0,a.kt)("h2",u({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"threadID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Thread ID."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"channelID?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Channel ID of where the thread is located."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"archive?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Archive the given thread?"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"reason?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Reason that will be displayed in the guild's audit logs."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")))),(0,a.kt)("h2",u({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,a.kt)("p",null,"This will archive the created thread:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'archiveThread',\n    code: `\n  $archiveThread[$channelID;$get[id];true;testing]\n  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  \n  `\n});\n")))}O.isMDXComponent=!0}}]);