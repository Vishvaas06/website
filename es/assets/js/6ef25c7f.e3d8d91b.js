"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$interactionModal",description:"Send an interaction modal."},k=void 0,y={unversionedId:"functions/interactionmodal",id:"version-5.5.5/functions/interactionmodal",title:"$interactionModal",description:"Send an interaction modal.",source:"@site/versioned_docs/version-5.5.5/functions/interactionmodal.md",sourceDirName:"functions",slug:"/functions/interactionmodal",permalink:"/es/docs/5.5.5/functions/interactionmodal",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$interactionModal",description:"Send an interaction modal."},sidebar:"docs",previous:{title:"$interactionFollowUp",permalink:"/es/docs/5.5.5/functions/interactionfollowup"},next:{title:"$interactionReply",permalink:"/es/docs/5.5.5/functions/interactionreply"}},N={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Components Options",id:"components-options",level:3},{value:"Components Types",id:"components-types",level:4},{value:"Example",id:"example",level:2}],g={toc:b},v="wrapper";function h(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(v,d(s(s({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionModal"),", sends a modal aka form to user fill it. "),(0,a.kt)("h3",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$interactionModal[title;customID;components]\n")),(0,a.kt)("h3",s({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"title"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Title of modal"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"customID"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"A custom ID for modal"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"components"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Adds components for modal"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h3",s({},{id:"components-options"}),"Components Options"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"{actionRow\n  :{textInput\n  :title\n  :type\n  :customid\n  :required?\n  :placeholder?\n  :minChar?\n  :maxChar?\n  :default?}\n}\n// ? : optional\n")),(0,a.kt)("h4",s({},{id:"components-types"}),"Components Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"title")," \u2014 The title of field."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," \u2014 The type of title field",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u2192 Single line answer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2")," \u2192 Multi-lines answer")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"customid")," \u2014 Custom ID of the ",(0,a.kt)("inlineCode",{parentName:"li"},"$textInputValue"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required")," \u2014 The answer required or not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"placeholder")," \u2014 The text that will show as default label on modal answer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minChar")," \u2014 Minimum character required for the answer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxChar")," \u2014 Maximum character required for the answer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default")," \u2014 The default message will be on the answer field.")),(0,a.kt)("h2",s({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.interactionCommand({\n  name: \"profile\", \n  prototype: 'slash',\n  code: `\n  $interactionModal[Hello there!;profileModal;\n    {actionRow:\n      {textInput:What's your name?:1:nameInput:yes:$username:3:30:$username}\n    }\n    {actionRow:\n      {textInput:How old are you?:2:ageInput:no:13+:0:2}\n    }\n  ]\n  `\n});\n\nbot.interactionCommand({\n  name: \"profileModal\",\n  prototype: 'modal',\n  code: `\n  $interactionReply[Nice to meet you, **$textInputValue[nameInput]**. So you are $textInputValue[ageInput] years old.]\n  `\n});\n")))}h.isMDXComponent=!0}}]);