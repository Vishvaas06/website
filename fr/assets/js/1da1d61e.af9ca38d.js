"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[98424],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return r?t.createElement(f,i(i({ref:n},m),{},{components:r})):t.createElement(f,i({ref:n},m))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79820:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var t=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))l.call(n,r)&&m(e,r,n[r]);if(s)for(var r of s(n))c.call(n,r)&&m(e,r,n[r]);return e},d=(e,n)=>o(e,i(n)),u=(e,n)=>{var r={};for(var t in e)l.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&s)for(var t of s(e))n.indexOf(t)<0&&c.call(e,t)&&(r[t]=e[t]);return r};const f={title:"Command Aliases",description:"Setting up Aliases for your Commands."},y=void 0,g={unversionedId:"guides/command-aliases",id:"version-5.5.5/guides/command-aliases",title:"Command Aliases",description:"Setting up Aliases for your Commands.",source:"@site/versioned_docs/version-5.5.5/guides/command-aliases.md",sourceDirName:"guides",slug:"/guides/command-aliases",permalink:"/fr/docs/5.5.5/guides/command-aliases",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"Command Aliases",description:"Setting up Aliases for your Commands."},sidebar:"docs",previous:{title:"Client Status",permalink:"/fr/docs/5.5.5/guides/client-status"},next:{title:"Command Handler",permalink:"/fr/docs/5.5.5/guides/command-handler"}},v={},b=[{value:"Usage:",id:"usage",level:3},{value:"Aliases in your <code>command.js</code> in commands folder:",id:"aliases-in-your-commandjs-in-commands-folder",level:3},{value:"Example",id:"example",level:3}],O={toc:b},j="wrapper";function k(e){var n=e,{components:r}=n,a=u(n,["components"]);return(0,t.kt)(j,d(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h3",p({},{id:"usage"}),"Usage:"),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"aliases: ['TEXT1','TEXT2']\n")),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: \"name\",\naliases: ['name2','name3'],\ncode: `code`\n})\n")),(0,t.kt)("h3",p({},{id:"aliases-in-your-commandjs-in-commands-folder"}),"Aliases in your ",(0,t.kt)("inlineCode",{parentName:"h3"},"command.js")," in commands folder:"),(0,t.kt)("h3",p({},{id:"example"}),"Example"),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"module.exports = ({\nname: \"ping\",\naliases: ['pong','info'],\ncode: `$pingms`\n})\n")))}k.isMDXComponent=!0}}]);