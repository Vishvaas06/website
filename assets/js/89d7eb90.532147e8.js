"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[51803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(n),f=a,g=c["".concat(m,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Random memes",description:"They are funny images of trending memes totally in Spanish.",authors:{name:"@pixeles10",title:"Member - 1029818509364047933",userid:"1029818509364047933",url:"https://discord.com/users/1029818509364047933",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1029818509364047933.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},s=void 0,o={permalink:"/wikis/posts/1029818509364047933/ryko5y",source:"@site/forums/posts/1029818509364047933/ryko5y.md",title:"Random memes",description:"They are funny images of trending memes totally in Spanish.",date:"2023-07-06T06:01:56.000Z",formattedDate:"July 6, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@pixeles10",title:"Member - 1029818509364047933",userid:"1029818509364047933",url:"https://discord.com/users/1029818509364047933",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1029818509364047933.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1029818509364047933.png"}],frontMatter:{title:"Random memes",description:"They are funny images of trending memes totally in Spanish.",authors:{name:"@pixeles10",title:"Member - 1029818509364047933",userid:"1029818509364047933",url:"https://discord.com/users/1029818509364047933",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1029818509364047933.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1029818509364047933.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Submit Wiki",permalink:"/wikis/submit"},nextItem:{title:"Prefix custom function",permalink:"/wikis/posts/1077733015846932530/iitgox"}},m={authorsImageUrls:[void 0]},l=[],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Requires the package: meme-muichiro-english"),(0,a.kt)("p",{parentName:"admonition"},"Install it: npm i meme-muichiro-spanish")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  name: \"memes\",\n  code: `\n$title[1;Random Memes]\n$color[1;Blue]\n$image[1;$get[memes]]\n$djsEval[(async() => {\nconst Memes = require('meme-muichiro-spanish')\nconst meme = await Memes()\nd.vars['memes'] = meme.data.url\nd.data.vars = d.vars\n})()]`\n}\n")))}u.isMDXComponent=!0}}]);