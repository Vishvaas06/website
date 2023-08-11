"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96962],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>v,default:()=>j,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>i(e,a(n)),f=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$interactionPing",description:"$interactionPing devolver\xe1 la latencia de una interacci\xf3n.",id:"interactionPing"},v=void 0,g={unversionedId:"functions/info-related/interactionPing",id:"version-6.4.0/functions/info-related/interactionPing",title:"$interactionPing",description:"$interactionPing devolver\xe1 la latencia de una interacci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/interactionPing.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/interactionPing",permalink:"/es/docs/functions/info-related/interactionPing",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$interactionPing",description:"$interactionPing devolver\xe1 la latencia de una interacci\xf3n.",id:"interactionPing"},sidebar:"docs",previous:{title:"$hoistedRole",permalink:"/es/docs/functions/info-related/hoistedRole"},next:{title:"$lowestRole",permalink:"/es/docs/functions/info-related/lowestRole"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:b},P="wrapper";function j(e){var n=e,{components:t}=n,o=f(n,["components"]);return(0,r.kt)(P,d(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionPing")," devolver\xe1 la latencia de una interacci\xf3n."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$interactionPing\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tenga en cuenta que se requiere ",(0,r.kt)("inlineCode",{parentName:"strong"},'events: ["onInteractionCreate"]')," para estar en su archivo principal")),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 la latencia de una interacci\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'interactionPing',\n    code: `\n $addButton[1;Test;primary;testButton;false]\n \xa1Hazme clic!\n  `\n});\n\nbot.interactionCommand({\n    name: 'testButton',\n    prototype: 'button',\n    code: `\n  $interactionUpdate[Esto me llev\xf3: $interactionPing MS]\n  `\n});\n")))}j.isMDXComponent=!0}}]);