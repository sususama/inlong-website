"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[49019],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),p=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=p(e.components);return n.createElement(g.Provider,{value:a},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),y=p(t),s=r,u=y["".concat(g,".").concat(s)]||y[s]||m[s]||l;return t?n.createElement(u,o(o({ref:a},i),{},{components:t})):n.createElement(u,o({ref:a},i))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=s;var d={};for(var g in a)hasOwnProperty.call(a,g)&&(d[g]=a[g]);d.originalType=e,d[y]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},49424:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const l={title:"\u603b\u89c8",sidebar_position:1},o=void 0,d={unversionedId:"data_node/load_node/overview",id:"version-1.11.0/data_node/load_node/overview",title:"\u603b\u89c8",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.11.0/data_node/load_node/overview.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/overview",permalink:"/zh-CN/docs/1.11.0/data_node/load_node/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/data_node/load_node/overview.md",tags:[],version:"1.11.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Iceberg",permalink:"/zh-CN/docs/1.11.0/data_node/extract_node/iceberg"},next:{title:"\u81ea\u4e3b\u6d88\u8d39",permalink:"/zh-CN/docs/1.11.0/data_node/load_node/auto_consumption"}},g={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u652f\u6301\u7684 Load \u8282\u70b9\u5217\u8868",id:"\u652f\u6301\u7684-load-\u8282\u70b9\u5217\u8868",level:2},{value:"\u652f\u6301\u7684 Flink \u7248\u672c\u5217\u8868",id:"\u652f\u6301\u7684-flink-\u7248\u672c\u5217\u8868",level:2},{value:"SQL API \u7684\u7528\u6cd5",id:"sql-api-\u7684\u7528\u6cd5",level:2}],i={toc:p},y="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.yg)("p",null,"Load \u8282\u70b9\u5217\u8868\u662f\u4e00\u7ec4\u57fa\u4e8e ",(0,r.yg)("a",{href:"https://flink.apache.org/"},"Apache Flink",(0,r.yg)("sup",null,"\xae"))," \u7684 Sink Connectors \u7528\u4e8e\u5c06\u6570\u636e\u52a0\u8f7d\u5230\u4e0d\u540c\u7684\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684-load-\u8282\u70b9\u5217\u8868"},"\u652f\u6301\u7684 Load \u8282\u70b9\u5217\u8868"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9a71\u52a8\u5305"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/kafka"},"Kafka")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Kafka"),": 0.10+"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/hbase"},"HBase")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://hbase.apache.org/"},"Hbase"),": 2.2.x"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/postgresql"},"PostgreSQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/oracle"},"Oracle")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,r.yg)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/mysql"},"MySQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/polardb/polardbx-sql"},"PolarDB X"),": 2.0.1"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/tdsql-postgresql"},"TDSQL-PostgreSQL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://cloud.tencent.com/document/product/1129"},"TDSQL-PostgreSQL"),": 10.17"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/greenplum"},"Greenplum")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://greenplum.org/"},"Greenplum"),": 4.x, 5.x, 6.x"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/elasticsearch"},"Elasticsearch")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.elastic.co/"},"Elasticsearch"),": 6.x, 7.x"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/clickhouse"},"ClickHouse")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://clickhouse.com/"},"ClickHouse"),": 20.7+"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 0.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/hive"},"Hive")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://hive.apache.org/"},"Hive"),": 1.x, 2.x, 3.x"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/sqlserver"},"SQLServer")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.microsoft.com/sql-server"},"SQLServer"),": 2012, 2014, 2016, 2017, 2019"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 7.2.2.jre8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/hdfs"},"HDFS")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://hadoop.apache.org/"},"HDFS"),": 2.x, 3.x"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/iceberg"},"Iceberg")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://iceberg.apache.org/"},"Iceberg"),": 0.13.1+"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.11.0/data_node/load_node/hudi"},"Hudi")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://hudi.apache.org/"},"Hudi"),": 0.12.x"),(0,r.yg)("td",{parentName:"tr",align:null},"None")))),(0,r.yg)("h2",{id:"\u652f\u6301\u7684-flink-\u7248\u672c\u5217\u8868"},"\u652f\u6301\u7684 Flink \u7248\u672c\u5217\u8868"),(0,r.yg)("p",null,"\u4e0b\u8868\u5c55\u793a\u4e86 InLong",(0,r.yg)("sup",null,"\xae")," Load \u8282\u70b9 \u548c Flink",(0,r.yg)("sup",null,"\xae")," \u7248\u672c\u4e4b\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"InLong",(0,r.yg)("sup",null,"\xae")," Load \u8282\u70b9\u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Flink",(0,r.yg)("sup",null,"\xae")," \u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("font",{color:"DarkCyan"},"1.2.0")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("font",{color:"MediumVioletRed"},"1.13.5"))))),(0,r.yg)("h2",{id:"sql-api-\u7684\u7528\u6cd5"},"SQL API \u7684\u7528\u6cd5"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/1.11.0/modules/sort/quick_start"},"\u90e8\u7f72 InLong Sort")),(0,r.yg)("li",{parentName:"ul"},"\u521b\u5efa\u6570\u636e\u8282\u70b9")),(0,r.yg)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html"},"Flink SQL Client")," \u521b\u5efa\u4e00\u4e2a MySQL Load \u8282\u70b9\u5e76\u52a0\u8f7d\u6570\u636e\u8fdb\u53bb\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa\u4e00\u4e2a MySQL Extract \u8282\u70b9\nCREATE TABLE mysql_extract_node (\n    id INT NOT NULL,\n    name STRING,\n    age INT,\n    weight DECIMAL(10,3),\n    PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n      'connector' = 'mysql-cdc-inlong',\n      'hostname' = 'YourHostname',\n      'port' = '3306',\n      'username' = 'YourUsername',\n      'password' = 'YourPassword',\n      'database-name' = 'YourDatabaseName',\n      'table-name' = 'YourTableName'\n      );\n-- \u521b\u5efa\u4e00\u4e2a MySQL Load \u8282\u70b9\nCREATE TABLE mysql_load_node (\n id INT NOT NULL,\n name STRING,\n age INT,\n weight DECIMAL(10,3),\n PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n 'connector' = 'jdbc-inlong',\n 'url' = 'jdbc:mysql://YourHostname:3306/YourDatabaseName',\n 'username' = 'YourUsername',\n 'password' = 'YourPassword',\n 'table-name' = 'YourTableName'\n);\n\nINSERT INTO mysql_load_node SELECT id, name, age, weight FROM mysql_extract_node;\n")))}m.isMDXComponent=!0}}]);