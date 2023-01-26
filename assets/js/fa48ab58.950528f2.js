"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31680],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>s});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=t.createContext({}),c=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),s=o,f=d["".concat(m,".").concat(s)]||d[s]||p[s]||a;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function s(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74152:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const a={title:"$randomEmoji",description:"$randomEmoji will return a random emoji ID.",id:"randomEmoji"},i=void 0,l={unversionedId:"functions/Util/randomEmoji",id:"functions/Util/randomEmoji",title:"$randomEmoji",description:"$randomEmoji will return a random emoji ID.",source:"@site/docs/functions/Util/randomEmoji.md",sourceDirName:"functions/Util",slug:"/functions/Util/randomEmoji",permalink:"/docs/functions/Util/randomEmoji",draft:!1,tags:[],version:"current",frontMatter:{title:"$randomEmoji",description:"$randomEmoji will return a random emoji ID.",id:"randomEmoji"},sidebar:"docs",previous:{title:"$randomGuildID",permalink:"/docs/functions/Util/randomChannelID"},next:{title:"$randomGuildID",permalink:"/docs/functions/Util/randomChannelID"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$randomEmoji")," will return a random emoji ID."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$randomEmoji\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This will return a random emoji ID of your guild:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'randomEmoji',\n  code: `\n  $randomEmoji\n  `\n});\n")))}p.isMDXComponent=!0}}]);