"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97025],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),s=d(a),m=r,y=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[s]="string"==typeof e?e:r,o[1]=g;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67468:(e,t,a)=>{a.d(t,{l:()=>n});const n={inLongVersion:"1.10.0-SNAPSHOT"}},54344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(67468);const o={title:"PostgreSQL-CDC",sidebar_position:8},g=void 0,i={unversionedId:"data_node/extract_node/postgresql-cdc",id:"version-1.10.0/data_node/extract_node/postgresql-cdc",title:"PostgreSQL-CDC",description:"Overview",source:"@site/versioned_docs/version-1.10.0/data_node/extract_node/postgresql-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/postgresql-cdc",permalink:"/docs/1.10.0/data_node/extract_node/postgresql-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/data_node/extract_node/postgresql-cdc.md",tags:[],version:"1.10.0",sidebarPosition:8,frontMatter:{title:"PostgreSQL-CDC",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Oracle-CDC",permalink:"/docs/1.10.0/data_node/extract_node/oracle-cdc"},next:{title:"Pulsar",permalink:"/docs/1.10.0/data_node/extract_node/pulsar"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Setup PostgreSQL server",id:"setup-postgresql-server",level:2},{value:"pgoutput",id:"pgoutput",level:3},{value:"decoderbufs",id:"decoderbufs",level:3},{value:"replica identity",id:"replica-identity",level:3},{value:"How to create a PostgreSQL Extract Node",id:"how-to-create-a-postgresql-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"PostgreSQL Extract Node Options",id:"postgresql-extract-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"PostgreSQL Extract Node")," allows for reading snapshot data and incremental data from PostgreSQL database. This document describes how to set up the ",(0,r.yg)("inlineCode",{parentName:"p"},"PostgreSQL Extract Node")," to run SQL queries against PostgreSQL databases."),(0,r.yg)("h2",{id:"supported-version"},"Supported Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/1.10.0/data_node/extract_node/postgresql-cdc"},"PostgreSQL-CDC")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.postgresql.org"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")))),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to set up the ",(0,r.yg)("inlineCode",{parentName:"p"},"PostgreSQL Extract Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-postgres-cdc</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"setup-postgresql-server"},"Setup PostgreSQL server"),(0,r.yg)("p",null,"Change Data Capture (CDC) allows you to track and propagate changes in a PostgreSQL database to downstream consumers based on its Write-Ahead Log (WAL).\nYou need to ensure that the upstream database is configured to support logical replication. Before using the PostgreSQL connector to monitor the changes committed on a PostgreSQL server,\ndecide which logical decoding plug-in you intend to use. If you plan not to use the native ",(0,r.yg)("inlineCode",{parentName:"p"},"pgoutput")," logical replication stream support, then you must install the logical decoding\nplug-in into the PostgreSQL server."),(0,r.yg)("h3",{id:"pgoutput"},"pgoutput"),(0,r.yg)("p",null,"pgoutput is the standard logical decoding output plug-in in PostgreSQL 10+. It is maintained by the PostgreSQL community, and used by PostgreSQL itself for logical replication.\nThis plug-in is always present so no additional libraries need to be installed."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Check the ",(0,r.yg)("inlineCode",{parentName:"li"},"wal_level")," configuration setting:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW wal_level;\n")),(0,r.yg)("p",null,"The default value is replica. For CDC, you\u2019ll need to set it to ",(0,r.yg)("inlineCode",{parentName:"p"},"logical")," in the database configuration file (postgresql.conf). Keep in mind that changing the wal_level requires a restart of the Postgres instance and can affect database performance."),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"To configure the replication slot regardless of the decoder being used, specify the following in the postgresql.conf file:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"wal_level = logical \n")),(0,r.yg)("h3",{id:"decoderbufs"},"decoderbufs"),(0,r.yg)("p",null,"decoderbufs is based on Protobuf and maintained by the Debezium community. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/debezium/postgres-decoderbufs"},"installing")," it."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"To load the plug-in at startup, add the following to the postgresql.conf file:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"shared_preload_libraries = 'decoderbufs'\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"To configure the replication slot regardless of the decoder being used, specify the following in the postgresql.conf file:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"wal_level = logical \n")),(0,r.yg)("h3",{id:"replica-identity"},"replica identity"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"REPLICA IDENTITY")," is a PostgreSQL-specific table-level setting that determines the amount of information that is available to the logical decoding plug-in for UPDATE and DELETE events. See ",(0,r.yg)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/stable/connectors/postgresql.html#postgresql-replica-identity"},"more"),"."),(0,r.yg)("p",null,"Please keep the ",(0,r.yg)("inlineCode",{parentName:"p"},"replica indentity")," level of source tables to ",(0,r.yg)("inlineCode",{parentName:"p"},"FULL"),". You can check and change this value by SQL:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- show replica identity\nSELECT CASE relreplident\n  WHEN 'd' THEN 'default'\n  WHEN 'n' THEN 'nothing'\n  WHEN 'f' THEN 'full'\n  WHEN 'i' THEN 'index'\n  END AS replica_identity\nFROM pg_class\nWHERE oid = 'mytablename'::regclass;\n\n-- change replica identity\nALTER TABLE mytablename REPLICA IDENTITY FULL;\n")),(0,r.yg)("h2",{id:"how-to-create-a-postgresql-extract-node"},"How to create a PostgreSQL Extract Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `postgresTable`(\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'postgres-cdc-inlong',\n  'hostname' = 'localhost',\n  'username' = 'postgres',\n  'password' = 'inlong',\n  'database-name' = 'postgres',\n  'schema-name' = 'public',\n  'port' = '5432',\n  'table-name' = 'user',\n  'decoding.plugin.name' = 'pgoutput',\n  'slot.name' = 'feaafacbaddadc'\n)\n")),(0,r.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h2",{id:"postgresql-extract-node-options"},"PostgreSQL Extract Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be ",(0,r.yg)("inlineCode",{parentName:"td"},"postgres-cdc-inlong"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hostname"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"IP address or hostname of the PostgreSQL database server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the PostgreSQL database to use when connecting to the PostgreSQL database server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Password to use when connecting to the PostgreSQL database server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Database name of the PostgreSQL server to monitor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Schema name of the PostgreSQL database to monitor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Table name of the PostgreSQL database to monitor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"5432"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer port number of the PostgreSQL database server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decoding.plugin.name"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"decoderbufs"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the Postgres logical decoding plug-in installed on the server. Supported values are decoderbufs, wal2json, wal2json_rds, wal2json_streaming, wal2json_rds_streaming and pgoutput.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"slot.name"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"flink"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},'The name of the PostgreSQL logical decoding slot that was created for streaming changes from a particular plug-in for a particular database/schema. The server uses this slot to stream events to the connector that you are configuring. Slot names must conform to PostgreSQL replication slot naming rules, which state: "Each replication slot has a name, which can contain lower-case letters, numbers, and the underscore character."')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debezium.*"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from Postgres server. For example: 'debezium.snapshot.mode' = 'never'. See more about the ",(0,r.yg)("a",{parentName:"td",href:"https://debezium.io/documentation/reference/1.5/connectors/postgresql.html#postgresql-connector-properties"},"Debezium's Postgres Connector properties"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),".")))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"slot.name"),' is recommended to set for different tables to avoid the potential PSQLException: ERROR: replication slot "flink" is active for PID 974 error.  '),(0,r.yg)("li",{parentName:"ul"},"PSQLException: ERROR: all replication slots are in use Hint: Free one or increase max_replication_slots. We can delete slot by the following statement."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM pg_replication_slots;\n\n-- get slot name is flink. delete it\nSELECT pg_drop_replication_slot('flink');\n")),(0,r.yg)("h2",{id:"available-metadata"},"Available Metadata"),(0,r.yg)("p",null,"The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"key"),(0,r.yg)("th",{parentName:"tr",align:null},"Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the table that contain the row.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the schema that contain the row.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the database that contain the row.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"op_ts"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"It indicates the time that the change was made in the database. If the record is read from snapshot of the table instead of the change stream, the value is always 0.")))),(0,r.yg)("p",null,"The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresTable (\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    `name` STRING,\n    `age` INT\n) WITH (\n     'connector' = 'postgres-cdc-inlong',\n     'hostname' = 'localhost',\n     'username' = 'postgres',\n     'password' = 'inlong',\n     'database-name' = 'postgres',\n     'schema-name' = 'public',\n     'port' = '5432',\n     'table-name' = 'user',\n     'decoding.plugin.name' = 'pgoutput',\n     'slot.name' = 'feaafacbaddadc'\n);\n")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"PostgreSQL type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT ",(0,r.yg)("br",null)," INT2 ",(0,r.yg)("br",null)," SMALLSERIAL ",(0,r.yg)("br",null)," SERIAL2"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER ",(0,r.yg)("br",null)," SERIAL"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT ",(0,r.yg)("br",null)," BIGSERIAL"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(20, 0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL ",(0,r.yg)("br",null)," FLOAT4"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT8 ",(0,r.yg)("br",null)," DOUBLE PRECISION"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(p, s) ",(0,r.yg)("br",null)," DECIMAL(p, s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)]","WITHOUT TIMEZONE"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)][WITHOUT TIMEZONE]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR(n) ",(0,r.yg)("br",null)," CHARACTER(n) ",(0,r.yg)("br",null)," VARCHAR(n) ",(0,r.yg)("br",null)," CHARACTER VARYING(n) ",(0,r.yg)("br",null)," TEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTEA"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")))))}m.isMDXComponent=!0}}]);