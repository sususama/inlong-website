"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82074],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=i(n),s=r,u=y["".concat(p,".").concat(s)]||y[s]||m[s]||l;return n?a.createElement(u,g(g({ref:t},d),{},{components:n})):a.createElement(u,g({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:r,g[1]=o;for(var i=2;i<l;i++)g[i]=n[i];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62795:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"1.7.0"}},21651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>g,metadata:()=>p,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),l=n(62795);const g={title:"PostgreSQL-CDC",sidebar_position:8},o=void 0,p={unversionedId:"data_node/extract_node/postgresql-cdc",id:"version-1.7.0/data_node/extract_node/postgresql-cdc",title:"PostgreSQL-CDC",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.7.0/data_node/extract_node/postgresql-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/postgresql-cdc",permalink:"/zh-CN/docs/1.7.0/data_node/extract_node/postgresql-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/data_node/extract_node/postgresql-cdc.md",tags:[],version:"1.7.0",sidebarPosition:8,frontMatter:{title:"PostgreSQL-CDC",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Oracle-CDC",permalink:"/zh-CN/docs/1.7.0/data_node/extract_node/oracle-cdc"},next:{title:"Pulsar",permalink:"/zh-CN/docs/1.7.0/data_node/extract_node/pulsar"}},i={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7248\u672c",id:"\u652f\u6301\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u8bbe\u7f6e PostgreSQL \u670d\u52a1",id:"\u8bbe\u7f6e-postgresql-\u670d\u52a1",level:2},{value:"pgoutput",id:"pgoutput",level:3},{value:"decoderbufs",id:"decoderbufs",level:3},{value:"replica identity",id:"replica-identity",level:3},{value:"\u5982\u4f55\u521b\u5efa PostgreSQL Extract \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-postgresql-extract-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"PostgreSQL Extract \u8282\u70b9\u53c2\u6570",id:"postgresql-extract-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u53ef\u7528\u7684\u5143\u6570\u636e",id:"\u53ef\u7528\u7684\u5143\u6570\u636e",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],y={toc:d},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"PostgreSQL Extract")," \u8282\u70b9\u5141\u8bb8\u4ece PostgreSQL \u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u5feb\u7167\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002 \u672c\u6587\u6863\u63cf\u8ff0\u4e86\u5982\u4f55\u8bbe\u7f6e PostgreSQL Extract \u8282\u70b9\u4ee5\u5bf9 PostgreSQL \u6570\u636e\u5e93\u8fd0\u884c SQL \u67e5\u8be2\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7248\u672c"},"\u652f\u6301\u7248\u672c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9a71\u52a8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.7.0/data_node/extract_node/postgresql-cdc"},"PostgreSQL-CDC")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.postgresql.org"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")))),(0,r.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.yg)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e PostgreSQL Extract \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connector JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,r.yg)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-postgres-cdc</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"\u8bbe\u7f6e-postgresql-\u670d\u52a1"},"\u8bbe\u7f6e PostgreSQL \u670d\u52a1"),(0,r.yg)("p",null,"\u66f4\u6539\u6570\u636e\u6355\u83b7 (CDC) \u5141\u8bb8\u60a8\u8ddf\u8e2a PostgreSQL \u6570\u636e\u5e93\u4e2d\u7684\u66f4\u6539\u5e76\u5c06\u5176\u4f20\u64ad\u5230\u57fa\u4e8e\u5176\u9884\u5199\u65e5\u5fd7 (WAL) \u7684\u4e0b\u6e38\u6d88\u8d39\u8005\u3002\n\u60a8\u9700\u8981\u786e\u4fdd\u5c06\u4e0a\u6e38\u6570\u636e\u5e93\u914d\u7f6e\u4e3a\u652f\u6301\u903b\u8f91\u590d\u5236\u3002 \u5728\u4f7f\u7528 PostgreSQL \u8fde\u63a5\u5668\u76d1\u63a7 PostgreSQL \u670d\u52a1\u5668\u4e0a\u63d0\u4ea4\u7684\u66f4\u6539\u4e4b\u524d\uff0c\n\u51b3\u5b9a\u60a8\u6253\u7b97\u4f7f\u7528\u54ea\u4e2a\u903b\u8f91\u89e3\u7801\u63d2\u4ef6\u3002 \u5982\u679c\u60a8\u4e0d\u6253\u7b97\u4f7f\u7528\u672c\u673a ",(0,r.yg)("inlineCode",{parentName:"p"},"pgoutput")," \u903b\u8f91\u590d\u5236\u6d41\u652f\u6301\uff0c\u5219\u5fc5\u987b\u5b89\u88c5\u903b\u8f91\u89e3\u7801\n\u63d2\u4ef6\u5230 PostgreSQL \u670d\u52a1\u5668\u3002"),(0,r.yg)("h3",{id:"pgoutput"},"pgoutput"),(0,r.yg)("p",null,"pgoutput \u662f PostgreSQL 10+ \u4e2d\u7684\u6807\u51c6\u903b\u8f91\u89e3\u7801\u8f93\u51fa\u63d2\u4ef6\u3002 \u5b83\u7531 PostgreSQL \u793e\u533a\u7ef4\u62a4\uff0c\u5e76\u7531 PostgreSQL \u672c\u8eab\u7528\u4e8e\u903b\u8f91\u590d\u5236\u3002\n\u6b64\u63d2\u4ef6\u59cb\u7ec8\u5b58\u5728\uff0c\u56e0\u6b64\u65e0\u9700\u5b89\u88c5\u5176\u4ed6\u5e93\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u68c0\u67e5",(0,r.yg)("inlineCode",{parentName:"li"},"wal_level"),"\u914d\u7f6e\u8bbe\u7f6e\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW wal_level;\n")),(0,r.yg)("p",null,"\u9ed8\u8ba4\u503c\u4e3a\u526f\u672c\u3002 \u5bf9\u4e8e CDC\uff0c\u60a8\u9700\u8981\u5728\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6 (postgresql.conf) \u4e2d\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"logical"),"\u3002 \u8bf7\u8bb0\u4f4f\uff0c\u66f4\u6539 wal_level \u9700\u8981\u91cd\u65b0\u542f\u52a8 Postgres \u5b9e\u4f8b\uff0c\u5e76\u4e14\u53ef\u80fd\u4f1a\u5f71\u54cd\u6570\u636e\u5e93\u6027\u80fd\u3002"),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u8bf7\u5728 postgresql.conf \u6587\u4ef6\u4e2d\u6307\u5b9a\u4ee5\u4e0b\u5185\u5bb9\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"wal_level = logical \n")),(0,r.yg)("h3",{id:"decoderbufs"},"decoderbufs"),(0,r.yg)("p",null,"decoderbufs \u57fa\u4e8e Protobuf \u5e76\u7531 Debezium \u793e\u533a\u7ef4\u62a4\uff0c ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/debezium/postgres-decoderbufs"},"\u5b89\u88c5")," \u5b83\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u8981\u5728\u542f\u52a8\u65f6\u52a0\u8f7d\u63d2\u4ef6\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230 postgresql.conf \u6587\u4ef6\u4e2d\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"shared_preload_libraries = 'decoderbufs'\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u8bf7\u5728 postgresql.conf \u6587\u4ef6\u4e2d\u6307\u5b9a\u4ee5\u4e0b\u5185\u5bb9\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"wal_level = logical \n")),(0,r.yg)("h3",{id:"replica-identity"},"replica identity"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"REPLICA IDENTITY"),"\u662fPostgreSQL\u8868\u7ea7\u522b\u7684\u4e00\u4e2a\u8bbe\u7f6e\u53c2\u6570\uff0c\u5b83\u51b3\u5b9a\u4e86\u903b\u8f91\u89e3\u7801\u63d2\u4ef6\u5728\u6355\u83b7\u66f4\u65b0\u548c\u5220\u9664\u4e8b\u4ef6\u65f6\u83b7\u53d6\u8db3\u591f\u7684\u4fe1\u606f\u3002\u53ef\u4ee5\u4ece",(0,r.yg)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/stable/connectors/postgresql.html#postgresql-replica-identity"},"\u8fd9\u91cc"),"\u67e5\u770b\u66f4\u591a\u4fe1\u606f\u3002"),(0,r.yg)("p",null,"\u8bf7\u786e\u4fdd\u9700\u8981\u540c\u6b65\u7684\u8868\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"replica identity"),"\u7684\u7ea7\u522b\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"FULL"),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0bSQL\u4ee3\u7801\u67e5\u770b\u5e76\u4fee\u6539\u76f8\u5e94\u53c2\u6570\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u770b replica identity\nSELECT CASE relreplident\n  WHEN 'd' THEN 'default'\n  WHEN 'n' THEN 'nothing'\n  WHEN 'f' THEN 'full'\n  WHEN 'i' THEN 'index'\n  END AS replica_identity\nFROM pg_class\nWHERE oid = 'mytablename'::regclass;\n\n-- \u4fee\u6539 replica identity\nALTER TABLE mytablename REPLICA IDENTITY FULL;\n")),(0,r.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa-postgresql-extract-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa PostgreSQL Extract \u8282\u70b9"),(0,r.yg)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `postgresTable`(\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'postgres-cdc-inlong',\n  'hostname' = 'localhost',\n  'username' = 'postgres',\n  'password' = 'inlong',\n  'database-name' = 'postgres',\n  'schema-name' = 'public',\n  'port' = '5432',\n  'table-name' = 'user',\n  'decoding.plugin.name' = 'pgoutput',\n  'slot.name' = 'feaafacbaddadc'\n)\n")),(0,r.yg)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.yg)("h2",{id:"postgresql-extract-\u8282\u70b9\u53c2\u6570"},"PostgreSQL Extract \u8282\u70b9\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u8fd9\u662f\u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"td"},"postgres-cdc-inlong"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hostname"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL \u6570\u636e\u5e93\u7684 IP \u5730\u5740\u6216\u8005\u4e3b\u673a\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230 PostgreSQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u65f6\u8981\u4f7f\u7528\u7684 PostgreSQL \u6570\u636e\u5e93\u7684\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230 PostgreSQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u65f6\u4f7f\u7528\u7684\u5bc6\u7801\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema-name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8981\u76d1\u63a7\u7684 PostgreSQL \u6570\u636e\u5e93\u7684\u6a21\u5f0f\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8981\u76d1\u63a7\u7684 PostgreSQL \u6570\u636e\u5e93\u7684\u8868\u540d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"5432"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u7684\u6574\u6570\u7aef\u53e3\u53f7\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decoding.plugin.name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"decoderbufs"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u7684 Postgres \u903b\u8f91\u89e3\u7801\u63d2\u4ef6\u7684\u540d\u79f0\u3002 \u652f\u6301\u7684\u503c\u662f decoderbufs\u3001wal2json\u3001wal2json_rds\u3001wal2json_streaming\u3001wal2json_rds_streaming \u548c pgoutput\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"slot.name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"flink"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL \u903b\u8f91\u89e3\u7801\u69fd\u7684\u540d\u79f0\uff0c\u5b83\u662f\u4e3a\u4ece\u7279\u5b9a\u6570\u636e\u5e93/\u6a21\u5f0f\u7684\u7279\u5b9a\u63d2\u4ef6\u6d41\u5f0f\u4f20\u8f93\u66f4\u6539\u800c\u521b\u5efa\u7684\u3002 \u670d\u52a1\u5668\u4f7f\u7528\u6b64\u63d2\u69fd\u5c06\u4e8b\u4ef6\u6d41\u5f0f\u4f20\u8f93\u5230\u60a8\u6b63\u5728\u914d\u7f6e\u7684\u8fde\u63a5\u5668\u3002 \u63d2\u69fd\u540d\u79f0\u5fc5\u987b\u7b26\u5408 PostgreSQL \u590d\u5236\u63d2\u69fd\u547d\u540d\u89c4\u5219\uff0c\u5176\u4e2d\u89c4\u5b9a\uff1a\u201c\u6bcf\u4e2a\u590d\u5236\u63d2\u69fd\u90fd\u6709\u4e00\u4e2a\u540d\u79f0\uff0c\u53ef\u4ee5\u5305\u542b\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u4e0b\u5212\u7ebf\u5b57\u7b26\u3002\u201d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debezium.*"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c06 Debezium \u7684\u5c5e\u6027\u4f20\u9012\u7ed9\u7528\u4e8e\u4ece Postgres \u670d\u52a1\u5668\u6355\u83b7\u6570\u636e\u66f4\u6539\u7684 Debezium Embedded Engine\u3002 \u4f8b\u5982\uff1a\u201cdebezium.snapshot.mode\u201d=\u201cnever\u201d\u3002 \u67e5\u770b\u66f4\u591a\u5173\u4e8e ",(0,r.yg)("a",{parentName:"td",href:"https://debezium.io/documentation/reference/1.5/connectors/postgresql.html#postgresql-connector-properties"},"Debezium \u7684 Postgres \u8fde\u63a5\u5668\u5c5e\u6027"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"slot.name"),' \u5efa\u8bae\u4e3a\u4e0d\u540c\u7684\u8868\u8bbe\u7f6e\u4ee5\u907f\u514d\u6f5c\u5728\u7684 PSQLException: ERROR: replication slot "flink" is active for PID 974 error\u3002  '),(0,r.yg)("li",{parentName:"ul"},"PSQLException: ERROR: all replication slots are in use Hint: Free one or increase max_replication_slots. \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\u5220\u9664\u69fd\u3002  "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM pg_replication_slots;\n\n-- \u83b7\u53d6\u63d2\u69fd\u540d\u79f0\u4e3a flink\u3002 \u5220\u9664\u5b83\nSELECT pg_drop_replication_slot('flink');\n")),(0,r.yg)("h2",{id:"\u53ef\u7528\u7684\u5143\u6570\u636e"},"\u53ef\u7528\u7684\u5143\u6570\u636e"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u683c\u5f0f\u5143\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u8868\u5b9a\u4e49\u4e2d\u7684\u53ea\u8bfb (VIRTUAL) \u5217\u516c\u5f00\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u7684\u8868\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u7684\u6a21\u5f0f\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5305\u542b\u8be5\u884c\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"op_ts"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b83\u6307\u793a\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u66f4\u6539\u7684\u65f6\u95f4\u3002\u5982\u679c\u8bb0\u5f55\u662f\u4ece\u8868\u7684\u5feb\u7167\u800c\u4e0d\u662f\u66f4\u6539\u6d41\u4e2d\u8bfb\u53d6\u7684\uff0c\u5219\u8be5\u503c\u59cb\u7ec8\u4e3a 0\u3002")))),(0,r.yg)("p",null,"\u6269\u5c55\u7684 CREATE TABLE \u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528\u8fd9\u4e9b\u5143\u6570\u636e\u5b57\u6bb5\u7684\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresTable (\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    `name` STRING,\n    `age` INT\n) WITH (\n     'connector' = 'postgres-cdc-inlong',\n     'hostname' = 'localhost',\n     'username' = 'postgres',\n     'password' = 'inlong',\n     'database-name' = 'postgres',\n     'schema-name' = 'public',\n     'port' = '5432',\n     'table-name' = 'user',\n     'decoding.plugin.name' = 'pgoutput',\n     'slot.name' = 'feaafacbaddadc'\n);\n")),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"PostgreSQL \u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL \u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT ",(0,r.yg)("br",null)," INT2 ",(0,r.yg)("br",null)," SMALLSERIAL ",(0,r.yg)("br",null)," SERIAL2"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER ",(0,r.yg)("br",null)," SERIAL"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT ",(0,r.yg)("br",null)," BIGSERIAL"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(20, 0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL ",(0,r.yg)("br",null)," FLOAT4"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT8 ",(0,r.yg)("br",null)," DOUBLE PRECISION"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(p, s) ",(0,r.yg)("br",null)," DECIMAL(p, s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)]","WITHOUT TIMEZONE"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)][WITHOUT TIMEZONE]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR(n) ",(0,r.yg)("br",null)," CHARACTER(n) ",(0,r.yg)("br",null)," VARCHAR(n) ",(0,r.yg)("br",null)," CHARACTER VARYING(n) ",(0,r.yg)("br",null)," TEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTEA"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")))))}s.isMDXComponent=!0}}]);