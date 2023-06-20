"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||l;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={title:"$channelUsed",description:"$channelUsed will return the channel ID of where the event was triggered.",id:"channelUsed"},o=void 0,i={unversionedId:"functions/event-related/channelUsed",id:"version-6.2.6/functions/event-related/channelUsed",title:"$channelUsed",description:"$channelUsed will return the channel ID of where the event was triggered.",source:"@site/versioned_docs/version-6.2.6/functions/event-related/channelUsed.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/channelUsed",permalink:"/docs/functions/event-related/channelUsed",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687232557,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$channelUsed",description:"$channelUsed will return the channel ID of where the event was triggered.",id:"channelUsed"},sidebar:"docs",previous:{title:"$bulk",permalink:"/docs/functions/event-related/bulk"},next:{title:"$handleError",permalink:"/docs/functions/event-related/handleError"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$channelUsed")," will return the channel ID of where the event was triggered."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$channelUsed\n")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return the amount of roles of your guild:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You require ",(0,a.kt)("inlineCode",{parentName:"strong"},"onMessageDelete")," in your main file in order to use this example!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.deletedCommand({\n    channel: "channelID",\n    code: `$userTag deleted a message in <#$channelUsed>!`\n});\n')))}p.isMDXComponent=!0}}]);