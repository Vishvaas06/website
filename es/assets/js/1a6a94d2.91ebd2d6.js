"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>P,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$removeApplicationCommandPermissions",description:"$removeApplicationCommandPermissions eliminar\xe1 los permisos de un usuario o un rol de un comando espec\xedfico de una aplicaci\xf3n.",id:"removeApplicationCommandPermissions"},v=void 0,g={unversionedId:"functions/interaction-related/removeApplicationCommandPermissions",id:"version-6.4.0/functions/interaction-related/removeApplicationCommandPermissions",title:"$removeApplicationCommandPermissions",description:"$removeApplicationCommandPermissions eliminar\xe1 los permisos de un usuario o un rol de un comando espec\xedfico de una aplicaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/removeApplicationCommandPermissions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/removeApplicationCommandPermissions",permalink:"/es/docs/functions/interaction-related/removeApplicationCommandPermissions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$removeApplicationCommandPermissions",description:"$removeApplicationCommandPermissions eliminar\xe1 los permisos de un usuario o un rol de un comando espec\xedfico de una aplicaci\xf3n.",id:"removeApplicationCommandPermissions"},sidebar:"docs",previous:{title:"$modifyApplicationCommand",permalink:"/es/docs/functions/interaction-related/modifyApplicationCommand"},next:{title:"$removeRole",permalink:"/es/docs/functions/interaction-related/removeRole"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],k={toc:y},O="wrapper";function P(e){var t=e,{components:n}=t,o=u(t,["components"]);return(0,r.kt)(O,d(m(m({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$removeApplicationCommandPermissions")," eliminar\xe1 los permisos de un usuario o rol de un comando espec\xedfico de la aplicaci\xf3n."),(0,r.kt)("h2",m({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$removeApplicationCommandPermissions[servidorID/global;id;...roruIds]\n")),(0,r.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"servidorID/global"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Tipo de comando de aplicaci\xf3n. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"global")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"un guildID espec\xedfico")),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"id"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Tipo de comando de aplicaci\xf3n."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"roruID"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entero, cadena"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Funciones o usuarios para modificar/remover los permisos, divididos por comas."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")))))}P.isMDXComponent=!0}}]);