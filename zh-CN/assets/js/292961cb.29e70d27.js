"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[42215],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,m=p["".concat(l,".").concat(g)]||p[g]||h[g]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},76175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={title:"1.5.0 \u7248\u672c\u53d1\u5e03",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},c=void 0,i={permalink:"/zh-CN/blog/2023/01/13/release-1.5.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-01-13-release-1.5.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-01-13-release-1.5.0.md",title:"1.5.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong\uff08\u5e94\u9f99\uff09\u6700\u8fd1\u53d1\u5e03\u4e86 1.5.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 296+ \u4e2aissue\uff0c\u5305\u542b 12+ \u4e2a\u5927\u7279\u6027\u548c 110+ \u4e2a\u4f18\u5316\u3002\u4e3b\u8981\u5b8c\u6210\u4e86\u65b0\u589e StarRocks\u3001Hudi\u3001Doris\u3001Elasticsearch \u7b49\u6d41\u5411\u3001\u4f18\u5316 Dashboard \u4f53\u9a8c\u3001\u91cd\u6784 MQ \u7ba1\u7406\u6a21\u578b\u3001\u65b0\u589e\u810f\u6570\u636e\u5904\u7406\u3001\u5168\u94fe\u8def Apache Kafka \u652f\u6301\u3001TubeMQ C++/Python SDK \u652f\u6301\u751f\u4ea7\u7b49\u3002",date:"2023-01-13T00:00:00.000Z",formattedDate:"2023\u5e741\u670813\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:6.98,hasTruncateMarker:!0,authors:[{name:"Charles Zhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"1.5.0 \u7248\u672c\u53d1\u5e03",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"1.6.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/03/23/release-1.6.0"},nextItem:{title:"1.4.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/11/16/release-1.4.0"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09\u6700\u8fd1\u53d1\u5e03\u4e86 1.5.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 296+ \u4e2aissue\uff0c\u5305\u542b 12+ \u4e2a\u5927\u7279\u6027\u548c 110+ \u4e2a\u4f18\u5316\u3002\u4e3b\u8981\u5b8c\u6210\u4e86\u65b0\u589e StarRocks\u3001Hudi\u3001Doris\u3001Elasticsearch \u7b49\u6d41\u5411\u3001\u4f18\u5316 Dashboard \u4f53\u9a8c\u3001\u91cd\u6784 MQ \u7ba1\u7406\u6a21\u578b\u3001\u65b0\u589e\u810f\u6570\u636e\u5904\u7406\u3001\u5168\u94fe\u8def Apache Kafka \u652f\u6301\u3001TubeMQ C++/Python SDK \u652f\u6301\u751f\u4ea7\u7b49\u3002"))}h.isMDXComponent=!0}}]);