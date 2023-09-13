"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2101],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27068:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>w,contentTitle:()=>f,default:()=>v,frontMatter:()=>g,metadata:()=>k,toc:()=>y});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&m(t,n,e[n]);if(l)for(var n of l(e))p.call(e,n)&&m(t,n,e[n]);return t},d=(t,e)=>o(t,i(e)),c=(t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&l)for(var a of l(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const g={title:"$awaitComponents",description:"$awaitComponents awaits components for given amount of uses.",id:"awaitComponents"},f=void 0,k={unversionedId:"functions/awaited-related/awaitComponents",id:"version-6.4.0/functions/awaited-related/awaitComponents",title:"$awaitComponents",description:"$awaitComponents awaits components for given amount of uses.",source:"@site/versioned_docs/version-6.4.0/functions/awaited-related/awaitComponents.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitComponents",permalink:"/website-old/uk/docs/functions/awaited-related/awaitComponents",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 \u0432\u0435\u0440. 2023 \u0440.",frontMatter:{title:"$awaitComponents",description:"$awaitComponents awaits components for given amount of uses.",id:"awaitComponents"},sidebar:"docs",previous:{title:"$awaitCmdReactions",permalink:"/website-old/uk/docs/functions/awaited-related/awaitCmdReactions"},next:{title:"$awaitComponentsUntil",permalink:"/website-old/uk/docs/functions/awaited-related/awaitComponentsUntil"}},w={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],b={toc:y},N="wrapper";function v(t){var e=t,{components:n}=e,r=c(e,["components"]);return(0,a.kt)(N,d(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$awaitComponents")," awaits components for given amount of uses."),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$awaitComponents[messageID;userFilter;customID;commands;errorMsg?;uses?;awaitData?]\n")),(0,a.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"messageID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Message ID."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"userFilter"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"To what the bot will reply ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"everyone")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"specific user ID")," - any user ID."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"customID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Custom ID."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commands"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commands that will be executed, you can separate multiple commands with a comma ( ",(0,a.kt)("inlineCode",{parentName:"td"},",")," )"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"errorMsg?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"error message when command expires"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"uses?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"how many uses until component stops working"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"awaitData?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"awaited data"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))))}v.isMDXComponent=!0}}]);