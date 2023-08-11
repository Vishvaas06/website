"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>h,frontMatter:()=>y,metadata:()=>f,toc:()=>k});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const y={title:"$disableMentionType",description:"$disableMentionType will disable a specific mention type.",id:"disableMentionType"},b=void 0,f={unversionedId:"functions/util-related/disableMentionType",id:"version-6.4.0/functions/util-related/disableMentionType",title:"$disableMentionType",description:"$disableMentionType will disable a specific mention type.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/disableMentionType.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/disableMentionType",permalink:"/docs/functions/util-related/disableMentionType",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{title:"$disableMentionType",description:"$disableMentionType will disable a specific mention type.",id:"disableMentionType"},sidebar:"docs",previous:{title:"$digitalFormat",permalink:"/docs/functions/util-related/digitalFormat"},next:{title:"$emojiExists",permalink:"/docs/functions/util-related/emojiExists"}},g={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:k},N="wrapper";function h(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,c(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$disableMentionType")," will disable a specific mention type."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$disableMentionType[type]\n")),(0,r.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Type of mention you want to disable."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("details",null,(0,r.kt)("summary",null," ",(0,r.kt)("h2",null," Available Types ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"everyone"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"@everyone")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"@here")," mentions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"users"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"All user mentions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"roles"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"All role mentions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"all"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Roles, users and any other mention."))))),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will stop the bot from mentioning you:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mention',\n    code: `\n<@$authorID>\n$disableMentionType[users] \n  `\n});\n")),(0,r.kt)("p",null,"This will stop the bot from mentioning anyone or anything:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mention',\n    code: `\n<@$authorID>\n$disableMentionType[all] \n  `\n});\n")))}h.isMDXComponent=!0}}]);