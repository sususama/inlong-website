"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[63429],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,g=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97113:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.8.0"}},96014:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(97113);const i={title:"Hive",sidebar_position:8},o=void 0,d={unversionedId:"data_node/load_node/hive",id:"version-1.8.0/data_node/load_node/hive",title:"Hive",description:"Overview",source:"@site/versioned_docs/version-1.8.0/data_node/load_node/hive.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hive",permalink:"/docs/data_node/load_node/hive",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/data_node/load_node/hive.md",tags:[],version:"1.8.0",sidebarPosition:8,frontMatter:{title:"Hive",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"HDFS",permalink:"/docs/data_node/load_node/hdfs"},next:{title:"Iceberg",permalink:"/docs/data_node/load_node/iceberg"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a Hive Load Node",id:"how-to-create-a-hive-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Hive Load Node Options",id:"hive-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],s={toc:u},m="wrapper";function c(t){let{components:e,...i}=t;return(0,r.kt)(m,(0,a.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Hive Load Node can write data to hive. Using the flink dialect, the insert operation is currently supported, and the data in the upsert mode will be converted into insert.\nManipulating hive tables using the hive dialect is currently not supported."),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/data_node/load_node/hive"},"Hive")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/hive/overview/#supported-hive-versions"},"Hive"),": 1.x, 2.x, 3.x")))),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Using Hive load requires the introduction of dependencies.\nOf course, you can also use INLONG to provide jar packages.(",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download/"},"sort-connector-hive"),")"),(0,r.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hive</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"how-to-create-a-hive-load-node"},"How to create a Hive Load Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("p",null,"The example below shows how to create a Hive Load Node with ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hiveTableName (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT\n) WITH (\n  'connector' = 'hive',\n  'default-database' = 'default',\n  'hive-version' = '3.1.2',\n  'hive-conf-dir' = 'hdfs://localhost:9000/user/hive/hive-site.xml'\n);\n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"When creating a data stream, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Hive"),' for the data stream direction, and click "Add" to configure it.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hive Configuration",src:n(60254).Z,width:"1480",height:"1155"})),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"hive-load-node-options"},"Hive Load Node Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'hive'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default-database"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hive-conf-dir"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"If you don't want to upload hive-site.xml to HDFS, you can put this configuration into the classpath of the project, and then this place only needs to be not empty, otherwise you must fill in the complete HDFS URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.partition-commit.trigger"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"If hive exists partition you can set trigger mode.(process-time)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partition.time-extractor.timestamp-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"If hive exists partition you can set timestamp-pattern mode.(yyyy-MM-dd...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.partition-commit.delay"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"If hive exists partition you can set delay mode.(10s,20s,1m...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.partition-commit.policy.kind"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Policy to commit a partition is to notify the downstream application that the partition has finished writing, the partition is ready to be read. metastore: add partition to metastore. Only hive table supports metastore policy, file system manages partitions through directory structure. success-file: add '_success' file to directory. Both can be configured at the same time: 'metastore,success-file'. custom: use policy class to create a commit policy. Support to configure multiple policies: 'metastore,success-file'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=","[groupId]","&streamId=","[streamId]","&nodeId=","[nodeId]",".")))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hive type"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char(p)"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAR(p)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"varchar(p)"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(p)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal(p, s)"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp(9)"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"LIST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"row"),(0,r.kt)("td",{parentName:"tr",align:null},"STRUCT")))))}c.isMDXComponent=!0},60254:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/hive-36990009c592f8f732b0752c777621bf.png"}}]);