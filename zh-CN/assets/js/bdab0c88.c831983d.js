"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),h=o,m=s["".concat(l,".").concat(h)]||s[h]||g[h]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},77338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"1.1.0 \u7248\u672c\u53d1\u5e03",author:"dockerzhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},c=void 0,i={permalink:"/zh-CN/blog/2022/04/25/release-1.1.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-04-25-release-1.1.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-04-25-release-1.1.0.md",title:"1.1.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u540c\u65f6\u652f\u6301\u6279\u548c\u6d41\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002InLong\u652f\u6301\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002",date:"2022-04-25T00:00:00.000Z",formattedDate:"2022\u5e744\u670825\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:6.245,hasTruncateMarker:!0,authors:[{name:"dockerzhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"1.1.0 \u7248\u672c\u53d1\u5e03",author:"dockerzhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"InLong Sort ETL \u65b9\u6848\u89e3\u6790",permalink:"/zh-CN/blog/2022/06/16/inlong-sort-etl"},nextItem:{title:"0.12.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/01/04/release-0.12.0"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u},s="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u540c\u65f6\u652f\u6301\u6279\u548c\u6d41\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002InLong\u652f\u6301\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002"))}g.isMDXComponent=!0}}]);