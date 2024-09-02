"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[61832],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=i,y=d["".concat(u,".").concat(g)]||d[g]||p[g]||r;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},80186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(58168),i=(t(96540),t(15680));const r={title:"Deployment"},o=void 0,l={unversionedId:"modules/audit/quick_start",id:"version-1.7.0/modules/audit/quick_start",title:"Deployment",description:"All deploying files at inlong-audit directory, if you use MySQL to store audit data, you need to first create the database through sql/apacheinlongaudit.sql.",source:"@site/versioned_docs/version-1.7.0/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/docs/1.7.0/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/modules/audit/quick_start.md",tags:[],version:"1.7.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/1.7.0/modules/audit/configure"},next:{title:"Overview",permalink:"/docs/1.7.0/data_node/extract_node/overview"}},u={},s=[{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"Configure MessageQueue",id:"configure-messagequeue",level:3},{value:"Start",id:"start",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"Configure",id:"configure",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Start",id:"start-1",level:3}],c={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"All deploying files at ",(0,i.yg)("inlineCode",{parentName:"p"},"inlong-audit")," directory, if you use MySQL to store audit data, you need to first create the database through ",(0,i.yg)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit.sql\n")),(0,i.yg)("p",null,"If you use ClickHouse to store audit data, you need to first create the database through ",(0,i.yg)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_clickhouse.sql"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"# initialize database\nclickhouse client -u DB_USER --password DB_PASSWD < sql/apache_inlong_audit_clickhouse.sql\n")),(0,i.yg)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,i.yg)("h3",{id:"configure-messagequeue"},"Configure MessageQueue"),(0,i.yg)("p",null,"You can choose Apache Pulsar, Apache Kafka or InLong TubeMQ as your MessageQueue service:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If using Pulsar, the configuration file is ",(0,i.yg)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),". Change the Pulsar Topic info.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If using TubeMQ, the configuration file is ",(0,i.yg)("inlineCode",{parentName:"li"},"conf/audit-proxy-tube.conf"),". Change the TubeMQ Topic info.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.tube-sink-msg1.topic = inlong-audit\nagent1.sinks.tube-sink-msg2.topic = inlong-audit\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If using Kafka, the configuration file is ",(0,i.yg)("inlineCode",{parentName:"li"},"conf/audit-proxy-kafka.conf"),". Change the Kafka Topic info.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.kafka-sink-msg1.topic = inlong-audit\nagent1.sinks.kafka-sink-msg2.topic = inlong-audit\n")),(0,i.yg)("h3",{id:"start"},"Start"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Shell"},"# By default, pulsar is used as the MessageQueue, and the audit-proxy-pulsar.conf configuration file is loaded.\nbash +x ./bin/proxy-start.sh [pulsar\uff5ctube\uff5ckafka]\n")),(0,i.yg)("h2",{id:"audit-store"},"Audit Store"),(0,i.yg)("h3",{id:"configure"},"Configure"),(0,i.yg)("p",null,"The configuration file  is ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/application.properties"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Shell"},"# proxy.type: pulsar / tube / kafka\naudit.config.proxy.type=pulsar\n\n# store.server: mysql / elasticsearch / clickhouse \naudit.config.store.mode=mysql\n\n# manger config\nmanager.hosts=127.0.0.1:8083\nproxy.cluster.tag=default_cluster\n\n# audit pulsar config (optional)\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n\n# audit tube config (optional)\naudit.tube.topic=inlong-audit\naudit.tube.consumer.group.name=inlong-audit-consumer\n\n# kafka config (optional)\naudit.kafka.topic=inlong-audit\naudit.kafka.consumer.name=inlong-audit-consumer\naudit.kafka.group.id=audit-consumer-group\n\n# mysql config\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n\n# es config (optional)\nelasticsearch.host=127.0.0.1\nelasticsearch.port=9200\n\n# clickhouse config (optional)\nclickhouse.driver=ru.yandex.clickhouse.ClickHouseDriver\nclickhouse.url=jdbc:clickhouse://127.0.0.1:8123/default\nclickhouse.username=default\nclickhouse.password=default\n")),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,i.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into ",(0,i.yg)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,i.yg)("h3",{id:"start-1"},"Start"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,i.yg)("p",null,"The default listen port is ",(0,i.yg)("inlineCode",{parentName:"p"},"10081"),"."))}p.isMDXComponent=!0}}]);