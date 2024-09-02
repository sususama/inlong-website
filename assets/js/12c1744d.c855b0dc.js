"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67383],{15680:(t,e,a)=>{a.d(e,{xA:()=>u,yg:()=>m});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),g=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=g(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=g(a),y=r,m=s["".concat(d,".").concat(y)]||s[y]||p[y]||l;return a?n.createElement(m,i(i({ref:e},u),{},{components:a})):n.createElement(m,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},66177:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const l={title:"Dirty Data Archive",sidebar_position:5},i=void 0,o={unversionedId:"modules/sort/dirty_data_archive",id:"version-1.5.0/modules/sort/dirty_data_archive",title:"Dirty Data Archive",description:"Overview",source:"@site/versioned_docs/version-1.5.0/modules/sort/dirty_data_archive.md",sourceDirName:"modules/sort",slug:"/modules/sort/dirty_data_archive",permalink:"/docs/1.5.0/modules/sort/dirty_data_archive",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/modules/sort/dirty_data_archive.md",tags:[],version:"1.5.0",sidebarPosition:5,frontMatter:{title:"Dirty Data Archive",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Monitor Metrics",permalink:"/docs/1.5.0/modules/sort/metrics"},next:{title:"Overview",permalink:"/docs/1.5.0/modules/manager/overview"}},d={},g=[{value:"Overview",id:"overview",level:2},{value:"Supported Nodes",id:"supported-nodes",level:2},{value:"Dirty Data Format",id:"dirty-data-format",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Common Configuration",id:"common-configuration",level:3},{value:"S3 Archive Configuration",id:"s3-archive-configuration",level:3},{value:"Usage",id:"usage",level:2}],u={toc:g},s="wrapper";function p(t){let{components:e,...a}=t;return(0,r.yg)(s,(0,n.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Dirty data refers to data that cannot be extracted, transformed, and loaded correctly due to the quality of the data itself during the process of data extraction, transform, and loading.\nCommon dirty data may have field types, lengths, and numbers that do not match. Data serialization, deserialization exception, target library, the table does not exist, etc.\nDirty data archives can dump the dirty data during InLong data flow operation to third-party storage, which is convenient for businesses to find problems.\nSort currently supports dirty data archiving for S3 and Log targets, as well as dirty data archiving for common data sources such as Kafka, Doris, Iceberg, HBase, Hive, Elasticsearch, and JDBC."),(0,r.yg)("h2",{id:"supported-nodes"},"Supported Nodes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Archive Target System"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Extract Node"),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("td",{parentName:"tr",align:null},"Hive"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"HBase"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ClickHouse"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Iceberg"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Elasticsearch"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"HDFS"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"TDSQL Postgres"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Doris"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"SQL Server"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Greenplum"),(0,r.yg)("td",{parentName:"tr",align:null},"Log, S3")))),(0,r.yg)("h2",{id:"dirty-data-format"},"Dirty Data Format"),(0,r.yg)("p",null,"During the processing of dirty data archive, we define the following system variables for formatting dirty data:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"SYSTEM_TIME: System time, the format is 'yyyy-MM-dd HH:mm:ss'"),(0,r.yg)("li",{parentName:"ul"},"DIRTY_TYPE\uff1aDirty type, common dirty types are SerializeError, DeserializeError, DataTypeMappingError, etc"),(0,r.yg)("li",{parentName:"ul"},"DIRTY_MESSAGE: Dirty data message, that is the cause of dirty data, abnormal information, etc")),(0,r.yg)("p",null,"The format for archiving to Log\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[${dirty.side-output.log-tag}]"," ${value}, Among them, ${value} is the merged value of ${dirty.side-output.labels} and ${dirty data}, and formatted by 'csv' or 'json'")),(0,r.yg)("p",null,"The format for archiving to S3\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The filename generation format of S3: ${dirty.side-output.s3.key}/${dirty.identifier}-${randome-sequence}.${suffix}"),(0,r.yg)("li",{parentName:"ul"},"The format of the data in the file of S3: it merge the ${dirty.side-output.labels} and ${dirty data} and formatted by 'csv' or 'json'")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Notes"),"\uff1aFor ${dirty.side-output.log-tag}, ${dirty.side-output.labels}, ${dirty.identifier}, ${dirty.side-output.s3.key} see the configuration details below."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("h3",{id:"common-configuration"},"Common Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.ignore"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to ignore dirty data, the default is 'false'")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to support dirty data archive, the default is 'false'")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The connector of dirty data archive, it must be set when 'dirty.side-output.enable' is 'true', currently only 'log' and 's3' are supported.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.format"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"csv"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The format of dirty data archive, currently only supports 'csv' and 'json', defaults is 'csv'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.log.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to support log printing when dirty data is archived, the default is 'true'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.ignore-errors"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to ignore errors in dirty data archives, defaults is 'true'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The identifier of dirty data, it will be used for filename generation of file dirty archive, topic generation of mq dirty archive, tablename generation of database, etc, and it supports variable replace like '${variable}'. There are several system variables(SYSTEM_TIME,DIRTY_TYPE,DIRTY_MESSAGE) are currently supported,  and the support of other variables is determined by the connector.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.log-tag"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The log tag of dirty data, it will be used for log printing, and it supports variable replace like '${variable}'. There are several system variables(SYSTEM_TIME,DIRTY_TYPE,DIRTY_MESSAGE) are currently supported,  and the support of other variables is determined by the connector.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The labels of dirty data, it will be used for log printing and will be archived with dirty data, and it supports variable replace like '${variable}'. There are several system variables(SYSTEM_TIME,DIRTY_TYPE,DIRTY_MESSAGE) are currently supported,  and the support of other variables is determined by the connector.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.field-delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The column separator of dirty data archive, it is used for 'csv' format, the default is ','.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.line-delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"\\n"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The row separator of dirty data archive, it is used for 'csv' and 'json' format, the default is '\\n'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The cache batch size of dirty data archive, the default is '100'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.batch.bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"10240"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The cache batch byte of dirty data archive, the unit is byte and the default is '10240'(10KB).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.retries"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The retris of dirty data archive\uff0cthe default is '3'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.batch.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval time of irty data archive, the unit is millisecond, the default is '60000'(60s).")))),(0,r.yg)("h3",{id:"s3-archive-configuration"},"S3 Archive Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.endpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The endpoint of s3 archive")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.region"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The region of s3 archive")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.bucket"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The bucket of s3 archive")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.key"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The key of s3 archive")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.access-key-id"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The access key id of s3 archive, it needs to be configured in the environment if this item is not configured.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.secret-key-id"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The secret key id of s3 archive, it needs to be configured in the environment if this item is not configured.")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"One example about sync Kafka data to Kafka data and we will introduce usage of dirty data archive(it is similar to other nodes)."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The useage for archive to log")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"create table `table_user_input`(\n         `id` INT,\n         `name` INT,\n         `age` STRING)\n    WITH (\n        'dirty.side-output.connector' = 'log',\n        'dirty.ignore' = 'true',\n        'dirty.side-output.enable' = 'true',\n        'dirty.side-output.format' = 'csv',\n        'dirty.side-output.labels' = 'SYSTEM_TIME=${SYSTEM_TIME}&DIRTY_TYPE=${DIRTY_TYPE}&database=inlong&table=user',\n        'inlong.metric.labels' = 'groupId=1&streamId=1&nodeId=1',\n        'topic' = 'user_input',\n        'properties.bootstrap.servers' = 'localhost:9092',\n        'connector' = 'kafka-inlong',\n        'scan.startup.mode' = 'earliest-offset',\n        'json.timestamp-format.standard' = 'SQL',\n        'json.encode.decimal-as-plain-number' = 'true',\n        'json.map-null-key.literal' = 'null',\n        'json.ignore-parse-errors' = 'false',\n        'json.map-null-key.mode' = 'DROP',\n        'format' = 'json',\n        'json.fail-on-missing-field' = 'false',\n        'properties.group.id' = 'test_group');\n\nCREATE TABLE `table_user_output`(\n         `id` INT,\n         `name` STRING,\n         `age` INT)\n    WITH (\n        'topic' = 'user_output',\n        'properties.bootstrap.servers' = 'localhost:9092',\n        'connector' = 'kafka-inlong',\n        'sink.ignore.changelog' = 'true',\n        'json.timestamp-format.standard' = 'SQL',\n        'json.encode.decimal-as-plain-number' = 'true',\n        'json.map-null-key.literal' = 'null',\n        'json.ignore-parse-errors' = 'true',\n        'json.map-null-key.mode' = 'DROP',\n        'format' = 'json',\n        'json.fail-on-missing-field' = 'true',\n        'dirty.ignore' = 'true',\n        'dirty.side-output.connector' = 'log',\n        'dirty.side-output.enable' = 'true',\n        'dirty.side-output.format' = 'csv',\n        'dirty.side-output.log.enable' = 'true',\n        'dirty.side-output.log-tag' = 'DirtyData',\n        'dirty.side-output.labels' = 'SYSTEM_TIME=${SYSTEM_TIME}&DIRTY_TYPE=${DIRTY_TYPE}&database=inlong&table=user');\n\nINSERT INTO `table_user_output`\nSELECT\n    `id`,\n    `name`,\n    `age`\nFROM `table_user_input`;\n-- In this example, we deliberately input a piece of data in non-json format, such as: 1,zhangsan,18, then the following dirty data will be printed in the log according to the configuration\uff1a\n[DirtyData] 2023-01-30 13:01:01 ValueDeserializeError,inlong,user,1,zhangsan,18\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The useage for archive to s3")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"create table `table_user_input`(\n        `id` INT,\n        `name` INT,\n        `age` STRING)\n    WITH (\n        'dirty.side-output.connector' = 's3',\n        'dirty.ignore' = 'true',\n        'dirty.side-output.enable' = 'true',\n        'dirty.side-output.format' = 'csv',\n        'dirty.side-output.labels' = 'SYSTEM_TIME=${SYSTEM_TIME}&DIRTY_TYPE=${DIRTY_TYPE}&database=inlong&table=user',\n        'dirty.side-output.s3.bucket' = 's3-test-bucket',\n        'dirty.side-output.s3.endpoint' = 's3.test.endpoint',\n        'dirty.side-output.s3.key' = 'dirty/test',\n        'dirty.side-output.s3.region' = 'region',\n        'dirty.side-output.s3.access-key-id' = 'access_key_id',\n        'dirty.side-output.s3.secret-key-id' = 'secret_key_id',\n        'dirty.identifier' = 'inlong-user-${SYSTEM_TIME}',\n        'inlong.metric.labels' = 'groupId=1&streamId=1&nodeId=1',\n        'topic' = 'user_input',\n        'properties.bootstrap.servers' = 'localhost:9092',\n        'connector' = 'kafka-inlong',\n        'scan.startup.mode' = 'earliest-offset',\n        'json.timestamp-format.standard' = 'SQL',\n        'json.encode.decimal-as-plain-number' = 'true',\n        'json.map-null-key.literal' = 'null',\n        'json.ignore-parse-errors' = 'false',\n        'json.map-null-key.mode' = 'DROP',\n        'format' = 'json',\n        'json.fail-on-missing-field' = 'false',\n        'properties.group.id' = 'test_group');\n\nCREATE TABLE `table_user_output`(\n         `id` INT,\n         `name` STRING,\n         `age` INT)\n    WITH (\n        'topic' = 'user_output',\n        'properties.bootstrap.servers' = 'localhost:9092',\n        'connector' = 'kafka-inlong',\n        'sink.ignore.changelog' = 'true',\n        'json.timestamp-format.standard' = 'SQL',\n        'json.encode.decimal-as-plain-number' = 'true',\n        'json.map-null-key.literal' = 'null',\n        'json.ignore-parse-errors' = 'true',\n        'json.map-null-key.mode' = 'DROP',\n        'format' = 'json',\n        'json.fail-on-missing-field' = 'true',\n        'dirty.side-output.connector' = 's3',\n        'dirty.ignore' = 'true',\n        'dirty.side-output.enable' = 'true',\n        'dirty.side-output.format' = 'csv',\n        'dirty.side-output.labels' = 'SYSTEM_TIME=${SYSTEM_TIME}&DIRTY_TYPE=${DIRTY_TYPE}&database=inlong&table=user',\n        'dirty.side-output.s3.bucket' = 's3-test-bucket',\n        'dirty.side-output.s3.endpoint' = 's3.test.endpoint',\n        'dirty.side-output.s3.key' = 'dirty/test',\n        'dirty.side-output.s3.region' = 'region',\n        'dirty.side-output.s3.access-key-id' = 'access_key_id',\n        'dirty.side-output.s3.secret-key-id' = 'secret_key_id',\n        'dirty.identifier' = 'inlong-user-${SYSTEM_TIME}');\n\nINSERT INTO `table_user_output`\nSELECT\n    `id`,\n    `name`,\n    `age`\nFROM `table_user_input`;\n-- In this example, we deliberately input a piece of data in non-json format, such as: 1,zhangsan,18, then the following dirty data will be written to s3 according to the configuration(the file path is: dirty/test/inlong-user-2023-01-01130101xxxx.txt, where xxxx is a 4-digit random sequence):\n[DirtyData] 2023-01-30 13:01:01 ValueDeserializeError,inlong,user,1,zhangsan,18\n")))}p.isMDXComponent=!0}}]);