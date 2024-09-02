"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[76717],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||y[u]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[s]="string"==typeof e?e:r,o[1]=g;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57734:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"1.7.0"}},33356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),l=n(57734);const o={title:"PostgreSQL",sidebar_position:13},g=void 0,i={unversionedId:"data_node/load_node/postgresql",id:"version-1.7.0/data_node/load_node/postgresql",title:"PostgreSQL",description:"Overview",source:"@site/versioned_docs/version-1.7.0/data_node/load_node/postgresql.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/postgresql",permalink:"/docs/1.7.0/data_node/load_node/postgresql",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/data_node/load_node/postgresql.md",tags:[],version:"1.7.0",sidebarPosition:13,frontMatter:{title:"PostgreSQL",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Oracle",permalink:"/docs/1.7.0/data_node/load_node/oracle"},next:{title:"SQLServer",permalink:"/docs/1.7.0/data_node/load_node/sqlserver"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a PostgreSQL Load Node",id:"how-to-create-a-postgresql-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"PostgreSQL Load Node Options",id:"postgresql-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],s={toc:p},y="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"PostgreSQL Load Node")," supports to write data into PostgreSQL database. This document describes how to set up the PostgreSQL Load\nNode to run SQL queries against PostgreSQL database."),(0,r.yg)("h2",{id:"supported-version"},"Supported Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Group Id"),(0,r.yg)("th",{parentName:"tr",align:null},"Artifact Id"),(0,r.yg)("th",{parentName:"tr",align:null},"JAR"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/1.7.0/data_node/load_node/postgresql"},"PostgreSQL")),(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql"),(0,r.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://jdbc.postgresql.org/download.html"},"Download"))))),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to set up the ",(0,r.yg)("inlineCode",{parentName:"p"},"PostgreSQL Load Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-jdbc</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"how-to-create-a-postgresql-load-node"},"How to create a PostgreSQL Load Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\n-- MySQL extract node\nCREATE TABLE `mysql_extract_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'mysql-cdc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/read',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- PostgreSQL load node\nCREATE TABLE `postgresql_load_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'jdbc-inlong',\n  'dialect-impl' = 'org.apache.inlong.sort.jdbc.dialect.PostgresDialect',\n  'url' = 'jdbc:postgresql://localhost:5432/write',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'public.user'\n)\n\n-- write data into postgresql\nINSERT INTO postgresql_load_table \nSELECT id, name , age FROM mysql_extract_table;  \n\n")),(0,r.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h2",{id:"postgresql-load-node-options"},"PostgreSQL Load Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'jdbc-inlong'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC database url.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of JDBC table to connect.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The class name of the JDBC driver to use to connect to this URL, if not set, it will automatically be derived from the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC user name. 'username' and 'password' must both be specified if any of them is specified.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC password.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"60s"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum timeout between retries. The timeout should be in second granularity and shouldn't be smaller than 1 second.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The max size of buffered records before flush. Can be set to zero to disable it.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"1s"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"The flush interval mills, over this time, asynchronous threads will flush data. Can be set to '0' to disable it. Note, 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"The max retry times if writing records to database failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Defines the parallelism of the JDBC sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.ignore.changelog"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Ignore all ",(0,r.yg)("inlineCode",{parentName:"td"},"RowKind"),", ingest them as ",(0,r.yg)("inlineCode",{parentName:"td"},"INSERT"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),".")))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"PostgreSQL type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT ",(0,r.yg)("br",null)," INT2 ",(0,r.yg)("br",null)," SMALLSERIAL ",(0,r.yg)("br",null)," SERIAL2"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER ",(0,r.yg)("br",null)," SERIAL"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT ",(0,r.yg)("br",null)," BIGSERIAL"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(20, 0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL ",(0,r.yg)("br",null)," FLOAT4"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT8 ",(0,r.yg)("br",null)," DOUBLE PRECISION"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(p, s) ",(0,r.yg)("br",null)," DECIMAL(p, s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)]","WITHOUT TIMEZONE"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)][WITHOUT TIMEZONE]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR(n) ",(0,r.yg)("br",null)," CHARACTER(n) ",(0,r.yg)("br",null)," VARCHAR(n) ",(0,r.yg)("br",null)," CHARACTER VARYING(n) ",(0,r.yg)("br",null)," TEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTEA"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")))))}u.isMDXComponent=!0}}]);