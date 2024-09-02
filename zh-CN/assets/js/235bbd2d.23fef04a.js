"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[27935],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>s});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),p=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,s=d["".concat(g,".").concat(y)]||d[y]||c[y]||l;return r?a.createElement(s,o(o({ref:t},m),{},{components:r})):a.createElement(s,o({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},88382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const l={title:"\u603b\u89c8",sidebar_position:1},o=void 0,i={unversionedId:"modules/manager/overview",id:"modules/manager/overview",title:"\u603b\u89c8",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/manager/overview.md",sourceDirName:"modules/manager",slug:"/modules/manager/overview",permalink:"/zh-CN/docs/next/modules/manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/manager/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u810f\u6570\u636e\u5f52\u6863",permalink:"/zh-CN/docs/next/modules/sort/dirty_data_archive"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/next/modules/manager/quick_start"}},g={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2},{value:"\u4ea4\u4e92\u6d41\u7a0b",id:"\u4ea4\u4e92\u6d41\u7a0b",level:2},{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...l}=e;return(0,n.yg)(d,(0,a.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.yg)("p",null,"InLong Manager \u662f Apache InLong \u9879\u76ee\u7684\u7edf\u4e00\u7ba1\u7406\u5e73\u53f0\uff0c\u5e73\u53f0\u63d0\u4f9b\u5404\u57fa\u7840\u914d\u7f6e\uff08\u5982\u6570\u636e\u6d41\u914d\u7f6e\u3001\u6d88\u8d39\u914d\u7f6e\u3001\u96c6\u7fa4\u7ba1\u7406\u7b49\uff09\u7684\u7ef4\u62a4\u5165\u53e3\uff0c\u7528\u6237\u53ef\u521b\u5efa\u6570\u636e\u91c7\u96c6\u4efb\u52a1\u3001\u67e5\u770b\u6307\u6807\u6570\u636e\u7b49\u3002 "),(0,n.yg)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u6a21\u5757"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-common"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u6a21\u5757\u516c\u5171\u4ee3\u7801\uff0c\u5982\u5f02\u5e38\u5b9a\u4e49\u3001\u5de5\u5177\u7c7b\u3001\u679a\u4e3e\u7b49")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5e93\u64cd\u4f5c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-service"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u903b\u8f91\u5c42")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-workflow"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u6d41\u670d\u52a1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-plugins"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sort \u63d2\u4ef6\u670d\u52a1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-web"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u524d\u7aef\u4ea4\u4e92\u63a5\u53e3\u5c42")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-client"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u670d\u52a1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-client-examples"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u4f7f\u7528\u793a\u4f8b")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"manager-client-tools"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u5de5\u5177")))),(0,n.yg)("h2",{id:"\u4ea4\u4e92\u6d41\u7a0b"},"\u4ea4\u4e92\u6d41\u7a0b"),(0,n.yg)("p",null,(0,n.yg)("img",{src:r(16235).A,width:"723",height:"1188"})),(0,n.yg)("h2",{id:"\u6570\u636e\u6a21\u578b"},"\u6570\u636e\u6a21\u578b"),(0,n.yg)("p",null,(0,n.yg)("img",{src:r(58813).A,width:"4055",height:"1944"}),"\n\u76ee\u524d InLong Manager \u4e3b\u8981\u6709\u4ee5\u4e0b\u6570\u636e\u6a21\u578b:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"InlongGroup: \u6570\u636e\u6d41\u7ec4\uff0c\u5305\u542b\u591a\u4e2a\u6570\u636e\u6d41\uff0c\u4e00\u4e2a InlongGroup \u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u4e1a\u52a1\u5355\u5143\u3002"),(0,n.yg)("li",{parentName:"ul"},"InlongStream: \u6570\u636e\u6d41\uff0c\u4e00\u4e2a\u6570\u636e\u6d41\u6709\u5177\u4f53\u7684\u6570\u636e\u6e90\u3001\u6570\u636e\u683c\u5f0f\u548c\u6570\u636e\u6d41\u5411\u3002"),(0,n.yg)("li",{parentName:"ul"},"StreamSource: \u6570\u636e\u6765\u6e90\uff0c\u5305\u62ec\u6587\u4ef6\u91c7\u96c6\u3001MySQL \u91c7\u96c6\u7b49\u3002"),(0,n.yg)("li",{parentName:"ul"},"StreamSink: \u6570\u636e\u76ee\u6807\uff0c\u6570\u636e\u6700\u540e\u6d41\u5165\u7684\u8282\u70b9\uff0c\u5305\u62ec Hive\u3001ClickHouse \u7b49\u3002"),(0,n.yg)("li",{parentName:"ul"},"DataNode: \u6570\u636e\u8282\u70b9\uff0c\u5305\u62ec\u6570\u636e\u91c7\u96c6\u5730\u5740\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u7b49\u4fe1\u606f\u3002"),(0,n.yg)("li",{parentName:"ul"},"InlongCluster: \u96c6\u7fa4\uff0c\u5305\u62ec Pulsar\u3001TubeMQ\u3001Kafka \u7b49\u96c6\u7fa4\u4fe1\u606f\u3002")))}c.isMDXComponent=!0},58813:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/data_model-9de46caa93c0510cf8449069f30daa81.png"},16235:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/interaction-232d3de3787a9440dc1e70edd55dda3b.png"}}]);