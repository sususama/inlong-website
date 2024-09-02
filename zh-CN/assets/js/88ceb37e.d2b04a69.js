"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37938],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),c=p(a),s=n,m=c["".concat(i,".").concat(s)]||c[s]||y[s]||l;return a?r.createElement(m,o(o({ref:t},g),{},{components:a})):r.createElement(m,o({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[c]="string"==typeof e?e:n,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},63311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={title:"\u603b\u89c8",sidebar_position:1},o=void 0,d={unversionedId:"data_node/extract_node/overview",id:"version-1.10.0/data_node/extract_node/overview",title:"\u603b\u89c8",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.10.0/data_node/extract_node/overview.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/overview",permalink:"/zh-CN/docs/1.10.0/data_node/extract_node/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/data_node/extract_node/overview.md",tags:[],version:"1.10.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.10.0/modules/audit/quick_start"},next:{title:"\u81ea\u52a8\u63a8\u9001",permalink:"/zh-CN/docs/1.10.0/data_node/extract_node/auto_push"}},i={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u652f\u6301\u7684 Extract \u8282\u70b9\u5217\u8868",id:"\u652f\u6301\u7684-extract-\u8282\u70b9\u5217\u8868",level:2},{value:"\u652f\u6301\u7684 Flink \u7248\u672c\u5217\u8868",id:"\u652f\u6301\u7684-flink-\u7248\u672c\u5217\u8868",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:2}],g={toc:p},c="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.yg)("p",null,"Extract \u8282\u70b9\u5217\u8868\u662f\u4e00\u7ec4\u57fa\u4e8e ",(0,n.yg)("a",{href:"https://flink.apache.org/"},"Apache Flink",(0,n.yg)("sup",null,"\xae"))," \u7684 Source Connectors \u7528\u4e8e\u4ece\u4e0d\u540c\u7684\u6e90\u7cfb\u7edf\u62bd\u53d6\u6570\u636e\u3002"),(0,n.yg)("h2",{id:"\u652f\u6301\u7684-extract-\u8282\u70b9\u5217\u8868"},"\u652f\u6301\u7684 Extract \u8282\u70b9\u5217\u8868"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,n.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,n.yg)("th",{parentName:"tr",align:null},"\u9a71\u52a8\u5305"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.10.0/data_node/extract_node/kafka"},"Kafka")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Kafka"),": 0.10+"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.10.0/data_node/extract_node/pulsar"},"Pulsar")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Pulsar"),": 2.8.x+"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.10.0/data_node/extract_node/mongodb-cdc"},"MongoDB-CDC")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.mongodb.com"},"MongoDB"),": 3.6, 4.x, 5.0"),(0,n.yg)("td",{parentName:"tr",align:null},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.10.0/data_node/extract_node/mysql-cdc"},"MySQL-CDC")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.yg)("br",null),(0,n.yg)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/polardb/polardbx-sql"},"PolarDB X"),": 2.0.1"),(0,n.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.10.0/data_node/extract_node/oracle-cdc"},"Oracle-CDC")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,n.yg)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.10.0/data_node/extract_node/postgresql-cdc"},"PostgreSQL-CDC")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.postgresql.org"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,n.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.10.0/data_node/extract_node/sqlserver-cdc"},"SQLServer-CDC")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.microsoft.com/sql-server"},"SQLServer"),": 2012, 2014, 2016, 2017, 2019"),(0,n.yg)("td",{parentName:"tr",align:null},"None")))),(0,n.yg)("h2",{id:"\u652f\u6301\u7684-flink-\u7248\u672c\u5217\u8868"},"\u652f\u6301\u7684 Flink \u7248\u672c\u5217\u8868"),(0,n.yg)("p",null,"\u4e0b\u8868\u5c55\u793a\u4e86 InLong",(0,n.yg)("sup",null,"\xae")," Extract \u8282\u70b9 \u548c Flink",(0,n.yg)("sup",null,"\xae")," \u7248\u672c\u4e4b\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"InLong",(0,n.yg)("sup",null,"\xae")," Extract \u8282\u70b9\u7248\u672c"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Flink",(0,n.yg)("sup",null,"\xae")," \u7248\u672c"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("font",{color:"DarkCyan"},"1.2.0")),(0,n.yg)("td",{parentName:"tr",align:"center"},(0,n.yg)("font",{color:"MediumVioletRed"},"1.13.5"))))),(0,n.yg)("h2",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/zh-CN/docs/1.10.0/modules/sort/quick_start"},"\u90e8\u7f72 InLong Sort")),(0,n.yg)("li",{parentName:"ul"},"\u521b\u5efa\u6570\u636e\u8282\u70b9")),(0,n.yg)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u5728 ",(0,n.yg)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html"},"Flink SQL Client")," \u521b\u5efa MySQL Extract \u8282\u70b9\uff0c\u5e76\u4ece\u4e2d\u67e5\u8be2\u6570\u636e\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa\u4e00\u4e2a MySQL Extract \u8282\u70b9\nCREATE TABLE mysql_extract_node (\n id INT NOT NULL,\n name STRING,\n age INT,\n weight DECIMAL(10,3),\n PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n 'connector' = 'mysql-cdc-inlong',\n 'hostname' = 'YourHostname',\n 'port' = '3306',\n 'username' = 'YourUsername',\n 'password' = 'YourPassword',\n 'database-name' = 'YourDatabaseName',\n 'table-name' = 'YourTableName'\n);\n\nSELECT id, name, age, weight FROM mysql_extract_node;\n")))}y.isMDXComponent=!0}}]);