"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>T,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>o(e,c(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$executionTime",description:"$executionTime \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0447\u0430\u0441 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f.",id:"executionTime"},y=void 0,b={unversionedId:"functions/misc-related/executionTime",id:"version-6.4.0/functions/misc-related/executionTime",title:"$executionTime",description:"$executionTime \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0447\u0430\u0441 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/executionTime.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/executionTime",permalink:"/uk/docs/functions/misc-related/executionTime",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689719564,formattedLastUpdatedAt:"18 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$executionTime",description:"$executionTime \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0447\u0430\u0441 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f.",id:"executionTime"},sidebar:"docs",previous:{title:"$exec",permalink:"/uk/docs/functions/misc-related/exec"},next:{title:"$fileExists",permalink:"/uk/docs/functions/misc-related/fileExists"}},v={},O=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],x={toc:O},g="wrapper";function T(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(g,m(s(s({},x),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$executionTime")," \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0447\u0430\u0441 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f."),(0,r.kt)("h2",s({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$executionTime\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"\u0426\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0447\u0430\u0441 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0443, \u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0447\u0430\u0441\u0443 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0431\u0443\u043b\u043e \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u0446\u0435\u0439 \u043a\u043e\u0434:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "executionTime",\n    \u043a\u043e\u0434: `\n    \u0426\u0435 \u0442\u0435\u0436: $executionTime MS\n  `\n});\n')))}T.isMDXComponent=!0}}]);