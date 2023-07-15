"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&c(e,r,t[r]);return e},p=(e,t)=>o(e,a(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$findUser",description:"Find any users, with their username, this is Global."},y=void 0,b={unversionedId:"functions/finduser",id:"version-5.5.5/functions/finduser",title:"$findUser",description:"Find any users, with their username, this is Global.",source:"@site/versioned_docs/version-5.5.5/functions/finduser.md",sourceDirName:"functions",slug:"/functions/finduser",permalink:"/es/docs/5.5.5/functions/finduser",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$findUser",description:"Find any users, with their username, this is Global."},sidebar:"docs",previous:{title:"$findTextSplitIndex",permalink:"/es/docs/5.5.5/functions/findtextsplitindex"},next:{title:"$footer",permalink:"/es/docs/5.5.5/functions/footer"}},v={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],h={toc:O},g="wrapper";function w(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(g,p(f(f({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the user ID of the given user. Yes/No will determine if function returns current author id ","(","yes",")"," or undefined ","(","no",")"," if no match was found. Default is yes"),(0,n.kt)("h4",f({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 required field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Return Current User ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$findUser[user;returnCurrentUser (yes/no) (optional)]")),(0,n.kt)("h4",f({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User - The user we're finding"),(0,n.kt)("li",{parentName:"ul"},"Return Current User - Whether or not the author's id will be returned if user not found")),(0,n.kt)("h4",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "find", \ncode: `\n$findUser[Kubaturi]`\n})\n')))}w.isMDXComponent=!0}}]);