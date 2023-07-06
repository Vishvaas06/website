"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Hyperlinks",description:"This page is covering all about hyperlinks.",id:"hyperlinks"},a=void 0,l={unversionedId:"guides/Others/hyperlinks",id:"version-6.3.0/guides/Others/hyperlinks",title:"Hyperlinks",description:"This page is covering all about hyperlinks.",source:"@site/versioned_docs/version-6.3.0/guides/Others/3hyperlinks.md",sourceDirName:"guides/Others",slug:"/guides/Others/hyperlinks",permalink:"/docs/guides/Others/hyperlinks",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688623316,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"Hyperlinks",description:"This page is covering all about hyperlinks.",id:"hyperlinks"},sidebar:"docs",previous:{title:"Parser",permalink:"/docs/guides/Others/parser"},next:{title:"Message Formatting",permalink:"/docs/guides/Others/msgformatting"}},s={},p=[{value:"Embedding Links",id:"embedding-links",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This page is about hyperlinks, what they do and how to use them.")),(0,o.kt)("p",null,"Hyperlinks are useful to hide long links in text, this has limitation as it only works in Interactions (application\ncommands) and embeds."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"embedding-links"},"Embedding Links"),(0,o.kt)("p",null,"First of all you require a link you want to embed, let's take ",(0,o.kt)("inlineCode",{parentName:"p"},"https://aoi.js.org")," for example."),(0,o.kt)("p",null,"Then do the following;"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Surround the link with brackets, looking like this;")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"(https://aoi.js.org)\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Choose the text you want to be clickable and put that one in-front of the link looking like this;")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"[Awesome Hyperlink!](https://aoi.js.org)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1084893609385533481/wNX6ebB93qrPgAAAABJRU5ErkJggg.png",alt:"img"})),(0,o.kt)("p",null,"That works the same way for embeds as for application commands."),(0,o.kt)("p",null,'If you want to customize the "hovertag", then do the following;'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'[Awesome Hyperlink!](https://aoi.js.org "Hover Text")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1084896685303529482/1eVj5z3u6UAAAAAElFTkSuQmCC.png",alt:"img"})))}d.isMDXComponent=!0}}]);