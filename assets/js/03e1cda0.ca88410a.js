"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Kick command",description:"The Kick command is triggered through a slash command interaction. Nothing special, it's just a kick command.",authors:{name:"@kazu666",title:"Member - 689364013297041409",userid:"689364013297041409",url:"https://discord.com/users/689364013297041409",image_url:"https://cdn.discordapp.com/avatars/689364013297041409/fc4e334a1f8194949082467c960ed308.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i="Steps",s={permalink:"/wikis/posts/689364013297041409/3rabq",source:"@site/forums/posts/689364013297041409/3rabq.md",title:"Kick command",description:"The Kick command is triggered through a slash command interaction. Nothing special, it's just a kick command.",date:"2023-07-06T01:03:33.000Z",formattedDate:"July 6, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@kazu666",title:"Member - 689364013297041409",userid:"689364013297041409",url:"https://discord.com/users/689364013297041409",image_url:"https://cdn.discordapp.com/avatars/689364013297041409/fc4e334a1f8194949082467c960ed308.png",imageURL:"https://cdn.discordapp.com/avatars/689364013297041409/fc4e334a1f8194949082467c960ed308.png"}],frontMatter:{title:"Kick command",description:"The Kick command is triggered through a slash command interaction. Nothing special, it's just a kick command.",authors:{name:"@kazu666",title:"Member - 689364013297041409",userid:"689364013297041409",url:"https://discord.com/users/689364013297041409",image_url:"https://cdn.discordapp.com/avatars/689364013297041409/fc4e334a1f8194949082467c960ed308.png",imageURL:"https://cdn.discordapp.com/avatars/689364013297041409/fc4e334a1f8194949082467c960ed308.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Author button",permalink:"/wikis/posts/632607624742961153/mnfe6"},nextItem:{title:"Reloading the Commands ",permalink:"/wikis/posts/693451182617657394/30bbab"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," If you have an ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," command use this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'!eval $createApplicationCommand[global;kick;Kicks a user from the server.;true;slash;[{\n"name": "user",\n"description": "The user to be kicked. Mention the user by typing @ and selecting them from the list.",\n"required": true,\n"type": 6\n},{\n"name": "reason",\n"description": "The reason for kicking the user (optional). If provided, it will be displayed in the server log.",\n"required": false,\n"type": 3\n}]\n]\n')),(0,r.kt)("p",null,"And ",(0,r.kt)("strong",{parentName:"p"},"if you do not have")," an ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," command use this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n  name: "execute",\n  code: `\n$createApplicationCommand[global;kick;Kicks a user from the server.;true;slash;[{\n"name": "user",\n"description": "The user to be kicked. Mention the user by typing @ and selecting them from the list.",\n"required": true,\n"type": 6\n},{\n"name": "reason",\n"description": "The reason for kicking the user (optional). If provided, it will be displayed in the server log.",\n"required": false,\n"type": 3\n}]\n]\n  `\n}]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Create a new file in your command handler (name it however you want), then paste this code into your file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n  name: "kick",\n  prototype: "slash",\n  type: "interaction",\n  $if: "old",\n  code: `\n  $kick[$guildID;$slashOption[user];$slashOption[reason]]\n  $suppressErrors[{options:{ephemeral: true}}\n{extraOptions:{interaction: true}}{newEmbed:{author:Error:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:It seems that there is a problem while executing this command.}{color:#000000}}]\n  \n  $interactionReply[;{newEmbed:\n  {author:Moderation:https#COLON#//static.thenounproject.com/png/3120613-200.png}\n  {authorURL:https#COLON#//discord.com/channels/$guildID/$getGuildVar[modCha]/$get[cha]}\n  {description:A user has been **kicked** out of the server.}\n  {field:Name:[$username[$slashOption[user]]](https#COLON#//discordlookup.mesavirep.xyz/v1/user/$slashOption[user])}\n  {field:Reason:$get[reason]}\n  {footer:$username:$userAvatar}\n  {thumbnail:$userAvatar[$slashOption[user]]}\n  {timestamp}\n  {color:#000000}\n  }\n  ;;;everyone;true]\n\n\n  $if[$getGuildVar[modLog]==true]\n  $let[cha;$channelSendMessage[$getGuildVar[modCha];{newEmbed:\n  {author:Moderation:https#COLON#//static.thenounproject.com/png/3120613-200.png}\n  {description:A user has been **kicked** out of the server.}\n  {field:Name:[$username[$slashOption[user]]](https#COLON#//discordlookup.mesavirep.xyz/v1/user/$slashOption[user])}\n  {field:Reason:$get[reason]}\n  {footer:$username:$userAvatar}\n  {thumbnail:$userAvatar[$slashOption[user]]}\n  {timestamp}\n  {color:#000000}\n  }\n  ;true]]\n  $onlyIf[$getGuildVar[modCha]!=;]\n  $endIf\n\n  $if[$slashOption[reason]==]\n  $let[reason;None]\n  $else\n  $let[reason;$slashOption[reason]]\n  $endIf\n\n  $onlyIf[$checkCondition[$rolePosition[$highestRole[$clientID]]==$rolePosition[$highestRole[$slashOption[user]]]]!=false;{options:{ephemeral: true}}\n{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:I cannot kick someone with the same role as mine.}{color:#000000}}]\n  \n$onlyIf[$checkCondition[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$slashOption[user]]]]!=false;{options:{ephemeral: true}}\n{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:I cannot kick someone with a higher role than mine.}{color:#000000}}]\n\n$onlyIf[$checkCondition[$isBot[$slashOption[user]]==true]!=true;{options:{ephemeral: true}}\n{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:I am not allowed to kick a bot.}{color:#000000}}]\n\n$onlyIf[$slashOption[user]!=$clientID;{options:{ephemeral: true}}\n{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:I cannot kick myself.}{color:#000000}}]\n\n$onlyIf[$slashOption[user]!=$authorID;{options:{ephemeral: true}}\n{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:You cannot kick yourself.}{color:#000000}}]\n  $onlyIf[$checkCondition[$hasAnyRole[$guildID;$authorID;$findRole[Crossfire]]==true||$hasPerms[$guildID;$authorID;kickmembers]==true]!=false;{options:{ephemeral: true}}\n{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:You do not have enough permission to perform this command.}{color:#000000}}]\n  `\n}]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Before saving, make sure you have these variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'   modLog: false,\n   modCha: "" // If this is empty, the logs will not be sent anywhere even if modLog is enabled, so make sure to fill this out.\n')),(0,r.kt)("p",null,"What do these variables do?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"modLog"))," - This variable enables or disables the moderation logs."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"modCha"))," - If modLog is set to true, the moderation logs will be sent to the channel specified in this variable.")),(0,r.kt)("h1",{id:"note"},"Note"),(0,r.kt)("p",null,"Make sure that you have the required ",(0,r.kt)("inlineCode",{parentName:"p"},"intents")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"events")," to ensure the proper function of this command."),(0,r.kt)("p",null,"My intents and events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences", "DirectMessages", "GuildMembers"],\nevents: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onInteractionCreate", "onGuildJoin", "onJoin"]\n')),(0,r.kt)("p",null,"."),(0,r.kt)("p",null,"."),(0,r.kt)("p",null,"You could replace (Crossire) ",(0,r.kt)("inlineCode",{parentName:"p"},"$findRole[Crossfire]")," to whatever role you want to give access to the command, you could\nadd more roles if you want. Like this ",(0,r.kt)("inlineCode",{parentName:"p"},"$hasAnyRole[$guildID;$authorID;$findRole[Crossfire];$findRole[Moderator]]"),"."))}m.isMDXComponent=!0}}]);