"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31437],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(t),u=a,d=f["".concat(c,".").concat(u)]||f[u]||m[u]||l;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[f]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},56183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>w,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(o)for(var t of o(n))p.call(n,t)&&s(e,t,n[t]);return e},m=(e,n)=>l(e,i(n)),u=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$channelName",description:"Retrieves the Channel Name by Channel ID, if no channel is specified it will return the name of the channel where the command was executed."},h=void 0,y={unversionedId:"functions/channelname",id:"version-5.5.5/functions/channelname",title:"$channelName",description:"Retrieves the Channel Name by Channel ID, if no channel is specified it will return the name of the channel where the command was executed.",source:"@site/versioned_docs/version-5.5.5/functions/channelname.md",sourceDirName:"functions",slug:"/functions/channelname",permalink:"/fr/docs/5.5.5/functions/channelname",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$channelName",description:"Retrieves the Channel Name by Channel ID, if no channel is specified it will return the name of the channel where the command was executed."},sidebar:"docs",previous:{title:"$createApplicationCommand",permalink:"/fr/docs/5.5.5/functions/createapplicationcommand"},next:{title:"$channelNSFW",permalink:"/fr/docs/5.5.5/functions/channelnsfw"}},b={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],g={toc:v},O="wrapper";function w(e){var n=e,{components:t}=n,a=u(n,["components"]);return(0,r.kt)(O,m(f(f({},g),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows you to obtain the name of a specific channel indicated by its channel ID, if neither a channel ID is given, the function will return as a product the name of the channel in which the command was executed"),(0,r.kt)("h3",f({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$channelName[channelID?]\n")),(0,r.kt)("h3",f({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"channel ID"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"The id of the channel whose name is to be returned"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",f({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "name",\n    code: `$channelName[$mentionedChannels[1;yes]]`\n});\n')))}w.isMDXComponent=!0}}]);