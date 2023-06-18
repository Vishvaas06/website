"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"bot.onUserUpdate",description:"An event that gets executed, if the bot sees a user updating it's profile. To let the bot listen to the event, add one bot.onUserUpdate() callback inside your main file."},i=void 0,l={unversionedId:"events/bot.onuserupdate",id:"version-5.5.5/events/bot.onuserupdate",title:"bot.onUserUpdate",description:"An event that gets executed, if the bot sees a user updating it's profile. To let the bot listen to the event, add one bot.onUserUpdate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onuserupdate.md",sourceDirName:"events",slug:"/events/bot.onuserupdate",permalink:"/docs/5.5.5/events/bot.onuserupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062520,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"bot.onUserUpdate",description:"An event that gets executed, if the bot sees a user updating it's profile. To let the bot listen to the event, add one bot.onUserUpdate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onTypingStart",permalink:"/docs/5.5.5/events/bot.ontypingstart"},next:{title:"bot.onVoiceStateUpdate",permalink:"/docs/5.5.5/events/bot.onvoicestateupdate"}},s={},p=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This callback triggers every time a user updates their profile."),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.userUpdateCommand({ //command\nchannel: "channel id", //the channel where the bot will log\ncode: `your code` //Message that will be sent to <channel>\n})\n')),(0,a.kt)("h4",{id:"example-command"},"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.userUpdateCommand({ \nchannel: "772414449839636490", \ncode: `$username has updated their avatar. Old avatar:\n$oldUser[avatar]\n`\n})\n')),(0,a.kt)("h4",{id:"options"},"Options:"),(0,a.kt)("p",null,"You can use the functions ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/olduser"},"$oldUser","[","]")," with the options below to return old user data."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"partial")," - Whether the User structure is partial or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"avatar")," - The old avatar of the user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"system")," - Whether the user is part of the official discord team "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"discriminator")," - The outdated discriminator for this user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tag")," - The tag for this user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bot")," - Whether the user is a bot or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"username")," - The old username of this user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status")," - The status of this user "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"activities")," - The activities for this user")))}c.isMDXComponent=!0}}]);