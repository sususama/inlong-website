"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[88364],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),d=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(g.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,s=u["".concat(g,".").concat(m)]||u[m]||y[m]||r;return n?a.createElement(s,i(i({ref:t},p),{},{components:n})):a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57734:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"1.7.0"}},42422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var a=n(58168),l=(n(96540),n(15680)),r=n(57734);const i={title:"ClickHouse",sidebar_position:3},o=void 0,g={unversionedId:"data_node/load_node/clickhouse",id:"version-1.7.0/data_node/load_node/clickhouse",title:"ClickHouse",description:"Overview",source:"@site/versioned_docs/version-1.7.0/data_node/load_node/clickhouse.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/clickhouse",permalink:"/docs/1.7.0/data_node/load_node/clickhouse",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/data_node/load_node/clickhouse.md",tags:[],version:"1.7.0",sidebarPosition:3,frontMatter:{title:"ClickHouse",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Auto Consumption",permalink:"/docs/1.7.0/data_node/load_node/auto_consumption"},next:{title:"Elasticsearch",permalink:"/docs/1.7.0/data_node/load_node/elasticsearch"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a ClickHouse Load Node",id:"how-to-create-a-clickhouse-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"ClickHouse Load Node Options",id:"clickhouse-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],u={toc:p},y="wrapper";function m(e){let{components:t,...i}=e;return(0,l.yg)(y,(0,a.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"overview"},"Overview"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"ClickHouse Load Node")," supports to write data into ClickHouse database. This document describes how to set up the ClickHouse Load\nNode to run SQL queries against ClickHouse database."),(0,l.yg)("h2",{id:"supported-version"},"Supported Version"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,l.yg)("th",{parentName:"tr",align:null},"Driver"),(0,l.yg)("th",{parentName:"tr",align:null},"Group Id"),(0,l.yg)("th",{parentName:"tr",align:null},"Artifact Id"),(0,l.yg)("th",{parentName:"tr",align:null},"JAR"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/1.7.0/data_node/load_node/clickhouse"},"ClickHouse")),(0,l.yg)("td",{parentName:"tr",align:null},"ClickHouse"),(0,l.yg)("td",{parentName:"tr",align:null},"ru.yandex.clickhouse"),(0,l.yg)("td",{parentName:"tr",align:null},"clickhouse-jdbc"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/ru.yandex.clickhouse/clickhouse-jdbc"},"Download"))))),(0,l.yg)("h2",{id:"dependencies"},"Dependencies"),(0,l.yg)("p",null,"In order to set up the ",(0,l.yg)("inlineCode",{parentName:"p"},"ClickHouse Load Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,l.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-jdbc</artifactId>\n    <version>${r.l.inLongVersion}</version>\n</dependency>\n`)),(0,l.yg)("h2",{id:"how-to-create-a-clickhouse-load-node"},"How to create a ClickHouse Load Node"),(0,l.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"\n-- MySQL extract node\nCREATE TABLE `mysql_extract_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'mysql-cdc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/read',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- ClickHouse load node\nCREATE TABLE `clickhouse_load_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'jdbc-inlong',\n  'dialect-impl' = 'org.apache.inlong.sort.jdbc.dialect.ClickHouseDialect',\n  'url' = 'jdbc:clickhouse://localhost:8123/demo',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'demo.user'\n)\n\n-- write data into ClickHouse\nINSERT INTO clickhouse_load_table \nSELECT id, name , age FROM mysql_extract_table;  \n\n")),(0,l.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,l.yg)("p",null,"When creating a data flow, select ",(0,l.yg)("inlineCode",{parentName:"p"},"ClickHouse"),' for the data stream direction, and click "Add" to configure it.'),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"ClickHouse Configuration",src:n(79398).A,width:"1484",height:"1153"})),(0,l.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,l.yg)("p",null,"TODO: It will be supported in the future."),(0,l.yg)("h2",{id:"clickhouse-load-node-options"},"ClickHouse Load Node Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Option"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connector"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'jdbc-inlong'.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"The JDBC database url.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dialect-impl"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"org.apache.inlong.sort.jdbc.dialect.ClickHouseDialect"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table-name"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"The name of JDBC table to connect, for example ",(0,l.yg)("inlineCode",{parentName:"td"},"database.tableName"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"driver"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"The class name of the JDBC driver to use to connect to this URL, if not set, it will automatically be derived from the URL.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"The JDBC user name. 'username' and 'password' must both be specified if any of them is specified.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"The JDBC password.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"60s"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration"),(0,l.yg)("td",{parentName:"tr",align:null},"Maximum timeout between retries. The timeout should be in second granularity and shouldn't be smaller than 1 second.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"The max size of buffered records before flush. Can be set to zero to disable it.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"1s"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration"),(0,l.yg)("td",{parentName:"tr",align:null},"The flush interval mills, over this time, asynchronous threads will flush data. Can be set to '0' to disable it. Note, 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"The max retry times if writing records to database failed.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"Defines the parallelism of the JDBC sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.ignore.changelog"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"Ignore all ",(0,l.yg)("inlineCode",{parentName:"td"},"RowKind"),", ingest them as ",(0,l.yg)("inlineCode",{parentName:"td"},"INSERT"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,l.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,l.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,l.yg)("inlineCode",{parentName:"td"},"{nodeId}"),".")))),(0,l.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"ClickHouse type"),(0,l.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"CHAR")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"String ",(0,l.yg)("br",null)," IP ",(0,l.yg)("br",null)," UUID"),(0,l.yg)("td",{parentName:"tr",align:null},"VARCHAR")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"String ",(0,l.yg)("br",null)," EnumL"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"UInt8"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FixedString"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Decimal ",(0,l.yg)("br",null)," Int128 ",(0,l.yg)("br",null)," Int256 ",(0,l.yg)("br",null)," UInt64 ",(0,l.yg)("br",null)," UInt128 ",(0,l.yg)("br",null)," UInt256"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Int8"),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Int16 ",(0,l.yg)("br",null)," UInt8"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Int32 ",(0,l.yg)("br",null)," UInt16 ",(0,l.yg)("br",null)," Interval"),(0,l.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Int64 ",(0,l.yg)("br",null)," UInt32"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Float32"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Date"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"TIME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Int32"),(0,l.yg)("td",{parentName:"tr",align:null},"INTERVAL_YEAR_MONTH")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Int64"),(0,l.yg)("td",{parentName:"tr",align:null},"INTERVAL_DAY_TIME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"MAP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Not supported"),(0,l.yg)("td",{parentName:"tr",align:null},"ROW")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Not supported"),(0,l.yg)("td",{parentName:"tr",align:null},"MULTISET")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Not supported"),(0,l.yg)("td",{parentName:"tr",align:null},"RAW")))))}m.isMDXComponent=!0},79398:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/clickhouse-2681892cd085b810b8c1cc23a9534c49.png"}}]);