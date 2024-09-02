"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92726],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,h=s["".concat(l,".").concat(m)]||s[m]||g[m]||a;return r?n.createElement(h,c(c({ref:t},p),{},{components:r})):n.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(58168),o=(r(96540),r(15680));const a={title:"1.10.0 \u7248\u672c\u53d1\u5e03",author:"Verne Deng",author_url:"https://github.com/vernedeng",author_image_url:"https://avatars.githubusercontent.com/u/45282474?v=4",tags:["Apache InLong","Version"]},c=void 0,i={permalink:"/zh-CN/blog/2023/12/13/release-1.10.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-12-13-release-1.10.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-12-13-release-1.10.0.md",title:"1.10.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong\uff08\u5e94\u9f99\uff09\u6700\u8fd1\u53d1\u5e03\u4e86 1.10.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 200+ \u4e2a issue \uff0c\u5305\u542b 6+ \u4e2a\u5927\u7279\u6027\u548c 30+ \u4e2a\u4f18\u5316\uff0c\u4e3b\u8981\u5b8c\u6210\u4e86 Manager \u652f\u6301\u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7\u3001\u652f\u6301 Group \u5728\u96c6\u7fa4\u95f4\u8fc1\u79fb\u3001Agent \u652f\u6301\u5468\u671f\u91c7\u96c6\u548c\u4efb\u52a1\u8865\u5f55\u3001Sort \u5b9e\u65f6\u540c\u6b65\u652f\u6301 Transform\u3001\u652f\u6301 MySQL \u5230 Iceberg \u6574\u5e93\u540c\u6b65\u3001\u652f\u6301\u81ea\u52a8\u5efa\u8868\u7b49\u7279\u6027\u30021.10.0 \u53d1\u5e03\u540e\uff0cApache InLong \u4e30\u5bcc\u5e76\u4f18\u5316\u4e86 Agent \u529f\u80fd\u573a\u666f\uff0c \u65b0\u589e\u6574\u5e93\u540c\u6b65\u81ea\u52a8\u5efa\u8868\u7684\u80fd\u529b\uff0c\u652f\u6301\u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7\uff0c\u89e3\u51b3\u5728\u5f00\u53d1\u548c\u8fd0\u8425\u8fc7\u7a0b\u4e2d\u7684\u5feb\u901f\u6392\u67e5\u95ee\u9898\u7684\u9700\u6c42\uff0c\u540c\u65f6\u4f18\u5316 Apache InLong \u8fd0\u8425\u8fd0\u7ef4\u7684\u4f7f\u7528\u4f53\u9a8c\u3002",date:"2023-12-13T00:00:00.000Z",formattedDate:"2023\u5e7412\u670813\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:9.05,hasTruncateMarker:!0,authors:[{name:"Verne Deng",url:"https://github.com/vernedeng",imageURL:"https://avatars.githubusercontent.com/u/45282474?v=4"}],frontMatter:{title:"1.10.0 \u7248\u672c\u53d1\u5e03",author:"Verne Deng",author_url:"https://github.com/vernedeng",author_image_url:"https://avatars.githubusercontent.com/u/45282474?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"1.12.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2024/04/21/release-1.12.0"},nextItem:{title:"1.9.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/09/25/release-1.9.0"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u},s="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09\u6700\u8fd1\u53d1\u5e03\u4e86 1.10.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 200+ \u4e2a issue \uff0c\u5305\u542b 6+ \u4e2a\u5927\u7279\u6027\u548c 30+ \u4e2a\u4f18\u5316\uff0c\u4e3b\u8981\u5b8c\u6210\u4e86 Manager \u652f\u6301\u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7\u3001\u652f\u6301 Group \u5728\u96c6\u7fa4\u95f4\u8fc1\u79fb\u3001Agent \u652f\u6301\u5468\u671f\u91c7\u96c6\u548c\u4efb\u52a1\u8865\u5f55\u3001Sort \u5b9e\u65f6\u540c\u6b65\u652f\u6301 Transform\u3001\u652f\u6301 MySQL \u5230 Iceberg \u6574\u5e93\u540c\u6b65\u3001\u652f\u6301\u81ea\u52a8\u5efa\u8868\u7b49\u7279\u6027\u30021.10.0 \u53d1\u5e03\u540e\uff0cApache InLong \u4e30\u5bcc\u5e76\u4f18\u5316\u4e86 Agent \u529f\u80fd\u573a\u666f\uff0c \u65b0\u589e\u6574\u5e93\u540c\u6b65\u81ea\u52a8\u5efa\u8868\u7684\u80fd\u529b\uff0c\u652f\u6301\u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7\uff0c\u89e3\u51b3\u5728\u5f00\u53d1\u548c\u8fd0\u8425\u8fc7\u7a0b\u4e2d\u7684\u5feb\u901f\u6392\u67e5\u95ee\u9898\u7684\u9700\u6c42\uff0c\u540c\u65f6\u4f18\u5316 Apache InLong \u8fd0\u8425\u8fd0\u7ef4\u7684\u4f7f\u7528\u4f53\u9a8c\u3002"))}g.isMDXComponent=!0}}]);