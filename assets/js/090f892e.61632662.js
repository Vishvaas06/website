"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[27636],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>b});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},v={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),b=n,d=p["".concat(c,".").concat(b)]||p[b]||v[b]||l;return t?r.createElement(d,i(i({ref:a},u),{},{components:t})):r.createElement(d,i({ref:a},u))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75747:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const l={title:"Channel Variables",description:"A variable value that will be saved to a channel"},i=void 0,o={unversionedId:"guides/variables/channel-variables",id:"guides/variables/channel-variables",title:"Channel Variables",description:"A variable value that will be saved to a channel",source:"@site/docs/guides/variables/channel-variables.md",sourceDirName:"guides/variables",slug:"/guides/variables/channel-variables",permalink:"/docs/guides/variables/channel-variables",draft:!1,tags:[],version:"current",frontMatter:{title:"Channel Variables",description:"A variable value that will be saved to a channel"},sidebar:"docs",previous:{title:"Using Variables",permalink:"/docs/guides/variables/using-variables"},next:{title:"Global Variables",permalink:"/docs/guides/variables/global-variables"}},c={},s=[{value:"Setting the channel variable",id:"setting-the-channel-variable",level:3},{value:"Retrieving the variable value",id:"retrieving-the-variable-value",level:3}],u={toc:s};function v(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Make sure you've already created the variable"),(0,n.kt)("h3",{id:"setting-the-channel-variable"},"Setting the channel variable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"$setChannelVar[variable;value;channelID (optional)]\n")),(0,n.kt)("h3",{id:"retrieving-the-variable-value"},"Retrieving the variable value"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"$getChannelVar[variable;channelID (optional)]\n")))}v.isMDXComponent=!0}}]);