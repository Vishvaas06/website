"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[47580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,d=u["".concat(l,".").concat(g)]||u[g]||f[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},17714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>d,metadata:()=>v,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),g=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$getMessageVar",description:"Gets message variable value"},m=void 0,v={unversionedId:"functions/getmessagevar",id:"version-5.5.5/functions/getmessagevar",title:"$getMessageVar",description:"Gets message variable value",source:"@site/versioned_docs/version-5.5.5/functions/getmessagevar.md",sourceDirName:"functions",slug:"/functions/getmessagevar",permalink:"/fr/docs/5.5.5/functions/getmessagevar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$getMessageVar",description:"Gets message variable value"},sidebar:"docs",previous:{title:"$getMessage",permalink:"/fr/docs/5.5.5/functions/getmessage"},next:{title:"$getObject",permalink:"/fr/docs/5.5.5/functions/getobject"}},b={},y=[{value:"Fields",id:"fields",level:2},{value:"Options",id:"options",level:2},{value:"Usage",id:"usage",level:2}],O={toc:y},k="wrapper";function j(e){var t=e,{components:r}=t,a=g(t,["components"]);return(0,n.kt)(k,f(u(u({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the value of the specified message ID for the specified variable"),(0,n.kt)("h2",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 required field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Variable ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Message ID ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$getMessageVar[variable;messageID (optional)]")),(0,n.kt)("h2",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Variable - The variable value we're getting for the ","<","message",">"),(0,n.kt)("li",{parentName:"ul"},"Message ID - The message's variable value we're getting")),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Current Message's Variable Value"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "get", \ncode: `\n$getMessageVar[variable]`\n})\n')),(0,n.kt)("p",null,"Specified Message's Variable Value"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "get", \ncode: `\n$getMessageVar[variable;$message]`\n})\n')))}j.isMDXComponent=!0}}]);