"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$oldState",description:"$oldState conserve les donn\xe9es de l'\xe9tat vocal de l'utilisateur avant qu'il ne soit mis \xe0 jour (\xe9v\xe9nement VoiceStateUpdate).",id:"oldState"},v=void 0,y={unversionedId:"functions/event-related/oldState",id:"version-6.4.0/functions/event-related/oldState",title:"$oldState",description:"$oldState conserve les donn\xe9es de l'\xe9tat vocal de l'utilisateur avant qu'il ne soit mis \xe0 jour (\xe9v\xe9nement VoiceStateUpdate).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/oldState.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/oldState",permalink:"/fr/docs/functions/event-related/oldState",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689719564,formattedLastUpdatedAt:"18 juil. 2023",frontMatter:{title:"$oldState",description:"$oldState conserve les donn\xe9es de l'\xe9tat vocal de l'utilisateur avant qu'il ne soit mis \xe0 jour (\xe9v\xe9nement VoiceStateUpdate).",id:"oldState"},sidebar:"docs",previous:{title:"$oldRole",permalink:"/fr/docs/functions/event-related/oldRole"},next:{title:"$oldUser",permalink:"/fr/docs/functions/event-related/oldUser"}},b={},O=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],g={toc:O},k="wrapper";function j(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,u(d(d({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$oldState")," conserve les donn\xe9es de l'\xe9tat vocal de l'utilisateur avant qu'il ne soit mis \xe0 jour (\xe9v\xe9nement VoiceStateUpdate)."),(0,n.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$oldState[option]\n")),(0,n.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Option \xe0 r\xe9cup\xe9rer."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")))))}j.isMDXComponent=!0}}]);