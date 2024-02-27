"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37836],{3905:(e,t,i)=>{i.d(t,{Zo:()=>I,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},I=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,I=o(e,["components","mdxType","originalType","parentName"]),d=p(i),s=a,u=d["".concat(c,".").concat(s)]||d[s]||g[s]||r;return i?n.createElement(u,l(l({ref:t},I),{},{components:i})):n.createElement(u,l({ref:t},I))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},16485:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={title:"MySQL \u5230 Iceberg \u793a\u4f8b",sidebar_position:3},l=void 0,o={unversionedId:"quick_start/data_sync/mysql_iceberg_example",id:"version-1.10.0/quick_start/data_sync/mysql_iceberg_example",title:"MySQL \u5230 Iceberg \u793a\u4f8b",description:"\u5728\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Apache InLong \u521b\u5efa MySQL -> Iceberg \u6574\u5e93\u6570\u636e\u540c\u6b65\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.10.0/quick_start/data_sync/mysql_iceberg_example.md",sourceDirName:"quick_start/data_sync",slug:"/quick_start/data_sync/mysql_iceberg_example",permalink:"/zh-CN/docs/1.10.0/quick_start/data_sync/mysql_iceberg_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/quick_start/data_sync/mysql_iceberg_example.md",tags:[],version:"1.10.0",sidebarPosition:3,frontMatter:{title:"MySQL \u5230 Iceberg \u793a\u4f8b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MySQL \u5230 StarRocks \u793a\u4f8b",permalink:"/zh-CN/docs/1.10.0/quick_start/data_sync/mysql_starrocks_example"},next:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/1.10.0/deployment/standalone"}},c={},p=[{value:"\u73af\u5883\u90e8\u7f72",id:"\u73af\u5883\u90e8\u7f72",level:2},{value:"\u5b89\u88c5 InLong",id:"\u5b89\u88c5-inlong",level:3},{value:"\u6dfb\u52a0 Connectors",id:"\u6dfb\u52a0-connectors",level:3},{value:"\u5b89\u88c5 Iceberg",id:"\u5b89\u88c5-iceberg",level:3},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u6ce8\u518c Pulsar \u96c6\u7fa4",id:"\u6ce8\u518c-pulsar-\u96c6\u7fa4",level:3},{value:"\u6ce8\u518c Iceberg \u6570\u636e\u8282\u70b9",id:"\u6ce8\u518c-iceberg-\u6570\u636e\u8282\u70b9",level:3},{value:"\u4efb\u52a1\u521b\u5efa",id:"\u4efb\u52a1\u521b\u5efa",level:2},{value:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4",id:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4",level:3},{value:"\u521b\u5efa\u6570\u636e\u6e90",id:"\u521b\u5efa\u6570\u636e\u6e90",level:3},{value:"\u521b\u5efa\u6570\u636e\u76ee\u6807",id:"\u521b\u5efa\u6570\u636e\u76ee\u6807",level:3},{value:"\u5ba1\u6279\u6570\u636e\u6d41",id:"\u5ba1\u6279\u6570\u636e\u6d41",level:3},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:2},{value:"\u53d1\u9001\u6570\u636e",id:"\u53d1\u9001\u6570\u636e",level:3},{value:"\u9a8c\u8bc1\u6570\u636e",id:"\u9a8c\u8bc1\u6570\u636e",level:3}],I={toc:p},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},I,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Apache InLong \u521b\u5efa MySQL -> Iceberg \u6574\u5e93\u6570\u636e\u540c\u6b65\u3002"),(0,a.kt)("h2",{id:"\u73af\u5883\u90e8\u7f72"},"\u73af\u5883\u90e8\u7f72"),(0,a.kt)("h3",{id:"\u5b89\u88c5-inlong"},"\u5b89\u88c5 InLong"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 InLong \u7684\u5168\u90e8\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.10.0/deployment/docker"},"Docker \u90e8\u7f72"),"\uff08\u63a8\u8350\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.10.0/deployment/bare_metal"},"Bare Metal \u90e8\u7f72"))),(0,a.kt)("h3",{id:"\u6dfb\u52a0-connectors"},"\u6dfb\u52a0 Connectors"),(0,a.kt)("p",null,"\u4e0b\u8f7d Flink 1.13 \u5bf9\u5e94\u7248\u672c\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/zh-CN/downloads"},"connectors"),"\uff0c\u89e3\u538b\u540e\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"sort-connector-iceberg-[version]-SNAPSHOT.jar")," \u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/inlong-sort/connectors/")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h3",{id:"\u5b89\u88c5-iceberg"},"\u5b89\u88c5 Iceberg"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003 Apache Iceberg \u5b98\u7f51\u7684",(0,a.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/hive-quickstart"},"\u5b89\u88c5\u6559\u7a0b")),(0,a.kt)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5bb9\u5668\u542f\u52a8\u6210\u529f\u540e\uff0c\u8bbf\u95ee InLong Dashboard \u5730\u5740 http://localhost\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"},"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"),(0,a.kt)("p",null,"\u9875\u9762\u70b9\u51fb \u3010\u96c6\u7fa4\u7ba1\u7406\u3011->\u3010\u6807\u7b7e\u7ba1\u7406\u3011->\u3010\u65b0\u5efa\u3011\uff0c\u6307\u5b9a\u96c6\u7fa4\u6807\u7b7e\u540d\u79f0\u548c\u8d1f\u8d23\u4eba\uff1a\n",(0,a.kt)("img",{alt:"Create Cluster Tag",src:i(72005).Z,width:"522",height:"365"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\uff1adefault_cluster \u662f\u5404\u4e2a\u7ec4\u4ef6\u9ed8\u8ba4\u4e0a\u62a5\u96c6\u7fa4\u6807\u7b7e\uff0c\u5982\u679c\u4f7f\u7528\u5176\u5b83\u540d\u79f0\uff0c\u786e\u8ba4\u5bf9\u5e94\u6807\u7b7e\u914d\u7f6e\u5df2\u4fee\u6539\u3002")),(0,a.kt)("h3",{id:"\u6ce8\u518c-pulsar-\u96c6\u7fa4"},"\u6ce8\u518c Pulsar \u96c6\u7fa4"),(0,a.kt)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]"," -> ","[\u96c6\u7fa4\u7ba1\u7406]"," -> ","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c Pulsar \u96c6\u7fa4\uff1a\n",(0,a.kt)("img",{alt:"Create Pulsar Cluster",src:i(27118).Z,width:"525",height:"646"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u96c6\u7fa4\u6807\u7b7e\u9009\u62e9\u521a\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u914d\u7f6e Docker \u90e8\u7f72\u7684 Pulsar \u96c6\u7fa4\uff1a"),(0,a.kt)("p",{parentName:"admonition"},"Service URL \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar:6650"),", Admin URL \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"http://pulsar:8080"),".")),(0,a.kt)("h3",{id:"\u6ce8\u518c-iceberg-\u6570\u636e\u8282\u70b9"},"\u6ce8\u518c Iceberg \u6570\u636e\u8282\u70b9"),(0,a.kt)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u6570\u636e\u8282\u70b9]"," -> ","[\u521b\u5efa]"," \uff0c\u65b0\u589e Iceberg \u6570\u636e\u8282\u70b9.\n",(0,a.kt)("img",{alt:"Create Iceberg DataNode",src:i(95339).Z,width:"724",height:"646"})),(0,a.kt)("h2",{id:"\u4efb\u52a1\u521b\u5efa"},"\u4efb\u52a1\u521b\u5efa"),(0,a.kt)("h3",{id:"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4"},"\u65b0\u5efa\u6570\u636e\u6d41\u7ec4"),(0,a.kt)("p",null,"\u9875\u9762\u70b9\u51fb","[\u6570\u636e\u540c\u6b65]"," \u2192 ","[\u521b\u5efa]","\uff0c\u8f93\u5165 Group ID\u3001Steam ID \u548c \u662f\u5426\u6574\u5e93\u8fc1\u79fb\uff1a\n",(0,a.kt)("img",{alt:"Create Group Stream",src:i(70219).Z,width:"1470",height:"422"})),(0,a.kt)("h3",{id:"\u521b\u5efa\u6570\u636e\u6e90"},"\u521b\u5efa\u6570\u636e\u6e90"),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u4e2d\u70b9\u51fb ","[\u65b0\u5efa]"," \u2192 ","[MySQL]"," \u914d\u7f6e\u6570\u636e\u6e90\u540d\u79f0\u3001\u5730\u5740\u3001\u5e93\u8868\u4fe1\u606f\u7b49\u3002\n",(0,a.kt)("img",{alt:"Create Stream_Source",src:i(31819).Z,width:"670",height:"630"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u8bfb\u53d6\u6a21\u5f0f\u9009\u62e9\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5168\u91cf+\u589e\u91cf"),"\uff0c\u8868\u4e2d\u7684\u5b58\u91cf\u6570\u636e\u4e5f\u4f1a\u88ab\u91c7\u96c6\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\u4ec5\u589e\u91cf")," \u6a21\u5f0f\u5219\u4e0d\u4f1a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8868\u540d\u767d\u540d\u5355\u683c\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<dbName>.<tableName>"),"\uff0c\u652f\u6301\u6b63\u5219\u8868\u8fbe\u3002"))),(0,a.kt)("h3",{id:"\u521b\u5efa\u6570\u636e\u76ee\u6807"},"\u521b\u5efa\u6570\u636e\u76ee\u6807"),(0,a.kt)("p",null,"\u6570\u636e\u76ee\u6807\u4e2d\u70b9\u51fb ","[\u65b0\u5efa]"," \u2192 ","[Iceberg]","\uff0c\u8bbe\u7f6e\u6570\u636e\u76ee\u6807\u540d\u79f0\u5e76\u9009\u62e9\u521b\u5efa\u597d\u7684 Iceberg \u6570\u636e\u8282\u70b9,\n\u5e93\u8868\u540d\u79f0\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u4e0e\u6570\u636e\u6e90\u4e00\u81f4\uff0c\u6216\u8005\u81ea\u5b9a\u4e49\u3002\n",(0,a.kt)("img",{alt:"Create data object",src:i(44090).Z,width:"1209",height:"374"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u81ea\u5b9a\u4e49\u5e93\u8868\u540d\u79f0\u65f6\uff0c\u652f\u6301\u4f7f\u7528\u5185\u7f6e\u53c2\u6570\u548c\u5b57\u7b26\u4e32\u7ec4\u5408\u751f\u6210\u76ee\u6807\u5e93\u8868\u540d\u79f0\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5185\u7f6e\u53c2\u6570\u5305\u62ec\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u6765\u6e90\u5e93\u540d\uff1a${database}"),(0,a.kt)("li",{parentName:"ul"},"\u6765\u6e90\u8868\u540d\uff1a${table}")),(0,a.kt)("p",{parentName:"admonition"},"\u5982\uff1a\u6765\u6e90\u8868\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"table1"),"\uff0c\u6620\u5c04\u89c4\u5219\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"${table}_inlong"),"\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"table1")," \u7684\u6570\u636e\u5c06\u88ab\u6700\u7ec8\u6620\u5c04\u5199\u5165\u81f3 ",(0,a.kt)("inlineCode",{parentName:"p"},"table1_inlong")," \u4e2d\u3002")),(0,a.kt)("h3",{id:"\u5ba1\u6279\u6570\u636e\u6d41"},"\u5ba1\u6279\u6570\u636e\u6d41"),(0,a.kt)("p",null,"\u70b9\u51fb ","[\u5ba1\u6279\u7ba1\u7406]"," -> ","[\u6211\u7684\u5ba1\u6279]"," -> ","[\u5ba1\u6279]"," -> ","[Ok]",".\n",(0,a.kt)("img",{alt:"Approve",src:i(32287).Z,width:"1595",height:"724"})),(0,a.kt)("p",null,"\u8fd4\u56de\u3010\u6570\u636e\u96c6\u6210\u3011\uff0c\u7b49\u5f85\u4efb\u52a1\u914d\u7f6e\u6210\u529f\uff1a\n",(0,a.kt)("img",{alt:"Success",src:i(44782).Z,width:"1184",height:"80"})),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,a.kt)("h3",{id:"\u53d1\u9001\u6570\u636e"},"\u53d1\u9001\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\n# MySQL info\nDB_HOST="mysql"\nDB_USER="root"\nDB_PASS="inlong"\nDB_NAME="test"\nDB_TABLE1="source_table"\nDB_TABLE2="source_table2"\n\n# Insert data in a loop\nfor ((i=1; i<=500; i++))\ndo\n    # Generate data\n    id=$i\n    name="name_$i"\n\n    # Build an insert SQL\n    query1="INSERT INTO $DB_TABLE1 (id, name) VALUES ($id, \'$name\');"\n    query2="INSERT INTO $DB_TABLE2 (id, name) VALUES ($id, \'$name\');"\n\n    # Execute insert SQL\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query1"\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query2"\ndone\n')),(0,a.kt)("p",null,"\u6839\u636e\u5b9e\u9645\u73af\u5883\u4fee\u6539\u811a\u672c\u4e2d\u7684\u53d8\u91cf\uff0c\u5411\u6bcf\u4e2a\u8868\u4e2d\u63d2\u5165 500 \u6761\u6570\u636e(\u8fd9\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"source_table")," \u4e2d\u6709\u4e00\u6761\u5b58\u91cf\u6570\u636e):"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Result Source",src:i(24316).Z,width:"424",height:"343"})),(0,a.kt)("h3",{id:"\u9a8c\u8bc1\u6570\u636e"},"\u9a8c\u8bc1\u6570\u636e"),(0,a.kt)("p",null,"\u8fdb\u5165 Iceberg\uff0c\u67e5\u770b\u8868\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Result Sink",src:i(21036).Z,width:"451",height:"160"})),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728\u9875\u9762\u67e5\u770b\u5ba1\u8ba1\u6570\u636e:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Result Sink",src:i(58326).Z,width:"2254",height:"702"})))}g.isMDXComponent=!0},32287:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/approval-ff68312bc64c24daf15ee6ef53146671.png"},58326:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/audit_iceberg-867e1620e9072d4649304e3c09a9ed28.png"},72005:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_cluster_tag-f4466c5372530e0988f91b71e03b8236.png"},70219:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_group_stream-cbd6f0dfc6f02437232b1ade24568013.png"},95339:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_iceberg_datanode-84229cadd3d0a513b69307124ad4ba7c.png"},27118:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_pulsar_cluster-f35e691c66233f81a452529ae42f173b.png"},44090:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_stream_sink-78bd1f3d207c176037db250c746acf55.png"},31819:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_stream_source-7a09218af400986a6d2c1934147d0136.png"},21036:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},24316:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/result_mysql-35af09e6b244ba0886889e0ca15b66c0.png"},44782:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKAAAABQCAIAAACh5prhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AABgxSURBVHic7d1/WFPnoQfwLyACaoihU37VH43irzKqVFjHrUWrbloZ+rDe2UJ1t61TN5/C1LbzsqeI7M5664qa57FdmbbP1Uq7zTJ0afW5lla0c52m1uVSqaJMUEFKSwwRSEDg/vHGk0NyggFFyvH7efwjOXnfc97EkJxv3h/Hr7OzE0RERERERDTw+fd3A4iIiIiIiOj2YMAjIiIiIiJSCQY8IiIiIiIilWDAIyIiIiIiUgkGPCIiIiIiIpVgwCMiIiIiIlIJBjwiIiIiIiKVYMAjIiIiIiJSCQY8IiIiIiIilWDAIyIiIiIiUgkGPCIiIiIiIpVgwCMiIiIiIlIJBjwiIiIiIiKVGOTtAavVeifbQURERERERBKtVtuLWn6dnZ23vSlERERERER053GIJhERERERkUow4BEREREREakEAx4REREREZFKMOARERERERGpBAMeERERERGRSjDgERERERERqQQDHhERERERkUow4BEREREREakEAx4REREREZFKMOARERERERGpBAMeERERERGRSjDgERERERERqQQDHhERERERkUow4BEREREREakEAx4REREREZFKMOARERERERGpBAMeERERERGRSjDgERERERERqQQDHhERERERkUow4BEREREREanEoP5uABF9G3V0dra0tzk62to6Oto7O/q7OX0lwM8/0N8/yD8wJCDQ38+vv5tDREREdKv8Ojs7+7sNRPTt0thmv3bd0d+tuNOGDQoKDQzu71YQERER3RIGPCJyud7ZYWltbuto7++G9I9A/wDd4CGD/Dh2nYiIiAYqBjwicrre2fGNo0nFAzJ9EeDnf0/QUGY8IiIiGqAY8IjIqd5xzVvfXUNr8/aKT0431pU31gGYHBo+JTR8VczDYYOH3Nk23gmB/gEjgob1dyuIiKivLC9EahxSYgHA5kD6m1gxw3kXwKslALB2tuvumToUpLuqn7yI1Xvx7rOIDO3ZcY1lePZtAIgejp0ZeHYPLl8FgJ1POY8uHWt5IfaZnbWkR09exOKd2PK4q6k9In9e4llHars8L29tfuMoCp+BJqg3B5WesiLp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"}}]);