"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82457],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"$nodeVersion"},a=void 0,l={unversionedId:"functions/available-functions/nodeVersion",id:"functions/available-functions/nodeVersion",title:"$nodeVersion",description:"Returns the os node version. (installed)",source:"@site/docs/functions/available-functions/nodeVersion.md",sourceDirName:"functions/available-functions",slug:"/functions/available-functions/nodeVersion",permalink:"/docs/6.0.0/functions/available-functions/nodeVersion",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1658668724,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$nodeVersion"},sidebar:"docs",previous:{title:"$multi",permalink:"/docs/6.0.0/functions/available-functions/multi"},next:{title:"$onlyIf",permalink:"/docs/6.0.0/functions/available-functions/onlyIf"}},c={},s=[{value:"Returns",id:"returns",level:3},{value:"Function Usage",id:"function-usage",level:4}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the os node version. (installed)"),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"String")),(0,o.kt)("h4",{id:"function-usage"},"Function Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$nodeVersion\n")))}p.isMDXComponent=!0}}]);