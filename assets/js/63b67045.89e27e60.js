"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[65133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},51009:(e,t,a)=>{a.d(t,{Y:()=>n});const n={inLongVersion:"1.3.0"}},42818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(51009);const o={title:"HBase",sidebar_position:6},i=void 0,d={unversionedId:"data_node/load_node/hbase",id:"version-1.3.0/data_node/load_node/hbase",title:"HBase",description:"Overview",source:"@site/versioned_docs/version-1.3.0/data_node/load_node/hbase.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hbase",permalink:"/docs/1.3.0/data_node/load_node/hbase",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/data_node/load_node/hbase.md",tags:[],version:"1.3.0",sidebarPosition:6,frontMatter:{title:"HBase",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Greenplum",permalink:"/docs/1.3.0/data_node/load_node/greenplum"},next:{title:"HDFS",permalink:"/docs/1.3.0/data_node/load_node/hdfs"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a HBase Load Node",id:"how-to-create-a-hbase-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"HBase Load Node Options",id:"hbase-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],u={toc:p},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"HBase Load Node")," supports to write data into HBase database."),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"HBase version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.3.0/data_node/load_node/hbase"},"HBase")),(0,r.kt)("td",{parentName:"tr",align:null},"2.2.x")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In order to set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"HBase Load Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hbase</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"how-to-create-a-hbase-load-node"},"How to create a HBase Load Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("p",null,"All the column families in HBase table must be declared as ROW type, the field name maps to the column family name, and\nthe nested field names map to the column qualifier names. There is no need to declare all the families and qualifiers in\nthe schema, users can declare what\u2019s used in the query. Except the ROW type fields, the single atomic type field\n(e.g. STRING, BIGINT)will be recognized as HBase rowkey. The rowkey field can be arbitrary name, but should be quoted\nusing backticks if it is a reserved keyword."),(0,r.kt)("p",null,"The example below shows how to create a HBase Load Node with ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Create a HBase table 'hbase_load_node' in Flink SQL\nCREATE TABLE hbase_load_node (\n    rowkey STRING,\n    family1 ROW<q1 INT>,\n    family2 ROW<q2 STRING, q3 BIGINT>,\n    family3 ROW<q4 DOUBLE, q5 BOOLEAN, q6 STRING>,\n    PRIMARY KEY (rowkey) NOT ENFORCED\n) WITH (\n      'connector' = 'hbase-2.2-inlong',\n      'table-name' = 'mytable',\n      'zookeeper.quorum' = 'localhost:2181'\n);\n\n-- use ROW(...) construction function construct column families and write data into the HBase table.\n-- assuming the schema of \"T\" is [rowkey, f1q1, f2q2, f2q3, f3q4, f3q5, f3q6]\nINSERT INTO hTable\nSELECT rowkey, ROW(f1q1), ROW(f2q2, f2q3), ROW(f3q4, f3q5, f3q6) FROM T;\n\n-- scan data from the HBase table\nSELECT rowkey, family1, family3.q4, family3.q6 FROM hTable;\n\n-- temporal join the HBase table as a dimension table\nSELECT * FROM myTopic\nLEFT JOIN hTable FOR SYSTEM_TIME AS OF myTopic.proctime\nON myTopic.key = hTable.rowkey;\n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"hbase-load-node-options"},"HBase Load Node Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify what connector to use, valid values are: hbase-2.2-inlong: connect to HBase 2.2.x cluster")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table-name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of HBase table to connect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zookeeper.quorum"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The HBase Zookeeper quorum.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zookeeper.znode.parent"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"/hbase"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The root dir in Zookeeper for HBase cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null-string-literal"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Representation for null values for string fields. HBase source and sink encodes/decodes empty bytes as null values for all types except string type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"2mb"),(0,r.kt)("td",{parentName:"tr",align:null},"MemorySize"),(0,r.kt)("td",{parentName:"tr",align:null},"Writing option, maximum size in memory of buffered rows for each writing request. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Writing option, maximum number of rows to buffer for each writing request. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1s"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Writing option, the interval to flush any buffered rows. This can improve performance for writing data to HBase database, but may increase the latency. Can be set to '0' to disable it. Note, both 'sink.buffer-flush.max-size' and 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the parallelism of the HBase sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lookup.async"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether async lookup are enabled. If true, the lookup will be async. Note, async only supports hbase-2.2 connector.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lookup.cache.max-rows"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},'The max number of rows of lookup cache, over this value, the oldest rows will be expired. Note, "lookup.cache.max-rows" and "lookup.cache.ttl" options must all be specified if any of them is specified. Lookup cache is disabled by default.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lookup.cache.ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},'The max time to live for each rows in lookup cache, over this time, the oldest rows will be expired. Note, "cache.max-rows" and "cache.ttl" options must all be specified if any of them is specified.Lookup cache is disabled by default.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lookup.max-retries"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The max retry times if lookup database failed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"This can set and pass arbitrary HBase configurations. Suffix names must match the configuration key defined in ",(0,r.kt)("a",{parentName:"td",href:"https://hbase.apache.org/2.3/book.html#hbase_default_configurations"},"HBase Configuration documentation"),". Flink will remove the \"properties.\" key prefix and pass the transformed key and values to the underlying HBaseClient. For example, you can add a kerberos authentication parameter 'properties.hbase.security.authentication' = 'kerberos'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId&streamId&nodeId.")))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("p",null,"HBase stores all data as byte arrays. The data needs to be serialized and deserialized during read and write operation."),(0,r.kt)("p",null,"When serializing and de-serializing, Flink HBase connector uses utility class org.apache.hadoop.hbase.util.Bytes provided by HBase (Hadoop) to convert Flink Data Types to and from byte arrays."),(0,r.kt)("p",null,"Flink HBase connector encodes null values to empty bytes, and decode empty bytes to null values for all data types except string type. For string type, the null literal is determined by null-string-literal option."),(0,r.kt)("p",null,"The data type mappings are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL type"),(0,r.kt)("th",{parentName:"tr",align:null},"HBase conversion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR ",(0,r.kt)("br",null)," VARCHAR ",(0,r.kt)("br",null)," STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[] toBytes(String s) ",(0,r.kt)("br",null)," String toString(byte[] b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[] toBytes(boolean b) ",(0,r.kt)("br",null)," boolean toBoolean(byte[] b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY ",(0,r.kt)("br",null)," VARBINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns byte[] as is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[] toBytes(BigDecimal v) ",(0,r.kt)("br",null)," BigDecimal toBigDecimal(byte[] b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"new byte[] { val } ",(0,r.kt)("br",null)," bytes","[0]"," // returns first and only byte from bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[] toBytes(short val) ",(0,r.kt)("br",null)," short toShort(byte[] bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[] toBytes(int val) ",(0,r.kt)("br",null)," int toInt(byte[] bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[] toBytes(long val) ",(0,r.kt)("br",null)," long toLong(byte[] bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[] toBytes(float val) ",(0,r.kt)("br",null)," float toFloat(byte[] bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[] toBytes(double val) ",(0,r.kt)("br",null)," double toDouble(byte[] bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"Stores the number of days since epoch as int value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"Stores the number of milliseconds of the day as int value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"Stores the milliseconds since epoch as long value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAP ",(0,r.kt)("br",null)," MULTISET"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ROW"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")))))}k.isMDXComponent=!0}}]);