"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"fetchInvite function",description:"Easily fetch the information of Invites using custom functions!",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png"},tags:["aoi.js","v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/428188716641812481/6ftrh8",source:"@site/forums/posts/428188716641812481/6ftrh8.md",title:"fetchInvite function",description:"Easily fetch the information of Invites using custom functions!",date:"2023-07-02T14:29:28.000Z",formattedDate:"July 2, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png",imageURL:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png"}],frontMatter:{title:"fetchInvite function",description:"Easily fetch the information of Invites using custom functions!",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png",imageURL:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png"},tags:["aoi.js","v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Botinfo command",permalink:"/wikis/posts/405070001356275712/sr2wtw"},nextItem:{title:"Transcript Custom Function",permalink:"/wikis/posts/428188716641812481/nw36qo"}},c={authorsImageUrls:[void 0]},p=[{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Preview",id:"preview",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Put the given code in your index.js"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$fetchInvite[inviteCode;property]")," for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"$fetchInvite[czCgVfh4Hu;code]")," which would return the invite code.")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction({\n  name: \"$fetchInvite\",\n  type: \"djs\",\n  code: async (d) => {\n    const data = d.util.aoiFunc(d);\n    const [inviteCode, property] = data.inside.splits;\n\n    try {\n      const response = await fetch(\n        `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true&with_expiration=true`\n      );\n\n      if (!response.ok) {\n        throw new Error(response.statusText);\n      }\n\n      const inviteData = await response.json();\n\n      const properties = property.split('.');\n      let result = inviteData;\n      for (const prop of properties) {\n        if (result && result.hasOwnProperty(prop)) {\n          result = result[prop];\n        } else {\n          return d.aoiError.fnError(d, 'custom', {}, 'property');\n        }\n      }\n\n      data.result = result;\n\n      return {\n        code: d.util.setCode(data),\n      };\n    } catch (error) {\n      console.error(error);\n      return d.aoiError.fnError(d, 'custom', {}, 'invite');\n    }\n  },\n});\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"preview"},"Preview"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1112002806686154752/1124848362710110281/image.png",alt:"preview"})))}d.isMDXComponent=!0}}]);