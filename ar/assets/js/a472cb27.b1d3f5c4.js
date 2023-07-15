"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$cooldown",description:"Set a cooldown for a command"},y=void 0,k={unversionedId:"functions/cooldown",id:"version-5.5.5/functions/cooldown",title:"$cooldown",description:"Set a cooldown for a command",source:"@site/versioned_docs/version-5.5.5/functions/cooldown.md",sourceDirName:"functions",slug:"/functions/cooldown",permalink:"/ar/docs/5.5.5/functions/cooldown",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$cooldown",description:"Set a cooldown for a command"},sidebar:"docs",previous:{title:"$concatTextSplit",permalink:"/ar/docs/5.5.5/functions/concattextsplit"},next:{title:"$cpu",permalink:"/ar/docs/5.5.5/functions/cpu"}},b={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Error Options",id:"error-options",level:4},{value:"Example",id:"example",level:2}],v={toc:g},w="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(w,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function sets a cooldown to the current command."),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$cooldown[time;error]\n")),(0,r.kt)("h3",u({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"time"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The time of cooldown"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"error"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The error to be displayed when cooldown is active"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h4",u({},{id:"error-options"}),"Error Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"%time% - Returns time in human readable duration."),(0,r.kt)("li",{parentName:"ul"},"%hour% - Returns time in hour."),(0,r.kt)("li",{parentName:"ul"},"%min% - Returns time in minutes."),(0,r.kt)("li",{parentName:"ul"},"%sec% - Returns time in seconds."),(0,r.kt)("li",{parentName:"ul"},"%ms% - Returns time in milliseconds."),(0,r.kt)("li",{parentName:"ul"},"%day% - Returns time in days."),(0,r.kt)("li",{parentName:"ul"},"%week% - Returns time in weeks."),(0,r.kt)("li",{parentName:"ul"},"%month% - Returns time in months."),(0,r.kt)("li",{parentName:"ul"},"%year% - Returns time in years.")),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "hello", \ncode: `\n$description[Hello!]\n$cooldown[1m;Hey, you need to wait %time%!]\n`\n})\n')))}O.isMDXComponent=!0}}]);