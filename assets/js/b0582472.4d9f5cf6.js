"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[17372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"$checkCondition",description:"Checks if the given condition is true or false"},i=void 0,l={unversionedId:"functions/checkcondition",id:"version-5.5.5/functions/checkcondition",title:"$checkCondition",description:"Checks if the given condition is true or false",source:"@site/versioned_docs/version-5.5.5/functions/checkcondition.md",sourceDirName:"functions",slug:"/functions/checkcondition",permalink:"/docs/5.5.5/functions/checkcondition",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686145969,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{title:"$checkCondition",description:"Checks if the given condition is true or false"},sidebar:"docs",previous:{title:"$charCount",permalink:"/docs/5.5.5/functions/charcount"},next:{title:"$checkContains",permalink:"/docs/5.5.5/functions/checkcontains"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Conditional Operators",id:"conditional-operators",level:4},{value:"Example",id:"example",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function will check if given condition is true or false."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$checkCondition[condition]\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"condition"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether the provided condition is met"),(0,o.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,o.kt)("h4",{id:"conditional-operators"},"Conditional Operators"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"== - Equal"),(0,o.kt)("li",{parentName:"ol"},"!= - Unequal"),(0,o.kt)("li",{parentName:"ol"},">","= - Greater than or equal to"),(0,o.kt)("li",{parentName:"ol"},"<","= - Less than or equal to"),(0,o.kt)("li",{parentName:"ol"},"<"," - Less than"),(0,o.kt)("li",{parentName:"ol"},">"," - Greater than"),(0,o.kt)("li",{parentName:"ol"},"|| - Or "),(0,o.kt)("li",{parentName:"ol"},"&& - And")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "condition",\n  code: `Given condition: 1>2\n  The given condition is $checkCondition[1>2]`\n  //Returns false\n});\n\n')))}d.isMDXComponent=!0}}]);