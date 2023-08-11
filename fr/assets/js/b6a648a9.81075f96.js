"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35272],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},27687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>o(e,l(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$channelTopic",description:"$channelTopic retournera le sujet du salon donn\xe9.",id:"channelTopic"},y=void 0,v={unversionedId:"functions/info-related/channelTopic",id:"version-6.4.0/functions/info-related/channelTopic",title:"$channelTopic",description:"$channelTopic retournera le sujet du salon donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/channelTopic.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/channelTopic",permalink:"/fr/docs/functions/info-related/channelTopic",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$channelTopic",description:"$channelTopic retournera le sujet du salon donn\xe9.",id:"channelTopic"},sidebar:"docs",previous:{title:"$channelOverwrites",permalink:"/fr/docs/functions/info-related/channelOverwrites"},next:{title:"$channelType",permalink:"/fr/docs/functions/info-related/channelType"}},b={},h=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:h},g="wrapper";function k(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(g,d(s(s({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelTopic")," renverra le sujet du salon donn\xe9."),(0,r.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$channelTopic[IDsalon?]\n")),(0,r.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"IDsalon?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID du salon dont vous voulez obtenir le sujet."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"Faux")))),(0,r.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera le sujet du salon o\xf9 vous ex\xe9cutez la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelTopic',\n    code: `\n  $channelTopic[$channelID]\n  `\n});\n")))}k.isMDXComponent=!0}}]);