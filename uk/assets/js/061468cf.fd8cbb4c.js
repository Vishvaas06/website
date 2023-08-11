"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[81906],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),c=n,f=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return a?r.createElement(f,i(i({ref:e},m),{},{components:a})):r.createElement(f,i({ref:e},m))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23815:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>N});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&m(t,a,e[a]);if(o)for(var a of o(e))p.call(e,a)&&m(t,a,e[a]);return t},s=(t,e)=>l(t,i(e)),c=(t,e)=>{var a={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&p.call(t,r)&&(a[r]=t[r]);return a};const f={title:"$formatDate",description:"$formatDate will format a given date.",id:"formatDate"},g=void 0,k={unversionedId:"functions/util-related/formatDate",id:"version-6.4.0/functions/util-related/formatDate",title:"$formatDate",description:"$formatDate will format a given date.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/formatDate.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/formatDate",permalink:"/uk/docs/functions/util-related/formatDate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714545,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$formatDate",description:"$formatDate will format a given date.",id:"formatDate"},sidebar:"docs",previous:{title:"$findSpecialChars",permalink:"/uk/docs/functions/util-related/findSpecialChars"},next:{title:"$get",permalink:"/uk/docs/functions/util-related/get"}},y={},N=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:N},h="wrapper";function v(t){var e=t,{components:a}=e,n=c(e,["components"]);return(0,r.kt)(h,s(u(u({},b),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$formatDate")," will format a given date."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$formatDate[date;format?]\n")),(0,r.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"date"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The date you want to format."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"format?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The format that will be used to display the date (listed below)."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null," ",(0,r.kt)("h2",null," Possible formatting ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Format"),(0,r.kt)("th",u({parentName:"tr"},{align:null})),(0,r.kt)("th",u({parentName:"tr"},{align:"right"}),"Returns"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"dddd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the weekday, Monday, Tuesday, Wednesday ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"dd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the abbreviation of the weekday, Mon, Tue, Wed ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"D"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the day of the month"),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"DD"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the day of the month"),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"DDD"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the day of the year, 256, 257 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"M / MM"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the month of the year, 10, 11 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"MMM"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the abbreviation of the month, Jan, Feb ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"MMMM"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the month fully January, February ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"YYYY"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns year fully, 2020, 2021 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"YY"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Returns the last two digits of the year, 20, 21 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Number"))))),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return your current date in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dddd, DD MMMM YYYY")," format:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'formatDate',\n    code: `\n  $formatDate[$dateStamp;dddd, DD MMMM YYYY]\n  `\n});\n")))}v.isMDXComponent=!0}}]);