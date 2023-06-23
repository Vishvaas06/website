"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"$boostingSince",description:"Returns the amount of time the user has been boosting for."},i=void 0,l={unversionedId:"functions/boostingsince",id:"version-5.5.5/functions/boostingsince",title:"$boostingSince",description:"Returns the amount of time the user has been boosting for.",source:"@site/versioned_docs/version-5.5.5/functions/boostingsince.md",sourceDirName:"functions",slug:"/functions/boostingsince",permalink:"/docs/5.5.5/functions/boostingsince",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687526618,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"$boostingSince",description:"Returns the amount of time the user has been boosting for."},sidebar:"docs",previous:{title:"$blacklistOnlyCommands",permalink:"/docs/5.5.5/functions/blacklistonlycommands"},next:{title:"$botCount",permalink:"/docs/5.5.5/functions/botcount"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Format Options",id:"format-options",level:4},{value:"Examples",id:"examples",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function will return the amount of time the user has been boosting for. if the user isn't boosting it will return nothing."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$boostingSince[guildId?;userId?;format?]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The id of the guild"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"user ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The id of the user"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"format"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The format on how you want the date to be returned"),(0,a.kt)("td",{parentName:"tr",align:"left"},"str & num"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h4",{id:"format-options"},"Format Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Blank ","(","No format provided",")"," - Example: Friday, 12 March 2021"),(0,a.kt)("li",{parentName:"ul"},"LT - Time - Example: 4:01 AM"),(0,a.kt)("li",{parentName:"ul"},"LTS - Time w/ seconds - Example: 3:58:5 AM"),(0,a.kt)("li",{parentName:"ul"},"L - Date - Example: 3/12/2021"),(0,a.kt)("li",{parentName:"ul"},"LLL - Specified Date - Example: March 12 2021 4:02 AM"),(0,a.kt)("li",{parentName:"ul"},"LLLL - - Specified Date w/ Day - Example: Friday, March 12 2021 4:02 AM"),(0,a.kt)("li",{parentName:"ul"},"dddd - Day - Example: Friday"),(0,a.kt)("li",{parentName:"ul"},"HH - Hour - Example: 15"),(0,a.kt)("li",{parentName:"ul"},"For more formats, check ",(0,a.kt)("a",{parentName:"li",href:"https://thecodebarbarian.com/formatting-javascript-dates-with-moment-js.html"},"here"))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "boosting",\n    code: `\nLeref has been boosting since $boostingSince[773352845738115102;608358453580136499;L] // Checking when Leref boosted Akarui Development server.\n    `\n}); // Returns: 5/6/2022\n')))}u.isMDXComponent=!0}}]);