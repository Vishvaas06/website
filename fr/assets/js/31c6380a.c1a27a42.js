"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84652],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>v,default:()=>O,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(i)for(var t of i(n))u.call(n,t)&&s(e,t,n[t]);return e},m=(e,n)=>o(e,l(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$channelNSFW",description:"$channelNSFW renverra true ou false selon que le salon donn\xe9 est marqu\xe9 comme NSFW ou non.",id:"channelNSFW"},v=void 0,y={unversionedId:"functions/info-related/channelNSFW",id:"version-6.4.0/functions/info-related/channelNSFW",title:"$channelNSFW",description:"$channelNSFW renverra true ou false selon que le salon donn\xe9 est marqu\xe9 comme NSFW ou non.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/channelNSFW.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/channelNSFW",permalink:"/fr/docs/functions/info-related/channelNSFW",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$channelNSFW",description:"$channelNSFW renverra true ou false selon que le salon donn\xe9 est marqu\xe9 comme NSFW ou non.",id:"channelNSFW"},sidebar:"docs",previous:{title:"$channelID",permalink:"/fr/docs/functions/info-related/channelID"},next:{title:"$channelName",permalink:"/fr/docs/functions/info-related/channelName"}},N={},h=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:h},g="wrapper";function O(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(g,m(p(p({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelNSFW")," renverra true ou false selon que le salon donn\xe9 est marqu\xe9 comme NSFW ou non."),(0,r.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$channelNSFW[IDsalon?]\n")),(0,r.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"IDsalon?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID du salon que vous voulez v\xe9rifier s'il est marqu\xe9 comme NSFW ou non."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"Faux")))),(0,r.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera soit ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," selon que le salon o\xf9 vous ex\xe9cutez la commande est marqu\xe9 comme NSFW ou pas :"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelNSFW',\n    code: `\n  $channelNSFW[$channelID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);