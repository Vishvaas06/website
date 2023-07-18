"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>y});var i=n(3905),o=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>r(e,a(t)),m=(e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n};const f={title:"Wiki Guidelines",description:"The official Wiki Guidelines.",slug:"guidelines",authors:"faf4a",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},g="Wiki Guidelines",h={permalink:"/uk/wikis/guidelines",source:"@site/forums/guidelines.md",title:"Wiki Guidelines",description:"The official Wiki Guidelines.",date:"2023-07-18T22:32:44.000Z",formattedDate:"18 \u043b\u0438\u043f\u043d\u044f 2023 \u0440.",tags:[],hasTruncateMarker:!1,authors:[{name:"@faf4a",tags:["Community Manager","Staff"],title:"Community Manager & Documentation Maintainer",url:"https://discord.com/users/428188716641812481",imageURL:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png",key:"faf4a"}],frontMatter:{title:"Wiki Guidelines",description:"The official Wiki Guidelines.",slug:"guidelines",authors:"faf4a",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},nextItem:{title:"Submit Wiki",permalink:"/uk/wikis/submit"}},k={authorsImageUrls:[void 0]},y=[{value:"Purpose of Wikis",id:"purpose-of-wikis",level:2},{value:"Contribution Guidelines",id:"contribution-guidelines",level:2},{value:"Conclusion",id:"conclusion",level:2}],b={toc:y},v="wrapper";function O(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,i.kt)(v,d(c(c({},b),o),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," Wiki! This document outlines the guidelines for contributing to the wiki content."),(0,i.kt)("h2",c({},{id:"purpose-of-wikis"}),"Purpose of Wikis"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," Wikis serve as a comprehensive resource for users to learn about the functionalities, features, and usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," package. It aims to provide clear and concise explanations, examples, and tutorials to help users make the most out of ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," in their projects."),(0,i.kt)("h2",c({},{id:"contribution-guidelines"}),"Contribution Guidelines"),(0,i.kt)("p",null,"We welcome contributions from the community to help improve and expand the ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," Wiki. To maintain a high-quality and consistent documentation, please adhere to the following guidelines when contributing:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Accuracy"),": Ensure that the information provided in the Wiki is accurate, up-to-date, and relevant to the current version of ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js"),". If you are unsure about any information, consult the official ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," documentation or reach out to the maintainers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Clarity"),": Write in a clear and concise manner, using simple language to explain concepts. Avoid jargon and technical terms unless necessary, and provide explanations or definitions when using them.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Organization"),": Structure the content logically and use appropriate headings, subheadings, and bullet points to make the information easy to navigate and understand. Consider adding examples, code snippets, and visuals where appropriate to enhance clarity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Consistency"),": Maintain consistency in formatting, styling, and terminology throughout the Wiki. Follow the existing conventions and style used in the documentation. If in doubt, refer to the style guide provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," repository.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Citation"),": Whenever referencing external sources or quoting code, make sure to provide proper attribution and citation. Include links or references to the original sources, especially when explaining concepts or providing code examples from other projects.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Collaboration"),": If you have suggestions, improvements, or corrections for existing content, feel free to open a pull request or create an issue on the ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," repository. Be respectful and constructive when engaging in discussions or providing feedback."))),(0,i.kt)("h2",c({},{id:"conclusion"}),"Conclusion"),(0,i.kt)("p",null,"By following these guidelines, we can collectively create and maintain a valuable resource for the ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js")," community. Thank you for your contributions and helping others make the most out of ",(0,i.kt)("inlineCode",{parentName:"p"},"aoi.js"),"!"),(0,i.kt)("admonition",c({},{title:"Ready to submit?",type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"Head to the ",(0,i.kt)("a",c({parentName:"p"},{href:"/uk/wikis/submit"}),"submission Page"),"!")))}O.isMDXComponent=!0}}]);