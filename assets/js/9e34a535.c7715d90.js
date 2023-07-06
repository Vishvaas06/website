"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"$color",description:"Add color, to your sidebar embed description."},l=void 0,i={unversionedId:"functions/color",id:"version-5.5.5/functions/color",title:"$color",description:"Add color, to your sidebar embed description.",source:"@site/versioned_docs/version-5.5.5/functions/color.md",sourceDirName:"functions",slug:"/functions/color",permalink:"/docs/5.5.5/functions/color",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688623316,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$color",description:"Add color, to your sidebar embed description."},sidebar:"docs",previous:{title:"$closeTicket",permalink:"/docs/5.5.5/functions/closeticket"},next:{title:"$commandCode",permalink:"/docs/5.5.5/functions/commandcode"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Color Types",id:"color-types",level:4},{value:"Example",id:"example",level:2}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function adds color to the embed"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$color[index;color]\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"index"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The index of the embed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"color"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color to be added to embed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"color"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,o.kt)("h4",{id:"color-types"},"Color Types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hex - Use hex color codes - Example: ","#","ff00ff"),(0,o.kt)("li",{parentName:"ul"},"Names - Use the name of the color - Example: RED"),(0,o.kt)("li",{parentName:"ul"},"RANDOM - Chooses a random color")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With Hex")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;#FF00FF]\n`\n})\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With Names")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;RED]\n`\n})\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With RANDOM")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;RANDOM]\n`\n})\n')))}u.isMDXComponent=!0}}]);