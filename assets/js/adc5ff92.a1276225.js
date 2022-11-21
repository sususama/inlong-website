"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[40093],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},27991:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Release 1.4.0",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},i=void 0,l={permalink:"/blog/2022/11/16/release-1.4.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-11-16-release-1.4.0.md",source:"@site/blog/2022-11-16-release-1.4.0.md",title:"Release 1.4.0",description:"Apache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities.",date:"2022-11-16T00:00:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"Apache InLong",permalink:"/blog/tags/apache-in-long"},{label:"Version",permalink:"/blog/tags/version"}],readingTime:3.575,hasTruncateMarker:!0,authors:[{name:"Charles Zhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"Release 1.4.0",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},nextItem:{title:"Release 1.3.0",permalink:"/blog/2022/09/05/release-1.3.0"}},s={authorsImageUrls:[void 0]},u=[{value:"1.4.0 version overview",id:"140-version-overview",level:2},{value:"Agent Module",id:"agent-module",level:3},{value:"DataProxy module",id:"dataproxy-module",level:3},{value:"TubeMQ module",id:"tubemq-module",level:3},{value:"Manager module",id:"manager-module",level:3},{value:"Sort module",id:"sort-module",level:3},{value:"Dashboard module",id:"dashboard-module",level:3},{value:"Other",id:"other",level:3},{value:"1.4.0 version feature introduction",id:"140-version-feature-introduction",level:2},{value:"Agent adds a variety of data sources",id:"agent-adds-a-variety-of-data-sources",level:3},{value:"Improve component metrics",id:"improve-component-metrics",level:3},{value:"Optimize Docker-compose deployment",id:"optimize-docker-compose-deployment",level:3},{value:"Optimize heartbeat management",id:"optimize-heartbeat-management",level:3},{value:"Support real-time synchronization of the entire database",id:"support-real-time-synchronization-of-the-entire-database",level:3},{value:"Follow-up planning",id:"follow-up-planning",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities.\nInLong offers great power to build data analysis, modeling and other real-time applications based on streaming data."),(0,r.kt)("h2",{id:"140-version-overview"},"1.4.0 version overview"),(0,r.kt)("p",null,"Apache InLong recently released version 1.4.0, which closed about 364+ issues with 16+ features and 120+ optimizations. It mainly completes the real-time synchronization of the entire database to Apache Doris and the real-time synchronization of the entire database to Apache Iceberg, the standard architecture supports HTTP reporting, and the standard architecture adds MongoDB and other collection nodes. This release also completes a number of other features, including:"),(0,r.kt)("h3",{id:"agent-module"},"Agent Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refactored sink-sending metrics"),(0,r.kt)("li",{parentName:"ul"},"Audit report increases data size"),(0,r.kt)("li",{parentName:"ul"},"Support Redis, MQTT, SQLServer, Oracle, and MongoDB data sources"),(0,r.kt)("li",{parentName:"ul"},"Enhanced Kubernetes environment file collection capability")),(0,r.kt)("h3",{id:"dataproxy-module"},"DataProxy module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Heartbeat reporting adds service status and supports authentication"),(0,r.kt)("li",{parentName:"ul"},"Added proxy-send mode to send data"),(0,r.kt)("li",{parentName:"ul"},"Optimized data link buried point indicators")),(0,r.kt)("h3",{id:"tubemq-module"},"TubeMQ module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added client load balancing consumer group control API"),(0,r.kt)("li",{parentName:"ul"},"C++ SDK fixes multiple bugs")),(0,r.kt)("h3",{id:"manager-module"},"Manager module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data stream Group and Stream support extended parameters"),(0,r.kt)("li",{parentName:"ul"},"Client supports updating and deleting data flow through Key"),(0,r.kt)("li",{parentName:"ul"},"Refactored the way to obtain Sort cluster configuration information"),(0,r.kt)("li",{parentName:"ul"},"Optimized state management"),(0,r.kt)("li",{parentName:"ul"},"Client supports cluster addition, deletion, modification, and query"),(0,r.kt)("li",{parentName:"ul"},"Cluster nodes report new protocol types"),(0,r.kt)("li",{parentName:"ul"},"Cache layer usage supports using Kafka")),(0,r.kt)("h3",{id:"sort-module"},"Sort module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support debezium-json format"),(0,r.kt)("li",{parentName:"ul"},"Kafka data nodes support topic dynamic awareness"),(0,r.kt)("li",{parentName:"ul"},"Connectors such as Hive/Hbase/Iceberg support indicator status recovery"),(0,r.kt)("li",{parentName:"ul"},"Elasticsearch 6/7, JDBC connector added indicator status"),(0,r.kt)("li",{parentName:"ul"},"Iceberg sink supports schema revolution, can automatically build tables, and perceive the increase of fields")),(0,r.kt)("h3",{id:"dashboard-module"},"Dashboard module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unified data source, data flow type definition"),(0,r.kt)("li",{parentName:"ul"},"Added Agent type for cluster management"),(0,r.kt)("li",{parentName:"ul"},"Add data node management"),(0,r.kt)("li",{parentName:"ul"},"Support selection of Kafka message type")),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"docker-compose deploys the built-in Flink environment"),(0,r.kt)("li",{parentName:"ul"},"Fix multiple aarch64 mirror bugs"),(0,r.kt)("li",{parentName:"ul"},"Fix multiple dependency security bugs")),(0,r.kt)("h2",{id:"140-version-feature-introduction"},"1.4.0 version feature introduction"),(0,r.kt)("h3",{id:"agent-adds-a-variety-of-data-sources"},"Agent adds a variety of data sources"),(0,r.kt)("p",null,"In version 1.4.0, Agent supports data sources such as Redis, MQTT, SQLServer, Oracle, MongoDB, etc., so that the collection capabilities of standard architecture and lightweight architecture are basically aligned and users have more choices in massive scenarios. The support of this part of the back-end capabilities is mainly completed by @iamsee123 and @haibo-duan, and the front-end part is completed by @bluewang."),(0,r.kt)("h3",{id:"improve-component-metrics"},"Improve component metrics"),(0,r.kt)("p",null,"In version 1.4.0, the Agent, DataProxy, and Sort modules all have indicators optimized and improved, including the reconstruction of the indicators sent by the Agent, increasing the dimension of the data Group/Stream indicators, and fixing the inaccuracy of the Prometheus Listener indicators. Thanks to @Keylchen, @pocozh, and others for their contributions."),(0,r.kt)("h3",{id:"optimize-docker-compose-deployment"},"Optimize Docker-compose deployment"),(0,r.kt)("p",null,"There are many InLong service components, and there has always been a problem with high deployment thresholds. In version 1.4.0, the compatibility of docker-compose deployment is optimized, and an Apache Flink environment is built-in to help developers quickly start creating tasks. Thanks to @dockerzhang for optimizing this part."),(0,r.kt)("h3",{id:"optimize-heartbeat-management"},"Optimize heartbeat management"),(0,r.kt)("p",null,"In version 1.4.0, a lot of optimizations have been made for the heartbeat of service components, including adding data protocol when reporting, automatic registration of Agent/DataProxy component reporting, adding heartbeat management API to Manager, and optimizing multiple heartbeat status bugs. Thanks to @gosonzhang, @GanfengTan, @pocozh, @lucaspeng12138 and @haifxu for their contributions."),(0,r.kt)("h3",{id:"support-real-time-synchronization-of-the-entire-database"},"Support real-time synchronization of the entire database"),(0,r.kt)("p",null,"In version 1.4.0, InLong began to support real-time synchronization of the entire database to follow up on the needs of community users. Currently, it is the first to achieve real-time synchronization of the entire database to Doris and real-time synchronization of the entire database to Iceberg/Kafka/Doris. In the near future, the community will also realize the synchronization of the entire database. Share the details. Thanks to @thesumery, @EMsnap, @yunqingmoswu for their contributions."),(0,r.kt)("p",null,"For more details on the 1.4.0 release, please refer to the release notes, which detail the features, enhancements, and bug fixes for this release."),(0,r.kt)("h3",{id:"follow-up-planning"},"Follow-up planning"),(0,r.kt)("p",null,"In the next version, the community will continue to add synchronization scenarios for the entire database, improve task indicators, increase system stability, and conduct stress tests on standard architectures and lightweight architectures."))}c.isMDXComponent=!0}}]);