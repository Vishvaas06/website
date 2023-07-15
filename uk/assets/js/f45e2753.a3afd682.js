"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>v,toc:()=>k});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$setGuildVar",description:"$setGuildVar will change the value of a given guild variable.",id:"setGuildVar"},g=void 0,v={unversionedId:"functions/variables-related/setGuildVar",id:"version-6.4.0/functions/variables-related/setGuildVar",title:"$setGuildVar",description:"$setGuildVar will change the value of a given guild variable.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/setGuildVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/setGuildVar",permalink:"/uk/docs/functions/variables-related/setGuildVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$setGuildVar",description:"$setGuildVar will change the value of a given guild variable.",id:"setGuildVar"},sidebar:"docs",previous:{title:"$setGlobalUserVar",permalink:"/uk/docs/functions/variables-related/setGlobalUserVar"},next:{title:"$setMessageVar",permalink:"/uk/docs/functions/variables-related/setMessageVar"}},b={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],y={toc:k},O="wrapper";function h(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(O,d(c(c({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$setGuildVar")," will change the value of a given guild variable."),(0,a.kt)("h2",c({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$setGuildVar[varname;value;guildID?;table?]\n")),(0,a.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"varname"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Variable name."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"New Variable value."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"guildID?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Guild ID."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"table?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Variable table."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,a.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("p",null,'This will change the value of "Example" to "This is a value":'),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "setGuildVar",\n    code: `\n    $setGuildVar[Example;This is a value;$guildID;main]\n    `\n});\n')))}h.isMDXComponent=!0}}]);