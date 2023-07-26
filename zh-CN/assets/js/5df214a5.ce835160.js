"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[22715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||g[h]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},55808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Release 1.8.0",author:"Verne Deng",author_url:"https://github.com/vernedeng",author_image_url:"https://avatars.githubusercontent.com/u/45282474?v=4",tags:["Apache InLong","Version"]},c=void 0,i={permalink:"/zh-CN/blog/2023/07/24/release-1.8.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-07-24-release-1.8.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-07-24-release-1.8.0.md",title:"Release 1.8.0",description:"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.8.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 190+ \u4e2aissue\uff0c\u5305\u542b 6+ \u4e2a\u5927\u7279\u6027\u548c 30+ \u4e2a\u4f18\u5316\uff0c\u4e3b\u8981\u5b8c\u6210\u4e86\u591a\u79df\u6237\u7ba1\u7406\u3001\u652f\u6301 Apache Flink \u591a\u7248\u672c\u3001Dashboard \u589e\u52a0\u6570\u636e\u540c\u6b65\u3001\u652f\u6301\u6570\u636e\u9884\u89c8\u3001\u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\u7b49\u30021.8.0 \u53d1\u5e03\u540e\uff0cApache InLong \u56f4\u7ed5\u6570\u636e\u63a5\u5165\u3001\u6570\u636e\u540c\u6b65\u548c\u6570\u636e\u8ba2\u9605\u7684\u5168\u573a\u666f\u6570\u636e\u96c6\u6210\u5e03\u5c40\u57fa\u672c\u5b8c\u6210\uff0c\u914d\u5408\u591a\u79df\u6237\u7ba1\u7406\u3001\u591a\u96c6\u7fa4\u7ba1\u7406\u3001\u5ba1\u6279\u6d41\u7ba1\u7406\u3001\u5168\u94fe\u8def\u5ba1\u8ba1/\u6307\u6807\u7b49\u3002",date:"2023-07-24T00:00:00.000Z",formattedDate:"2023\u5e747\u670824\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:11.52,hasTruncateMarker:!0,authors:[{name:"Verne Deng",url:"https://github.com/vernedeng",imageURL:"https://avatars.githubusercontent.com/u/45282474?v=4"}],frontMatter:{title:"Release 1.8.0",author:"Verne Deng",author_url:"https://github.com/vernedeng",author_image_url:"https://avatars.githubusercontent.com/u/45282474?v=4",tags:["Apache InLong","Version"]},nextItem:{title:"1.7.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/05/19/release-1.7.0"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.8.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 190+ \u4e2aissue\uff0c\u5305\u542b 6+ \u4e2a\u5927\u7279\u6027\u548c 30+ \u4e2a\u4f18\u5316\uff0c\u4e3b\u8981\u5b8c\u6210\u4e86\u591a\u79df\u6237\u7ba1\u7406\u3001\u652f\u6301 Apache Flink \u591a\u7248\u672c\u3001Dashboard \u589e\u52a0\u6570\u636e\u540c\u6b65\u3001\u652f\u6301\u6570\u636e\u9884\u89c8\u3001\u4f18\u5316\u8d85\u957f\u65e5\u5fd7\u5904\u7406\u903b\u8f91\u7b49\u30021.8.0 \u53d1\u5e03\u540e\uff0cApache InLong \u56f4\u7ed5\u6570\u636e\u63a5\u5165\u3001\u6570\u636e\u540c\u6b65\u548c\u6570\u636e\u8ba2\u9605\u7684\u5168\u573a\u666f\u6570\u636e\u96c6\u6210\u5e03\u5c40\u57fa\u672c\u5b8c\u6210\uff0c\u914d\u5408\u591a\u79df\u6237\u7ba1\u7406\u3001\u591a\u96c6\u7fa4\u7ba1\u7406\u3001\u5ba1\u6279\u6d41\u7ba1\u7406\u3001\u5168\u94fe\u8def\u5ba1\u8ba1/\u6307\u6807\u7b49\u3002"))}g.isMDXComponent=!0}}]);