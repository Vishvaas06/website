"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79718],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88422:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={title:"$error",description:"This function returns the error that the interpreter threw."},i=void 0,s={unversionedId:"functions/error",id:"version-5.5.5/functions/error",title:"$error",description:"This function returns the error that the interpreter threw.",source:"@site/versioned_docs/version-5.5.5/functions/error.md",sourceDirName:"functions",slug:"/functions/error",permalink:"/docs/5.5.5/functions/error",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687527006,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"$error",description:"This function returns the error that the interpreter threw."},sidebar:"docs",previous:{title:"$emojisFromMessage",permalink:"/docs/5.5.5/functions/emojisfrommessage"},next:{title:"$eval",permalink:"/docs/5.5.5/functions/eval"}},c={},l=[{value:"Usage",id:"usage",level:4}],u={toc:l},p="wrapper";function f(e){let{components:r,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this function you can execute a command if a command execution failed becasue of an interpreter error. The bot will execute the error property of the command if the intepreter throws an error. $error returns that error that was sent in the bot's console."),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Example usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," property with the usage of $error inside to send the console error of the eval command in the given channel ($channelSendMessage). You can use basically all functions in there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "eval",\nerror: `$channelSendMessage[839061638707019836;$userTag had a problem: $error in $channelName!]`\ncode: `\n$djsEval[message]\n`\n})\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example message of the error log.",src:t(7650).Z,width:"780",height:"482"})))}f.isMDXComponent=!0},7650:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/image (3)-adbcc08dba095a6d30607c84007e1ef1.png"}}]);