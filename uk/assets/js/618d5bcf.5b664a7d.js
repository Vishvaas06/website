"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>o(e,a(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",id:"interactionPing"},y=void 0,g={unversionedId:"functions/info-related/interactionPing",id:"version-6.4.0/functions/info-related/interactionPing",title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",source:"@site/versioned_docs/version-6.4.0/functions/info-related/interactionPing.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/interactionPing",permalink:"/website-old/uk/docs/functions/info-related/interactionPing",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 \u0432\u0435\u0440. 2023 \u0440.",frontMatter:{title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",id:"interactionPing"},sidebar:"docs",previous:{title:"$hoistedRole",permalink:"/website-old/uk/docs/functions/info-related/hoistedRole"},next:{title:"$userLowestRole",permalink:"/website-old/uk/docs/functions/info-related/userLowestRole"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:v},P="wrapper";function w(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,r.kt)(P,f(u(u({},O),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionPing")," will return the latency of an interaction."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$interactionPing\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that you require ",(0,r.kt)("inlineCode",{parentName:"strong"},'events: ["onInteractionCreate"]')," to be in your main file")),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the latency of an interaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'interactionPing',\n    code: `\n $addButton[1;Test;primary;testButton;false]\n Click me!\n  `\n});\n\nbot.interactionCommand({\n    name: 'testButton',\n    prototype: 'button',\n    code: `\n  $interactionUpdate[This took me: $interactionPing MS!]\n  `\n});\n")))}w.isMDXComponent=!0}}]);