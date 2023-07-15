"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&l(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&l(e,n,t[n]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$setTimeout"},y=void 0,b={unversionedId:"functions/settimeout",id:"version-5.5.5/functions/settimeout",title:"$setTimeout",description:"This function allows you to set a code to execute after given time. As extra, it won't stop if you reset the bot.",source:"@site/versioned_docs/version-5.5.5/functions/settimeout.md",sourceDirName:"functions",slug:"/functions/settimeout",permalink:"/es/docs/5.5.5/functions/settimeout",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$setTimeout"},sidebar:"docs",previous:{title:"$setStatus",permalink:"/es/docs/5.5.5/functions/setstatus"},next:{title:"$setUserVar",permalink:"/es/docs/5.5.5/functions/setuservar"}},v={},g=[],O={toc:g},w="wrapper";function h(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(w,m(p(p({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows you to set a code to execute after given time. As extra, it won't stop if you reset the bot."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$setTimeout[duration;timeout data;timeout heartbeat (optional)]")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'//Setting a timeout that will send a message to your dms after given time. \nbot.command({\n    name: "remindme", \n    code: `You will be reminded with $messageSlice[1] after $message[1].\n$setTimeout[$message[1];\nuserID: $authorID \nmessage: $messageSlice[1]]`\n});\n\nbot.timeoutCommand({\n//    channel: "ID", (This is optional)\n    code: `$sendDM[$timeoutData[userID];$timeoutData[message]]`\n});\n')),(0,r.kt)("p",null,"These can go above 21 days"),(0,r.kt)("p",null,"This function also comes with a sub function called: ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeoutData[property]")," the property value will depend on what you add inside the second field of $setTimeout."))}h.isMDXComponent=!0}}]);