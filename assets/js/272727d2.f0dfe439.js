"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Slot Command",description:"A simple, easy slot command",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},s="code",i={permalink:"/wikis/posts/715852000096419900/7y0d4k",source:"@site/forums/posts/715852000096419900/7y0d4k.md",title:"Slot Command",description:"A simple, easy slot command",date:"2023-07-06T01:03:33.000Z",formattedDate:"July 6, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"}],frontMatter:{title:"Slot Command",description:"A simple, easy slot command",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Progression bar",permalink:"/wikis/posts/713132410153205802/c6h1efa"},nextItem:{title:"commands list",permalink:"/wikis/posts/715852000096419900/aswziy"}},l={authorsImageUrls:[void 0]},c=[{value:"Edit as you wish",id:"edit-as-you-wish",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n  name: "slot",\n  code: `\n\n\n$editMessage[$get[id];|$get[s1]|$get[s2]|$get[s3]|\n$nonEscape[$if[$checkCondition[$get[s1]==$get[s2]&&$get[s2]==$get[s3]&&$get[s3]==$get[s1]]==true;Congralutions, you win!;Bad luck, you lose!]]] \n$let[s3;$randomText[\ud83d\udcb5;\ud83d\udc8e;\ud83e\udd47;\ud83d\udcaf;\ud83d\udcb0]]\n$wait[2s]\n\n$editMessage[$get[id];|$get[s1]|$get[s2]|<a:slot_gif:1125077236492546269>|] \n$let[s2;$randomText[\ud83d\udcb0;\ud83d\udcaf;\ud83d\udc8e;\ud83d\udcb5;\ud83e\udd47]]\n$wait[2s]\n  \n$editMessage[$get[id];|$get[s1]|<a:slot_gif:1125077236492546269>|<a:slot_gif:1125077236492546269>|]   \n$let[s1;$randomText[\ud83d\udc8e;\ud83e\udd47;\ud83d\udcaf;\ud83d\udcb0;\ud83d\udcb5]]\n$wait[2s]   \n    \n$let[id;$sendMessage[|<a:slot_gif:1125077236492546269>|<a:slot_gif:1125077236492546269>|<a:slot_gif:1125077236492546269>|;true]] \n`}]\n')),(0,a.kt)("h3",{id:"edit-as-you-wish"},"Edit as you wish"),(0,a.kt)("p",null,"And also add the emoji to a server your bot is in.\n( I used NQN bot )"))}m.isMDXComponent=!0}}]);