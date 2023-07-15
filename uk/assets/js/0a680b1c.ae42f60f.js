"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$pruneStatus",description:"Returns an amount of members that can be pruned."},b=void 0,y={unversionedId:"functions/prunestatus",id:"version-5.5.5/functions/prunestatus",title:"$pruneStatus",description:"Returns an amount of members that can be pruned.",source:"@site/versioned_docs/version-5.5.5/functions/prunestatus.md",sourceDirName:"functions",slug:"/functions/prunestatus",permalink:"/uk/docs/5.5.5/functions/prunestatus",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$pruneStatus",description:"Returns an amount of members that can be pruned."},sidebar:"docs",previous:{title:"$pruneMusic",permalink:"/uk/docs/5.5.5/functions/prunemusic"},next:{title:"$queue",permalink:"/uk/docs/5.5.5/functions/queue"}},k={},v=[{value:"Options:",id:"options",level:4},{value:"Example Command:",id:"example-command",level:4}],g={toc:v},O="wrapper";function h(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(O,m(c(c({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function shows you how many inactive members without roles and with optional given roles can be pruned currently from the given guild without actually kicking them.."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$pruneMembers[amount of days(optional);guildID(optional);roleid1:roleid2:roleid3... (optional)]")),(0,r.kt)("h4",c({},{id:"options"}),"Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount of days")," =",">"," Number of days of inactivity required to kick ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},"must be between 1 and 30"),(0,r.kt)("li",{parentName:"ul"},"defaults to 7"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," the guildID the members should be checked for prune status ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roles")," =",">",' Array of roles to bypass the "...and no roles" constraint when pruning so it includes members with given roles in the prune status ',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},"separated by ",(0,r.kt)("inlineCode",{parentName:"li"},":"))))),(0,r.kt)("h4",c({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "prunestatus",\ncode: `\nPruning would kick:\n$pruneStatus[5;$guildID;741266432574357586:820666519331405854] members!\n`\n})\n')))}h.isMDXComponent=!0}}]);