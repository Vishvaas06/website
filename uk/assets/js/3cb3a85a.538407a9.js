"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[81355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var r=n(3905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>l(e,a(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$deleteRoles",description:"Deletes the specified role/roles"},y=void 0,b={unversionedId:"functions/deleteroles",id:"version-5.5.5/functions/deleteroles",title:"$deleteRoles",description:"Deletes the specified role/roles",source:"@site/versioned_docs/version-5.5.5/functions/deleteroles.md",sourceDirName:"functions",slug:"/functions/deleteroles",permalink:"/uk/docs/5.5.5/functions/deleteroles",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$deleteRoles",description:"Deletes the specified role/roles"},sidebar:"docs",previous:{title:"$deleteMessageVar",permalink:"/uk/docs/5.5.5/functions/deletemessagevar"},next:{title:"$deleteServerVar",permalink:"/uk/docs/5.5.5/functions/deleteservervar"}},v={},O=[],g={toc:O},k="wrapper";function h(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(k,d(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function deletes the specified role","(","s",")"),(0,r.kt)("p",null,"Fields"),(0,r.kt)("p",null,"This function has 1 required field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Role ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Role ID 2 ","(","Optional",")"),(0,r.kt)("li",{parentName:"ol"},"Etc")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$deleteRoles[roleID;roleID;etc]")),(0,r.kt)("p",null,"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Role ID","(","s",")"," - The role","(","s",")"," the bot is deleting")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("p",null,"Deleting the mentioned role"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deleteRoles",\ncode: `Deleted a role.\n$deleteRoles[$mentionedRoles[1]]`\n})\n')),(0,r.kt)("p",null,"Deleting multiple mentioned roles"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deleteRoles",\ncode: `Deleted a role.\n$deleteRoles[$mentionedRoles[1];$mentionedRoles[2];$mentionedRoles[3]]`\n})\n')))}h.isMDXComponent=!0}}]);