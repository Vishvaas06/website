"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>i(e,o(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$isThread",description:"$isThread will check if the given channel is a thread or not.",id:"isThread"},h=void 0,y={unversionedId:"functions/util-related/isThread",id:"version-6.4.0/functions/util-related/isThread",title:"$isThread",description:"$isThread will check if the given channel is a thread or not.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isThread.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isThread",permalink:"/es/docs/functions/util-related/isThread",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$isThread",description:"$isThread will check if the given channel is a thread or not.",id:"isThread"},sidebar:"docs",previous:{title:"$isStreaming",permalink:"/es/docs/functions/util-related/isStreaming"},next:{title:"$isTimeout",permalink:"/es/docs/functions/util-related/isTimeout"}},g={},v=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],b={toc:v},k="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(k,u(d(d({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$isThread")," will check if the given channel is a thread or not."),(0,n.kt)("h2",d({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$isThread[channelID?]\n")),(0,n.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"canalID?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ID of the channel that you want to check."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return either ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," depending on if you're executing the command in a thread:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isThread',\n    code: `\n  $isThread[$channelID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);