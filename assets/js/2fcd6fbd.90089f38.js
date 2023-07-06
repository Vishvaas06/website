"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Get Weather",description:"A simple custom function for getting the weather of someplace.\nKinda useless :)",authors:{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/2f4fe56628287be868c2de9bca3373d6.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/166181471369953280/i1psxm",source:"@site/forums/posts/166181471369953280/i1psxm.md",title:"Get Weather",description:"A simple custom function for getting the weather of someplace.\nKinda useless :)",date:"2023-07-06T01:03:33.000Z",formattedDate:"July 6, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/2f4fe56628287be868c2de9bca3373d6.png",imageURL:"https://cdn.discordapp.com/avatars/166181471369953280/2f4fe56628287be868c2de9bca3373d6.png"}],frontMatter:{title:"Get Weather",description:"A simple custom function for getting the weather of someplace.\nKinda useless :)",authors:{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/2f4fe56628287be868c2de9bca3373d6.png",imageURL:"https://cdn.discordapp.com/avatars/166181471369953280/2f4fe56628287be868c2de9bca3373d6.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"File Names Custom Function",permalink:"/wikis/posts/166181471369953280/eff65g"},nextItem:{title:"Random Car Image",permalink:"/wikis/posts/166181471369953280/nji73d"}},l={authorsImageUrls:[void 0]},c=[{value:"Api Key:",id:"api-key",level:3},{value:"Usage:",id:"usage",level:2},{value:"Formats:",id:"formats",level:3},{value:"Example:",id:"example",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"api-key"},"Api Key:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.weatherapi.com/"},"Weather Api"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n  name: "$getWeather",\n  type: "djs",\n  code: async (d) => {\n    const data = d.util.aoiFunc(d);\n    const [location, format = "{temperature}\xb0C, {condition}, Humidity: {humidity}%, Wind Speed: {windSpeed} km/h"] = data.inside.splits;\n\n    if (!location) {\n      data.result = "Error: Please provide a location.";\n      return { code: d.util.setCode(data) };\n    }\n\n    try {\n      const weatherData = await fetchWeatherData(location);\n\n      if (weatherData.error) {\n        throw new Error(weatherData.error.message);\n      }\n\n      const temperature = weatherData.current.temp_c;\n      const condition = weatherData.current.condition.text;\n      const humidity = weatherData.current.humidity;\n      const windSpeed = weatherData.current.wind_kph;\n\n      let message = format;\n      message = message.replace(/{temperature}/g, temperature);\n      message = message.replace(/{condition}/g, condition);\n      message = message.replace(/{humidity}/g, humidity);\n      message = message.replace(/{windSpeed}/g, windSpeed);\n\n      data.result = message;\n    } catch (error) {\n      data.result = `Error: ${error.message}`;\n    }\n\n    return {\n      code: d.util.setCode(data)\n    };\n  }\n});\n\nasync function fetchWeatherData(location) {\n  const apiKey = "YOUR_API_KEY";\n  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n}\n')),(0,r.kt)("h2",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"$getWeather[location;format]\n")),(0,r.kt)("h3",{id:"formats"},"Formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{temperature}: Current temperature."),(0,r.kt)("li",{parentName:"ul"},"{condition}: Weather condition."),(0,r.kt)("li",{parentName:"ul"},"{humidity}: Humidity."),(0,r.kt)("li",{parentName:"ul"},"{windSpeed}: Wind speed.")),(0,r.kt)("h3",{id:"example"},"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"$getWeather[New York;Temperature: {temperature}\xb0C, Condition: {condition}, Humidity: {humidity}%, Wind Speed: {windSpeed} km/h]\n")),(0,r.kt)("h1",{id:"note-change-your_api_key-for-your-actual-api-key"},"NOTE: CHANGE YOUR_API_KEY FOR YOUR ACTUAL API KEY"))}d.isMDXComponent=!0}}]);