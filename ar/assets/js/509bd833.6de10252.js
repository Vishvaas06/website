"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84422],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=n,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return a?r.createElement(u,i(i({ref:t},d),{},{components:a})):r.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},89332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>u,metadata:()=>y,toc:()=>v});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&d(e,a,t[a]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a};const u={title:"$addMessageReactions",description:"Adds a reaction to the given message ID.",id:"addmessagereactions"},g=void 0,y={unversionedId:"functions/addmessagereactions",id:"version-5.5.5/functions/addmessagereactions",title:"$addMessageReactions",description:"Adds a reaction to the given message ID.",source:"@site/versioned_docs/version-5.5.5/functions/addmessagereactions.md",sourceDirName:"functions",slug:"/functions/addmessagereactions",permalink:"/ar/docs/5.5.5/functions/addmessagereactions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$addMessageReactions",description:"Adds a reaction to the given message ID.",id:"addmessagereactions"},sidebar:"docs",previous:{title:"$addFilter",permalink:"/ar/docs/5.5.5/functions/addfilter"},next:{title:"$addObjectProperty",permalink:"/ar/docs/5.5.5/functions/addobjectproperty"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],h={toc:v},k="wrapper";function O(e){var t=e,{components:a}=t,n=f(t,["components"]);return(0,r.kt)(k,m(p(p({},h),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will add a reaction to the specified message ID."),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addMessageReactions[channelID;messageID;emoji;emoji?;...]\n")),(0,r.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"channelID"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"The channel of which message is situated in"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"messageID"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"The message of which the reaction(s) will get react"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"emoji"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"The emojis of which will be reactee to the given messageID"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"emoji"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",p({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-message-reactions",\n  code: `\n  $addMessageReactions[$channelID;$messageID;\ud83c\udf38]\n  \n  Here\'s a pretty flower!\n  `\n});\n')))}O.isMDXComponent=!0}}]);