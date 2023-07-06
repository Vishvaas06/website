"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[81850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"$interactionEdit",description:"Edit an interaction message."},o=void 0,l={unversionedId:"functions/interactionedit",id:"version-5.5.5/functions/interactionedit",title:"$interactionEdit",description:"Edit an interaction message.",source:"@site/versioned_docs/version-5.5.5/functions/interactionedit.md",sourceDirName:"functions",slug:"/functions/interactionedit",permalink:"/docs/5.5.5/functions/interactionedit",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688623316,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$interactionEdit",description:"Edit an interaction message."},sidebar:"docs",previous:{title:"$interactionDelete",permalink:"/docs/5.5.5/functions/interactiondelete"},next:{title:"$interactionFollowUp",permalink:"/docs/5.5.5/functions/interactionfollowup"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Property Types",id:"property-types",level:3},{value:"Footnotes",id:"footnotes",level:6},{value:"Examples",id:"examples",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionEdit"),", edits the interaction message send. "),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$interactionEdit[content;embeds?;components?;files?;allowed mentions?]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A content message for reply"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"embeds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Send embed messages for reply"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"components"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Adds components for reply"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"files"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Send file & attachment for reply"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"allowed mentions"),(0,a.kt)("td",{parentName:"tr",align:"left"},'Allowing to "x" mentions for reply'),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h3",{id:"property-types"},"Property Types"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CONTENT")," \u2014 ",(0,a.kt)("em",{parentName:"li"},"classic message text \ud83e\udd20")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EMBEDS")," \u2014 ",(0,a.kt)("em",{parentName:"li"},"embed-errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"COMPONENTS")," \u2014 ",(0,a.kt)("em",{parentName:"li"},"buttons, selection menus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FILES")," \u2014 ",(0,a.kt)("em",{parentName:"li"},"files & attachment embed-errors should be used in here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ALLOWED_MENTIONS")," \u2014 ",(0,a.kt)("em",{parentName:"li"},'"USERS,ROLES,EVERYONE"')))),(0,a.kt)("h6",{id:"footnotes"},"Footnotes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'If you want to make only embed message(s), you can just pass "content" property.')),(0,a.kt)("li",{parentName:"ul"},"Message ",(0,a.kt)("em",{parentName:"li"},"cannot")," be ephemeral, if it wasn't an ephemeral message before!")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//Afte\nbot.interactionCommand({\n  name: \"hello\",\n  prototype: 'slash',\n  code: `\n  $interactionEdit[Bye, World!]\n  \n  $wait[5s]\n  \n  $interactionReply[Hello, World!]\n  `\n});\n")))}d.isMDXComponent=!0}}]);