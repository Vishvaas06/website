"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$userRoles",description:"Returns all of the user's roles."},k=void 0,g={unversionedId:"functions/userroles",id:"version-5.5.5/functions/userroles",title:"$userRoles",description:"Returns all of the user's roles.",source:"@site/versioned_docs/version-5.5.5/functions/userroles.md",sourceDirName:"functions",slug:"/functions/userroles",permalink:"/uk/docs/5.5.5/functions/userroles",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$userRoles",description:"Returns all of the user's roles."},sidebar:"docs",previous:{title:"$userRoleCount",permalink:"/uk/docs/5.5.5/functions/userrolecount"},next:{title:"$usersBanned",permalink:"/uk/docs/5.5.5/functions/usersbanned"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Option Types",id:"option-types",level:4},{value:"Example",id:"example",level:2}],v={toc:b},N="wrapper";function h(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(N,c(f(f({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the roles that the user has in the server.",(0,n.kt)("sup",f({parentName:"p"},{id:"fnref-1"}),(0,n.kt)("a",f({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),(0,n.kt)("h3",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$userRoles[userID?;guildID?;option?;separator?]\n")),(0,n.kt)("h3",f({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"userID?"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The ID of the user"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"guildID?"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The ID of the server"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"option?"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The option of the returning user's"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"seperator?"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Seperator of roleIDs"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h4",f({},{id:"option-types"}),"Option Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," \u2014 Returns ID of the role(s)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," \u2014 Returns name of the role(s)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mention")," \u2014 Returns mention of the role(s)")),(0,n.kt)("h2",f({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n  name: \"user-roles\",\n  code: `\n  Your Roles: $userRoles[$authorID;$guildID;name;,]\n  `\n//Will return, 'professional, staff, logger'\n})\n")),(0,n.kt)("div",f({},{className:"footnotes"}),(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",f({parentName:"ol"},{id:"fn-1"}),"Don't forget members also have @everyone role. Be aware of that and use it on your testing channel to ",(0,n.kt)("strong",{parentName:"li"},"do not")," ping everyone.",(0,n.kt)("a",f({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}h.isMDXComponent=!0}}]);