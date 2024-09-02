"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[95416],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),s=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(u.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,y=p["".concat(u,".").concat(g)]||p[g]||d[g]||l;return n?t.createElement(y,i(i({ref:a},c),{},{components:n})):t.createElement(y,i({ref:a},c))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65065:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=n(58168),r=(n(96540),n(15680));const l={title:"\u5b89\u88c5\u90e8\u7f72"},i=void 0,o={unversionedId:"modules/audit/quick_start",id:"modules/audit/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-audit \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7 sql/apacheinlongaudit_mysql.sql \u521d\u59cb\u5316\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/zh-CN/docs/next/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/audit/quick_start.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/next/modules/audit/configure"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/data_node/extract_node/overview"}},u={},s=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56-1",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8-1",level:3},{value:"Audit Service",id:"audit-service",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",level:3},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56-2",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8-2",level:3}],c={toc:s},p="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(p,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong-audit")," \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_mysql.sql")," \u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316 database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit_mysql.sql\n")),(0,r.yg)("p",null,"\u5982\u679c\u4f7f\u7528 StarRocks \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit_starrocks.sql")," \u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316 StarRocks database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit_starrocks.sql\n")),(0,r.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,r.yg)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.yg)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,r.yg)("h3",{id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217"},"\u914d\u7f6e\u6d88\u606f\u961f\u5217"),(0,r.yg)("p",null,"\u6d88\u606f\u961f\u5217\u670d\u52a1\u76ee\u524d\u53ef\u4ee5\u4f7f\u7528 Apache Pulsar\u3001Apache Kafka \u6216\u8005 InLong TubeMQ\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528 Pulsar\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 Pulsar Topic \u4fe1\u606f\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528 Kafka\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"li"},"conf/audit-proxy-kafka.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 Kafka Topic \u4fe1\u606f\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"agent1.sinks.kafka-sink-msg1.topic = inlong-audit\nagent1.sinks.kafka-sink-msg2.topic = inlong-audit\n")),(0,r.yg)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"# \u9ed8\u8ba4\u4f7f\u7528 pulsar \u4f5c\u4e3a\u6d88\u606f\u961f\u5217\uff0c\u52a0\u8f7d audit-proxy-pulsar.conf \u914d\u7f6e\u6587\u4ef6\nbash +x ./bin/proxy-start.sh [pulsar\uff5ckafka]\n")),(0,r.yg)("p",null,"Audit Proxy \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"10081"),"\u3002"),(0,r.yg)("h2",{id:"audit-store"},"Audit Store"),(0,r.yg)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/application.properties")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"# the MQ type for audit proxy: pulsar / kafka\naudit.config.proxy.type=pulsar\n\n# manger config\nmanager.hosts=127.0.0.1:8083\n\n# Get Kafka or Pulsar address from the cluster tag\ndefault.mq.cluster.tag=default_cluster\n\n# pulsar config\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=inlong-audit-subscription\naudit.pulsar.token=\naudit.pulsar.enable.auth=false\n\n# kafka config\naudit.kafka.topic=inlong-audit\naudit.kafka.topic.numPartitions=3\naudit.kafka.topic.replicationFactor=2\naudit.kafka.consumer.name=inlong-audit-consumer\naudit.kafka.group.id=audit-consumer-group\n\n# Generic jdbc storage\njdbc.driver=com.mysql.cj.jdbc.Driver\njdbc.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\njdbc.username=root\njdbc.password=inlong\n")),(0,r.yg)("h3",{id:"\u4f9d\u8d56-1"},"\u4f9d\u8d56"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,r.yg)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.yg)("h3",{id:"\u542f\u52a8-1"},"\u542f\u52a8"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,r.yg)("h2",{id:"audit-service"},"Audit Service"),(0,r.yg)("h3",{id:"\u914d\u7f6e-1"},"\u914d\u7f6e"),(0,r.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/audit-service.properties")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"mysql.jdbc.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useUnicode=true&rewriteBatchedStatements=true\nmysql.username=root\nmysql.password=inlong\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"(\u53ef\u9009) \u914d\u7f6e\u5ba1\u8ba1\u6570\u636e\u6e90\n\u5728 Audit Service \u670d\u52a1\u4f7f\u7528\u7684 audit_source_config \u8868\u4e2d\uff0c\u914d\u7f6e\u5ba1\u8ba1\u5b58\u50a8\u7684\u6570\u636e\u6e90\u3002\u9ed8\u8ba4\u548c Audit Service \u4f7f\u7528\u76f8\u540c\u7684 MySQL \u914d\u7f6e")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"(\u53ef\u9009) \u914d\u7f6e\u5ba1\u8ba1\u5ba1\u8ba1\u9879\n\u5728 Audit Service \u670d\u52a1\u4f7f\u7528\u7684 audit_id_config \u8868\u4e2d\uff0c\u914d\u7f6e\u9700\u8981 cache \u7684\u5ba1\u8ba1\u9879\u3002\u9ed8\u8ba4\u4f7f\u7528 Agent \u63a5\u6536\u6210\u529f\u3001Agent \u53d1\u9001\u6210\u529f\u3001DataProxy \u63a5\u6536\u6210\u529f\u3001DataProxy \u53d1\u9001\u6210\u529f"))),(0,r.yg)("h3",{id:"\u4f9d\u8d56-2"},"\u4f9d\u8d56"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,r.yg)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.yg)("h3",{id:"\u542f\u52a8-2"},"\u542f\u52a8"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/service-start.sh\n")),(0,r.yg)("p",null,"Audit Service \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"10080"),"\u3002"))}d.isMDXComponent=!0}}]);