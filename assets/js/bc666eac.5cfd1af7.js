"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},c=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$ban",description:"Bans an user from the guild using their ID."},g=void 0,b={unversionedId:"functions/ban",id:"version-5.5.5/functions/ban",title:"$ban",description:"Bans an user from the guild using their ID.",source:"@site/versioned_docs/version-5.5.5/functions/ban.md",sourceDirName:"functions",slug:"/functions/ban",permalink:"/docs/5.5.5/functions/ban",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$ban",description:"Bans an user from the guild using their ID."},sidebar:"docs",previous:{title:"$awaitMessageReactions",permalink:"/docs/5.5.5/functions/awaitmessagereactions"},next:{title:"$banCount",permalink:"/docs/5.5.5/functions/bancount"}},y={},k=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Examples",id:"examples",level:2}],h={toc:k},v="wrapper";function N(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,c(d(d({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ban")," allows you to ban someone from the server using their user ID. "),(0,r.kt)("h3",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$ban[guildID;userID;days?;reason]\n")),(0,r.kt)("h3",d({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"guild id"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The server ID where the user will get ban"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"user id"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The user the bot is banning"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"days"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"How many of the messages over x days to delete of the banned user"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"reason"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The reason in the audit logs"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h6",d({},{id:"footnote"}),"Footnote"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Do not forget to use ",(0,r.kt)("inlineCode",{parentName:"em"},"$onlyBotPerms")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"$onlyPerms")," to detect user has permission for this action, either bot!"))),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "ban",\n  code: `\n  $username[$mentioned] has been banned from the guild.\n  \n  $ban[$guildID;$mentioned;7;$noMentionMessage]\n  `\n// Deleted 7 days of messages the user\n// \ud83d\udca1 That\'s also called as "soft-ban"\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without deleting user's messages on the guild:")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "ban",\n  code: `\n  $username[$message] has been banned from the guild.\n  \n  $ban[$guildID;$message;0;$noMentionMessage]\n  `\n// Didn\'t delete any messages of the user, but banned\n});\n')))}N.isMDXComponent=!0}}]);