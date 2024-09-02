"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[91885],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>s});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=a.createContext({}),i=function(e){var t=a.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(y.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(n),m=l,s=p["".concat(y,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(s,g(g({ref:t},d),{},{components:n})):a.createElement(s,g({ref:t},d))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,g=new Array(r);g[0]=m;var o={};for(var y in t)hasOwnProperty.call(t,y)&&(o[y]=t[y]);o.originalType=e,o[p]="string"==typeof e?e:l,g[1]=o;for(var i=2;i<r;i++)g[i]=n[i];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96018:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"1.13.0-SNAPSHOT"}},47325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>g,metadata:()=>y,toc:()=>d});var a=n(58168),l=(n(96540),n(15680)),r=n(96018);const g={title:"HBase",sidebar_position:6},o=void 0,y={unversionedId:"data_node/load_node/hbase",id:"version-1.13.0/data_node/load_node/hbase",title:"HBase",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.13.0/data_node/load_node/hbase.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hbase",permalink:"/zh-CN/docs/data_node/load_node/hbase",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/data_node/load_node/hbase.md",tags:[],version:"1.13.0",sidebarPosition:6,frontMatter:{title:"HBase",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Greenplum",permalink:"/zh-CN/docs/data_node/load_node/greenplum"},next:{title:"HDFS",permalink:"/zh-CN/docs/data_node/load_node/hdfs"}},i={},d=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"\u5982\u4f55\u521b\u5efa HBase Load \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-hbase-load-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"HBase Load \u8282\u70b9\u53c2\u6570",id:"hbase-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"HBase Load")," \u8282\u70b9\u652f\u6301\u5199\u6570\u636e\u90fd HBase \u6570\u636e\u5e93."),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,l.yg)("th",{parentName:"tr",align:null},"HBase \u7248\u672c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/data_node/load_node/hbase"},"HBase")),(0,l.yg)("td",{parentName:"tr",align:null},"2.2.x")))),(0,l.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,l.yg)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e HBase Load \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connector JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,l.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hbase</artifactId>\n    <version>${r.l.inLongVersion}</version>\n</dependency>\n`)),(0,l.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa-hbase-load-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa HBase Load \u8282\u70b9"),(0,l.yg)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,l.yg)("p",null,"\u6240\u6709 HBase \u8868\u7684\u5217\u7c07\u5fc5\u987b\u5b9a\u4e49\u4e3a ROW \u7c7b\u578b\uff0c\u5b57\u6bb5\u540d\u5bf9\u5e94\u5217\u7c07\u540d\uff08column family\uff09\uff0c\u5d4c\u5957\u7684\u5b57\u6bb5\u540d\u5bf9\u5e94\u5217\u9650\u5b9a\u7b26\u540d\uff08column qualifier\uff09\u3002\u7528\u6237\u53ea\u9700\u5728\u8868\u7ed3\u6784\u4e2d\n\u58f0\u660e\u67e5\u8be2\u4e2d\u4f7f\u7528\u7684\u7684\u5217\u7c07\u548c\u5217\u9650\u5b9a\u7b26\u3002\u9664\u4e86 ROW \u7c7b\u578b\u7684\u5217\uff0c\u5269\u4e0b\u7684\u539f\u5b50\u6570\u636e\u7c7b\u578b\u5b57\u6bb5\uff08\u6bd4\u5982\uff0cSTRING, BIGINT\uff09\u5c06\u88ab\u8bc6\u522b\u4e3a HBase \u7684 rowkey\uff0c\u4e00\u5f20\u8868\u4e2d\u53ea\u80fd\u58f0\u660e\u4e00\u4e2a\nrowkey\u3002rowkey \u5b57\u6bb5\u7684\u540d\u5b57\u53ef\u4ee5\u662f\u4efb\u610f\u7684\uff0c\u5982\u679c\u662f\u4fdd\u7559\u5173\u952e\u5b57\uff0c\u9700\u8981\u7528\u53cd\u5f15\u53f7\u3002  "),(0,l.yg)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"Flink SQL")," \u521b\u5efa\u4e00\u4e2a HBase Load \u8282\u70b9:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u5728 Flink SQL \u4e2d\u521b\u5efa HBase \u8868 'hbase_load_node'\nCREATE TABLE hbase_load_node (\n    rowkey STRING,\n    family1 ROW<q1 INT>,\n    family2 ROW<q2 STRING, q3 BIGINT>,\n    family3 ROW<q4 DOUBLE, q5 BOOLEAN, q6 STRING>,\n    PRIMARY KEY (rowkey) NOT ENFORCED\n) WITH (\n      'connector' = 'hbase-2.2-inlong',\n      'table-name' = 'mytable',\n      'zookeeper.quorum' = 'localhost:2181'\n);\n\n-- \u4f7f\u7528 ROW(...) \u6784\u9020\u51fd\u6570\u6784\u9020\u5217\u65cf\u548c\u5199\u6570\u636e\u5230 HBase \u8868\u3002\n-- \u5047\u8bbe\u8868\"T\"\u7684 schema [rowkey, f1q1, f2q2, f2q3, f3q4, f3q5, f3q6]\nINSERT INTO hbase_load_node\nSELECT rowkey, ROW(f1q1), ROW(f2q2, f2q3), ROW(f3q4, f3q5, f3q6) FROM T;\n\n-- \u4ece HBase \u8868\u4e2d\u626b\u63cf\u6570\u636e\nSELECT rowkey, family1, family3.q4, family3.q6 FROM hbase_load_node;\n\n-- \u5c06 HBase \u8868\u4e34\u65f6\u8fde\u63a5\u4e3a\u7ef4\u5ea6\u8868\nSELECT * FROM myTopic\nLEFT JOIN hbase_load_node FOR SYSTEM_TIME AS OF myTopic.proctime\nON myTopic.key = hbase_load_node.rowkey;\n")),(0,l.yg)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,l.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,l.yg)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,l.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,l.yg)("h2",{id:"hbase-load-\u8282\u70b9\u53c2\u6570"},"HBase Load \u8282\u70b9\u53c2\u6570"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connector"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u7684\u8fde\u63a5\u5668: hbase-2.2-inlong: \u8fde\u63a5 HBase 2.2.x \u96c6\u7fa4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table-name"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u7684 HBase \u8868\u540d\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"zookeeper.quorum"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"HBase Zookeeper quorum \u4fe1\u606f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"zookeeper.znode.parent"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"/hbase"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"HBase \u96c6\u7fa4\u7684 Zookeeper \u6839\u76ee\u5f55\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null-string-literal"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},'\u5f53\u5b57\u7b26\u4e32\u503c\u4e3a null \u65f6\u7684\u5b58\u50a8\u5f62\u5f0f\uff0c\u9ed8\u8ba4\u5b58\u6210 "null" \u5b57\u7b26\u4e32\u3002HBase \u7684 source \u548c sink \u7684\u7f16\u89e3\u7801\u5c06\u6240\u6709\u6570\u636e\u7c7b\u578b\uff08\u9664\u5b57\u7b26\u4e32\u5916\uff09\u5c06 null \u503c\u4ee5\u7a7a\u5b57\u8282\u6765\u5b58\u50a8\u3002')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-size"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"2mb"),(0,l.yg)("td",{parentName:"tr",align:null},"MemorySize"),(0,l.yg)("td",{parentName:"tr",align:null},'\u5199\u5165\u7684\u53c2\u6570\u9009\u9879\u3002\u6bcf\u6b21\u5199\u5165\u8bf7\u6c42\u7f13\u5b58\u884c\u7684\u6700\u5927\u5927\u5c0f\u3002\u5b83\u80fd\u63d0\u5347\u5199\u5165 HBase \u6570\u636e\u5e93\u7684\u6027\u80fd\uff0c\u4f46\u662f\u4e5f\u53ef\u80fd\u589e\u52a0\u5ef6\u8fdf\u3002\u8bbe\u7f6e\u4e3a "0" \u5173\u95ed\u6b64\u9009\u9879\u3002')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},'\u5199\u5165\u7684\u53c2\u6570\u9009\u9879\u3002 \u6bcf\u6b21\u5199\u5165\u8bf7\u6c42\u7f13\u5b58\u7684\u6700\u5927\u884c\u6570\u3002\u5b83\u80fd\u63d0\u5347\u5199\u5165 HBase \u6570\u636e\u5e93\u7684\u6027\u80fd\uff0c\u4f46\u662f\u4e5f\u53ef\u80fd\u589e\u52a0\u5ef6\u8fdf\u3002\u8bbe\u7f6e\u4e3a "0" \u5173\u95ed\u6b64\u9009\u9879\u3002')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"1s"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration"),(0,l.yg)("td",{parentName:"tr",align:null},'\u5199\u5165\u7684\u53c2\u6570\u9009\u9879\u3002\u5237\u5199\u7f13\u5b58\u884c\u7684\u95f4\u9694\u3002\u5b83\u80fd\u63d0\u5347\u5199\u5165 HBase \u6570\u636e\u5e93\u7684\u6027\u80fd\uff0c\u4f46\u662f\u4e5f\u53ef\u80fd\u589e\u52a0\u5ef6\u8fdf\u3002\u8bbe\u7f6e\u4e3a "0" \u5173\u95ed\u6b64\u9009\u9879\u3002\u6ce8\u610f\uff1a"sink.buffer-flush.max-size" \u548c "sink.buffer-flush.max-rows" \u540c\u65f6\u8bbe\u7f6e\u4e3a "0"\uff0c\u5237\u5199\u9009\u9879\u6574\u4e2a\u5f02\u6b65\u5904\u7406\u7f13\u5b58\u884c\u4e3a\u3002')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e3a HBase sink operator \u5b9a\u4e49\u5e76\u884c\u5ea6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e76\u884c\u5ea6\u7531\u6846\u67b6\u51b3\u5b9a\uff0c\u548c\u94fe\u5728\u4e00\u8d77\u7684\u4e0a\u6e38 operator \u4e00\u6837\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"lookup.async"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u5f02\u6b65\u67e5\u627e\u3002\u5982\u679c\u4e3a\u771f\uff0c\u67e5\u627e\u5c06\u662f\u5f02\u6b65\u7684\u3002\u6ce8\u610f\uff1a\u5f02\u6b65\u65b9\u5f0f\u53ea\u652f\u6301 hbase-2.2 \u8fde\u63a5\u5668")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"lookup.cache.max-rows"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},'\u67e5\u627e\u7f13\u5b58\u7684\u6700\u5927\u884c\u6570\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u503c\uff0c\u6700\u65e7\u7684\u884c\u5c06\u8fc7\u671f\u3002\u6ce8\u610f\uff1a"lookup.cache.max-rows" \u548c "lookup.cache.ttl" \u5fc5\u987b\u540c\u65f6\u88ab\u8bbe\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u67e5\u627e\u7f13\u5b58\u662f\u7981\u7528\u7684\u3002')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"lookup.cache.ttl"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration"),(0,l.yg)("td",{parentName:"tr",align:null},'\u67e5\u627e\u7f13\u5b58\u4e2d\u6bcf\u4e00\u884c\u7684\u6700\u5927\u751f\u5b58\u65f6\u95f4\uff0c\u5728\u8fd9\u6bb5\u65f6\u95f4\u5185\uff0c\u6700\u8001\u7684\u884c\u5c06\u8fc7\u671f\u3002\u6ce8\u610f\uff1a"lookup.cache.max-rows" \u548c "lookup.cache.ttl" \u5fc5\u987b\u540c\u65f6\u88ab\u8bbe\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u67e5\u627e\u7f13\u5b58\u662f\u7981\u7528\u7684\u3002')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"lookup.max-retries"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"\u67e5\u627e\u6570\u636e\u5e93\u5931\u8d25\u65f6\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"properties.*"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u8bbe\u7f6e\u4efb\u610f HBase \u7684\u914d\u7f6e\u9879\u3002\u540e\u7f00\u540d\u5fc5\u987b\u5339\u914d\u5728 ",(0,l.yg)("a",{parentName:"td",href:"https://hbase.apache.org/2.3/book.html#hbase_default_configurations"},"HBase \u914d\u7f6e\u6587\u6863")," \u4e2d\u5b9a\u4e49\u7684\u914d\u7f6e\u952e\u3002Flink \u5c06\u79fb\u9664 \"properties.\" \u914d\u7f6e\u952e\u524d\u7f00\u5e76\u5c06\u53d8\u6362\u540e\u7684\u914d\u7f6e\u952e\u548c\u503c\u4f20\u5165\u5e95\u5c42\u7684 HBase \u5ba2\u6237\u7aef\u3002 \u4f8b\u5982\u60a8\u53ef\u4ee5\u8bbe\u7f6e 'properties.hbase.security.authentication' = 'kerberos' \u7b49kerberos\u8ba4\u8bc1\u53c2\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,l.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,l.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,l.yg)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")))),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("p",null,"HBase \u4ee5\u5b57\u8282\u6570\u7ec4\u5b58\u50a8\u6240\u6709\u6570\u636e\u3002\u5728\u8bfb\u548c\u5199\u8fc7\u7a0b\u4e2d\u8981\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u6570\u636e\u3002"),(0,l.yg)("p",null,"Flink \u7684 HBase \u8fde\u63a5\u5668\u5229\u7528 HBase\uff08Hadoop) \u7684\u5de5\u5177\u7c7b org.apache.hadoop.hbase.util.Bytes \u8fdb\u884c\u5b57\u8282\u6570\u7ec4\u548c Flink \u6570\u636e\u7c7b\u578b\u8f6c\u6362\u3002"),(0,l.yg)("p",null,"Flink \u7684 HBase \u8fde\u63a5\u5668\u5c06\u6240\u6709\u6570\u636e\u7c7b\u578b\uff08\u9664\u5b57\u7b26\u4e32\u5916\uff09null \u503c\u7f16\u7801\u6210\u7a7a\u5b57\u8282\u3002\u5bf9\u4e8e\u5b57\u7b26\u4e32\u7c7b\u578b\uff0cnull \u503c\u7684\u5b57\u9762\u503c\u7531null-string-literal\u9009\u9879\u503c\u51b3\u5b9a\u3002"),(0,l.yg)("p",null,"\u6570\u636e\u7c7b\u578b\u6620\u5c04\u8868\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Flink SQL \u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"HBase \u8f6c\u6362"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR ",(0,l.yg)("br",null)," VARCHAR ",(0,l.yg)("br",null)," STRING"),(0,l.yg)("td",{parentName:"tr",align:null},"byte[] toBytes(String s) ",(0,l.yg)("br",null)," String toString(byte[] b)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"byte[] toBytes(boolean b) ",(0,l.yg)("br",null)," boolean toBoolean(byte[] b)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BINARY ",(0,l.yg)("br",null)," VARBINARY"),(0,l.yg)("td",{parentName:"tr",align:null},"Returns byte[] as is.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"byte[] toBytes(BigDecimal v) ",(0,l.yg)("br",null)," BigDecimal toBigDecimal(byte[] b)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null},"new byte[] { val } ",(0,l.yg)("br",null)," bytes","[0]"," // returns first and only byte from bytes")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null},"byte[] toBytes(short val) ",(0,l.yg)("br",null)," short toShort(byte[] bytes)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"byte[] toBytes(int val) ",(0,l.yg)("br",null)," int toInt(byte[] bytes)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"byte[] toBytes(long val) ",(0,l.yg)("br",null)," long toLong(byte[] bytes)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"byte[] toBytes(float val) ",(0,l.yg)("br",null)," float toFloat(byte[] bytes)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"byte[] toBytes(double val) ",(0,l.yg)("br",null)," double toDouble(byte[] bytes)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"Stores the number of days since epoch as int value.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME"),(0,l.yg)("td",{parentName:"tr",align:null},"Stores the number of milliseconds of the day as int value.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.yg)("td",{parentName:"tr",align:null},"Stores the milliseconds since epoch as long value.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MAP ",(0,l.yg)("br",null)," MULTISET"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ROW"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported")))))}m.isMDXComponent=!0}}]);