"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,g=u["".concat(i,".").concat(s)]||u[s]||c[s]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>h,frontMatter:()=>g,metadata:()=>b,toc:()=>f});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),s=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$getEmbed",description:"$getEmbed devolver\xe1 propiedades sobre un embed dado.",id:"getEmbed"},k=void 0,b={unversionedId:"functions/info-related/getEmbed",id:"version-6.4.0/functions/info-related/getEmbed",title:"$getEmbed",description:"$getEmbed devolver\xe1 propiedades sobre un embed dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getEmbed.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getEmbed",permalink:"/es/docs/functions/info-related/getEmbed",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689719564,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$getEmbed",description:"$getEmbed devolver\xe1 propiedades sobre un embed dado.",id:"getEmbed"},sidebar:"docs",previous:{title:"$getChannelSlowmode",permalink:"/es/docs/functions/info-related/getChannelSlowmode"},next:{title:"$getMessage",permalink:"/es/docs/functions/info-related/getMessage"}},N={},f=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:f},v="wrapper";function h(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(v,c(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getEmbed")," devolver\xe1 propiedades sobre un embed dado."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getEmbed[canalID?;mensajeID?;\xedndice?;opci\xf3n?]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"canalID"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID del canal en el que se encuentra el mensaje."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID de mensaje"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El ID del mensaje que tiene un embed."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\xedndice"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El \xedndice del embed."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"opci\xf3n"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"La opci\xf3n a recuperar."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"s\xed")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Opciones ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"title"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"T\xedtulo del embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"description"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Descripci\xf3n del embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"URL"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"La URL del t\xedtulo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"color"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Color del embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"timestamp"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Timestamp situado en el footer del embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"field<index",">",".name / field1.name"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Titulo del campo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"field<index",">",".value / field1.value"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Descripci\xf3n del campo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"thumbnail"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Miniatura (imagen superior derecha).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"image"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Imagen grande en la parte inferior.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"video"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V\xeddeo/GIF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"author"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Autor, encima del campo del t\xedtulo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"footer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Footer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"files"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Archivos adjuntos.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"createdAt"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Fecha de creaci\xf3n del embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"hexColor"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Color hexadecimal del embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"length"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Longitud del embed."))))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 la descripci\xf3n de un embed:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getEmbed',\n    code: `\n$getEmbed[$channelID;messageID;1;description] \n  ` // aseg\xfarese de sustituir messageID por el ID real del mensaje \n});\n")))}h.isMDXComponent=!0}}]);