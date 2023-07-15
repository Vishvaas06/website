"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46563],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?i.createElement(m,l(l({ref:t},d),{},{components:r})):i.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var i=r(3905),n=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&s.call(e,i)&&(r[i]=e[i]);return r};const m={title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",id:"isVerified"},v=void 0,y={unversionedId:"functions/util-related/isVerified",id:"version-6.4.0/functions/util-related/isVerified",title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isVerified.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isVerified",permalink:"/ar/docs/functions/util-related/isVerified",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",id:"isVerified"},sidebar:"docs",previous:{title:"$isVariableExist",permalink:"/ar/docs/functions/util-related/isVariableExist"},next:{title:"$isVideoOn",permalink:"/ar/docs/functions/util-related/isVideoOn"}},g={},b=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],k={toc:b},O="wrapper";function h(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,i.kt)(O,p(u(u({},k),n),{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$isVerified")," checks if the given guild is verified by Discord."),(0,i.kt)("h2",u({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$isVerified[guildID?]\n")),(0,i.kt)("h2",u({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,i.kt)("th",u({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,i.kt)("th",u({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,i.kt)("th",u({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"guildID?"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Integer"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"The ID of the guild where you want to check its verification status of."),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,i.kt)("h2",u({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,i.kt)("p",null,"This will check if your server is verified and return either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isVerified',\n    code: `\n  $isVerified[$guildID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);