"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(a,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const i={title:"$clientToken",description:"$clientToken will return the client's token.",id:"clientToken"},l=void 0,c={unversionedId:"functions/Info/clientToken",id:"functions/Info/clientToken",title:"$clientToken",description:"$clientToken will return the client's token.",source:"@site/docs/functions/Info/clientToken.md",sourceDirName:"functions/Info",slug:"/functions/Info/clientToken",permalink:"/docs/functions/Info/clientToken",draft:!1,tags:[],version:"current",frontMatter:{title:"$clientToken",description:"$clientToken will return the client's token.",id:"clientToken"},sidebar:"docs",previous:{title:"$clientID",permalink:"/docs/functions/Info/clientID"},next:{title:"$commandCode",permalink:"/docs/functions/Info/commandCode"}},a={},u=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$clientToken")," will return the client's token."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$clientToken\n")),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"-you-should-never-give-your-discord-bot-token-to-anyone"},"\u26a0 You should never give your Discord Bot Token to anyone.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This will return the client's Token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'clientToken',\n  code: `\n  $clientToken\n  `\n});\n")))}s.isMDXComponent=!0}}]);