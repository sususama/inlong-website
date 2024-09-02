"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[50991],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),g=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=g(a),c=r,h=d["".concat(u,".").concat(c)]||d[c]||p[c]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<i;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},73657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const i={title:"1.6.0 \u7248\u672c\u53d1\u5e03",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},o=void 0,l={permalink:"/zh-CN/blog/2023/03/23/release-1.6.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-03-23-release-1.6.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-03-23-release-1.6.0.md",title:"1.6.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.6.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 202+ \u4e2aissue\uff0c\u5305\u542b 9+ \u4e2a\u5927\u7279\u6027\u548c 80+ \u4e2a\u4f18\u5316\u3002\u4e3b\u8981\u5b8c\u6210\u4e86\u65b0\u589e Kudu \u6570\u636e\u6d41\u5411\u3001\u5b8c\u5584 Redis \u6570\u636e\u6d41\u5411\u3001\u589e\u52a0 MQ \u7f13\u5b58\u96c6\u7fa4 Selector \u7b56\u7565\u3001\u4f18\u5316 Audit ID \u5206\u914d\u89c4\u5219\u3001\u65b0\u589e\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5\u3001\u4f18\u5316 Sort Audit \u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\u3001Audit \u652f\u6301\u4f7f\u7528 Kafka \u7f13\u5b58\u5ba1\u8ba1\u6570\u636e\u7b49\u3002",date:"2023-03-23T00:00:00.000Z",formattedDate:"2023\u5e743\u670823\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:10.335,hasTruncateMarker:!0,authors:[{name:"Charles Zhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"1.6.0 \u7248\u672c\u53d1\u5e03",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"1.7.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/05/19/release-1.7.0"},nextItem:{title:"1.5.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/01/13/release-1.5.0"}},u={authorsImageUrls:[void 0]},g=[{value:"\u5173\u4e8e Apache InLong",id:"\u5173\u4e8e-apache-inlong",level:2},{value:"1.6.0 \u7248\u672c\u603b\u89c8",id:"160-\u7248\u672c\u603b\u89c8",level:2},{value:"Agent \u6a21\u5757",id:"agent-\u6a21\u5757",level:3},{value:"DataProxy \u6a21\u5757",id:"dataproxy-\u6a21\u5757",level:3},{value:"Manager \u6a21\u5757",id:"manager-\u6a21\u5757",level:3},{value:"Sort \u6a21\u5757",id:"sort-\u6a21\u5757",level:3},{value:"Dashboard \u6a21\u5757",id:"dashboard-\u6a21\u5757",level:3},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:3},{value:"1.6.0 \u7248\u672c\u7279\u6027\u4ecb\u7ecd",id:"160-\u7248\u672c\u7279\u6027\u4ecb\u7ecd",level:2},{value:"\u65b0\u589e Kudu \u6570\u636e\u6d41\u5411",id:"\u65b0\u589e-kudu-\u6570\u636e\u6d41\u5411",level:3},{value:"\u5b8c\u5584 Redis \u6570\u636e\u6d41\u5411",id:"\u5b8c\u5584-redis-\u6570\u636e\u6d41\u5411",level:3},{value:"\u589e\u52a0 MQ \u7f13\u5b58\u96c6\u7fa4 Selector \u7b56\u7565",id:"\u589e\u52a0-mq-\u7f13\u5b58\u96c6\u7fa4-selector-\u7b56\u7565",level:3},{value:"\u4f18\u5316 Audit ID \u5206\u914d\u89c4\u5219",id:"\u4f18\u5316-audit-id-\u5206\u914d\u89c4\u5219",level:3},{value:"\u65b0\u589e\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5",id:"\u65b0\u589e\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5",level:3},{value:"\u4f18\u5316 Sort Audit \u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\uff0c\u5bf9\u9f50\u5bf9\u8d26",id:"\u4f18\u5316-sort-audit-\u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\u5bf9\u9f50\u5bf9\u8d26",level:3},{value:"Audit \u652f\u6301\u4f7f\u7528 Kafka \u7f13\u5b58\u5ba1\u8ba1\u6570\u636e",id:"audit-\u652f\u6301\u4f7f\u7528-kafka-\u7f13\u5b58\u5ba1\u8ba1\u6570\u636e",level:3},{value:"\u540e\u7eed\u89c4\u5212",id:"\u540e\u7eed\u89c4\u5212",level:2}],s={toc:g},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,n.A)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.6.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 202+ \u4e2aissue\uff0c\u5305\u542b 9+ \u4e2a\u5927\u7279\u6027\u548c 80+ \u4e2a\u4f18\u5316\u3002\u4e3b\u8981\u5b8c\u6210\u4e86\u65b0\u589e Kudu \u6570\u636e\u6d41\u5411\u3001\u5b8c\u5584 Redis \u6570\u636e\u6d41\u5411\u3001\u589e\u52a0 MQ \u7f13\u5b58\u96c6\u7fa4 Selector \u7b56\u7565\u3001\u4f18\u5316 Audit ID \u5206\u914d\u89c4\u5219\u3001\u65b0\u589e\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5\u3001\u4f18\u5316 Sort Audit \u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\u3001Audit \u652f\u6301\u4f7f\u7528 Kafka \u7f13\u5b58\u5ba1\u8ba1\u6570\u636e\u7b49\u3002"),(0,r.yg)("h2",{id:"\u5173\u4e8e-apache-inlong"},"\u5173\u4e8e Apache InLong"),(0,r.yg)("p",null,"\u4f5c\u4e3a\u4e1a\u754c\u9996\u4e2a\u4e00\u7ad9\u5f0f\u5f00\u6e90\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0cApache InLong\uff08\u5e94\u9f99\uff09 \u63d0\u4f9b\u4e86\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u5feb\u901f\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002\u76ee\u524d InLong \u6b63\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5e7f\u544a\u3001\u652f\u4ed8\u3001\u793e\u4ea4\u3001\u6e38\u620f\u3001\u4eba\u5de5\u667a\u80fd\u7b49\u5404\u4e2a\u884c\u4e1a\u9886\u57df\uff0c\u670d\u52a1\u4e0a\u5343\u4e2a\u4e1a\u52a1\uff0c\u5176\u4e2d\u9ad8\u6027\u80fd\u573a\u666f\u6570\u636e\u89c4\u6a21\u8d85\u767e\u4e07\u4ebf\u6761/\u5929\uff0c\u9ad8\u53ef\u9760\u573a\u666f\u6570\u636e\u89c4\u6a21\u8d85\u5341\u4e07\u4ebf\u6761/\u5929\u3002"),(0,r.yg)("p",null,"InLong \u9879\u76ee\u5b9a\u4f4d\u7684\u6838\u5fc3\u5173\u952e\u8bcd\u662f\u201c\u4e00\u7ad9\u5f0f\u201d\u548c\u201c\u6d77\u91cf\u6570\u636e\u201d\u3002\u5bf9\u4e8e\u201c\u4e00\u7ad9\u5f0f\u201d\uff0c\u6211\u4eec\u5e0c\u671b\u5c4f\u853d\u6280\u672f\u7ec6\u8282\u3001\u63d0\u4f9b\u5b8c\u6574\u6570\u636e\u96c6\u6210\u53ca\u914d\u5957\u670d\u52a1\uff0c\u5b9e\u73b0\u5f00\u7bb1\u5373\u7528\uff1b\u5bf9\u4e8e\u201c\u6d77\u91cf\u6570\u636e\u201d\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u67b6\u6784\u4e0a\u7684\u6570\u636e\u94fe\u8def\u5206\u5c42\u3001\u5168\u7ec4\u4ef6\u53ef\u6269\u5c55\u3001\u81ea\u5e26\u591a\u96c6\u7fa4\u7ba1\u7406\u7b49\u4f18\u52bf\uff0c\u5728\u767e\u4e07\u4ebf\u6761/\u5929\u7684\u57fa\u7840\u4e0a\uff0c\u7a33\u5b9a\u652f\u6301\u66f4\u5927\u89c4\u6a21\u7684\u6570\u636e\u91cf\u3002"),(0,r.yg)("h2",{id:"160-\u7248\u672c\u603b\u89c8"},"1.6.0 \u7248\u672c\u603b\u89c8"),(0,r.yg)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09 \u6700\u8fd1\u53d1\u5e03\u4e86 1.6.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 202+ \u4e2aissue\uff0c\u5305\u542b 9+ \u4e2a\u5927\u7279\u6027\u548c 80+ \u4e2a\u4f18\u5316\u3002\u4e3b\u8981\u5b8c\u6210\u4e86\u65b0\u589e Kudu \u6570\u636e\u6d41\u5411\u3001\u589e\u52a0 MQ \u7f13\u5b58\u96c6\u7fa4\u7ea7\u522b Selector \u7b56\u7565\u3001\u4f18\u5316 Audit ID \u5206\u914d\u89c4\u5219\u3001\u65b0\u589e\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5\u3001\u4f18\u5316 Sort \u5173\u4e8e Audit \u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\u3001Audit \u652f\u6301\u4f7f\u7528 Kafka \u7f13\u5b58\u5ba1\u8ba1\u6570\u636e\u7b49\u3002\u8be5\u7248\u672c\u8fd8\u5b8c\u6210\u4e86\u5927\u91cf\u5176\u5b83\u7279\u6027\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,r.yg)("h3",{id:"agent-\u6a21\u5757"},"Agent \u6a21\u5757"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u589e\u5f3a\u6587\u4ef6\u91c7\u96c6\u7a33\u5b9a\u6027\uff0c\u4fee\u590d\u591a\u4e2a\u91c7\u96c6 Bug "),(0,r.yg)("li",{parentName:"ul"},"\u4fee\u590d MQTT \u3001MongoDB \u7b49\u591a\u4e2a Bug")),(0,r.yg)("h3",{id:"dataproxy-\u6a21\u5757"},"DataProxy \u6a21\u5757"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u589e\u52a0 MQ \u7f13\u5b58\u96c6\u7fa4 Selector \u7b56\u7565\uff0c\u51cf\u5c11 Producer \u6570\u91cf"),(0,r.yg)("li",{parentName:"ul"},"\u4e3a\u65b0\u7684 MQ Sink \u589e\u52a0 Audit \u4e0a\u62a5")),(0,r.yg)("h3",{id:"manager-\u6a21\u5757"},"Manager \u6a21\u5757"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4f18\u5316 Audit ID \u5206\u914d\u89c4\u5219\uff0c\u652f\u6301\u591a Load \u6570\u636e\u8282\u70b9\u5ba1\u8ba1"),(0,r.yg)("li",{parentName:"ul"},"\u4f18\u5316 ClickHouse \u6570\u636e\u8282\u70b9\u5143\u6570\u636e\u914d\u7f6e\u548c\u7ba1\u7406"),(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5\uff0c\u68c0\u67e5\u8282\u70b9\u53ef\u7528\u6027"),(0,r.yg)("li",{parentName:"ul"},"\u589e\u52a0 Pulsar \u591a\u96c6\u7fa4 Topic \u8ba2\u9605\u7ba1\u7406"),(0,r.yg)("li",{parentName:"ul"},"\u4fee\u590d Manager \u591a\u4e2a\u6570\u636e\u6d41\u7ba1\u7406\u3001\u72b6\u6001\u7ba1\u7406 Bug")),(0,r.yg)("h3",{id:"sort-\u6a21\u5757"},"Sort \u6a21\u5757"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e3a Kafka Source Connector \u65b0\u589e\u6570\u636e\u5ba1\u8ba1"),(0,r.yg)("li",{parentName:"ul"},"Doris Connector \u65b0\u589e CSV \u683c\u5f0f\u53ca\u810f\u6570\u636e\u5f52\u6863"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301 ARRAY\u3001MAP\u3001STRUCT \u7b49\u590d\u6742\u7c7b\u578b"),(0,r.yg)("li",{parentName:"ul"},"\u4f18\u5316 Pulsar Connector \u89e3\u51b3\u6570\u636e\u4e22\u5931\u95ee\u9898"),(0,r.yg)("li",{parentName:"ul"},"\u4fee\u590d Canal-JSON \u5143\u6570\u636e\u5b57\u6bb5\u4e71\u5e8f\u5199\u5165\u95ee\u9898"),(0,r.yg)("li",{parentName:"ul"},"\u4f18\u5316 Sort \u5173\u4e8e Audit \u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\uff0c\u5bf9\u9f50\u5bf9\u8d26")),(0,r.yg)("h3",{id:"dashboard-\u6a21\u5757"},"Dashboard \u6a21\u5757"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6301\u7eed\u4f18\u5316 Dashboard \u4f53\u9a8c\uff0c\u964d\u4f4e\u521d\u6b21\u90e8\u7f72\u7406\u89e3\u95e8\u69db"),(0,r.yg)("li",{parentName:"ul"},"\u589e\u52a0 Redis\u3001Kudu \u7b49\u6570\u636e\u8282\u70b9\u7ba1\u7406"),(0,r.yg)("li",{parentName:"ul"},"\u4f18\u5316 PostgreSQL \u3001Kafka\u3001Redis \u7b49\u6570\u636e\u8282\u70b9\u53c2\u6570"),(0,r.yg)("li",{parentName:"ul"},"\u7b80\u5316 Agent \u8282\u70b9 IP \u9009\u53d6\u7b56\u7565"),(0,r.yg)("li",{parentName:"ul"},"\u589e\u52a0\u591a\u4e2a\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5\u9875\u9762")),(0,r.yg)("h3",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Audit \u652f\u6301\u4f7f\u7528 Kafka \u7f13\u5b58\u5ba1\u8ba1\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"Audit \u7edf\u4e00\u4ece Manager \u83b7\u53d6 MQ \u96c6\u7fa4"),(0,r.yg)("li",{parentName:"ul"},"\u4f18\u5316 Standalone\u3001Docker-compose \u3001Kubernetes \u7b49\u90e8\u7f72\u6b65\u9aa4")),(0,r.yg)("h2",{id:"160-\u7248\u672c\u7279\u6027\u4ecb\u7ecd"},"1.6.0 \u7248\u672c\u7279\u6027\u4ecb\u7ecd"),(0,r.yg)("h3",{id:"\u65b0\u589e-kudu-\u6570\u636e\u6d41\u5411"},"\u65b0\u589e Kudu \u6570\u636e\u6d41\u5411"),(0,r.yg)("p",null,"Apache Kudu \u662f\u7531 Cloudera \u5f00\u6e90\u7684\u5b58\u50a8\u5f15\u64ce\uff0c\u53ef\u4ee5\u540c\u65f6\u63d0\u4f9b\u4f4e\u5ef6\u8fdf\u7684\u968f\u673a\u8bfb\u5199\u548c\u9ad8\u6548\u7684\u6570\u636e\u5206\u6790\u80fd\u529b\u3002\u5728 1.6.0 \u7248\u672c\u4e2d\uff0c InLong \u652f\u6301\u4e86 Kudu \u6570\u636e\u6d41\u5411\uff0c\u5305\u62ec\u65b0\u589e Kudu Connector\u3001\u5143\u6570\u636e\u7ba1\u7406\u3001\u6307\u6807\u3001Dashboard \u9875\u9762\u7b49\u3002Kudu \u6570\u636e\u6d41\u5411\u7531 @featzhang \u72ec\u7acb\u53c2\u4e0e\u548c\u5b8c\u6574\u8d21\u732e\uff0c\u611f\u5174\u8da3\u7684\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u5b89\u88c5\u4f53\u9a8c\u3002\n",(0,r.yg)("img",{alt:"1.6.0-create-kudu",src:a(10910).A,width:"1470",height:"1031"})),(0,r.yg)("h3",{id:"\u5b8c\u5584-redis-\u6570\u636e\u6d41\u5411"},"\u5b8c\u5584 Redis \u6570\u636e\u6d41\u5411"),(0,r.yg)("p",null,"Redis \u662f\u5f88\u6d41\u884c\u7684\u5f00\u6e90\u5185\u5b58\u6570\u636e\u5e93\uff0c\u62e5\u6709\u9ad8\u6027\u80fd\u548c\u4e30\u5bcc\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5728 1.6.0 \u7248\u672c\uff0c InLong \u5b8c\u5584\u4e86 Redis \u6570\u636e\u6d41\u5411\uff0c\u5305\u62ec\u5728 Redis Connector \u4e2d\u589e\u52a0 SinkFunction\u3001\u5143\u6570\u636e\u7ba1\u7406\u3001\u6307\u6807\u548c Dashboard \u9875\u9762\u7b49\uff0c\u5b8c\u6574\u652f\u6301\u4e86 Redis \u7684 Plain\u3001Hash\u3001Bitmap \u7b49\u6570\u636e\u683c\u5f0f, \u5e76\u901a\u8fc7 SchemaMapping \u673a\u5236\u5b9e\u73b0 Redis Schema \u8f6c\u6362\u3002Redis \u6570\u636e\u6d41\u5411\u901a\u8fc7 Schema \u6620\u5c04\u6a21\u5f0f\uff0c\u53ef\u4ee5\u5c06 Schema \u8f6c\u6362\u4e3a\u4e0d\u540c\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://redis.io/docs/data-types/tutorial/"},"Redis Data-Type"),"  \u3002 Redis \u6570\u636e\u6d41\u5411\u4e3b\u8981\u7531 @featzhang \u72ec\u7acb\u53c2\u4e0e\u548c\u5b8c\u6574\u8d21\u732e\uff0c\u8be6\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/issues/7060"},"INLONG-7060")," \u3002\n",(0,r.yg)("img",{alt:"1.6.0-update-redis",src:a(71953).A,width:"755",height:"792"})),(0,r.yg)("h3",{id:"\u589e\u52a0-mq-\u7f13\u5b58\u96c6\u7fa4-selector-\u7b56\u7565"},"\u589e\u52a0 MQ \u7f13\u5b58\u96c6\u7fa4 Selector \u7b56\u7565"),(0,r.yg)("p",null,"\u591a MQ \u96c6\u7fa4\u573a\u666f\u4e0b\uff0c\u5982\u679c DataProxy \u540c\u65f6\u8fde\u63a5\u6240\u6709 MQ \u96c6\u7fa4\uff0c\u4f1a\u5bfc\u81f4 MQ \u96c6\u7fa4\u7684 Producer \u6570\u66b4\u589e\uff0c\u540c\u65f6\u5bfc\u81f4 Zookeeper \u5143\u6570\u636e\u8d85\u91cf\uff0c\u8fdb\u800c\u5f15\u53d1 OutOfMemory\u3002\u5728 1.6.0 \u7248\u672c\u4e2d\uff0cInLong \u589e\u52a0\u4e86 MQ \u7f13\u5b58\u96c6\u7fa4\u7ea7\u522b Selector \u7b56\u7565\uff08\u4e3b\u8981\u9488\u5bf9 Apache Pulsar\uff09\uff0cDataProxy \u8282\u70b9\u53ef\u4ee5\u53ea\u9009\u62e9\u540c\u4e00\u4e2a Tag \u4e0b\u7684\u90e8\u5206 MQ \u96c6\u7fa4\u8fdb\u884c\u751f\u4ea7\uff0c\u4ece\u800c\u964d\u4f4e Producer \u8fde\u63a5\u6570\u548c Zookeeper \u5143\u6570\u636e\u89c4\u6a21\u3002\u8be5\u7279\u6027\u4e3b\u8981\u662f\u7531 @luchunliang \u5f00\u53d1\u5b8c\u6210\uff0c\u8be6\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/7236"},"INLONG-7231")," \u3002\n",(0,r.yg)("img",{alt:"1.6.0-mq-selector",src:a(46334).A,width:"1468",height:"447"})),(0,r.yg)("h3",{id:"\u4f18\u5316-audit-id-\u5206\u914d\u89c4\u5219"},"\u4f18\u5316 Audit ID \u5206\u914d\u89c4\u5219"),(0,r.yg)("p",null,"\u5728 InLong Audit \u539f\u6709\u7684\u8bbe\u8ba1\u7684\u4e2d\uff0c\u6bcf\u4e2a\u6a21\u5757\u7684\u63a5\u6536\u4e0e\u53d1\u9001\u5206\u522b\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u5ba1\u8ba1\u9879 ID\uff0c\u7528\u4e8e\u8bb0\u5f55\u6a21\u5757\u7ea7\u522b\u7684\u6570\u636e\u53d1\u9001\u548c\u6570\u636e\u63a5\u6536\u91cf\u3002\u8be5\u65b9\u6848\u5b58\u5728\u4e00\u4e2a\u7f3a\u9677\uff0c\u5982\u679c InLong Sort \u540c\u65f6\u5411\u591a\u4e2a\u76ee\u6807\u7aef\u5206\u62e3\u6570\u636e\uff08\u6bd4\u5982\u540c\u65f6\u5199\u5165 Hive \u548c Clickhouse\uff09\uff0c\u90a3\u4e00\u4e2a\u5ba1\u8ba1\u9879 ID \u5bf9\u4e8e Sort  \u6765\u8bf4\u65e0\u6cd5\u533a\u5206\u4e0d\u540c\u7684\u6570\u636e\u6d41\u5411\u3002\u5728 1.6.0 \u7248\u672c\u4e2d\uff0c\u4f18\u5316\u4e86 Audit ID \u5206\u914d\u89c4\u5219\uff0c\u4e0d\u540c\u7684\u6570\u636e\u6d41\u5411\u5728 Sort \u5206\u62e3\u4e2d\u62e5\u6709\u4e0d\u540c\u7684\u5ba1\u8ba1\u9879 ID\uff0c\u5b9e\u73b0\u4e86\u5bf9\u540c\u4e2a\u6570\u636e\u6d41\u591a\u4e2a\u5206\u62e3\u76ee\u6807\u7684\u6570\u636e\u5ba1\u8ba1\u3002\u8be5\u7279\u6027\u540c\u65f6\u6d89\u53ca Manager \u548c Sort \u7684\u6539\u52a8\uff0c\u7531 @fuweng11 \u548c @EMsnap \u4e00\u8d77\u5f00\u53d1\u5b9e\u73b0\uff0c\u8be6\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/7390"},"INLONG-7389"),", ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/7233"},"INLONG-7232")," \u548c ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/7552"},"INLONG-7503")," \u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"('audit_sort_hive_input', 'HIVE', 0, '7'),\n('audit_sort_hive_output', 'HIVE', 1, '8'),\n('audit_sort_clickhouse_input', 'CLICKHOUSE', 0, '9'),\n('audit_sort_clickhouse_output', 'CLICKHOUSE', 1, '10'),\n('audit_sort_es_input', 'ELASTICSEARCH', 0, '11'),\n('audit_sort_es_output', 'ELASTICSEARCH', 1, '12'),\n('audit_sort_starrocks_input', 'STARROCKS', 0, '13'),\n('audit_sort_starrocks_output', 'STARROCKS', 1, '14'),\n('audit_sort_hudi_input', 'HUDI', 0, '15'),\n('audit_sort_hudi_output', 'HUDI', 1, '16'),\n('audit_sort_iceberg_input', 'ICEBERG', 0, '17'),\n('audit_sort_iceberg_output', 'ICEBERG', 1, '18'),\n('audit_sort_hbase_input', 'HBASE', 0, '19'),\n('audit_sort_hbase_output', 'HBASE', 1, '20'),\n('audit_sort_doris_input', 'DORIS', 0, '21'),\n('audit_sort_doris_output', 'DORIS', 1, '22')\n")),(0,r.yg)("h3",{id:"\u65b0\u589e\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5"},"\u65b0\u589e\u6570\u636e\u8282\u70b9\u94fe\u63a5\u6027\u6d4b\u8bd5"),(0,r.yg)("p",null,"\u5728\u4e4b\u524d\u7248\u672c\u4e2d\uff0cInLong \u65b0\u589e\u6570\u636e\u8282\u70b9\u4ee5\u53ca\u6ce8\u518c MQ \u96c6\u7fa4\uff0c\u5e76\u6ca1\u6709\u5224\u65ad\u96c6\u7fa4\u53ef\u7528\u6027\u3002\u5728\u65b0\u7248\u672c\u4e2d\uff0cInLong \u4e3a\u4e3b\u8981\u7684\u6570\u636e\u8282\u70b9\u53ca InLong \u7cfb\u7edf\u7ec4\u4ef6\u6ce8\u518c\uff0c\u65b0\u589e\u4e86\u94fe\u63a5\u6027\u6d4b\u8bd5\uff0c\u7528\u4e8e\u63d0\u524d\u68c0\u67e5\u5f85\u6ce8\u518c\u96c6\u7fa4\uff0c\u63d0\u5347\u6570\u636e\u6d41\u521b\u5efa\u6613\u7528\u6027\u3002\u8be5\u7279\u6027\u4e3b\u8981\u662f\u7531 @leosanqing\u3001@bluewang \u548c @fuweng11 \u53c2\u4e0e\u5f00\u53d1\u3002\n",(0,r.yg)("img",{alt:"1.6.0-connection-test",src:a(18747).A,width:"894",height:"794"})),(0,r.yg)("h3",{id:"\u4f18\u5316-sort-audit-\u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\u5bf9\u9f50\u5bf9\u8d26"},"\u4f18\u5316 Sort Audit \u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\uff0c\u5bf9\u9f50\u5bf9\u8d26"),(0,r.yg)("p",null,"\u5728 1.6.0 \u7248\u672c\u4e4b\u524d\uff0cSort \u7684\u5bf9\u8d26\u57fa\u51c6\u65f6\u95f4\u662f\u5904\u7406\u6570\u636e\u65f6\u7684\u673a\u5668\u65f6\u95f4\uff0c\u4f7f\u7528\u8be5\u65f6\u95f4\u4f1a\u9020\u6210\u5168\u94fe\u8def\u6570\u636e\u5bf9\u8d26\u4e0d\u51c6\u786e\u3002\u5728\u8be5\u7248\u672c\u4e2d\uff0cSort \u5bf9\u8d26\u57cb\u70b9\u501f\u9274\u4e86 Flink \u4e2d\u7684 TimestampedCollector \u8bbe\u8ba1\uff0c\u66ff\u6362\u4e86\u539f\u6709 Pulsar Connector \u4e2d\u7684 Simple Collector\uff0c\u5bf9\u9f50\u4e86\u5bf9\u8d26\u6307\u6807\u3002\u5b9e\u73b0\u539f\u7406\u4e3a\u5728 Collector \u4e2d\u8bbe\u7f6e\u4e86 Timestamp \u5b57\u6bb5\uff0c\u5f53\u83b7\u53d6\u5230\u7531 Dataproxy \u4f20\u8f93\u7684 InlongMsg \u6570\u636e\u65f6\uff0c\u5148\u5bf9\u5176\u8fdb\u884c\u89e3\u5305\u5e76\u63d0\u53d6\u5305\u5185\u6bcf\u6761\u6d88\u606f\u7684\u6570\u636e\u65f6\u95f4\uff0c\u5bf9 Collector \u4e2d\u7684 Timestamp \u8fdb\u884c\u91cd\u7f6e\uff0cCollector \u5728\u5f80\u4e0b\u6e38\u4f20\u8f93\u6d88\u606f\u65f6\u5c06\u91cd\u7f6e\u540e\u7684\u6570\u636e\u65f6\u95f4\u4f5c\u4e3a Audit \u65f6\u95f4\u8bb0\u5f55\u6307\u6807\u3002\u4f18\u5316\u540e\u7684 Sort Audit \u5bf9\u8d26\u6307\u6807\u80fd\u4e0e DataProxy \u7b49\u5176\u5b83\u6a21\u5757\u5bf9\u9f50\uff0c\u8be5\u7279\u6027\u4e3b\u8981\u7531 @Emsnap \u5f00\u53d1\u3002\n",(0,r.yg)("img",{alt:"1.6.0-sort-audit-time",src:a(90458).A,width:"1910",height:"893"})),(0,r.yg)("h3",{id:"audit-\u652f\u6301\u4f7f\u7528-kafka-\u7f13\u5b58\u5ba1\u8ba1\u6570\u636e"},"Audit \u652f\u6301\u4f7f\u7528 Kafka \u7f13\u5b58\u5ba1\u8ba1\u6570\u636e"),(0,r.yg)("p",null,"InLong Audit \u662f\u72ec\u7acb\u7684\u5b50\u7cfb\u7edf\uff0c\u5bf9 InLong \u7cfb\u7edf\u7684 Agent\u3001DataProxy\u3001Sort \u6a21\u5757\u7684\u5165\u6d41\u91cf\u3001\u51fa\u6d41\u91cf\u8fdb\u884c\u5b9e\u65f6\u5ba1\u8ba1\u5bf9\u8d26\uff0c\u76ee\u524d\u5bf9\u8d26\u7684\u7c92\u5ea6\u6709\u5206\u949f\u3001\u5c0f\u65f6\u3001\u5929\u4e09\u79cd\u3002\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0cInLong Audit \u53ea\u652f\u6301\u4f7f\u7528 Pulsar \u7f13\u5b58\u5ba1\u8ba1\u6570\u636e\uff0c\u8fd9\u91cc\u4f1a\u589e\u52a0\u53ea\u719f\u6089 Kafka \u7684\u7528\u6237\u90e8\u7f72\u548c\u4f7f\u7528\u6210\u672c\uff0c\u5728\u6574\u4e2a  InLong Audit \u8bbe\u8ba1\u4e0a\uff0cMQ \u7c7b\u578b\u7684\u9009\u62e9\u5e94\u8be5\u548c\u6570\u636e\u6d41\u4fdd\u6301\u4e00\u81f4\uff0c\u907f\u514d\u4f7f\u7528\u4e0d\u540c\u7684 MQ \u7c7b\u578b\u3002\u5728 1.6.0 \u7248\u672c\u4e2d\uff0c\u4e3a\u4e86\u5b9e\u73b0 Audit \u6a21\u5757\u548c\u6570\u636e\u6d41\u4fdd\u6301\u4f7f\u7528\u540c\u7c7b\u578b MQ \u670d\u52a1\uff0cAudit \u652f\u6301\u4e86\u4f7f\u7528 Kafka \u7f13\u5b58\u5ba1\u8ba1\u6570\u636e\uff0c\u5b9e\u73b0\u4e86 MQ \u670d\u52a1\u9009\u578b\u7684\u7edf\u4e00\u3002\u8be5\u7279\u6027\u4e3b\u8981\u662f\u7531 @haifxu\u3001@dockerzhang \u5b8c\u6210\u3002\n",(0,r.yg)("img",{alt:"1.6.0-audit-kafka",src:a(12834).A,width:"843",height:"732"})),(0,r.yg)("h2",{id:"\u540e\u7eed\u89c4\u5212"},"\u540e\u7eed\u89c4\u5212"),(0,r.yg)("p",null,"\u5728 1.6.0 \u4e2d\uff0cSort \u6a21\u5757\u8fd8\u4fee\u590d\u810f\u6570\u636e\u5f52\u6863\u3001\u6307\u6807\u3001Connector \u7b49\u591a\u4e2a Bug\uff0cDashboard \u6301\u7eed\u4f18\u5316\u663e\u793a\u3001\u5ba1\u6279\u6d41\u7a0b\u7b49\u4f53\u9a8c\u95ee\u9898\uff0c\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003 1.6.0 \u53d1\u5e03 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/CHANGES.md"},"Changelog")," \u3002\u5728\u540e\u7eed\u7248\u672c\u4e2d\uff0cApache  InLong \u4f1a\u589e\u52a0 Schema \u52a8\u6001\u611f\u77e5\u3001Schema \u6279\u91cf\u5bfc\u5165\u3001Agent \u5b89\u88c5\u3001\u6269\u5c55\u66f4\u591a\u6570\u636e\u8282\u70b9\u7b49\uff0c\u671f\u5f85\u66f4\u591a\u5f00\u53d1\u8005\u53c2\u4e0e\u8d21\u732e\u3002"))}p.isMDXComponent=!0},12834:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/1.6.0-audit-kafka-120f70dcf6449309dd9824c5e4d7faa1.png"},18747:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/1.6.0-connection-test-ce6b8f02839f8e7cc032a48b2930e95a.png"},10910:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/1.6.0-create-kudu-36e66939d4032f4839fc1b5984b5752e.png"},46334:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/1.6.0-mq-selector-80659d1793454422d4f75feaa31eaed7.png"},90458:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/1.6.0-sort-audit-time-7c9f9fab9863e49ab6b5167ebe522e91.png"},71953:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/1.6.0-update-redis-017cd2d29c513ca867bfef88f9bf8ea6.png"}}]);