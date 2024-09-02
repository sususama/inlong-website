"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[72023],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,m=u["".concat(o,".").concat(p)]||u[p]||g[p]||i;return t?n.createElement(m,s(s({ref:a},d),{},{components:t})):n.createElement(m,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12151:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const i={title:"Kafka Example",sidebar_position:3},s=void 0,l={unversionedId:"quick_start/data_ingestion/mysql_kafka_clickhouse_example",id:"version-1.13.0/quick_start/data_ingestion/mysql_kafka_clickhouse_example",title:"Kafka Example",description:"Here we use an example to introduce how to use Apache InLong creating MySQL -> Kafka -> ClickHouse data ingestion.",source:"@site/versioned_docs/version-1.13.0/quick_start/data_ingestion/mysql_kafka_clickhouse_example.md",sourceDirName:"quick_start/data_ingestion",slug:"/quick_start/data_ingestion/mysql_kafka_clickhouse_example",permalink:"/docs/quick_start/data_ingestion/mysql_kafka_clickhouse_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/quick_start/data_ingestion/mysql_kafka_clickhouse_example.md",tags:[],version:"1.13.0",sidebarPosition:3,frontMatter:{title:"Kafka Example",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pulsar Example",permalink:"/docs/quick_start/data_ingestion/file_pulsar_clickhouse_example"},next:{title:"MySQL to ClickHouse Example",permalink:"/docs/quick_start/data_sync/mysql_clickhouse_example"}},o={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Install InLong",id:"install-inlong",level:3},{value:"Install ClickHouse",id:"install-clickhouse",level:3},{value:"Install Kafka",id:"install-kafka",level:3},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Kafka Cluster",id:"register-kafka-cluster",level:3},{value:"Register Clickhouse DataNodes",id:"register-clickhouse-datanodes",level:3},{value:"Create Task",id:"create-task",level:2},{value:"Create Data Streams Group",id:"create-data-streams-group",level:3},{value:"Create Data Stream",id:"create-data-stream",level:3},{value:"Create Data Source",id:"create-data-source",level:3},{value:"Create Data Sink",id:"create-data-sink",level:3},{value:"Approve Data Stream",id:"approve-data-stream",level:3},{value:"Test Data",id:"test-data",level:2},{value:"Send Data",id:"send-data",level:3},{value:"Verify Data",id:"verify-data",level:3},{value:"Questions",id:"questions",level:2},{value:"Task Configuration Failed",id:"task-configuration-failed",level:3},{value:"The script for sending data",id:"the-script-for-sending-data",level:3}],d={toc:c},u="wrapper";function g(e){let{components:a,...i}=e;return(0,r.yg)(u,(0,n.A)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Here we use an example to introduce how to use Apache InLong creating ",(0,r.yg)("inlineCode",{parentName:"p"},"MySQL -> Kafka -> ClickHouse")," data ingestion."),(0,r.yg)("h2",{id:"deployment"},"Deployment"),(0,r.yg)("h3",{id:"install-inlong"},"Install InLong"),(0,r.yg)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/deployment/docker"},"Docker Deployment")," (Recommended)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/deployment/bare_metal"},"Bare Metal Deployment"))),(0,r.yg)("h3",{id:"install-clickhouse"},"Install ClickHouse"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8\n")),(0,r.yg)("h3",{id:"install-kafka"},"Install Kafka"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Prepare zookeeper for Kafka\ndocker run -d --name zookeeper -p 2181:2181 -t wurstmeister/zookeeper\n# Install Kafka \ndocker run -d --name kafka -p 9092:9092 -e KAFKA_BROKER_ID=0 -e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 --link zookeeper -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 -t wurstmeister/kafka\n")),(0,r.yg)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.yg)("p",null,"When all containers are successfully started, you can access the InLong dashboard address http://localhost, and use the following default account to log in."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.yg)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,r.yg)("p",null,"Click ","[Clusters]"," -> ","[ClusterTags]"," -> ","[Create]"," on the page to specify the cluster label name and person in charge.\n",(0,r.yg)("img",{alt:"Create Cluster label",src:t(1400).A,width:"515",height:"328"})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,r.yg)("h3",{id:"register-kafka-cluster"},"Register Kafka Cluster"),(0,r.yg)("p",null,"Click ","[Clusters]"," -> ","[Create]"," on the page to register Kafka Cluster.\n",(0,r.yg)("img",{alt:"Create kafka cluster",src:t(13619).A,width:"642",height:"584"})),(0,r.yg)("h3",{id:"register-clickhouse-datanodes"},"Register Clickhouse DataNodes"),(0,r.yg)("p",null,"Click ","[DataNodes]"," -> ","[Create]"," on the page to register ClickHouse DataNodes.\n",(0,r.yg)("img",{alt:"Create kafka cluster",src:t(39952).A,width:"891",height:"655"})),(0,r.yg)("h2",{id:"create-task"},"Create Task"),(0,r.yg)("h3",{id:"create-data-streams-group"},"Create Data Streams Group"),(0,r.yg)("p",null,"Click ","[Ingestion]"," -> ","[Create]",", input ID and select Kafka MQ Type.\n",(0,r.yg)("img",{alt:"Create datastream",src:t(34539).A,width:"2382",height:"1166"})),(0,r.yg)("h3",{id:"create-data-stream"},"Create Data Stream"),(0,r.yg)("p",null,"Click ","[Next]"," -> ","[Create]",", config data stream.\n",(0,r.yg)("img",{alt:"Create datastream",src:t(99156).A,width:"1237",height:"893"})),(0,r.yg)("h3",{id:"create-data-source"},"Create Data Source"),(0,r.yg)("p",null,"Click ","[Sources create]"," -> ","[MySQL]",", config data source information.\n",(0,r.yg)("img",{alt:"Create datastream",src:t(66886).A,width:"961",height:"980"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Please create ",(0,r.yg)("inlineCode",{parentName:"p"},"test_mysql_db.test_mysql_table")," database and table, it's schema is:\nCREATE TABLE test_mysql_db.test_mysql_table (\nid INT PRIMARY KEY,\nname VARCHAR(50)\n);")),(0,r.yg)("h3",{id:"create-data-sink"},"Create Data Sink"),(0,r.yg)("p",null,"Click ","[Sinks create]"," -> ","[ClickHouse]",", input Name, DbName, TableName and select created ck DataNode and so on, then click ","[save]",".\n",(0,r.yg)("img",{alt:"Create data object",src:t(94400).A,width:"1493",height:"958"})),(0,r.yg)("h3",{id:"approve-data-stream"},"Approve Data Stream"),(0,r.yg)("p",null,"Click ","[Approval]"," -> ","[MyApproval]"," -> ","[Detail]"," -> ","[Select Cluster tag]"," -> ","[Ok]",".\n",(0,r.yg)("img",{alt:"clickhouse",src:t(45637).A,width:"2282",height:"676"})),(0,r.yg)("p",null,"Back to ","[Ingestion]"," page, wait for ","[configuration success]",".\n",(0,r.yg)("img",{alt:"clickhouse",src:t(46635).A,width:"1915",height:"504"})),(0,r.yg)("h2",{id:"test-data"},"Test Data"),(0,r.yg)("h3",{id:"send-data"},"Send Data"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"clickhouse",src:t(28847).A,width:"720",height:"435"}),"\nAdd 1000 data items to MySQL."),(0,r.yg)("h3",{id:"verify-data"},"Verify Data"),(0,r.yg)("p",null,"Check data in ","[Audit]"," page.\n",(0,r.yg)("img",{alt:"clickhouse",src:t(6044).A,width:"1923",height:"891"})),(0,r.yg)("p",null,"then enter ClickHouse container, check data in table.\n",(0,r.yg)("img",{alt:"clickhouse",src:t(32570).A,width:"785",height:"740"})),(0,r.yg)("h2",{id:"questions"},"Questions"),(0,r.yg)("h3",{id:"task-configuration-failed"},"Task Configuration Failed"),(0,r.yg)("p",null,"Generally, the MQ or Flink group configuration is incorrect. You can view the error information on the page, or enter the Manager container to view detailed logs."),(0,r.yg)("h3",{id:"the-script-for-sending-data"},"The script for sending data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# MySQL information\nDB_HOST="mysql"\nDB_USER="root"\nDB_PASS="inlong"\nDB_NAME="test_mysql_db"\nDB_TABLE="test_mysql_table"\n\n# insert data by a loop\nfor ((i=1; i<=1000; i++))\ndo\n    # generate data\n    id=$i\n    name="name_$i"\n    # insert data\n    query="INSERT INTO $DB_TABLE (id, name) VALUES ($id, \'$name\');"\n    # execute insert\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query"\ndone\n')))}g.isMDXComponent=!0},45637:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/approval-ef07091c33d898037ada18425995e6c3.png"},1400:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create_cluster_label-6a90b8b65f0e4d3259bbed710a5d50ef.png"},34539:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create_ingestion-505741070bfe9b4ee822944f273897c6.png"},94400:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create_sink-8835ecc718f67c08a13282dc24a963ab.png"},66886:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create_source-7ab2e7988a6ec0eb09ec18fe928f5139.png"},99156:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/data_stream_config-fd00b27ec4367852575e984868511371.png"},39952:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/datanode-4c23f8f8c270eda09263d01b6e824614.png"},13619:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/kafka_cluster-a9edc85273116878c617b710476bc92f.png"},32570:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/receive_data-0266a508aab8579ec94267ded98e0ec7.png"},46635:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/result-17b95aadde04766ab850dea6c2a19472.png"},28847:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/send_data-43e0b438eeb5af1f226eda9051c011e9.png"},6044:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/stream_audit-c166bac4d39307e011516ac0c5cb787f.png"}}]);