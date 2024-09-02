"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[55203],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,y=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const i={title:"Pulsar2Hive Example",sidebar_position:3},a=void 0,l={unversionedId:"modules/sort-standalone/pulsar2hive",id:"version-1.6.0/modules/sort-standalone/pulsar2hive",title:"Pulsar2Hive Example",description:"Prepare to get module archive",source:"@site/versioned_docs/version-1.6.0/modules/sort-standalone/pulsar2hive.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/pulsar2hive",permalink:"/zh-CN/docs/1.6.0/modules/sort-standalone/pulsar2hive",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/modules/sort-standalone/pulsar2hive.md",tags:[],version:"1.6.0",sidebarPosition:3,frontMatter:{title:"Pulsar2Hive Example",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.6.0/modules/sort-standalone/quick_start"},next:{title:"Pulsar2Elasticsearch Example",permalink:"/zh-CN/docs/1.6.0/modules/sort-standalone/pulsar2es"}},s={},p=[{value:"Prepare to get module archive",id:"prepare-to-get-module-archive",level:2},{value:"Prepare to modify configuration file",id:"prepare-to-modify-configuration-file",level:2},{value:"Example: conf/common.properties",id:"example-confcommonproperties",level:3},{value:"Example: conf/SortClusterConfig.conf",id:"example-confsortclusterconfigconf",level:3},{value:"Example: conf/sid_hive_inlong6th_v3.conf",id:"example-confsid_hive_inlong6th_v3conf",level:3}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"prepare-to-get-module-archive"},"Prepare to get module archive"),(0,o.yg)("p",null,"Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz."),(0,o.yg)("h2",{id:"prepare-to-modify-configuration-file"},"Prepare to modify configuration file"),(0,o.yg)("p",null,'At first, decompress the archive file, copy three files in the directory "conf/hive/" to the directory "conf/".'),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"conf/common.properties, common configuration of all components."),(0,o.yg)("li",{parentName:"ul"},"conf/SortClusterConfig.conf, sink configuration of all sort tasks."),(0,o.yg)("li",{parentName:"ul"},"conf/sid_hive_inlong6th_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.")),(0,o.yg)("h3",{id:"example-confcommonproperties"},"Example: conf/common.properties"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clusterId=hivev3-sz-sz1\nnodeId=nodeId\nmetricDomains=Sort\nmetricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\nmetricDomains.Sort.snapshotInterval=60000\nsortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel\nsortSink.type=org.apache.inlong.sort.standalone.sink.hive.HiveSink\nsortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource\n\nsortClusterConfig.type=file\nsortClusterConfig.file=SortClusterConfig.conf\nsortSourceConfig.QueryConsumeConfigType=file\n\n# manager config example\n#sortClusterConfig.type=manager\n#sortSourceConfig.QueryConsumeConfigType=manager\n#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader\n#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig\n#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource\n\n")),(0,o.yg)("h3",{id:"example-confsortclusterconfigconf"},"Example: conf/SortClusterConfig.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "data":{\n        "clusterName":"hivev3-sz-sz1",\n        "sortTasks":[\n            {\n                "idParams":[\n                    {\n                        "inlongGroupId":"0fc00000046",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_0fc00000046",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_0fc00000046",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"03600000045",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_03600000045",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_03600000045",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"05100054990",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_05100054990",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_05100054990",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"09c00014434",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_09c00014434",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_09c00014434",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    },\n                    {\n                        "inlongGroupId":"0c900035509",\n                        "inlongStreamId":"",\n                        "separator":"|",\n                        "partitionIntervalMs":3600000,\n                        "idRootPath":"/user/hive/warehouse/t_inlong_v1_0c900035509",\n                        "partitionSubPath":"/{yyyyMMdd}/{yyyyMMddHH}",\n                        "hiveTableName":"t_inlong_v1_0c900035509",\n                        "partitionFieldName":"dt",\n                        "partitionFieldPattern":"yyyyMMddHH",\n                        "msgTimeFieldPattern":"yyyy-MM-dd HH:mm:ss",\n                        "maxPartitionOpenDelayHour":8\n                    }\n                ],\n                "name":"sid_hive_inlong6th_v3",\n                "sinkParams":{\n                    "hdfsPath":"hdfs://127.0.0.1:9000",\n                    "maxFileOpenDelayMinute":"5",\n                    "tokenOvertimeMinute":"60",\n                    "maxOutputFileSizeGb":"2",\n                    "hiveJdbcUrl":"jdbc:hive2://127.0.0.2:10000",\n                    "hiveDatabase":"default",\n                    "hiveUsername":"hive",\n                    "hivePassword":"hive"\n                },\n                "type":"HIVE"\n            }\n        ]\n    },\n    "errCode":0,\n    "md5":"md5",\n    "result":true\n}\n')),(0,o.yg)("h3",{id:"example-confsid_hive_inlong6th_v3conf"},"Example: conf/sid_hive_inlong6th_v3.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "sortClusterName": "hivev3-sz-sz1",\n    "sortTaskId": "sid_hive_inlong6th_v3",\n    "cacheZones": {\n        "pc_inlong6th_sz1": {\n            "zoneName": "${PULSAR_CLUSTER_NAME}",\n            "serviceUrl": "http://${PULSAR_IP}:${PULSAR_PORT}",\n            "authentication": "${PULSAR_AUTH}",\n            "topics": [{\n                "topic": "${TENANT/NAMESPACE/TOPIC}",\n                "partitionCnt": 10,\n                "topicProperties": {}\n            }],\n            "cacheZoneProperties": {},\n            "zoneType": "pulsar"\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);