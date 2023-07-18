"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>h,frontMatter:()=>g,metadata:()=>k,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>l(e,o(t)),u=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$replaceTextWithRegex",description:"$replaceTextWithRegex reemplazar\xe1 expresiones regulares espec\xedficas en un texto. Esto funciona de forma similar a $replaceText.",id:"replaceTextWithRegex"},f=void 0,k={unversionedId:"functions/util-related/replaceTextWithRegex",id:"version-6.4.0/functions/util-related/replaceTextWithRegex",title:"$replaceTextWithRegex",description:"$replaceTextWithRegex reemplazar\xe1 expresiones regulares espec\xedficas en un texto. Esto funciona de forma similar a $replaceText.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/replaceTextWithRegex.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceTextWithRegex",permalink:"/es/docs/functions/util-related/replaceTextWithRegex",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689719564,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$replaceTextWithRegex",description:"$replaceTextWithRegex reemplazar\xe1 expresiones regulares espec\xedficas en un texto. Esto funciona de forma similar a $replaceText.",id:"replaceTextWithRegex"},sidebar:"docs",previous:{title:"$replaceText",permalink:"/es/docs/functions/util-related/replaceText"},next:{title:"$resolveColor",permalink:"/es/docs/functions/util-related/resolveColor"}},x={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Ejemplo avanzado",id:"ejemplo-avanzado",level:3}],y={toc:b},N="wrapper";function h(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(N,d(m(m({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$replaceTextWithRegex")," reemplazar\xe1 segmentos espec\xedficos de texto."),(0,a.kt)("h2",m({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$replaceTextWithRegex[text;reg;flags;newText]\n")),(0,a.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Texto que desea modificar."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"reg"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"El regex que ser\xe1 reemplazado."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"banderas"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"#flags"}),"banderas"),"."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"newText"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"El texto que reemplazar\xe1 ",(0,a.kt)("inlineCode",{parentName:"td"},"reg"),"."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"no")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h2",null," banderas ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Banderas"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"g"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Reemplazar todas las coincidencias (may\xfasculas y min\xfasculas)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"m"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Coincidencia m\xfaltiple")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"i"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Reemplazar todas las coincidencias (may\xfasculas y min\xfasculas)"))))),(0,a.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto reemplazar\xe1 ",(0,a.kt)("inlineCode",{parentName:"p"},"m\xe1s")," por ",(0,a.kt)("inlineCode",{parentName:"p"},"menos"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]\n  `\n});  \n")),(0,a.kt)("h3",m({},{id:"ejemplo-avanzado"}),"Ejemplo avanzado"),(0,a.kt)("p",null,"Esto reemplazar\xe1 ",(0,a.kt)("inlineCode",{parentName:"p"},"menos")," con ",(0,a.kt)("inlineCode",{parentName:"p"},"m\xe1s"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]\n  `\n});  \n")))}h.isMDXComponent=!0}}]);