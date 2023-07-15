"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),g=n,d=c["".concat(i,".").concat(g)]||c[g]||u[g]||s;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<s;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},96696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var r=a(3905),n=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&p(e,a,t[a]);return e},u=(e,t)=>s(e,l(t)),g=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const d={title:"$messageFlags",description:"$messageFlags will return a message's flags.",id:"messageFlags"},f=void 0,y={unversionedId:"functions/message-related/messageFlags",id:"version-6.4.0/functions/message-related/messageFlags",title:"$messageFlags",description:"$messageFlags will return a message's flags.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/messageFlags.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/messageFlags",permalink:"/es/docs/functions/message-related/messageFlags",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$messageFlags",description:"$messageFlags will return a message's flags.",id:"messageFlags"},sidebar:"docs",previous:{title:"$messageAttachment",permalink:"/es/docs/functions/message-related/messageAttachment"},next:{title:"$messageID",permalink:"/es/docs/functions/message-related/ID de mensaje"}},b={},k=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:k},O="wrapper";function h(e){var t=e,{components:a}=t,n=g(t,["components"]);return(0,r.kt)(O,u(c(c({},v),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$messageFlags")," will return a message's flags."),(0,r.kt)("h2",c({},{id:"modo-de-uso"}),"Modo de uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$messageFlags[messageID;sep?;channelID?]\n")),(0,r.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID de mensaje"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The ID of the message."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"sep?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Separator to separate returned values."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"canalID?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID of the channel where the message is located in."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"This will the message flags of your initial command message:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'messageFlags',\n    code: `\n  $messageFlags[$messageID;, ;$channelID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);