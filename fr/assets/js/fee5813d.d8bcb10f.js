"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97125],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>P,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&l(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&l(e,t,n[t]);return e},f=(e,n)=>o(e,i(n)),m=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$unPinMessage",description:"Unpins a message"},g=void 0,y={unversionedId:"functions/unpinmessage",id:"version-5.5.5/functions/unpinmessage",title:"$unPinMessage",description:"Unpins a message",source:"@site/versioned_docs/version-5.5.5/functions/unpinmessage.md",sourceDirName:"functions",slug:"/functions/unpinmessage",permalink:"/fr/docs/5.5.5/functions/unpinmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$unPinMessage",description:"Unpins a message"},sidebar:"docs",previous:{title:"$unban",permalink:"/fr/docs/5.5.5/functions/unban"},next:{title:"$updateCommands",permalink:"/fr/docs/5.5.5/functions/updatecommands"}},b={},v=[],O={toc:v},j="wrapper";function P(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(j,f(u(u({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to unpin the given messageID ","(","if pinned",")"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$unPinMessage[channelID;messageID]\n")),(0,r.kt)("p",null,"Using the function"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "unpin",\ncode: `$unPinMessage[790811472829743105;794203850839949372]`\n}) //Unpins the given messageID\n')))}P.isMDXComponent=!0}}]);