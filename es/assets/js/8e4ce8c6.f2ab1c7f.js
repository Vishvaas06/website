"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[91339],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,y=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?a.createElement(y,l(l({ref:r},d),{},{components:t})):a.createElement(y,l({ref:r},d))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[s]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24163:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&d(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&d(e,t,r[t]);return e},u=(e,r)=>o(e,l(r)),m=(e,r)=>{var t={};for(var a in e)i.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const y={title:"$arrayForEach",description:"$arrayForEach ejecutar\xe1 un comando esperado para cada elemento de la matriz.",id:"arrayForEach"},f=void 0,b={unversionedId:"functions/array-related/arrayForEach",id:"version-6.4.0/functions/array-related/arrayForEach",title:"$arrayForEach",description:"$arrayForEach ejecutar\xe1 un comando esperado para cada elemento de la matriz.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayForEach.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayForEach",permalink:"/es/docs/functions/array-related/arrayForEach",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$arrayForEach",description:"$arrayForEach ejecutar\xe1 un comando esperado para cada elemento de la matriz.",id:"arrayForEach"},sidebar:"docs",previous:{title:"$arrayFind",permalink:"/es/docs/functions/array-related/arrayFind"},next:{title:"$arrayIncludes",permalink:"/es/docs/functions/array-related/arrayIncludes"}},g={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],k={toc:v},h="wrapper";function O(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(h,u(s(s({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayForEach")," ejecutar\xe1 un comando esperado para cada elemento de la matriz."),(0,a.kt)("h2",s({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayForEach[nombre;comandoEsperado;esperarDatos?]\n")),(0,a.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nombre de matriz"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"comandoEsperado"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Comando esperado para ejecutar."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"esperarDatos?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Datos esperados."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))))}O.isMDXComponent=!0}}]);