"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=i(n),p=l,m=c["".concat(s,".").concat(p)]||c[p]||k[p]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:l,o[1]=d;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39322:(e,t,n)=>{n.d(t,{Y:()=>a});const a={inLongVersion:"1.6.0"}},2078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),l=(n(67294),n(3905)),r=n(39322);const o={title:"SQLServer-CDC",sidebar_position:10},d=void 0,s={unversionedId:"data_node/extract_node/sqlserver-cdc",id:"version-1.6.0/data_node/extract_node/sqlserver-cdc",title:"SQLServer-CDC",description:"Overview",source:"@site/versioned_docs/version-1.6.0/data_node/extract_node/sqlserver-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/sqlserver-cdc",permalink:"/docs/data_node/extract_node/sqlserver-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/data_node/extract_node/sqlserver-cdc.md",tags:[],version:"1.6.0",sidebarPosition:10,frontMatter:{title:"SQLServer-CDC",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Pulsar",permalink:"/docs/data_node/extract_node/pulsar"},next:{title:"Doris",permalink:"/docs/data_node/extract_node/doris"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Setup SQLServer Extract Node",id:"setup-sqlserver-extract-node",level:2},{value:"How to create a SQLServer Extract Node",id:"how-to-create-a-sqlserver-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"SQLServer Extract Node Options",id:"sqlserver-extract-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],c={toc:u},k="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The SQLServer Extract Node reads data and incremental data from the SQLServer database. The following will describe how to set up the SQLServer extraction node."),(0,l.kt)("h2",{id:"supported-version"},"Supported Version"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/data_node/extract_node/sqlserver-cdc"},"SQLServer-cdc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver16"},"SQLServer"),": 2014\u30012016\u30012017\u30012019\u30012022")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"Introduce related SQLServer Extract Node dependencies through maven.\nOf course, you can also use INLONG to provide jar packages.(",(0,l.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"sort-connector-sqlserver-cdc"),")"),(0,l.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-sqlserver-cdc</artifactId>\n    <version>${r.Y.inLongVersion}</version>\n</dependency>\n`)),(0,l.kt)("h2",{id:"setup-sqlserver-extract-node"},"Setup SQLServer Extract Node"),(0,l.kt)("p",null,"SQLServer Extract Node needs to open related libraries and tables, the steps are as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Enable the CDC function for the database.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"if exists(select 1 from sys.databases where name='dbName' and is_cdc_enabled=0)\nbegin\n    exec sys.sp_cdc_enable_db\nend\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Check the database CDC capability status.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select is_cdc_enabled from sys.databases where name='dbName'\n")),(0,l.kt)("p",null,"note: 1 is running CDC of DB."),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Turn on CDC for the table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"IF EXISTS(SELECT 1 FROM sys.tables WHERE name='tableName' AND is_tracked_by_cdc = 0)\nBEGIN\n    EXEC sys.sp_cdc_enable_table\n        @source_schema = 'dbo', -- source_schema\n        @source_name = 'tableName', -- table_name\n        @capture_instance = NULL, -- capture_instance\n        @supports_net_changes = 1, -- supports_net_changes\n        @role_name = NULL, -- role_name\n        @index_name = NULL, -- index_name\n        @captured_column_list = NULL, -- captured_column_list\n        @filegroup_name = 'PRIMARY' -- filegroup_name\nEND\n")),(0,l.kt)("p",null,"note: The table must have a primary key or unique index."),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Check the table CDC capability status.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT is_tracked_by_cdc FROM sys.tables WHERE name='tableName'\n")),(0,l.kt)("p",null,"note: 1 is running CDC of table."),(0,l.kt)("h2",{id:"how-to-create-a-sqlserver-extract-node"},"How to create a SQLServer Extract Node"),(0,l.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,l.kt)("p",null,"The example below shows how to create a SQLServer Extract Node with ",(0,l.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a SQLServer table 'sqlserver_extract_node' in Flink SQL Cli\nFlink SQL> CREATE TABLE sqlserver_extract_node (\n     order_id INT,\n     order_date TIMESTAMP(0),\n     customer_name STRING,\n     price DECIMAL(10, 5),\n     product_id INT,\n     order_status BOOLEAN,\n     PRIMARY KEY(order_id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'sqlserver-cdc-inlong',\n     'hostname' = 'YourHostname',\n     'port' = 'port', --default:1433\n     'username' = 'YourUsername',\n     'password' = 'YourPassword',\n     'database-name' = 'YourDatabaseName',\n     'schema-name' = 'YourSchemaName' -- default:dbo\n     'table-name' = 'YourTableName');\n  \n-- Read snapshot and binlog from sqlserver_extract_node\nFlink SQL> SELECT * FROM sqlserver_extract_node;\n")),(0,l.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h2",{id:"sqlserver-extract-node-options"},"SQLServer Extract Node Options"),(0,l.kt)("div",{class:"highlight"},(0,l.kt)("table",{class:"colwidths-auto docutils"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{class:"text-left",style:{width:"10%"}},"Option"),(0,l.kt)("th",{class:"text-left",style:{width:"8%"}},"Required"),(0,l.kt)("th",{class:"text-left",style:{width:"7%"}},"Default"),(0,l.kt)("th",{class:"text-left",style:{width:"10%"}},"Type"),(0,l.kt)("th",{class:"text-left",style:{width:"65%"}},"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"connector"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Specify what connector to use, here should be 'sqlserver-cdc-inlong'.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"hostname"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"IP address or hostname of the SQLServer database.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"username"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Username to use when connecting to the SQLServer database.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"password"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Password to use when connecting to the SQLServer database.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"database-name"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Database name of the SQLServer database to monitor.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"schema-name"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"dbo"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Schema name of the SQLServer database to monitor.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"table-name"),(0,l.kt)("td",null,"required"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Table name of the SQLServer database to monitor.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"port"),(0,l.kt)("td",null,"optional"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"1433"),(0,l.kt)("td",null,"Integer"),(0,l.kt)("td",null,"Integer port number of the SQLServer database.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"server-time-zone"),(0,l.kt)("td",null,"optional"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"UTC"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,'The session time zone in database server, e.g. "Asia/Shanghai".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"inlong.metric.labels"),(0,l.kt)("td",null,"optional"),(0,l.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Inlong metric label, format of value is groupId=[groupId]&streamId=[streamId]&nodeId=[nodeId]."))))),(0,l.kt)("h2",{id:"available-metadata"},"Available Metadata"),(0,l.kt)("p",null,"The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition."),(0,l.kt)("table",{class:"colwidths-auto docutils"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{class:"text-left",style:{width:"15%"}},"Key"),(0,l.kt)("th",{class:"text-left",style:{width:"30%"}},"DataType"),(0,l.kt)("th",{class:"text-left",style:{width:"55%"}},"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.table_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the table that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.schema_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the schema that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.database_name"),(0,l.kt)("td",null,"STRING NOT NULL"),(0,l.kt)("td",null,"Name of the database that contain the row.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"meta.op_ts"),(0,l.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,l.kt)("td",null,"It indicates the time that the change was made in the database. ",(0,l.kt)("br",null),"If the record is read from snapshot of the table instead of the binlog, the value is always 0.")))),(0,l.kt)("p",null,"The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sqlserver_extract_node (\n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    schema_name STRING METADATA  FROM 'schema_name' VIRTUAL,\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    id INT NOT NULL\n) WITH (\n    'connector' = 'sqlserver-cdc-inlong',\n    'hostname' = 'localhost',\n    'port' = '1433',\n    'username' = 'sa',\n    'password' = 'password',\n    'database-name' = 'test',\n    'schema-name' = 'dbo',\n    'table-name' = 'worker'\n);\n")),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("div",{class:"wy-table-responsive"},(0,l.kt)("table",{class:"colwidths-auto docutils"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{class:"text-left"},"SQLServer type"),(0,l.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"char(n)"),(0,l.kt)("td",null,"CHAR(n)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"varchar(n)",(0,l.kt)("br",null),"nvarchar(n)",(0,l.kt)("br",null),"nchar(n)"),(0,l.kt)("td",null,"VARCHAR(n)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"text",(0,l.kt)("br",null),"ntext",(0,l.kt)("br",null),"xml"),(0,l.kt)("td",null,"STRING")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"decimal(p, s)",(0,l.kt)("br",null),"money",(0,l.kt)("br",null),"smallmoney"),(0,l.kt)("td",null,"DECIMAL(p, s)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"numeric"),(0,l.kt)("td",null,"NUMERIC")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"REAL",(0,l.kt)("br",null),"FLOAT",(0,l.kt)("br",null)),(0,l.kt)("td",null,"FLOAT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bit"),(0,l.kt)("td",null,"BOOLEAN")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"int"),(0,l.kt)("td",null,"INT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"tinyint"),(0,l.kt)("td",null,"TINYINT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"smallint"),(0,l.kt)("td",null,"SMALLINT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"time (n)"),(0,l.kt)("td",null,"TIME (n)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bigint"),(0,l.kt)("td",null,"BIGINT")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"date"),(0,l.kt)("td",null,"DATE")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"datetime2",(0,l.kt)("br",null),"datetime",(0,l.kt)("br",null),"smalldatetime"),(0,l.kt)("td",null,"TIMESTAMP(n)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"datetimeoffset"),(0,l.kt)("td",null,"TIMESTAMP_LTZ(3)"))))))}p.isMDXComponent=!0}}]);