"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>o(e,s(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$userPerms",description:"Returns all permissions the user has."},g=void 0,y={unversionedId:"functions/userperms",id:"version-5.5.5/functions/userperms",title:"$userPerms",description:"Returns all permissions the user has.",source:"@site/versioned_docs/version-5.5.5/functions/userperms.md",sourceDirName:"functions",slug:"/functions/userperms",permalink:"/fr/docs/5.5.5/functions/userperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$userPerms",description:"Returns all permissions the user has."},sidebar:"docs",previous:{title:"$username",permalink:"/fr/docs/5.5.5/functions/username"},next:{title:"$userReacted",permalink:"/fr/docs/5.5.5/functions/userreacted"}},b={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],k={toc:v},h="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,m(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the permissions the user has in given server or in the current server if no server ID is given."),(0,n.kt)("h3",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$userPerms[userID?;separator?;guildID?]\n")),(0,n.kt)("h3",c({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"userID?"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"The ID of the user"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"seperator?"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"Seperator of roleIDs"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"guildID?"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"The ID of the server"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",c({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n  name: \"user-perms\",\n  code: `\n  Your Permissions: $userPerms\n  `\n// Returns 'managemessages,managechannels'\n});\n")))}O.isMDXComponent=!0}}]);