"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,f=m["".concat(o,".").concat(u)]||m[u]||s[u]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"$editTextSplitElement",description:"$editTextSplitElement will edit a specific text split element.",id:"editTextSplitElement"},i=void 0,p={unversionedId:"functions/misc-related/editTextSplitElement",id:"functions/misc-related/editTextSplitElement",title:"$editTextSplitElement",description:"$editTextSplitElement will edit a specific text split element.",source:"@site/docs/functions/misc-related/editTextSplitElement.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/editTextSplitElement",permalink:"/docs/functions/misc-related/editTextSplitElement",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fafa",lastUpdatedAt:1686145969,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{title:"$editTextSplitElement",description:"$editTextSplitElement will edit a specific text split element.",id:"editTextSplitElement"},sidebar:"docs",previous:{title:"$djsEval",permalink:"/docs/functions/misc-related/djsEval"},next:{title:"$elseif",permalink:"/docs/functions/misc-related/elseif"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$editTextSplitElement")," will edit a specific text split element."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$editTextSplitElement[index;text]\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Index of the text split element."),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"New text split element."),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,l.kt)("h2",{id:"examples"},"Example(s)"),(0,l.kt)("p",null,'This will edit the 3rd text split element and change it to "Goodbye":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "editTextSplitElement",\n    code: `\n  $editTextSplitElement[3;Goodbye]\n  $textSplit[Hello, Bye, Cya;, ]\n  `\n});\n')))}s.isMDXComponent=!0}}]);