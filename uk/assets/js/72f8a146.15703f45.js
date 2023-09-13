"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[29759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(n),s=a,g=u["".concat(o,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},74691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>h,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))c.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,i(t)),s=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$createScheduledEvent",description:"$createScheduledEvent \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u0443 \u043f\u043e\u0434\u0456\u044e.",id:"createScheduledEvent"},k=void 0,f={unversionedId:"functions/guild-related/createScheduledEvent",id:"version-6.4.0/functions/guild-related/createScheduledEvent",title:"$createScheduledEvent",description:"$createScheduledEvent \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u0443 \u043f\u043e\u0434\u0456\u044e.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createScheduledEvent.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createScheduledEvent",permalink:"/website-old/uk/docs/functions/guild-related/createScheduledEvent",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572866,formattedLastUpdatedAt:"13 \u0432\u0435\u0440. 2023 \u0440.",frontMatter:{title:"$createScheduledEvent",description:"$createScheduledEvent \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u0443 \u043f\u043e\u0434\u0456\u044e.",id:"createScheduledEvent"},sidebar:"docs",previous:{title:"$createRole",permalink:"/website-old/uk/docs/functions/guild-related/createRole"},next:{title:"$createStageInstance",permalink:"/website-old/uk/docs/functions/guild-related/createStageInstance"}},N={},y=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2}],b={toc:y},v="wrapper";function h(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(v,m(u(u({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$createScheduledEvent")," \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u0443 \u043f\u043e\u0434\u0456\u044e."),(0,r.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$createScheduledEvent[channelID;name;description;startTime;endTime?;entityType?;entityMetadata?;image?;reason?]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0443"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041a\u0443\u0434\u0438 \u0431\u0443\u0434\u0435 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043e \u043f\u043e\u0434\u0456\u044f."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430 \u043f\u043e\u0434\u0456\u0457"),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043e\u043f\u0438\u0441"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441 \u043f\u043e\u0434\u0456\u0457."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"startTime"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041a\u043e\u043b\u0438 \u043f\u043e\u0434\u0456\u044f \u043f\u043e\u0447\u043d\u0435\u0442\u044c\u0441\u044f."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"endTime?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041a\u043e\u043b\u0438 \u043f\u043e\u0434\u0456\u044f \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0442\u044c\u0441\u044f."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0442\u0438\u043f \u043e\u0431'\u0454\u043a\u0442\u0443?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f \u043f\u043e\u0434\u0456\u0457."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041c\u0435\u0442\u0430\u0434\u0430\u0442?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041c\u0435\u0442\u0430\u0434\u0430\u043d\u0456 \u043f\u0440\u043e \u043f\u043e\u0434\u0456\u0457."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f/\u0435\u0441\u043a\u0456\u0437 \u0437\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u043e\u0457 \u043f\u043e\u0434\u0456\u0457."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043f\u0440\u0438\u0447\u0438\u043d\u0430?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u044f\u043a\u0430 \u0431\u0443\u0434\u0435 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u0441\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0456 \u0430\u0443\u0434\u0438\u0442\u0443 \u0433\u0456\u043b\u044c\u0434\u0456\u0457."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")))))}h.isMDXComponent=!0}}]);