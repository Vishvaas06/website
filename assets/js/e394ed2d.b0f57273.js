"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>k,frontMatter:()=>v,metadata:()=>b,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,s(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const v={title:"bot.onLeave",description:"An event that gets executed, if the bot sees a user leaving a server. To let the bot listen to the event, add one bot.onLeave() callback inside your main file."},m=void 0,b={unversionedId:"events/bot.onleave",id:"version-5.5.5/events/bot.onleave",title:"bot.onLeave",description:"An event that gets executed, if the bot sees a user leaving a server. To let the bot listen to the event, add one bot.onLeave() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onleave.md",sourceDirName:"events",slug:"/events/bot.onleave",permalink:"/docs/5.5.5/events/bot.onleave",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"bot.onLeave",description:"An event that gets executed, if the bot sees a user leaving a server. To let the bot listen to the event, add one bot.onLeave() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onJoin",permalink:"/docs/5.5.5/events/bot.onjoin"},next:{title:"bot.onMemberUpdate",permalink:"/docs/5.5.5/events/bot.onmemberupdate"}},h={},y=[],g={toc:y},O="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,d(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback that allows the bot to log every user who leaves the server."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.leaveCommand({ //command\n        channel: "channel id", //channel where the bot logs\n        code: `your code` //Message sent to <channel>\n})\n')),(0,r.kt)("p",null,"Make sure the ","`","channel","`"," is in the server. So recommended to use server variables (if your bot isn't for 1 server)"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.leaveCommand({ \n        channel: "782446718704812032", \n        code: `Goodbye, $username, hope you had a good stay at $serverName`\n        /*\n                Code Breakdown\n        $serverName - The name of the server the user left\n        $username - The user who left the server\n        */\n})\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GUILD_MEMBERS")," intent needed! Information in the ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/5.5.5/other/gateway-intents"}),"Gateway Intents")," guide."),(0,r.kt)("p",null,"You can use all guild and member based functions like ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/5.5.5/functions/servername"}),"$serverName")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/5.5.5/functions/guildid"}),"$guildID")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/5.5.5/functions/username"}),"$username")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/5.5.5/functions/authorid"}),"$authorID")," in these commands."))}k.isMDXComponent=!0}}]);