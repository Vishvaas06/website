"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[83225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const m={title:"$createStageInstance",description:"Creates a stage instance."},g=void 0,y={unversionedId:"functions/createstageinstance",id:"version-5.5.5/functions/createstageinstance",title:"$createStageInstance",description:"Creates a stage instance.",source:"@site/versioned_docs/version-5.5.5/functions/createstageinstance.md",sourceDirName:"functions",slug:"/functions/createstageinstance",permalink:"/hi/docs/5.5.5/functions/createstageinstance",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$createStageInstance",description:"Creates a stage instance."},sidebar:"docs",previous:{title:"$createRole",permalink:"/hi/docs/5.5.5/functions/createrole"},next:{title:"$createSticker",permalink:"/hi/docs/5.5.5/functions/createsticker"}},k={},v=[{value:"Usage",id:"usage",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Fields",id:"fields",level:3},{value:"Privacy Options",id:"privacy-options",level:4},{value:"Example",id:"example",level:2}],b={toc:v},h="wrapper";function O(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,a.kt)(h,d(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function will create a stage instance"),(0,a.kt)("h3",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"$createStageInstance[channelID;topic;privacy?]\n")),(0,a.kt)("h6",u({},{id:"footnote"}),"Footnote"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"*",(0,a.kt)("inlineCode",{parentName:"strong"},"privacy")),' property cannot be settled to "',(0,a.kt)("strong",{parentName:"li"},"public"),'" if the guild is not a community guild.*')),(0,a.kt)("h3",u({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"channelID"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"Channel ID of the stage channel"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"topic"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The topic of the stage channel"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"privacy?"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The privacy status"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h4",u({},{id:"privacy-options"}),"Privacy Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public")," \u2014 This option makes the stage channel avaliable for the other members on other channels join. (Community only)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"private")," \u2014 This option no needed to added when the guild is private.")),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),'bot.command({\n  name: "stage-instance",\n  code: `\n  Let\'s join talk about "Can we see the past?" today!\n  \n  $createStageInstance[897846625848926238;Can we see the past?;public]\n  `\n//Anyone can join to this stage, cause it is settled as "public"\n});\n')))}O.isMDXComponent=!0}}]);