"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21783],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75693:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>d,metadata:()=>g,toc:()=>j});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(s)for(var t of s(r))l.call(r,t)&&p(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$emojisFromMessage"},y=void 0,g={unversionedId:"functions/emojisfrommessage",id:"version-5.5.5/functions/emojisfrommessage",title:"$emojisFromMessage",description:"This function filters out all emojis from the provided message and returns",source:"@site/versioned_docs/version-5.5.5/functions/emojisfrommessage.md",sourceDirName:"functions",slug:"/functions/emojisfrommessage",permalink:"/uk/docs/5.5.5/functions/emojisfrommessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$emojisFromMessage"},sidebar:"docs",previous:{title:"$emojiExists",permalink:"/uk/docs/5.5.5/functions/emojiexists"},next:{title:"$error",permalink:"/uk/docs/5.5.5/functions/error"}},b={},j=[],v={toc:j},O="wrapper";function w(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(O,u(m(m({},v),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function filters out all emojis from the provided message and returns"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$emojisFromMessage[message;separator (optional)]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojis", \ncode: `\nEmojis:\n$emojisFromMessage[Hello\ud83d\ude00, Made with \u2764\ufe0f]\n`\n//Will return: \ud83d\ude00,\u2764\ufe0f\n})\n')))}w.isMDXComponent=!0}}]);