"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[15616],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=g(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={title:"Configuration",sidebar_position:3},i=void 0,o={unversionedId:"modules/dataproxy/configuration",id:"version-1.13.0/modules/dataproxy/configuration",title:"Configuration",description:"Basic Configuration (common.properties)",source:"@site/versioned_docs/version-1.13.0/modules/dataproxy/configuration.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/configuration",permalink:"/docs/modules/dataproxy/configuration",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/modules/dataproxy/configuration.md",tags:[],version:"1.13.0",sidebarPosition:3,frontMatter:{title:"Configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/modules/dataproxy/quick_start"},next:{title:"Overview",permalink:"/docs/modules/tubemq/overview"}},s={},g=[{value:"Basic Configuration (common.properties)",id:"basic-configuration-commonproperties",level:2},{value:"Log Output Configuration\uff08log4j2.xml\uff09",id:"log-output-configurationlog4j2xml",level:2},{value:"Other Auto-Update Configurations",id:"other-auto-update-configurations",level:2},{value:"Source-Channel-Sink Configuration\uff08dataproxy-{tube|pulsar}.conf\uff09",id:"source-channel-sink-configurationdataproxy-tubepulsarconf",level:2}],c={toc:g},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"basic-configuration-commonproperties"},"Basic Configuration (common.properties)"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"manager.hosts"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager http host and port"),(0,r.yg)("td",{parentName:"tr",align:null},"127.0.0.1:8083"),(0,r.yg)("td",{parentName:"tr",align:null},"Empty is not allowed, the format is configured according to the format of {ip1:port1}","[,{ip2:port2}][,{ip3:port3}]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"manager.auth.secretId"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager authentic secretId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"blank")),(0,r.yg)("td",{parentName:"tr",align:null},"If InLong-Manager doesn't open authentic service, this parameter can be empty.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"manager.auth.secretKey"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong-Manager authentic secretKey"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"blank")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"proxy.cluster.tag"),(0,r.yg)("td",{parentName:"tr",align:null},"The cluster Tag name where the dataproxy is located"),(0,r.yg)("td",{parentName:"tr",align:null},"default_cluster"),(0,r.yg)("td",{parentName:"tr",align:null},"A cluster Tag can contain multiple dataproxy and MQ clusters")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"proxy.cluster.name"),(0,r.yg)("td",{parentName:"tr",align:null},"The cluster name where dataproxy is located"),(0,r.yg)("td",{parentName:"tr",align:null},"default_dataproxy"),(0,r.yg)("td",{parentName:"tr",align:null},"used to distinguish different environments")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"proxy.cluster.inCharges"),(0,r.yg)("td",{parentName:"tr",align:null},"The incharge of the cluster where dataproxy is located"),(0,r.yg)("td",{parentName:"tr",align:null},"admin"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"configCheckInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"Configuration file checking and loading interval of the conf directory (unit: ms)"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains"),(0,r.yg)("td",{parentName:"tr",align:null},"JMX domain name"),(0,r.yg)("td",{parentName:"tr",align:null},"DataProxy"),(0,r.yg)("td",{parentName:"tr",align:null},'Obtain the following configuration items of "metricDomains.${metricDomains}.xxx" through this configuration value')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains.DataProxy.domainListeners"),(0,r.yg)("td",{parentName:"tr",align:null},"The class for indicator monitoring, and the service is started through reflection of the class name"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener"),(0,r.yg)("td",{parentName:"tr",align:null},"If there are multiple indicator monitoring class configurations, separate them by spaces, carriage returns, or line feeds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metricDomains.DataProxy.snapshotInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"Time interval for periodic reporting of indicators (unit: ms)"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prometheusHttpPort"),(0,r.yg)("td",{parentName:"tr",align:null},"The port when reporting using Prometheus"),(0,r.yg)("td",{parentName:"tr",align:null},"9081"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"audit.enable"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable data reporting InLong-Audit service"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"audit.proxys"),(0,r.yg)("td",{parentName:"tr",align:null},"The address of the InLong-Audit service"),(0,r.yg)("td",{parentName:"tr",align:null},"127.0.0.1:10081"),(0,r.yg)("td",{parentName:"tr",align:null},"The format is configured according to {ip1:port1}","[ {ip2:port2}][ {ip3:port3}]",", and different ip:ports are separated by spaces, carriage returns, or line feeds")))),(0,r.yg)("h2",{id:"log-output-configurationlog4j2xml"},"Log Output Configuration\uff08log4j2.xml\uff09"),(0,r.yg)("p",null,"DataProxy uses Log4j2 to output logs, and the related configuration is set based on Log4j2. This configuration only mentions common setting items:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"basePath"),(0,r.yg)("td",{parentName:"tr",align:null},"Storage path of log files"),(0,r.yg)("td",{parentName:"tr",align:null},"${sys:dataproxy.log.path}"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"every_file_size"),(0,r.yg)("td",{parentName:"tr",align:null},"The size of each log file"),(0,r.yg)("td",{parentName:"tr",align:null},"1G"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_log_level"),(0,r.yg)("td",{parentName:"tr",align:null},"log output level"),(0,r.yg)("td",{parentName:"tr",align:null},"DEBUG"),(0,r.yg)("td",{parentName:"tr",align:null},"It is recommended to set to INFO when using online")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rolling_max"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of logs of the same type that can be stored in the same directory"),(0,r.yg)("td",{parentName:"tr",align:null},"50"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debug_max"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of DEBUG type logs that can be stored in the same directory"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"info_max"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of INFO type logs that can be stored in the same directory"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"warn_max"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of WARN type logs that can be stored in the same directory"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"error_max"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of ERROR type logs that can be stored in the same directory"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"other-auto-update-configurations"},"Other Auto-Update Configurations"),(0,r.yg)("p",null,"After DataProxy is started and successfully linked to the Manager, it will automatically synchronize the running configuration from the Manager and update it regularly. The following configuration cannot be modified."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"File Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mq_cluster.properties"),(0,r.yg)("td",{parentName:"tr",align:null},"MQ cluster configuration"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topics.properties"),(0,r.yg)("td",{parentName:"tr",align:null},"Mapping configuration of groupId to MQ topic"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"weight.properties"),(0,r.yg)("td",{parentName:"tr",align:null},"System Load Weight Configuration"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"source-channel-sink-configurationdataproxy-tubepulsarconf"},"Source-Channel-Sink Configuration\uff08dataproxy-{tube|pulsar}.conf\uff09"),(0,r.yg)("p",null,"DataProxy supports configurable source-channel-sink, which is consistent to flume's configuration file structure,  so it should be modified according to the configuration file definition of Apache flume. The configuration file is placed in the dataproxy-{tube|pulsar}.conf file. Currently, dataproxy-pulsar.conf and dataproxy-tube.conf are supported to distinguish different middleware types. The specific type can be specified at startup. The default (when not specified) ) using dataproxy-pulsar.conf as configuration file. The following is an example for this configuration file:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Source configuration example:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"agent1.sources.tcp-source.channels = ch-msg1 ch-msg2 ch-msg3 ch-more1 ch-more2 ch-more3 ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9 ch-msg10 ch-transfer ch -Back\nDefine the channel used in the source. Note that if the configuration below this source uses the channel, it needs to be annotated here\n\nagent1.sources.tcp-source.type = org.apache.flume.source.SimpleTcpSource\ntcp resolution type definition, here provide the class name for instantiation, SimpleTcpSource is mainly to initialize the configuration and start port monitoring\n\nagent1.sources.tcp-source.msg-factory-name = org.apache.flume.source.ServerMessageFactory\nHandler used for message structure analysis, and set read stream handler and write stream handler\n\nagent1.sources.tcp-source.host = 0.0.0.0\ntcp ip binding monitoring, binding all network cards by default\n\nagent1.sources.tcp-source.port = 46801\ntcp port binding, port 46801 is bound by default\n\nagent1.sources.tcp-source.highWaterMark=2621440\nThe concept of netty, set the netty high water level value\n\nagent1.sources.tcp-source.enableExceptionReturn=true\nThe new function of v1.7 version, optional, the default is false, used to open the exception channel, when an exception occurs, the data is written to the exception channel to prevent other normal data transmission (the open source version does not add this function), Details  |  Increase the local disk of abnormal data landing\n\nagent1.sources.tcp-source.max-msg-length = 524288\nLimit the size of a single package, here if the compressed package is transmitted, it is the compressed package size, the limit is 512KB\n\nagent1.sources.tcp-source.topic = test_token\nThe default topic value, if the mapping relationship between groupId and topic cannot be found, it will be sent to this topic\n\nagent1.sources.tcp-source.attr = m=9\nThe default value of m is set, where the value of m is the version of inlong's internal TdMsg protocol\n\nagent1.sources.tcp-source.connections = 5000\nConcurrent connections go online, new connections will be broken when the upper limit is exceeded\n\nagent1.sources.tcp-source.max-threads = 64\nNetty thread pool work thread upper limit, generally recommended to choose twice the cpu\n\nagent1.sources.tcp-source.receiveBufferSize = 524288\nNetty server tcp tuning parameters\n\nagent1.sources.tcp-source.sendBufferSize = 524288\nNetty server tcp tuning parameters\n\nagent1.sources.tcp-source.custom-cp = true\nWhether to use the self-developed channel process, the self-developed channel process can select the alternate channel to send when the main channel is blocked\n\nagent1.sources.tcp-source.selector.type = org.apache.flume.channel.FailoverChannelSelector\nThis channel selector is a self-developed channel selector, which is not much different from the official website, mainly because of the channel master-slave selection logic\n\nagent1.sources.tcp-source.selector.master = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9\nSpecify the master channel, these channels will be preferentially selected for data push. Those channels that are not in the master, transfer, fileMetric, and slaMetric configuration items, but are in\nThere are defined channels in channels, which are all classified as slave channels. When the master channel is full, the slave channel will be selected. Generally, the file channel type is recommended for the slave channel.\n\nagent1.sources.tcp-source.selector.transfer = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9\nSpecify the transfer channel to accept the transfer type data. The transfer here generally refers to the data pushed to the non-tube cluster, which is only for forwarding, and it is reserved for subsequent functions.\n\nagent1.sources.tcp-source.selector.fileMetric = ch-back\nSpecify the fileMetric channel to receive the metric data reported by the agent\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Channel configuration examples, memory channel:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"agent1.channels.ch-more1.type = memory\nmemory channel type\n\nagent1.channels.ch-more1.capacity = 10000000\nMemory channel queue size, the maximum number of messages that can be cached\n\nagent1.channels.ch-more1.keep-alive = 0\n\nagent1.channels.ch-more1.transactionCapacity = 20\nThe maximum number of batches are processed in atomic operations, and the memory channel needs to be locked when used, so there will be a batch process to increase efficiency\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Channel configuration examples, file channel:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"agent1.channels.ch-msg5.type = file\nfile channel type\n\nagent1.channels.ch-msg5.capacity = 100000000\nThe maximum number of messages that can be cached in a file channel\n\nagent1.channels.ch-msg5.maxFileSize = 1073741824\nfile channel file maximum limit, the number of bytes\n\nagent1.channels.ch-msg5.minimumRequiredSpace = 1073741824\nThe minimum free space of the disk where the file channel is located. Setting this value can prevent the disk from being full\n\nagent1.channels.ch-msg5.checkpointDir = /data/work/file/ch-msg5/check\nfile channel checkpoint path\n\nagent1.channels.ch-msg5.dataDirs = /data/work/file/ch-msg5/data\nfile channel data path\n\nagent1.channels.ch-msg5.fsyncPerTransaction = false\nWhether to synchronize the disk for each atomic operation, it is recommended to change it to false, otherwise it will affect the performance\n\nagent1.channels.ch-msg5.fsyncInterval = 5\nThe time interval between data flush from memory to disk, in seconds\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sink configuration example:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"agent1.sinks.mq-sink-msg1.channel = ch-msg1\nThe upstream channel name of the sink\n\nagent1.sinks.mq-sink-msg1.type = org.apache.inlong.dataproxy.sink.mq.MessageQueueZoneSink\nThe sink class is implemented, where the message is implemented to push data to some mq cluster\n\nagent1.sinks.mq-sink-msg1.maxThreads = 2\nThe maximum threads for sending message\n\nagent1.sinks.mq-sink-msg1.dispatchTimeout = 2000\nTimeout when dispatching message\n\nagent1.sinks.mq-sink-msg1.dispatchMaxPackCount = 256\nDispatch queue max pack count\n\nagent1.sinks.mq-sink-msg1.dispatchMaxPackSize = 3276800\nDispatch queue max pack size\n\nagent1.sinks.mq-sink-msg1.maxBufferQueueSize=131072\nDispatch max buffer queue size \n\nagent1.sinks.mq-sink-msg1.processInterval=100\nInterval to retry\n\nagent1.sinks.mq-sink-msg1.reloadInterval=60000\nInterval to reload remote configuration\n\nagent1.sinks.mq-sink-msg1.producer.compressionType=SNAPPY\nData compression type\n")))}p.isMDXComponent=!0}}]);