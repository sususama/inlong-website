"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[60511],{15680:(t,e,a)=>{a.d(e,{xA:()=>m,yg:()=>s});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(a),y=r,s=u["".concat(o,".").concat(y)]||u[y]||d[y]||l;return a?n.createElement(s,g(g({ref:e},m),{},{components:a})):n.createElement(s,g({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=y;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[u]="string"==typeof t?t:r,g[1]=i;for(var p=2;p<l;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},38285:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={title:"Overview",sidebar_position:1},g=void 0,i={unversionedId:"modules/sort-standalone/overview",id:"version-1.8.0/modules/sort-standalone/overview",title:"Overview",description:"Introduction",source:"@site/versioned_docs/version-1.8.0/modules/sort-standalone/overview.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/overview",permalink:"/docs/1.8.0/modules/sort-standalone/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/modules/sort-standalone/overview.md",tags:[],version:"1.8.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.8.0/modules/dashboard/quick_start"},next:{title:"Deployment",permalink:"/docs/1.8.0/modules/sort-standalone/quick_start"}},o={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Feature",id:"feature",level:2},{value:"Multi tenant system",id:"multi-tenant-system",level:3},{value:"Distribution tasks support dynamic updates",id:"distribution-tasks-support-dynamic-updates",level:3},{value:"message queues supported by the cache layer",id:"message-queues-supported-by-the-cache-layer",level:3},{value:"supported data storage",id:"supported-data-storage",level:3},{value:"Future planning",id:"future-planning",level:3},{value:"support more kinds of data storage",id:"support-more-kinds-of-data-storage",level:4},{value:"support more file formats written to Apache hive",id:"support-more-file-formats-written-to-apache-hive",level:4},{value:"Configuration in Sort-Standalone",id:"configuration-in-sort-standalone",level:2},{value:"Configuration file:conf/common.properties",id:"configuration-fileconfcommonproperties",level:3},{value:"SortClusterConfig",id:"sortclusterconfig",level:3},{value:"SortTask",id:"sorttask",level:4},{value:"idParams content of Hive sort task",id:"idparams-content-of-hive-sort-task",level:4},{value:"sinkParams content of Hive sort task",id:"sinkparams-content-of-hive-sort-task",level:4},{value:"idParams content of Pulsar sort task",id:"idparams-content-of-pulsar-sort-task",level:4},{value:"sinkParams content of Pulsar sort task",id:"sinkparams-content-of-pulsar-sort-task",level:4},{value:"SortSourceConfig",id:"sortsourceconfig",level:3},{value:"CacheZones",id:"cachezones",level:4},{value:"Topics",id:"topics",level:4}],m={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.yg)(u,(0,n.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Inlong sort standalone is a module responsible for consuming the data stream reported by users from the cache layer and distributing it to different data stores. It supports hive, elasticsearch, CLS and other data stores.",(0,r.yg)("br",{parentName:"p"}),"\n","Inlong sort standalone relies on inlong manager to manage system metadata. Inlong sort standalone is deployed by cluster and aggregates and distributes tasks by target storage."),(0,r.yg)("h2",{id:"feature"},"Feature"),(0,r.yg)("h3",{id:"multi-tenant-system"},"Multi tenant system"),(0,r.yg)("p",null,"Inlong sort standalone supports multi tenancy. An inlong sort standalone cluster can host the distribution tasks of different tenants. The distribution tasks are obtained from the inlong manager.",(0,r.yg)("br",{parentName:"p"}),"\n","Each distribution task is responsible for distributing multiple data streams to a data store. Users only need to configure on the front page of inlong manager to specify the data streams to be distributed to a specific data store.",(0,r.yg)("br",{parentName:"p"}),"\n","For example, the inlong data streams D1 and D2 are distributed to hive cluster H1, D1 is also distributed to elasticsearch cluster E1, and D2 is also distributed to CLS cluster C1. Then the inlong sort standalone cluster will receive three distribution tasks."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"H1 distributes task consumption D1 and D2 to hive cluster H1;"),(0,r.yg)("li",{parentName:"ul"},"E1 distribution task consumption D1, distributed to elasticsearch cluster E1;"),(0,r.yg)("li",{parentName:"ul"},"C1 distributes the task consumption D2 and distributes it to CLS cluster C1.")),(0,r.yg)("h3",{id:"distribution-tasks-support-dynamic-updates"},"Distribution tasks support dynamic updates"),(0,r.yg)("p",null,"Inlong sort standalone supports dynamic updating of distribution tasks, such as the information of the data source where the inlong data stream is located, the data stream schema information, and the information of the target data store.",(0,r.yg)("br",{parentName:"p"}),"\n","It should be noted that the new distribution of inlong data stream will be consumed from the latest location of the cache layer;",(0,r.yg)("br",{parentName:"p"}),"\n","After the inlong data stream is distributed offline, it goes online again. If the consumption location when it goes offline is still within the life cycle of the cache layer, it continues to consume from the consumption location when it goes offline;",(0,r.yg)("br",{parentName:"p"}),"\n","If the consumption location at the time of offline is no longer within the life cycle of the cache layer, consumption starts from the latest location of the cache layer."),(0,r.yg)("h3",{id:"message-queues-supported-by-the-cache-layer"},"message queues supported by the cache layer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Inlong-Tube"),(0,r.yg)("li",{parentName:"ul"},"Apache Pulsar"),(0,r.yg)("li",{parentName:"ul"},"Apache Kafka")),(0,r.yg)("h3",{id:"supported-data-storage"},"supported data storage"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Apache Hive (currently only supports sequence file format)"),(0,r.yg)("li",{parentName:"ul"},"Apache Pulsar"),(0,r.yg)("li",{parentName:"ul"},"Apache Kafka"),(0,r.yg)("li",{parentName:"ul"},"Elasticsearch"),(0,r.yg)("li",{parentName:"ul"},"ClickHouse"),(0,r.yg)("li",{parentName:"ul"},"Tencent CLS")),(0,r.yg)("h3",{id:"future-planning"},"Future planning"),(0,r.yg)("h4",{id:"support-more-kinds-of-data-storage"},"support more kinds of data storage"),(0,r.yg)("p",null,"HBase, etc."),(0,r.yg)("h4",{id:"support-more-file-formats-written-to-apache-hive"},"support more file formats written to Apache hive"),(0,r.yg)("p",null,"Orc file, etc."),(0,r.yg)("h2",{id:"configuration-in-sort-standalone"},"Configuration in Sort-Standalone"),(0,r.yg)("p",null,"The configuration in Sort-Standalone can be divided into three parts:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Basic node configuration: including the type of source, channel, sink this node try to specify, and how to acquire the metadata of each group id and stream id. These configs will not be updated since the process starts. They will be put in ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"common.properties"))),(0,r.yg)("li",{parentName:"ul"},"Sink configuration: including the metadata of sinks, such as access point, username, password. And the metadata of each id which sinks require. These configs will be put in ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"SortClusterConfig"))),(0,r.yg)("li",{parentName:"ul"},"Source configuration: including the metadata of sources, such as mq type, topic, serviceUrl. These configs will be put in ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"SortSourceConfig")))),(0,r.yg)("h3",{id:"configuration-fileconfcommonproperties"},"Configuration file:conf/common.properties"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clusterId"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortSource.type"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.source.readapi.SortSdkSource"),(0,r.yg)("td",{parentName:"tr",align:null},"Source class name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortChannel.type"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.channel.BufferQueueChannel"),(0,r.yg)("td",{parentName:"tr",align:null},"Channel class name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortSink.type"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.sink.hive.HiveSink"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink class name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortClusterConfig.type"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"manager"),(0,r.yg)("td",{parentName:"tr",align:null},"ClusterConfig configuration type. File config mode please choose: ",(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("em",{parentName:"strong"},"file")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortSourceConfig.QueryConsumeConfigType"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"manager"),(0,r.yg)("td",{parentName:"tr",align:null},"SourceConfig configuration type. File config mode please choose: ",(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("em",{parentName:"strong"},"file")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortClusterConfig.file"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"SortClusterConfig.conf"),(0,r.yg)("td",{parentName:"tr",align:null},"Sort cluster config file name. ",(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("em",{parentName:"strong"},"Required in file config type.")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"managerUrlLoaderType"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader"),(0,r.yg)("td",{parentName:"tr",align:null},"The type of manager url loader. ",(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("em",{parentName:"strong"},"Required in manager config type.")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortClusterConfig.managerUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"http://${manager_ip}:{manager_port}/inlong/manager/openapi/sort/getClusterConfig"),(0,r.yg)("td",{parentName:"tr",align:null},"The manager config interface to cluster config. ",(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("em",{parentName:"strong"},"Required in manager config type.")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortSourceConfig.managerUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"http://${manager_ip}:{manager_port}/inlong/manager/openapi/sort/getSortSource"),(0,r.yg)("td",{parentName:"tr",align:null},"The manager config interface to sort source config. ",(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("em",{parentName:"strong"},"Required in manager config mode.")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eventFormatHandler"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.sink.hive.DefaultEventFormatHandler"),(0,r.yg)("td",{parentName:"tr",align:null},"Formatter class name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxThreads"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"sink thread number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"reloadInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null},"interval updating Configuration data(millisecond)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"processInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"interval processing data(millisecond)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Sort"),(0,r.yg)("td",{parentName:"tr",align:null},"domain name of metric")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains.Sort.domainListeners"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener"),(0,r.yg)("td",{parentName:"tr",align:null},"class name list of metric listener, separated by space")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prometheusHttpPort"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"8080"),(0,r.yg)("td",{parentName:"tr",align:null},"HTTP server port of prometheus simple client")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains.Sort.snapshotInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null},"interval snapshoting metric data(millisecond)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortsdk.consumeStrategy"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"latest"),(0,r.yg)("td",{parentName:"tr",align:null},"The consume strategy of topic, other option is earliest")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"interceptor.type"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.rollback.TimeBasedFilterInterceptor$Builder"),(0,r.yg)("td",{parentName:"tr",align:null},"Type of interceptor used in sort-standalone. The default interceptor is based on message time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rollback.startTime"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"1970-01-01 08:00:00"),(0,r.yg)("td",{parentName:"tr",align:null},"Valid message start time. Earlier message will be filtered.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rollback.stopTime"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Valid message stop time. Later message will be filtered.")))),(0,r.yg)("h3",{id:"sortclusterconfig"},"SortClusterConfig"),(0,r.yg)("p",null,"The SortClusterConfig can be acquired from local file or manager, depending on the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"sortClusterConfig.type"))," configured in common.properties."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clusterName"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortTasks"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Sort task list")))),(0,r.yg)("h4",{id:"sorttask"},"SortTask"),(0,r.yg)("p",null,"Sort Task includes ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"idParams and sinkParams"))," which represent the config of ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"stream and dataNode"))," respectively"),(0,r.yg)("p",null,"The idParams and sinkParams are totally different among each type of sort tasks. There are two examples of hive task and pulsar task"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"sort task name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},'sort task type, for example:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ElasticSearch("ElasticSearch"), UNKNOWN("n")')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"idParams"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"List of Inlong DataStream configuration")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sinkParams"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Sort task parameters")))),(0,r.yg)("h4",{id:"idparams-content-of-hive-sort-task"},"idParams content of Hive sort task"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"inlongGroupId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"separator"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"separator")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partitionIntervalMs"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"3600000"),(0,r.yg)("td",{parentName:"tr",align:null},"partition interval(millisecond)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"idRootPath"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"HDFS root path of Inlong DataStream")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partitionSubPath"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"partition sub path of Inlong DataStream")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hiveTableName"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Hive table name of Inlong DataStream")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partitionFieldName"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"dt"),(0,r.yg)("td",{parentName:"tr",align:null},"partition field name of Inlong DataStream")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partitionFieldPattern"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Date format of partition field value, the type have {yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgTimeFieldPattern"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Date format of message generation time, it support Java date format")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxPartitionOpenDelayHour"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Max delay hour of partition(hour)")))),(0,r.yg)("h4",{id:"sinkparams-content-of-hive-sort-task"},"sinkParams content of Hive sort task"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hdfsPath"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"NameNode URL of HDFS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxFileOpenDelayMinute"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"Max writing delay minute of simple HDFS file(minute)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tokenOvertimeMinute"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"60"),(0,r.yg)("td",{parentName:"tr",align:null},"token overtime of Inlong Data Stream(minute)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxOutputFileSizeGb"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"Max file size of simple HDFS file(GB)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hiveJdbcUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"JDBC URL of Hive")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hiveDatabase"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Hive database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hiveUsername"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Hive username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hivePassword"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Hive password")))),(0,r.yg)("h4",{id:"idparams-content-of-pulsar-sort-task"},"idParams content of Pulsar sort task"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"inlongGroupId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Topic of MQ")))),(0,r.yg)("h4",{id:"sinkparams-content-of-pulsar-sort-task"},"sinkParams content of Pulsar sort task"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"serviceUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar service URL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"authentication"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar authentication")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enableBatching"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"enableBatching")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batchingMaxBytes"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"5242880"),(0,r.yg)("td",{parentName:"tr",align:null},"batchingMaxBytes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batchingMaxMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"3000"),(0,r.yg)("td",{parentName:"tr",align:null},"batchingMaxMessages")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batchingMaxPublishDelay"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"batchingMaxPublishDelay")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxPendingMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"maxPendingMessages")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxPendingMessagesAcrossPartitions"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"50000"),(0,r.yg)("td",{parentName:"tr",align:null},"maxPendingMessagesAcrossPartitions")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sendTimeout"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"sendTimeout")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compressionType"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"NONE"),(0,r.yg)("td",{parentName:"tr",align:null},"compressionType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"blockIfQueueFull"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"blockIfQueueFull")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"roundRobinRouterBatchingPartitionSwitchFrequency"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"roundRobinRouterBatchingPartitionSwitchFrequency")))),(0,r.yg)("h3",{id:"sortsourceconfig"},"SortSourceConfig"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortClusterName"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sortTaskId"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Sort task name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cacheZones"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"JsonObject","<","String, JsonObject",">"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Cache cluster list, Map","<","cacheClusterName, CacheCluster",">")))),(0,r.yg)("h4",{id:"cachezones"},"CacheZones"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zoneName"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"cache cluster name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zoneType"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"[pulsar,tube,kafka]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"serviceUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar serviceUrl or Kafka broker list")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"authentication"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar authentication")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cacheZoneProperties"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Cache consumer configuration")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topics"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"List","<","Topic",">"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Topic list of Cache consumer")))),(0,r.yg)("h4",{id:"topics"},"Topics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"cache topic name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partitionCnt"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"cache topic partition count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topicProperties"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Cache topic configuration")))))}d.isMDXComponent=!0}}]);