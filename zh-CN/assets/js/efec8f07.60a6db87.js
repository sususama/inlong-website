"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[53687],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,y=g["".concat(c,".").concat(d)]||g[d]||u[d]||i;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={title:"\u5165\u5e93 Hive \u793a\u4f8b",sidebar_position:2},l=void 0,o={unversionedId:"quick_start/hive_example",id:"version-1.8.0/quick_start/hive_example",title:"\u5165\u5e93 Hive \u793a\u4f8b",description:"\u672c\u8282\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u4f53\u9a8c InLong \u7684\u5b8c\u6574\u6d41\u7a0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.8.0/quick_start/hive_example.md",sourceDirName:"quick_start",slug:"/quick_start/hive_example",permalink:"/zh-CN/docs/1.8.0/quick_start/hive_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/quick_start/hive_example.md",tags:[],version:"1.8.0",sidebarPosition:2,frontMatter:{title:"\u5165\u5e93 Hive \u793a\u4f8b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u7f16\u8bd1",permalink:"/zh-CN/docs/1.8.0/quick_start/how_to_build"},next:{title:"\u4f7f\u7528 Pulsar \u793a\u4f8b",permalink:"/zh-CN/docs/1.8.0/quick_start/pulsar_example"}},c={},p=[{value:"\u5b89\u88c5 Hive",id:"\u5b89\u88c5-hive",level:2},{value:"\u5b89\u88c5 InLong",id:"\u5b89\u88c5-inlong",level:2},{value:"\u65b0\u5efa\u63a5\u5165",id:"\u65b0\u5efa\u63a5\u5165",level:2},{value:"\u5ba1\u6279\u63a5\u5165",id:"\u5ba1\u6279\u63a5\u5165",level:2},{value:"\u914d\u7f6e Agent \u91c7\u96c6\u6587\u4ef6",id:"\u914d\u7f6e-agent-\u91c7\u96c6\u6587\u4ef6",level:2}],s={toc:p},g="wrapper";function u(e){let{components:t,...i}=e;return(0,a.yg)(g,(0,r.A)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u8282\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u4f53\u9a8c InLong \u7684\u5b8c\u6574\u6d41\u7a0b\u3002"),(0,a.yg)("h2",{id:"\u5b89\u88c5-hive"},"\u5b89\u88c5 Hive"),(0,a.yg)("p",null,"Hive \u662f\u8fd0\u884c\u7684\u5fc5\u5907\u7ec4\u4ef6\u3002\u5982\u679c\u60a8\u7684\u673a\u5668\u4e0a\u6ca1\u6709 Hive\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 Docker \u8fdb\u884c\u5feb\u901f\u5b89\u88c5\uff0c\u8be6\u60c5\u53ef\u89c1 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"\u8fd9\u91cc"),"\u3002"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u7528\u4ee5\u4e0a Docker \u955c\u50cf\u7684\u8bdd\uff0c\u6211\u4eec\u9700\u8981\u5728 namenode \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u7aef\u53e3\u6620\u5c04 ",(0,a.yg)("inlineCode",{parentName:"p"},"8020:8020"),"\uff0c\u56e0\u4e3a\u5b83\u662f HDFS DefaultFS \u7684\u7aef\u53e3\uff0c\u540e\u9762\u5728\u914d\u7f6e Hive \u65f6\u9700\u8981\u7528\u5230\u3002")),(0,a.yg)("h2",{id:"\u5b89\u88c5-inlong"},"\u5b89\u88c5 InLong"),(0,a.yg)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 InLong \u7684\u5168\u90e8\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u6309\u7167 ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/1.8.0/deployment/docker"},"\u8fd9\u91cc\u7684\u8bf4\u660e"),"\uff0c\u4f7f\u7528 Docker \u8fdb\u884c\u5feb\u901f\u90e8\u7f72\u3002\uff08\u63a8\u8350\uff09"),(0,a.yg)("li",{parentName:"ol"},"\u6309\u7167 ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/1.8.0/deployment/bare_metal"},"\u8fd9\u91cc\u7684\u8bf4\u660e"),"\uff0c\u4f7f\u7528\u4e8c\u8fdb\u5236\u5305\u4f9d\u6b21\u5b89\u88c5\u5404\u7ec4\u4ef6\u3002")),(0,a.yg)("h2",{id:"\u65b0\u5efa\u63a5\u5165"},"\u65b0\u5efa\u63a5\u5165"),(0,a.yg)("p",null,"\u90e8\u7f72\u5b8c\u6bd5\u540e\uff0c\u9996\u5148\u6211\u4eec\u8fdb\u5165 \u201c\u6570\u636e\u63a5\u5165\u201d \u754c\u9762\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 \u201c\u65b0\u5efa\u63a5\u5165\u201d\uff0c\u65b0\u5efa\u4e00\u6761\u63a5\u5165\uff0c\u6309\u4e0b\u56fe\u6240\u793a\u586b\u5165\u6570\u636e\u6d41 Group \u4fe1\u606f"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Create Group",src:n(74855).A,width:"1473",height:"515"})),(0,a.yg)("p",null,"\u7136\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u6309\u4e0b\u56fe\u6240\u793a\u586b\u5165\u6570\u636e\u6d41\u4fe1\u606f"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Create Stream",src:n(20196).A,width:"983",height:"442"})),(0,a.yg)("p",null,"\u6ce8\u610f\u5176\u4e2d\u6d88\u606f\u6765\u6e90\u9009\u62e9\u201c\u6587\u4ef6\u201d\uff0c\u5e76\u201c\u65b0\u5efa\u6570\u636e\u6e90\u201d\uff0c\u914d\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"Agent \u5730\u5740"),"\u53ca\u91c7\u96c6",(0,a.yg)("inlineCode",{parentName:"p"},"\u6587\u4ef6\u8def\u5f84"),"\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"File Source",src:n(27941).A,width:"653",height:"456"})),(0,a.yg)("p",null,"\u7136\u540e\u6211\u4eec\u5728\u4e0b\u9762\u7684\u201c\u6570\u636e\u4fe1\u606f\u201d\u4e00\u680f\u4e2d\u586b\u5165\u4ee5\u4e0b\u4fe1\u606f"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Data Information",src:n(38888).A,width:"1870",height:"533"})),(0,a.yg)("p",null,"\u7136\u540e\u5728\u6570\u636e\u6d41\u5411\u4e2d\u9009\u62e9 Hive\uff0c\u5e76\u70b9\u51fb \u201c\u6dfb\u52a0\u201d\uff0c\u6dfb\u52a0 Hive \u914d\u7f6e"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Hive Config",src:n(13268).A,width:"1182",height:"1025"})),(0,a.yg)("p",null,"\u6ce8\u610f\u8fd9\u91cc\u76ee\u6807\u8868\u65e0\u9700\u63d0\u524d\u521b\u5efa\uff0cInLong Manager \u4f1a\u5728\u63a5\u5165\u901a\u8fc7\u4e4b\u540e\u81ea\u52a8\u4e3a\u6211\u4eec\u521b\u5efa\u8868\u3002\u53e6\u5916\uff0c\u8bf7\u4f7f\u7528 \u201c\u8fde\u63a5\u6d4b\u8bd5\u201d \u4fdd\u8bc1 InLong Manager \u53ef\u4ee5\u8fde\u63a5\u5230\u4f60\u7684 Hive\u3002"),(0,a.yg)("p",null,"\u7136\u540e\u70b9\u51fb\u201c\u63d0\u4ea4\u5ba1\u6279\u201d\u6309\u94ae\uff0c\u8be5\u63a5\u5165\u5c31\u4f1a\u521b\u5efa\u6210\u529f\uff0c\u8fdb\u5165\u5ba1\u6279\u72b6\u6001\u3002"),(0,a.yg)("h2",{id:"\u5ba1\u6279\u63a5\u5165"},"\u5ba1\u6279\u63a5\u5165"),(0,a.yg)("p",null,"\u8fdb\u5165\u201c\u5ba1\u6279\u7ba1\u7406\u201d\u754c\u9762\uff0c\u70b9\u51fb\u201c\u6211\u7684\u5ba1\u6279\u201d\uff0c\u5c06\u521a\u521a\u7533\u8bf7\u7684\u63a5\u5165\u901a\u8fc7\u3002"),(0,a.yg)("p",null,"\u5230\u6b64\u63a5\u5165\u5c31\u5df2\u7ecf\u521b\u5efa\u5b8c\u6bd5\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Hive \u4e2d\u770b\u5230\u76f8\u5e94\u7684\u8868\u5df2\u7ecf\u88ab\u521b\u5efa\uff0c\u5e76\u4e14\u5728 TubeMQ \u7684\u7ba1\u7406\u754c\u9762\u4e2d\u53ef\u4ee5\u770b\u5230\u76f8\u5e94\u7684 topic \u5df2\u7ecf\u521b\u5efa\u6210\u529f\u3002"),(0,a.yg)("h2",{id:"\u914d\u7f6e-agent-\u91c7\u96c6\u6587\u4ef6"},"\u914d\u7f6e Agent \u91c7\u96c6\u6587\u4ef6"),(0,a.yg)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u65b0\u5efa ",(0,a.yg)("inlineCode",{parentName:"p"},"/data/collect-data/test.log")," \uff0c\u5e76\u5f80\u91cc\u9762\u6dfb\u52a0\u5185\u5bb9\uff0c\u6765\u89e6\u53d1 agent \u5411 dataproxy \u53d1\u9001\u6570\u636e\u4e86\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'mkdir collect-data\nEND=100000\nfor ((i=1;i<=END;i++)); do\n    sleep 3\n    echo "name_$i | $i" >> /data/collect-data/test.log\ndone\n')),(0,a.yg)("p",null,"\u53ef\u4ee5\u89c2\u5bdf\u5ba1\u8ba1\u6570\u636e\u9875\u9762\uff0c\u770b\u5230\u6570\u636e\u5df2\u7ecf\u6210\u529f\u91c7\u96c6\u548c\u53d1\u9001\u3002"))}u.isMDXComponent=!0},74855:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/create-group-4d9a6cd8ccf7cc18bf0a075fdcded241.png"},20196:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/create-stream-53909f856c20c8491398d4e6613aff89.png"},38888:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/data-information-479024e0c65e3356d59b714f9496d283.png"},27941:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/file-source-57b15a0f3ee265df6d5be6bf4ac8a85a.png"},13268:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/hive-config-4fa54fd3af2113e0accd8381a23f9b94.png"}}]);