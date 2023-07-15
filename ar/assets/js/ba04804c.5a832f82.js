"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[85386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=n(3905),i=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>l(e,a(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$guild"},g=void 0,b={unversionedId:"functions/guild",id:"version-5.5.5/functions/guild",title:"$guild",description:"This function returns the given guild's specified property",source:"@site/versioned_docs/version-5.5.5/functions/guild.md",sourceDirName:"functions",slug:"/functions/guild",permalink:"/ar/docs/5.5.5/functions/guild",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$guild"},sidebar:"docs",previous:{title:"$globalUserLeaderboard",permalink:"/ar/docs/5.5.5/functions/globaluserleaderboard"},next:{title:"$guildID",permalink:"/ar/docs/5.5.5/functions/guildid"}},v={},y=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4},{value:"Available Properties",id:"available-properties",level:4}],h={toc:y},k="wrapper";function O(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(k,c(d(d({},h),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the given guild's specified property"),(0,r.kt)("h4",d({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"This function has 2 fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Guild ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$guild[guildID;property]")),(0,r.kt)("h4",d({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Guild ID - The guild the property is based on"),(0,r.kt)("li",{parentName:"ul"},"Property - The guild's property you want to get")),(0,r.kt)("h4",d({},{id:"available-properties"}),"Available Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name - Guild's Name "),(0,r.kt)("li",{parentName:"ul"},"id - Guild's ID"),(0,r.kt)("li",{parentName:"ul"},"acronym - Guild's name acronym"),(0,r.kt)("li",{parentName:"ul"},"afkchannelid - Guild's AFK Channel's ID"),(0,r.kt)("li",{parentName:"ul"},"boostcount - Guild's boost count"),(0,r.kt)("li",{parentName:"ul"},"boostlevel - Guild's boot level"),(0,r.kt)("li",{parentName:"ul"},"created - Guild's date and time of creation"),(0,r.kt)("li",{parentName:"ul"},"description - Guild's description"),(0,r.kt)("li",{parentName:"ul"},"emojicount - Guild's emoji count"),(0,r.kt)("li",{parentName:"ul"},"isavailable - Whether or not the guild is available, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"isbotremoved - Whether or not the bot is in the guild, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"ispartnered - Whether or not the guild is partnered, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"isverified - Whether or not the guild is verified, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"membercount - Guild's member count"),(0,r.kt)("li",{parentName:"ul"},"ruleschannel - Guild's rule channel's id"),(0,r.kt)("li",{parentName:"ul"},"systemchannelid - Guild's system channel's id"),(0,r.kt)("li",{parentName:"ul"},"timestamp - How long ago  the guild was created"),(0,r.kt)("li",{parentName:"ul"},"updateschannel - Guild's moderator news channel's id"),(0,r.kt)("li",{parentName:"ul"},"verificationlvl - Guild's verification level")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "guild",\ncode: `\n$guild[$guildID;name]\n`\n})\n\n//specified guild\'s name\n\nbot.command({\nname: "guild",\ncode: `\n$guild[$message;name]\n`\n})\n')))}O.isMDXComponent=!0}}]);