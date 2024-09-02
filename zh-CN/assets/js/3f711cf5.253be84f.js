"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[31423],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},29968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},i=void 0,l={unversionedId:"modules/dataproxy/quick_start",id:"version-1.7.0/modules/dataproxy/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-dataproxy \u76ee\u5f55\u4e0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.7.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/zh-CN/docs/1.7.0/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/modules/dataproxy/quick_start.md",tags:[],version:"1.7.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.7.0/modules/dataproxy/overview"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/1.7.0/modules/dataproxy/configuration"}},p={},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6e Manager \u548c Audit \u5730\u5740",id:"\u914d\u7f6e-manager-\u548c-audit-\u5730\u5740",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"inlong-dataproxy")," \u76ee\u5f55\u4e0b\u3002"),(0,a.yg)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.yg)("h3",{id:"\u914d\u7f6e-manager-\u548c-audit-\u5730\u5740"},"\u914d\u7f6e Manager \u548c Audit \u5730\u5740"),(0,a.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"conf/common.properties"),"\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# local IP\nproxy.local.ip=127.0.0.1\n# manager \u5730\u5740\nmanager.hosts=127.0.0.1:8083\n# audit proxy \u5730\u5740\naudit.proxys=127.0.0.1:10081\n")),(0,a.yg)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# \u5982\u679c\u4f7f\u7528 Pulsar \u6216 Kafka \u6765\u7f13\u5b58\u6570\u636e\nbash +x bin/dataproxy-start.sh\n# \u5982\u679c\u4f7f\u7528 InLong TubeMQ \u6765\u7f13\u5b58\u6570\u636e\n# bash +x bin/dataproxy-start.sh tubemq\n")),(0,a.yg)("h2",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")))}d.isMDXComponent=!0}}]);