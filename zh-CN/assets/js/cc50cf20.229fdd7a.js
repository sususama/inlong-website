"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4723],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>i});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),s=p(a),y=n,i=s["".concat(o,".").concat(y)]||s[y]||u[y]||l;return a?r.createElement(i,d(d({ref:t},m),{},{components:a})):r.createElement(i,d({ref:t},m))}));function i(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,d=new Array(l);d[0]=y;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[s]="string"==typeof e?e:n,d[1]=g;for(var p=2;p<l;p++)d[p]=a[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},96620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={title:"\u76d1\u63a7\u6307\u6807",sidebar_position:4},d=void 0,g={unversionedId:"modules/sort/metrics",id:"version-1.6.0/modules/sort/metrics",title:"\u76d1\u63a7\u6307\u6807",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.6.0/modules/sort/metrics.md",sourceDirName:"modules/sort",slug:"/modules/sort/metrics",permalink:"/zh-CN/docs/1.6.0/modules/sort/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/modules/sort/metrics.md",tags:[],version:"1.6.0",sidebarPosition:4,frontMatter:{title:"\u76d1\u63a7\u6307\u6807",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u793a\u4f8b",permalink:"/zh-CN/docs/1.6.0/modules/sort/example"},next:{title:"\u810f\u6570\u636e\u5f52\u6863",permalink:"/zh-CN/docs/1.6.0/modules/sort/dirty_data_archive"}},o={},p=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u6307\u6807",id:"\u6307\u6807",level:2},{value:"\u652f\u6301\u7684 extract \u8282\u70b9",id:"\u652f\u6301\u7684-extract-\u8282\u70b9",level:3},{value:"\u652f\u6301\u8868\u7ea7\u522b\u6307\u6807",id:"\u652f\u6301\u8868\u7ea7\u522b\u6307\u6807",level:4},{value:"\u652f\u6301\u7684 load \u8282\u70b9",id:"\u652f\u6301\u7684-load-\u8282\u70b9",level:3},{value:"\u652f\u6301\u8868\u7ea7\u522b\u6307\u6807",id:"\u652f\u6301\u8868\u7ea7\u522b\u6307\u6807-1",level:3},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(s,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,n.yg)("p",null,"\u6211\u4eec\u4e3a\u8282\u70b9\u589e\u52a0\u4e86\u6307\u6807\u8ba1\u7b97\u3002 \u7528\u6237\u6dfb\u52a0 with \u9009\u9879 ",(0,n.yg)("inlineCode",{parentName:"p"},"inlong.metric.labels")," \u540e Sort \u4f1a\u8ba1\u7b97\u6307\u6807\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"inlong.metric.labels")," \u9009\u9879\u7684\u503c\u7531\u4e09\u90e8\u5206\u6784\u6210\uff1agroupId=",(0,n.yg)("inlineCode",{parentName:"p"},"{groupId}"),"&streamId=",(0,n.yg)("inlineCode",{parentName:"p"},"{streamId}"),"&nodeId=",(0,n.yg)("inlineCode",{parentName:"p"},"{nodeId}"),"\u3002\n\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/"},"metric reporter")," \u53bb\u4e0a\u62a5\u6570\u636e\u3002"),(0,n.yg)("h2",{id:"\u6307\u6807"},"\u6307\u6807"),(0,n.yg)("h3",{id:"\u652f\u6301\u7684-extract-\u8282\u70b9"},"\u652f\u6301\u7684 extract \u8282\u70b9"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d"),(0,n.yg)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,n.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsIn"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesIn"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u5b57\u8282\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u5b57\u8282\u6570")))),(0,n.yg)("h4",{id:"\u652f\u6301\u8868\u7ea7\u522b\u6307\u6807"},"\u652f\u6301\u8868\u7ea7\u522b\u6307\u6807"),(0,n.yg)("p",null,"\u5b83\u662f\u7528\u4e8e\u6574\u5e93\u540c\u6b65\u573a\u666f"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d"),(0,n.yg)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,n.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numRecordsIn"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numRecordsIn"),(0,n.yg)("td",{parentName:"tr",align:null},"oracle-cdc,postgresql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numRecordsIn"),(0,n.yg)("td",{parentName:"tr",align:null},"mongodb-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numBytesIn"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u5b57\u8282\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numBytesIn"),(0,n.yg)("td",{parentName:"tr",align:null},"oracle-cdc,postgresql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u5b57\u8282\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numBytesIn"),(0,n.yg)("td",{parentName:"tr",align:null},"mongodb-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u5b57\u8282\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numRecordsInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numRecordsInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"oracle-cdc,postgresql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numRecordsInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"mongodb-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numBytesInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"mysql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u5b57\u8282\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numBytesInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"oracle-cdc,postgresql-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u5b57\u8282\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_collection_numBytesInPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"mongodb-cdc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u5b57\u8282\u6570")))),(0,n.yg)("h3",{id:"\u652f\u6301\u7684-load-\u8282\u70b9"},"\u652f\u6301\u7684 load \u8282\u70b9"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d"),(0,n.yg)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,n.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,",(0,n.yg)("br",null),"mysql,oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,",(0,n.yg)("br",null),"mysql,oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u5b57\u8282\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,",(0,n.yg)("br",null),"hbase,hdfs,hive,iceberg,",(0,n.yg)("br",null),"kafka,mysql,oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u51fa\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,",(0,n.yg)("br",null),"hbase,hdfs,hive,iceberg,kafka,",(0,n.yg)("br",null),"mysql,oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u51fa\u5b57\u8282\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_dirtyRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,n.yg)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u810f\u6570\u636e\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_dirtyBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,n.yg)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,n.yg)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u810f\u6570\u636e\u5b57\u8282\u6570")))),(0,n.yg)("h3",{id:"\u652f\u6301\u8868\u7ea7\u522b\u6307\u6807-1"},"\u652f\u6301\u8868\u7ea7\u522b\u6307\u6807"),(0,n.yg)("p",null,"\u5b83\u662f\u7528\u4e8e\u6574\u5e93\u540c\u6b65\u573a\u666f"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d"),(0,n.yg)("th",{parentName:"tr",align:null},"Load node"),(0,n.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u8bb0\u5f55\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u8bb0\u5f55\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_numRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u8bb0\u5f55\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u5b57\u8282\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u5b57\u8282\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_numBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u5b57\u8282\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numRecordsOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8bb0\u5f55\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numRecordsOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8bb0\u5f55\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_numRecordsOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8bb0\u5f55\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_numBytesOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u51fa\u5b57\u8282\u6570\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_numBytesOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u51fa\u5b57\u8282\u6570\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_numBytesOutPerSecond"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u51fa\u5b57\u8282\u6570\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_dirtyRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u810f\u6570\u636e\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_dirtyRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u810f\u6570\u636e\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_dirtyRecordsOut"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u810f\u6570\u636e\u8bb0\u5f55\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_table_dirtyBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"doris,iceberg,starRocks"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u810f\u6570\u636e\u5b57\u8282\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_database_schema_table_dirtyBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u810f\u6570\u636e\u5b57\u8282\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_topic_dirtyBytesOut"),(0,n.yg)("td",{parentName:"tr",align:null},"kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u810f\u6570\u636e\u5b57\u8282\u6570\u636e")))),(0,n.yg)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,n.yg)("p",null,"\u8fd9\u91cc\u5c06\u4ecb\u7ecd\u4e00\u4e2a\u540c\u6b65MYSQL\u6570\u636e\u5230PostgreSQL\u7684\u4f8b\u5b50\uff0c\u540c\u65f6\u4ecb\u7ecd\u6307\u6807\u7684\u4f7f\u7528\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"flink sql \u7684\u4f7f\u7528")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"\n create table `table_groupId_streamId_nodeId1`(\n     `id` INT,\n    `name` INT,\n    `age` STRING,\n    PRIMARY KEY(`id`) NOT ENFORCED)\n    WITH (\n        'connector' = 'mysql-cdc-inlong',\n        'hostname' = 'xxxx',\n        'username' = 'xxx',\n        'password' = 'xxx',\n        'database-name' = 'test',\n        'scan.incremental.snapshot.enabled' = 'true',\n        'server-time-zone' = 'GMT+8',\n        'table-name' = 'user',\n        'inlong.metric' = 'mysqlGroup&mysqlStream&mysqlNode1'\n);\n\n CREATE TABLE `table_groupId_streamId_nodeId2`(\n     PRIMARY KEY (`id`) NOT ENFORCED,\n     `id` INT,\n     `name` STRING,\n     `age` INT)\n     WITH (\n         'connector' = 'jdbc-inlong',\n         'url' = 'jdbc:postgresql://ip:5432/postgres',\n         'username' = 'postgres',\n         'password' = 'inlong',\n         'table-name' = 'public.user',\n         'inlong.metric' = 'pggroup&pgStream&pgNode'\n         );\n\n INSERT INTO `table_groupId_streamId_nodeId2`\n SELECT\n     `id`,\n     `name`,\n     `age`\n FROM `table_groupId_streamId_nodeId1`;\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u5728flink-conf.yaml\u4e2d\u6dfb\u52a0metric report\u914d\u7f6e")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"metric.reporters: promgateway\nmetrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter\nmetrics.reporter.promgateway.host: ip\nmetrics.reporter.promgateway.port: 9091\nmetrics.reporter.promgateway.interval: 60 SECONDS\n")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"ip")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"port")," \u662f\u4f60\u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/prometheus/pushgateway/releases"},"pushgateway")," \u7684\u914d\u7f6e\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u6267\u884c\u4e0a\u9762\u7684sql\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee pushgateway \u7684 url: http://ip:port")),(0,n.yg)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528\u7684 metric report \u662f ",(0,n.yg)("inlineCode",{parentName:"p"},"org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter")," \u6307\u6807\u540d\u5c06\u6dfb\u52a0\u524d\u7f00 ",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator"),"\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5b8c\u6574\u7684\u6307\u6807\u540d\u5982\u4e0b:",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsIn"),",",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesIn"),",",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsInPerSecond"),",",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesInPerSecond"),",",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOut"),",",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOut"),",",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOutPerSecond"),",",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOutPerSecond"),"."))}u.isMDXComponent=!0}}]);