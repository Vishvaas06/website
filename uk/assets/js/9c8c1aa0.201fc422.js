"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,u=m["".concat(i,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>O,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,s(t)),f=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const u={title:"$hasEmbeds",description:"Checks if given message has an embed. Returns boolean."},b=void 0,h={unversionedId:"functions/hasembeds",id:"version-5.5.5/functions/hasembeds",title:"$hasEmbeds",description:"Checks if given message has an embed. Returns boolean.",source:"@site/versioned_docs/version-5.5.5/functions/hasembeds.md",sourceDirName:"functions",slug:"/functions/hasembeds",permalink:"/uk/docs/5.5.5/functions/hasembeds",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$hasEmbeds",description:"Checks if given message has an embed. Returns boolean."},sidebar:"docs",previous:{title:"$hasAnyRole",permalink:"/uk/docs/5.5.5/functions/hasanyrole"},next:{title:"$hasPerms",permalink:"/uk/docs/5.5.5/functions/hasperms"}},g={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],v={toc:y},k="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,d(m(m({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function checks if the given messageID has an embed or not. Returns boolean."),(0,r.kt)("h3",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$hasEmbeds[messageID?;channelID?]\n")),(0,r.kt)("h3",m({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"messageID"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the message which is to be checked"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"channelID"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the channel where the message belongs"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",m({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "hasEmbeds",\ncode: `Has an Embed: $hasEmbeds[781263421387440168;$channelID]`\n)}\n')))}O.isMDXComponent=!0}}]);