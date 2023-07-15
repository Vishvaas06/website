"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95061],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>l(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$killShard",description:"$killShard will kill a given shard.",id:"killShard"},h=void 0,k={unversionedId:"functions/interaction-related/killShard",id:"version-6.4.0/functions/interaction-related/killShard",title:"$killShard",description:"$killShard will kill a given shard.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/killShard.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/killShard",permalink:"/hi/docs/functions/interaction-related/killShard",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$killShard",description:"$killShard will kill a given shard.",id:"killShard"},sidebar:"docs",previous:{title:"$joinThread",permalink:"/hi/docs/functions/interaction-related/joinThread"},next:{title:"$leaveThread",permalink:"/hi/docs/functions/interaction-related/leaveThread"}},v={},y=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],b={toc:y},g="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(g,u(s(s({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$killShard")," will kill a given shard. (\u091a\u093e\u0939\u093f\u090f \u0936\u093e\u0930\u094d\u0921\u093f\u0902\u0917)"),(0,n.kt)("h2",s({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$killShard[shardID]\n")),(0,n.kt)("h2",s({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"shardID"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The shard ID."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",s({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,n.kt)("p",null,"This will kill the current shard ( requires ",(0,n.kt)("strong",{parentName:"p"},"sharding")," ):"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'killShard',\n    code: `\n  $killShard[$shardID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);