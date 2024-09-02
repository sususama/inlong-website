"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2322],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>u});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),g=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},i=function(e){var a=g(e.components);return r.createElement(p.Provider,{value:a},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=g(t),m=n,u=s["".concat(p,".").concat(m)]||s[m]||y[m]||o;return t?r.createElement(u,l(l({ref:a},i),{},{components:t})):r.createElement(u,l({ref:a},i))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=e,d[s]="string"==typeof e?e:n,l[1]=d;for(var g=2;g<o;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27666:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>g});var r=t(58168),n=(t(96540),t(15680));const o={title:"Overview",sidebar_position:1},l=void 0,d={unversionedId:"data_node/load_node/overview",id:"version-1.11.0/data_node/load_node/overview",title:"Overview",description:"Overview",source:"@site/versioned_docs/version-1.11.0/data_node/load_node/overview.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/overview",permalink:"/docs/1.11.0/data_node/load_node/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/data_node/load_node/overview.md",tags:[],version:"1.11.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Iceberg",permalink:"/docs/1.11.0/data_node/extract_node/iceberg"},next:{title:"Auto Consumption",permalink:"/docs/1.11.0/data_node/load_node/auto_consumption"}},p={},g=[{value:"Overview",id:"overview",level:2},{value:"Supported Load Nodes",id:"supported-load-nodes",level:2},{value:"Supported Flink Versions",id:"supported-flink-versions",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:2}],i={toc:g},s="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(s,(0,r.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,"Load Nodes is a set of Sink Connectors based on ",(0,n.yg)("a",{href:"https://flink.apache.org/"},"Apache Flink",(0,n.yg)("sup",null,"\xae"))," for loading data to different storage systems. "),(0,n.yg)("h2",{id:"supported-load-nodes"},"Supported Load Nodes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,n.yg)("th",{parentName:"tr",align:null},"Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Driver"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/kafka"},"Kafka")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Kafka"),": 0.10+"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/hbase"},"HBase")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://hbase.apache.org/"},"HBase"),": 2.2.x"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/postgresql"},"PostgreSQL")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,n.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/oracle"},"Oracle")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,n.yg)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/mysql"},"MySQL")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/polardb/polardbx-sql"},"PolarDB X"),": 2.0.1"),(0,n.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/tdsql-postgresql"},"TDSQL-PostgreSQL")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://cloud.tencent.com/document/product/1129"},"TDSQL-PostgreSQL"),": 10.17"),(0,n.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/greenplum"},"Greenplum")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://greenplum.org/"},"Greenplum"),": 4.x, 5.x, 6.x"),(0,n.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/elasticsearch"},"Elasticsearch")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.elastic.co/"},"Elasticsearch"),": 6.x, 7.x"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/clickhouse"},"ClickHouse")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://clickhouse.com/"},"ClickHouse"),": 20.7+"),(0,n.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 0.3.1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/hive"},"Hive")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://hive.apache.org/"},"Hive"),": 1.x, 2.x, 3.x"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/sqlserver"},"SQLServer")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.microsoft.com/sql-server"},"SQLServer"),": 2012, 2014, 2016, 2017, 2019"),(0,n.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 7.2.2.jre8")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/hdfs"},"HDFS")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://hadoop.apache.org/"},"HDFS"),": 2.x, 3.x"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/iceberg"},"Iceberg")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://iceberg.apache.org/"},"Iceberg"),": 0.13.1+"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/1.11.0/data_node/load_node/hudi"},"Hudi")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://hudi.apache.org/"},"Hudi"),": 0.12.x"),(0,n.yg)("td",{parentName:"tr",align:null},"None")))),(0,n.yg)("h2",{id:"supported-flink-versions"},"Supported Flink Versions"),(0,n.yg)("p",null,"The following table shows the version mapping between InLong",(0,n.yg)("sup",null,"\xae")," Load Nodes and Flink",(0,n.yg)("sup",null,"\xae"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"InLong",(0,n.yg)("sup",null,"\xae")," Load Nodes Version"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Flink",(0,n.yg)("sup",null,"\xae")," Version"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("font",{color:"DarkCyan"},"1.2.0")),(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("font",{color:"MediumVioletRed"},"1.13.5"))))),(0,n.yg)("h2",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/modules/sort/quick_start"},"Deploy InLong Sort")),(0,n.yg)("li",{parentName:"ul"},"Create Data Node")),(0,n.yg)("p",null,"The example shows how to create a MySQL Load Node in ",(0,n.yg)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html"},"Flink SQL Client")," and load data to it."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"-- Creates a MySQL Extract Node\nCREATE TABLE mysql_extract_node (\n    id INT NOT NULL,\n    name STRING,\n    age INT,\n    weight DECIMAL(10,3),\n    PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n      'connector' = 'mysql-cdc-inlong',\n      'hostname' = 'YourHostname',\n      'port' = '3306',\n      'username' = 'YourUsername',\n      'password' = 'YourPassword',\n      'database-name' = 'YourDatabaseName',\n      'table-name' = 'YourTableName'\n      );\n-- Creates a MySQL Load Node\nCREATE TABLE mysql_load_node (\n id INT NOT NULL,\n name STRING,\n age INT,\n weight DECIMAL(10,3),\n PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n 'connector' = 'jdbc-inlong',\n 'url' = 'jdbc:mysql://YourHostname:3306/YourDatabaseName',\n 'username' = 'YourUsername',\n 'password' = 'YourPassword',\n 'table-name' = 'YourTableName'\n);\n\nINSERT INTO mysql_load_node SELECT id, name, age, weight FROM mysql_extract_node;\n")))}y.isMDXComponent=!0}}]);