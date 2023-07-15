"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50087],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,f=s["".concat(d,".").concat(u)]||s[u]||c[u]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&m(e,a,t[a]);return e},c=(e,t)=>o(e,i(t)),u=(e,t)=>{var a={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a};const f={title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",id:"addemoji"},g=void 0,k={unversionedId:"functions/addemoji",id:"version-5.5.5/functions/addemoji",title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",source:"@site/versioned_docs/version-5.5.5/functions/addemoji.md",sourceDirName:"functions",slug:"/functions/addemoji",permalink:"/hi/docs/5.5.5/functions/addemoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",id:"addemoji"},sidebar:"docs",previous:{title:"$addCmdReactions",permalink:"/hi/docs/5.5.5/functions/addcmdreactions"},next:{title:"$addField",permalink:"/hi/docs/5.5.5/functions/addfield"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notice",id:"notice",level:2},{value:"Example",id:"example",level:2}],j={toc:b},N="wrapper";function h(e){var t=e,{components:a}=t,n=u(t,["components"]);return(0,r.kt)(N,c(s(s({},j),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$addEmoji")," adds an emoji to given guild's ID, via URL for roles or letting everyone access to added emoji."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$addEmoji[guildID;URL;name;return emoji?;reason?;roleID?;roleID?;...]\n")),(0,r.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"guildID"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The guild's ID where the emoji will be added"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"URL"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The image URL that will be added as emoji"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"name"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The emoji's name"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"return emoji"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"When added, shows emoji"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"boolean"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"reason"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The reason of adding the emoji"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"roleID","(","s",")"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The roles, that will accessible to use the emoji"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",s({},{id:"notice"}),"Notice"),(0,r.kt)("p",null,"Emoji's size ",(0,r.kt)("strong",{parentName:"p"},"should not")," be higher than 256kB."),(0,r.kt)("p",null,"URL has to end with ",(0,r.kt)("inlineCode",{parentName:"p"},".gif"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".png")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".jpg"),"."),(0,r.kt)("h2",s({},{id:"example"}),"Example"),(0,r.kt)("p",null,"Adds an emoji that named ",(0,r.kt)("inlineCode",{parentName:"p"},"partner"),". "),(0,r.kt)("p",null,"You can see details in audit logs."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-emoji",\n  code: `\n  $addEmoji[$guildID;https://media.discordapp.net/attachments/861208192121569280/970996440971223090/Baslksz51_20220429193009.png;partner;yes;Because, why not?;849217373214474253]\n  `\n});\n')))}h.isMDXComponent=!0}}]);