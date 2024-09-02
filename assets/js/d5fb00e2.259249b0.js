"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4951],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),g=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=g(n),u=r,m=p["".concat(d,".").concat(u)]||p[u]||y[u]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12349:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"1.13.0-SNAPSHOT"}},69793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(58168),r=(n(96540),n(15680)),l=n(12349);const i={title:"StarRocks",sidebar_position:17},o=void 0,d={unversionedId:"data_node/load_node/starrocks",id:"version-1.13.0/data_node/load_node/starrocks",title:"StarRocks",description:"Overview",source:"@site/versioned_docs/version-1.13.0/data_node/load_node/starrocks.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/starrocks",permalink:"/docs/data_node/load_node/starrocks",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/data_node/load_node/starrocks.md",tags:[],version:"1.13.0",sidebarPosition:17,frontMatter:{title:"StarRocks",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Doris",permalink:"/docs/data_node/load_node/doris"},next:{title:"Hudi",permalink:"/docs/data_node/load_node/hudi"}},g={},s=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Create StarRocks Load table",id:"create-starrocks-load-table",level:3},{value:"How to create a StarRocks Load Node",id:"how-to-create-a-starrocks-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"StarRocks Load Node Options",id:"starrocks-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],p={toc:s},y="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"StarRocks Load")," node supports writing data to the StarRocks database."),(0,r.yg)("li",{parentName:"ul"},"Two modes are supported for sink to StarRocks:\nSingle-sink for specify fixed database name and table name to sink.\nMulti-sink for custom database name and table name according to src format, which suitable for scenarios such as multi-table writing or whole database synchronization."),(0,r.yg)("li",{parentName:"ul"},"This document describes how to set up a StarRocks Load node to sink to StarRocks.")),(0,r.yg)("h2",{id:"supported-version"},"Supported Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("th",{parentName:"tr",align:null},"StarRocks version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/data_node/load_node/starrocks"},"StarRocks")),(0,r.yg)("td",{parentName:"tr",align:null},"2.0+")))),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to set up the StarRocks Load node, the dependency information needed to use a build automation tool\nsuch as Maven or SBT is provided below."),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-starrocks</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n## Prepare\n### Create MySql Extract table\n- For Single-sink: Create a table `cdc.cdc_mysql_source` in the MySQL database. The command is as follows:\n```sql\n[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456\nmysql> use cdc;\nDatabase changed\nmysql> CREATE TABLE `cdc_mysql_source` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `name` varchar(64) DEFAULT NULL,\n       `dr` tinyint(3) DEFAULT 0,\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into cdc_mysql_source values(1, 'zhangsan', 0),(2, 'lisi', 0),(3, 'wangwu', 0);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from cdc_mysql_source;\n+----+----------+----+\n| id | name     | dr |\n+----+----------+----+\n|  1 | zhangsan |  0 |\n|  2 | lisi     |  0 |\n|  3 | wangwu   |  0 |\n+----+----------+----+\n3 rows in set (0.07 sec)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For Multi-sink: Create tables ",(0,r.yg)("inlineCode",{parentName:"li"},"user_db.user_id_name"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"user_db.user_id_score")," in the MySQL database. The command is as follows:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456\nmysql> use user_db;\nDatabase changed\nmysql> CREATE TABLE `user_id_name` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `name` varchar(64) DEFAULT NULL\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> CREATE TABLE `user_id_score` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `score` double default 0,\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into user_id_name values(1001, 'lily'),(1002, 'tom'),(1003, 'alan');\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0 \n\nmysql> insert into user_id_score values(1001, 99),(1002, 96),(1003, 98);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0 \n\nmysql> select * from user_id_name;\n+------+--------+\n|  id  | name   |\n+------+--------+\n| 1001 | lily   |\n| 1002 | tom    |\n| 1003 | alan   |\n+----+----------+\n3 rows in set (0.07 sec)    \n\nmysql> select * from user_id_score;\n+------+------+\n|  id  | name |\n+------+------+\n| 1001 | 99   |\n| 1002 | 96   |\n| 1003 | 98   |\n+----+--------+\n3 rows in set (0.07 sec)  \n")),(0,r.yg)("h3",{id:"create-starrocks-load-table"},"Create StarRocks Load table"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For Single-sink: Create a table ",(0,r.yg)("inlineCode",{parentName:"li"},"cdc.cdc_starrocks_sink")," in the StarRocks database. The command is as follows:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password\nmysql> use cdc;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\nDatabase changed\n\nmysql> CREATE TABLE `cdc_starrocks_sink` (\n       `id` int(11) NOT NULL COMMENT "user id",\n       `name` varchar(50) NOT NULL COMMENT "user name",\n       `dr` tinyint(4) NULL COMMENT "delete tag"\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For Multi-sink: Create tables ",(0,r.yg)("inlineCode",{parentName:"li"},"user_db.starrocks_user_id_name"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"user_db.starrocks_user_id_score")," in the StarRocks database. The command is as follows:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password\nmysql> use user_db;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\nDatabase changed\n\nmysql> CREATE TABLE `starrocks_user_id_name` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `name` varchar(50) NOT NULL COMMENT "\u6635\u79f0"\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n\nmysql> CREATE TABLE `starrocks_user_id_score` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `score` double default 0\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n')),(0,r.yg)("h2",{id:"how-to-create-a-starrocks-load-node"},"How to create a StarRocks Load Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For Single-sink: StarRocks load")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/\nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n[INFO] Session property has been set.\n\nFlink SQL> SET 'table.dynamic-table-options.enabled' = 'true';\n[INFO] Session property has been set.\n\nFlink SQL> CREATE TABLE cdc_mysql_source (\n    >   id int\n    >   ,name VARCHAR\n    >   ,dr TINYINT\n    >   ,PRIMARY KEY (id) NOT ENFORCED\n    > ) WITH (\n    >  'connector' = 'mysql-cdc-inlong',\n    >  'hostname' = 'localhost',\n    >  'port' = '3306',\n    >  'username' = 'root',\n    >  'password' = '123456',\n    >  'database-name' = 'cdc',\n    >  'table-name' = 'cdc_mysql_source'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> CREATE TABLE cdc_starrocks_sink (\n    > id INT,\n    > name STRING,\n    > dr TINYINT\n    > ) WITH (\n    >  'connector' = 'starrocks-inlong',\n    >  'fenodes' = 'localhost:8030',\n    >  'table.identifier' = 'cdc.cdc_starrocks_sink',\n    >  'username' = 'username',\n    >  'password' = 'password',\n    >  'sink.properties.format' = 'json',\n    >  'sink.properties.strip_outer_array' = 'true'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 5f89691571d7b3f3ca446589e3d0c3d3\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For Single-sink: StarRocks load")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/\nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n[INFO] Session property has been set.\n\nFlink SQL> SET 'table.dynamic-table-options.enabled' = 'true';\n[INFO] Session property has been set.\n\nFlink SQL> CREATE TABLE cdc_mysql_source (\n    >   id int\n    >   ,name VARCHAR\n    >   ,dr TINYINT\n    >   ,PRIMARY KEY (id) NOT ENFORCED\n    > ) WITH (\n    >  'connector' = 'mysql-cdc-inlong',\n    >  'hostname' = 'localhost',\n    >  'port' = '3306',\n    >  'username' = 'root',\n    >  'password' = '123456',\n    >  'database-name' = 'test',\n    >  'table-name' = 'cdc_mysql_source'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> CREATE TABLE cdc_starrocks_sink (\n    > id INT,\n    > name STRING,\n    > dr TINYINT\n    > ) WITH (\n    >  'connector' = 'starrocks-inlong',\n    >  'fenodes' = 'localhost:8030',\n    >  'username' = 'username',\n    >  'password' = 'password',\n    >  'sink.multiple.enable' = 'true',\n    >  'sink.multiple.format' = 'canal-json',\n    >  'sink.multiple.database-pattern' = '${database}',\n    >  'sink.multiple.table-pattern' = 'starrocks_${table}'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 30feaa0ede92h6b6e25ea0cfda26df5e\n")),(0,r.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h2",{id:"starrocks-load-node-options"},"StarRocks Load Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify which connector to use, valid values are: ",(0,r.yg)("inlineCode",{parentName:"td"},"starrocks-inlong"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc-url"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"this will be used to execute queries in starrocks.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"load-url"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"fe_ip:http_port;fe_ip:http_port separated with ';', which would be used to do the batch sinking.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"starrocks database name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"starrocks table name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"starrocks connecting username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"starrocks connecting password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.semantic"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"at-least-once"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"at-least-once or exactly-once(flush at checkpoint only and options like sink.buffer-flush.* won't work either).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.version"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"AUTO"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The version of implementaion for sink exactly-once. Only availible for connector 1.2.4+. If V2, use StarRocks' stream load transaction interface which requires StarRocks 2.4+. If V1, use stream load non-transaction interface. If AUTO, connector will choose the stream load transaction interface automatically if the StarRocks supports the feature, otherwise choose non-transaction interface.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"94371840(90M)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"the max batching size of the serialized data, range: ","[64MB, 10GB]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"500000"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"the max batching rows, range: ","[64,000, 5000,000]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval-ms"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"300000"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"the flushing time interval, range: ","[1000ms, 3600000ms]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"max retry times of the stream load request, range: ","[0, 10]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.connect.timeout-ms"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Timeout in millisecond for connecting to the load-url, range: ","[100, 60000]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.properties.format"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"CSV"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The file format of data loaded into starrocks. Valid values: CSV and JSON. Default value: CSV.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"NONE"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"the stream load properties like 'sink.properties.columns' = 'k1, k2, k3',details in STREAM LOAD. Since 2.4, the flink-connector-starrocks supports partial updates for Primary Key model.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.properties.ignore_json_size"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"ignore the batching size (100MB) of json data")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Determine whether to support multiple sink writing, default is ",(0,r.yg)("inlineCode",{parentName:"td"},"false"),". when ",(0,r.yg)("inlineCode",{parentName:"td"},"sink.multiple.enable")," is ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", need ",(0,r.yg)("inlineCode",{parentName:"td"},"sink.multiple.format"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"sink.multiple.database-pattern"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"sink.multiple.table-pattern")," be correctly set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.format"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The format of multiple sink, it represents the real format of the raw binary data. can be ",(0,r.yg)("inlineCode",{parentName:"td"},"canal-json")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"debezium-json")," at present. See ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/inlong-website/blob/master/docs/data_node/load_node/kafka.md"},"kafka -- Dynamic Topic Extraction")," for more details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.database-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Extract database name from the raw binary data, this is only used in the multiple sink writing scenario.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.table-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Extract table name from the raw binary data, this is only used in the multiple sink writing scenario.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.schema-update.policy"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"If sink data fields do not match starrocks table, such as table does not exsit or string data is over length, starrocks server will throw an exception.",(0,r.yg)("br",null),(0,r.yg)("br",null)," When this option is ",(0,r.yg)("inlineCode",{parentName:"td"},"THROW_WITH_STOP"),", the exception will be thrown up to flink framework, flink will restart task automatically, trying to resume the task.",(0,r.yg)("br",null),(0,r.yg)("br",null)," When this option is ",(0,r.yg)("inlineCode",{parentName:"td"},"STOP_PARTIAL"),", starrocks connector will stop writing into this table, other tables are written normally. The exception will be logging but not thrown up.",(0,r.yg)("br",null),(0,r.yg)("br",null)," When this option is ",(0,r.yg)("inlineCode",{parentName:"td"},"LOG_WITH_IGNORE"),", starrocks connector only log the error, not throw up. StarRocks connector will try to write to starrocks server again when receiving new source data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.ignore"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"When writing data into starrocks table, errors may be thrown by starrocks server as table does not exist or data is over length. ",(0,r.yg)("br",null),(0,r.yg)("br",null)," When this option is ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", and ",(0,r.yg)("inlineCode",{parentName:"td"},"dirty.side-output.*")," properties are configed correctly, dirty data can be written to Amazon S3 or Tencent Colud COS storage. Dirty data metrics will also be collected automatically. ",(0,r.yg)("br",null),(0,r.yg)("br",null)," When this option is ",(0,r.yg)("inlineCode",{parentName:"td"},"false"),", only dirty data metrics will be collected, but dirty data will not be archived.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"When this option is ",(0,r.yg)("inlineCode",{parentName:"td"},"ture")," and other options about S3 or COS is configed correctly, dirty data archiving will works. When ",(0,r.yg)("inlineCode",{parentName:"td"},"false"),", dirty data archiving will not work.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.connector"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"log")," are supported now.",(0,r.yg)("br",null),(0,r.yg)("br",null)," When ",(0,r.yg)("inlineCode",{parentName:"td"},"log"),", starrocks connector only log the dirty data, not archive data.",(0,r.yg)("br",null),(0,r.yg)("br",null)," When ",(0,r.yg)("inlineCode",{parentName:"td"},"s3"),", starrocks connector can write dirty data to S3 or COS.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.bucket"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The bucket name of S3 or COS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.endpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The endpoint of S3 or COS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.key"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The key of S3 or COS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.region"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The region of S3 or COS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.line-delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The line delimiter of dirty data")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.field-delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The field delimiter of dirty data")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.secret-key-id"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The secret key of S3 or COS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.s3.access-key-id"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The access key of S3 or COS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.format"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The format of dirty data archiving, supports ",(0,r.yg)("inlineCode",{parentName:"td"},"json")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"csv"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.log-tag"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The log tag of dirty data. StarRocks connector uses lags to distinguish which starrocks database and table the dirty data will be written to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The file name of drity data which written to S3 or COS.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirty.side-output.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optinal"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Every dirty data line contains label and business data fields. Label is in front, and business data is at end.")))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Flink type"),(0,r.yg)("th",{parentName:"tr",align:null},"StarRocks type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_WITHOUT_TIME_ZONE(N)"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_WITH_LOCAL_TIME_ZONE(N)"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","T",">"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","T",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP","<","KT,VT",">"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / JSON STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROW","<","arg T...",">"),(0,r.yg)("td",{parentName:"tr",align:null},"JSON / JSON STRING")))),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/blob/main/README.md"},"flink-connector-starrocks")," for more details."))}u.isMDXComponent=!0}}]);