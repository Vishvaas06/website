"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>w});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>i(e,o(t)),d=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message)."},y=void 0,v={unversionedId:"functions/awaitcmdreactions",id:"version-5.5.5/functions/awaitcmdreactions",title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message).",source:"@site/versioned_docs/version-5.5.5/functions/awaitcmdreactions.md",sourceDirName:"functions",slug:"/functions/awaitcmdreactions",permalink:"/hi/docs/5.5.5/functions/awaitcmdreactions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message)."},sidebar:"docs",previous:{title:"$authorID",permalink:"/hi/docs/5.5.5/functions/authorid"},next:{title:"$awaitComponentsUntil",permalink:"/hi/docs/5.5.5/functions/awaitcomponentsuntil"}},b={},w=[{value:"Usage",id:"usage",level:3},{value:"Filter Types",id:"filter-types",level:4},{value:"Suffixes",id:"suffixes",level:4},{value:"Example",id:"example",level:4}],h={toc:w},k="wrapper";function g(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(k,m(u(u({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function will make the bot reply when a user reacts with the given emoji to the command."),(0,a.kt)("h3",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$awaitCmdReactions[filter;time;reactions;awaited commands;error message?;awaited data?]\n//reaction1,reaction2?,...;awaitedCmd1,awaitedCmd2?,...\n")),(0,a.kt)("h4",u({},{id:"filter-types"}),"Filter Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"everyone")," \u2014 makes it avaliable to react for everyone"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userID")," \u2014 makes it avaliable to react for specific user id (for example ",(0,a.kt)("inlineCode",{parentName:"li"},"$authorID"),")")),(0,a.kt)("h4",u({},{id:"suffixes"}),"Suffixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," - Seconds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m")," - Minutes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"h")," - Hours"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"d")," - Days"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"w")," - Weeks")),(0,a.kt)("h4",u({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "await-cmd-reactions",\n  code: `\n  React with 1\ufe0f\u20e3 to command and I\'ll reply in 10 seconds\n\n  $awaitCmdReactions[$authorID;10s;1\ufe0f\u20e3;reactionMessage;Command Timed out!]\n  `\n//This will execute the awaited command if the user reacts\n});\n\nbot.awaitedCommand({\n  name: "reactionMessage",\n  code: `\n  Hi, you reacted to 1\ufe0f\u20e3 and now I, responded!\n  `\n});\n//This will be sending when the user reacted\n')))}g.isMDXComponent=!0}}]);