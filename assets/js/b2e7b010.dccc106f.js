"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,v=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(v,l(l({ref:t},s),{},{components:r})):n.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"$removeRole",description:"$removeRole will remove a given role from a given member.",id:"removeRole"},l=void 0,i={unversionedId:"functions/interaction-related/removeRole",id:"version-6.3.0/functions/interaction-related/removeRole",title:"$removeRole",description:"$removeRole will remove a given role from a given member.",source:"@site/versioned_docs/version-6.3.0/functions/interaction-related/removeRole.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/removeRole",permalink:"/docs/functions/interaction-related/removeRole",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688623316,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$removeRole",description:"$removeRole will remove a given role from a given member.",id:"removeRole"},sidebar:"docs",previous:{title:"$removeApplicationCommandPermissions",permalink:"/docs/functions/interaction-related/removeApplicationCommandPermissions"},next:{title:"$removeRoles",permalink:"/docs/functions/interaction-related/removeRoles"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$removeRole")," will remove a given role from a given member."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$removeRole[guildID;userID;roleID;reason?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The guild ID of where the user and role is located in."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID of the user whose role will be removed."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"roleID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID of the role that will be removed."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The reason that will be displayed in the guild's audit logs."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will remove a given role from yourself (the role must be below the bot's highest role):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'removeRole',\n    code: `\n   $removeRole[$guildID;$authorID;roleID;Some reason.]`\n});\n")))}u.isMDXComponent=!0}}]);