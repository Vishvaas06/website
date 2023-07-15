"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>y,frontMatter:()=>g,metadata:()=>k,toc:()=>h});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",id:"replaceTextWithRegex"},f=void 0,k={unversionedId:"functions/util-related/replaceTextWithRegex",id:"version-6.4.0/functions/util-related/replaceTextWithRegex",title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/replaceTextWithRegex.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceTextWithRegex",permalink:"/hi/docs/functions/util-related/replaceTextWithRegex",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$replaceTextWithRegex",description:"$replaceTextWithRegex will replace specific regex in a text. This works similar as $replaceText.",id:"replaceTextWithRegex"},sidebar:"docs",previous:{title:"$replaceText",permalink:"/hi/docs/functions/util-related/replaceText"},next:{title:"$resolveColor",permalink:"/hi/docs/functions/util-related/resolveColor"}},x={},h=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2},{value:"Advanced Example",id:"advanced-example",level:3}],N={toc:h},b="wrapper";function y(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(b,u(d(d({},N),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$replaceTextWithRegex")," will replace specific segments of text."),(0,a.kt)("h2",d({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$replaceTextWithRegex[text;reg;flags;newText]\n")),(0,a.kt)("h2",d({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Text you want to modify."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"reg"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The regex that will be replaced."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"flags"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"#flags"}),"Flags"),"."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"newText"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The text that will replace ",(0,a.kt)("inlineCode",{parentName:"td"},"reg"),"."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h2",null," Flags ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Flags"),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"g"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Replace all matches (case-sensitive)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"m"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Multiline matching")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"i"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Replace all matches (case-insensitive)"))))),(0,a.kt)("h2",d({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,a.kt)("p",null,"This will replace ",(0,a.kt)("inlineCode",{parentName:"p"},"more")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"less"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]\n  `\n});  \n")),(0,a.kt)("h3",d({},{id:"advanced-example"}),"Advanced Example"),(0,a.kt)("p",null,"This will replace ",(0,a.kt)("inlineCode",{parentName:"p"},"less")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"more"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]\n  `\n});  \n")))}y.isMDXComponent=!0}}]);