"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[72814],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),g=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=g(n),u=r,m=p["".concat(d,".").concat(u)]||p[u]||y[u]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60752:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"1.14.0-SNAPSHOT"}},43625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(58168),r=(n(96540),n(15680)),l=n(60752);const i={title:"Elasticsearch",sidebar_position:4},o=void 0,d={unversionedId:"data_node/load_node/elasticsearch",id:"data_node/load_node/elasticsearch",title:"Elasticsearch",description:"Overview",source:"@site/docs/data_node/load_node/elasticsearch.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/elasticsearch",permalink:"/docs/next/data_node/load_node/elasticsearch",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/elasticsearch.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Elasticsearch",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"ClickHouse",permalink:"/docs/next/data_node/load_node/clickhouse"},next:{title:"Greenplum",permalink:"/docs/next/data_node/load_node/greenplum"}},g={},s=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"How to create an Elasticsearch Load Node",id:"how-to-create-an-elasticsearch-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Elasticsearch Load Node Options",id:"elasticsearch-load-node-options",level:2},{value:"Features",id:"features",level:2},{value:"Key Handling",id:"key-handling",level:3},{value:"Dynamic Index",id:"dynamic-index",level:3},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],p={toc:s},y="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The Elasticsearch Load Node allows for writing into an index of the Elasticsearch engine. This document describes how to setup the Elasticsearch Load Node to run SQL queries against Elasticsearch."),(0,r.yg)("p",null,"The Load Node can operate in upsert mode for exchanging UPDATE/DELETE messages with the external system using the primary key defined on the DDL."),(0,r.yg)("p",null,"If no primary key is defined on the DDL, the Load Node can only operate in append mode for exchanging INSERT only messages with external system."),(0,r.yg)("h2",{id:"supported-version"},"Supported Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/next/data_node/load_node/elasticsearch"},"elasticsearch")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.elastic.co/"},"Elasticsearch"),": 5.x, 6.x, 7.x")))),(0,r.yg)("h3",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to use the Elasticsearch Load Node the following dependencies are required for both projects using a build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Elasticsearch 6")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-elasticsearch6</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Elasticsearch 7")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-elasticsearch7</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"how-to-create-an-elasticsearch-load-node"},"How to create an Elasticsearch Load Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("p",null,"The example below shows how to create an Elasticsearch Load Node with ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE myUserTable (\n  user_id STRING,\n  user_name STRING,\n  uv BIGINT,\n  pv BIGINT,\n  PRIMARY KEY (user_id) NOT ENFORCED\n) WITH (\n  'connector' = 'elasticsearch-7-inlong',\n  'hosts' = 'http://localhost:9200',\n  'index' = 'users'\n);\n")),(0,r.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h2",{id:"elasticsearch-load-node-options"},"Elasticsearch Load Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what connector to use, valid values are:",(0,r.yg)("br",null),(0,r.yg)("br",null),"- ",(0,r.yg)("inlineCode",{parentName:"td"},"elasticsearch-6-inlong"),": connect to Elasticsearch 5.x and 6.x cluster.",(0,r.yg)("br",null),"- ",(0,r.yg)("inlineCode",{parentName:"td"},"elasticsearch-7-inlong"),": connect to Elasticsearch 7.x and later versions cluster.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hosts"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"One or more Elasticsearch hosts to connect to, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"'http://host_name:9092;http://host_name:9093'"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"index"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Elasticsearch index for every record. Can be a static index (e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"'myIndex'"),") or a dynamic index (e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"'index-\\{log_ts\\|yyyy-MM-dd}'"),"). See the following ",(0,r.yg)("a",{parentName:"td",href:"#dynamic-index"},"Dynamic Index")," section for more details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"document-type"),(0,r.yg)("td",{parentName:"tr",align:null},"required in 5.x and 6.x"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Elasticsearch document type. Not necessary anymore in ",(0,r.yg)("inlineCode",{parentName:"td"},"elasticsearch-7"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"document-id.key-delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"_"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},'Delimiter for composite keys ("_" by default), e.g., "$" would result in IDs "KEY1\\$KEY2\\$KEY3".')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Username used to connect to Elasticsearch instance. Please notice that Elasticsearch doesn't pre-bundled security feature, but you can enable it by following the ",(0,r.yg)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/elasticsearch/reference/master/configuring-security.html"},"guideline")," to secure an Elasticsearch cluster.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Password used to connect to Elasticsearch instance. If ",(0,r.yg)("inlineCode",{parentName:"td"},"username")," is configured, this option must be configured with non-empty string as well.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"failure-handler"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"fail"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Failure handling strategy in case a request to Elasticsearch fails. Valid strategies are:",(0,r.yg)("br",null),(0,r.yg)("br",null),"- ",(0,r.yg)("inlineCode",{parentName:"td"},"fail"),": throws an exception if a request fails and thus causes a job failure.",(0,r.yg)("br",null),"- ",(0,r.yg)("inlineCode",{parentName:"td"},"ignore"),": ignores failures and drops the request.",(0,r.yg)("br",null),"- ",(0,r.yg)("inlineCode",{parentName:"td"},"retry-rejected"),": re-adds requests that have failed due to queue capacity saturation.",(0,r.yg)("br",null),"- custom class name: for failure handling with a ActionRequestFailureHandler subclass.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.flush-on-checkpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Flush on checkpoint or not. When disabled, a sink will not wait for all pending action requests to be acknowledged by Elasticsearch on checkpoints. Thus, a sink does NOT provide any strong guarantees for at-least-once delivery of action requests.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.bulk-flush.max-actions"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of buffered actions per bulk request. Can be set to ",(0,r.yg)("inlineCode",{parentName:"td"},"'0'")," to disable it.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.bulk-flush.max-size"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"2mb"),(0,r.yg)("td",{parentName:"tr",align:null},"MemorySize"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum size in memory of buffered actions per bulk request. Must be in MB granularity. Can be set to ",(0,r.yg)("inlineCode",{parentName:"td"},"'0'")," to disable it.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.bulk-flush.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"1s"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval to flush buffered actions. Can be set to ",(0,r.yg)("inlineCode",{parentName:"td"},"'0'")," to disable it. Note, both ",(0,r.yg)("inlineCode",{parentName:"td"},"'sink.bulk-flush.max-size'")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"'sink.bulk-flush.max-actions'"),"can be set to ",(0,r.yg)("inlineCode",{parentName:"td"},"'0'")," with the flush interval set allowing for complete async processing of buffered actions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.bulk-flush.backoff.strategy"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"DISABLED"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify how to perform retries if any flush actions failed due to a temporary request error. Valid strategies are:",(0,r.yg)("br",null),(0,r.yg)("br",null),"- ",(0,r.yg)("inlineCode",{parentName:"td"},"DISABLED"),": no retry performed, i.e. fail after the first request error.",(0,r.yg)("br",null),"- ",(0,r.yg)("inlineCode",{parentName:"td"},"CONSTANT"),": wait for backoff delay between retries.",(0,r.yg)("br",null),"- ",(0,r.yg)("inlineCode",{parentName:"td"},"EXPONENTIAL"),": initially wait for backoff delay and increase exponentially between retries.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.bulk-flush.backoff.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of backoff retries.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.bulk-flush.backoff.delay"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"50ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"Delay between each backoff attempt. For ",(0,r.yg)("inlineCode",{parentName:"td"},"CONSTANT")," backoff, this is simply the delay between each retry. For ",(0,r.yg)("inlineCode",{parentName:"td"},"EXPONENTIAL")," backoff, this is the initial base delay.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum timeout between retries.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.path-prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Prefix string to be added to every REST communication, e.g., ",(0,r.yg)("inlineCode",{parentName:"td"},"'/v1'"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"routing.filed-name"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Using field value in the record to dynamically generate routing filed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Elasticsearch connector supports to specify a format. The format must produce a valid json document. By default uses built-in ",(0,r.yg)("inlineCode",{parentName:"td"},"'json'")," format. Please refer to ",(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"JSON Format")," page for more details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=","[groupId]","&streamId=","[streamId]","&nodeId=","[nodeId]",".")))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("h3",{id:"key-handling"},"Key Handling"),(0,r.yg)("p",null,"Elasticsearch sink can work in either upsert mode or append mode, it depends on whether primary key is defined.\nIf primary key is defined, Elasticsearch sink works in upsert mode which can consume queries containing UPDATE/DELETE messages.\nIf primary key is not defined, Elasticsearch sink works in append mode which can only consume queries containing INSERT only messages."),(0,r.yg)("p",null,"In Elasticsearch connector, the primary key is used to calculate the Elasticsearch document id, which is a string of up to 512 bytes. It cannot have whitespaces.\nThe Elasticsearch connector generates a document ID string for every row by concatenating all primary key fields in the order defined in the DDL using a key delimiter specified by ",(0,r.yg)("inlineCode",{parentName:"p"},"document-id.key-delimiter"),".\nCertain types are not allowed as primary key field as they do not have a good string representation, e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"BYTES"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ROW"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ARRAY"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"MAP"),", etc.\nIf no primary key is specified, Elasticsearch will generate a document id automatically."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/dev/table/sql/create/#create-table"},"CREATE TABLE DDL")," for more details about PRIMARY KEY syntax."),(0,r.yg)("h3",{id:"dynamic-index"},"Dynamic Index"),(0,r.yg)("a",{name:"dynamic-index"}),(0,r.yg)("p",null,"Elasticsearch Load Node supports both static index and dynamic index."),(0,r.yg)("p",null,"If you want to have a static index, the ",(0,r.yg)("inlineCode",{parentName:"p"},"index")," option value should be a plain string, e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"'myusers'"),', all the records will be consistently written into "myusers" index.'),(0,r.yg)("p",null,"If you want to have a dynamic index, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"{field_name}")," to reference a field value in the record to dynamically generate a target index.\nYou can also use ",(0,r.yg)("inlineCode",{parentName:"p"},"'{field_name|date_format_string}'")," to convert a field value of ",(0,r.yg)("inlineCode",{parentName:"p"},"TIMESTAMP/DATE/TIME")," type into the format specified by the ",(0,r.yg)("inlineCode",{parentName:"p"},"date_format_string"),".\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"date_format_string")," is compatible with Java's ",(0,r.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/index.html"},"DateTimeFormatter"),".\nFor example, if the option value is ",(0,r.yg)("inlineCode",{parentName:"p"},"'myusers-{'{log_ts|yyyy-MM-dd}'}'"),", then a record with ",(0,r.yg)("inlineCode",{parentName:"p"},"log_ts")," field value ",(0,r.yg)("inlineCode",{parentName:"p"},"2020-03-27 12:25:55"),' will be written into "myusers-2020-03-27" index.'),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"JSON type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR / VARCHAR / STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string with encoding: base64"),(0,r.yg)("td",{parentName:"tr",align:null},"BINARY / VARBINARY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string with format: date"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string with format: time"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string with format: date-time"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string with format: date-time (with UTC time zone)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_WITH_LOCAL_TIME_ZONE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"INTERVAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"object"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP / MULTISET")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"object"),(0,r.yg)("td",{parentName:"tr",align:null},"ROW")))))}u.isMDXComponent=!0}}]);