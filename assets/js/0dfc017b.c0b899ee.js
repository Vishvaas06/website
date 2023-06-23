"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76727],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54905:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const i={title:"$nodeVersion",description:"$nodeVersion will return your current node.js version.",id:"nodeVersion"},a=void 0,s={unversionedId:"functions/misc-related/nodeVersion",id:"version-6.2.6/functions/misc-related/nodeVersion",title:"$nodeVersion",description:"$nodeVersion will return your current node.js version.",source:"@site/versioned_docs/version-6.2.6/functions/misc-related/nodeVersion.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/nodeVersion",permalink:"/docs/functions/misc-related/nodeVersion",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687527006,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"$nodeVersion",description:"$nodeVersion will return your current node.js version.",id:"nodeVersion"},sidebar:"docs",previous:{title:"$noMentionMessage",permalink:"/docs/functions/misc-related/noMentionMessage"},next:{title:"$packageDependencies",permalink:"/docs/functions/misc-related/packageDependencies"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],u={toc:l},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$nodeVersion")," will return your current node.js version."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$nodeVersion\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will return the current node.js version your bot is running on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "nodeVersion",\n    code: `\n    $nodeVersion\n    `\n});\n')))}p.isMDXComponent=!0}}]);