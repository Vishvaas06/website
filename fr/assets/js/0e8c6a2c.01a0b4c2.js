"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[47470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>i(e,o(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$addApplicationCommandPermissions",description:"$addApplicationCommandPermissions changera les permissions d'une commande slash.",id:"addApplicationCommandPermissions"},g=void 0,b={unversionedId:"functions/interaction-related/addApplicationCommandPermissions",id:"version-6.4.0/functions/interaction-related/addApplicationCommandPermissions",title:"$addApplicationCommandPermissions",description:"$addApplicationCommandPermissions changera les permissions d'une commande slash.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/addApplicationCommandPermissions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addApplicationCommandPermissions",permalink:"/fr/docs/functions/interaction-related/addApplicationCommandPermissions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$addApplicationCommandPermissions",description:"$addApplicationCommandPermissions changera les permissions d'une commande slash.",id:"addApplicationCommandPermissions"},sidebar:"docs",previous:{title:"$webhookExists",permalink:"/fr/docs/functions/info-related/webhookExists"},next:{title:"$addButton",permalink:"/fr/docs/functions/interaction-related/addButton"}},y={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:v},O="wrapper";function h(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(O,m(c(c({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$addApplicationCommandPermissions[IDserveur/global?;ID;...perms]\n")),(0,r.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IDserveur/global"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene, entier"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Type de commande de l'application. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"global")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"ID sp\xe9cifique de serveur")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID de la commande d'application."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"...perms"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Autorisations."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,'Ceci d\xe9sactivera la commande slash pour tous les membres de la guilde (assurez-vous de remplacer "ID" par la commande slash ID r\xe9elle) :'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addApplicationCommandPermissions',\n    code: `\n    \n    $addApplicationCommandPermissions[$guildID;ID;[\n  {\n    id: '$guildID',\n    type: 'ROLE',\n    permission: false\n  }\n]]`\n});\n")))}h.isMDXComponent=!0}}]);