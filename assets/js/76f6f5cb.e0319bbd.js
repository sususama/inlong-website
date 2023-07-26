"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[75149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={title:"Release 1.8.0",author:"Verne Deng",author_url:"https://github.com/vernedeng",author_image_url:"https://avatars.githubusercontent.com/u/45282474?v=4",tags:["Apache InLong","Version"]},r=void 0,s={permalink:"/blog/2023/07/24/release-1.8.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2023-07-24-release-1.8.0.md",source:"@site/blog/2023-07-24-release-1.8.0.md",title:"Release 1.8.0",description:"Apache InLong recently released version 1.8.0, which closed about 190+ issues, including 6+ major features and 30+ optimizations. The main improvements include multi-tenant management, support for multiple Apache Flink versions, data synchronization in Dashboard, data preview support, and optimization of ultra-long log processing logic. After the release of 1.8.0, Apache InLong has completed the layout of full-scenario data integration around data access, data synchronization, and data subscription, combined with multi-tenant management, multi-cluster management, approval flow management, and full-link audit/metrics.",date:"2023-07-24T00:00:00.000Z",formattedDate:"July 24, 2023",tags:[{label:"Apache InLong",permalink:"/blog/tags/apache-in-long"},{label:"Version",permalink:"/blog/tags/version"}],readingTime:7.32,hasTruncateMarker:!0,authors:[{name:"Verne Deng",url:"https://github.com/vernedeng",imageURL:"https://avatars.githubusercontent.com/u/45282474?v=4"}],frontMatter:{title:"Release 1.8.0",author:"Verne Deng",author_url:"https://github.com/vernedeng",author_image_url:"https://avatars.githubusercontent.com/u/45282474?v=4",tags:["Apache InLong","Version"]},nextItem:{title:"Release 1.7.0",permalink:"/blog/2023/05/19/release-1.7.0"}},l={authorsImageUrls:[void 0]},u=[{value:"About Apache InLong",id:"about-apache-inlong",level:2},{value:"Overview of version 1.8.0",id:"overview-of-version-180",level:2},{value:"Agent module",id:"agent-module",level:3},{value:"DataProxy module",id:"dataproxy-module",level:3},{value:"Sort module",id:"sort-module",level:3},{value:"Manager module",id:"manager-module",level:3},{value:"Dashboard module",id:"dashboard-module",level:3},{value:"Others",id:"others",level:3},{value:"1.8.0 Feature Introduction",id:"180-feature-introduction",level:2},{value:"Agent optimizes ultra-long log processing logic, improving file collection efficiency and stability",id:"agent-optimizes-ultra-long-log-processing-logic-improving-file-collection-efficiency-and-stability",level:3},{value:"Agent adopts global flow control, solving the OOM problem caused by the growth of file numbers",id:"agent-adopts-global-flow-control-solving-the-oom-problem-caused-by-the-growth-of-file-numbers",level:3},{value:"Support multiple Flink versions",id:"support-multiple-flink-versions",level:3},{value:"Support multi-tenant management",id:"support-multi-tenant-management",level:3},{value:"Support real-time synchronization",id:"support-real-time-synchronization",level:3},{value:"Support data preview",id:"support-data-preview",level:3},{value:"Support querying transmission delay",id:"support-querying-transmission-delay",level:3},{value:"Follow-up planning",id:"follow-up-planning",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache InLong recently released version 1.8.0, which closed about 190+ issues, including 6+ major features and 30+ optimizations. The main improvements include multi-tenant management, support for multiple Apache Flink versions, data synchronization in Dashboard, data preview support, and optimization of ultra-long log processing logic. After the release of 1.8.0, Apache InLong has completed the layout of full-scenario data integration around data access, data synchronization, and data subscription, combined with multi-tenant management, multi-cluster management, approval flow management, and full-link audit/metrics."),(0,o.kt)("h2",{id:"about-apache-inlong"},"About Apache InLong"),(0,o.kt)("p",null,"As the industry's first one-stop, full-scenario, open-source massive data integration framework, Apache InLong provides automatic, safe, reliable, and high-performance data transmission capabilities to facilitate businesses to build stream-based data analysis, modeling, and applications quickly. At present, InLong is widely used in various industries such as advertising, payment, social networking, games, artificial intelligence, etc., serving thousands of businesses, among which the scale of high-performance scene data exceeds 1 trillion lines per day, and the scale of high-reliability scene data exceeds 10 trillion lines per day."),(0,o.kt)("p",null,'The core keywords of InLong project positioning are "one-stop" and "massive data". For "one-stop", we hope to shield technical details, provide complete data integration and support services, and implement out-of-the-box; With its advantages, such as multi-cluster management, it can stably support larger-scale data volumes based on trillions of lines per day.'),(0,o.kt)("h2",{id:"overview-of-version-180"},"Overview of version 1.8.0"),(0,o.kt)("p",null,"Apache InLong recently released version 1.8.0, which closed about 190+ issues, including 6+ major features and 30+ optimizations, mainly completing multi-tenant management, support for multiple Apache Flink versions, data synchronization in Dashboard, data preview support, and optimization of ultra-long log processing logic. After the release of 1.8.0, Apache InLong has completed the layout of full-scenario data integration around data access, data synchronization, and data subscription, combined with multi-tenant management, multi-cluster management, approval flow management, and full-link audit/metrics. Apache InLong has built a comprehensive data integration solution, achieving out-of-the-box usability:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data access: Data access is the process of aggregating data from data sources to the same storage service for further data querying and analysis;"),(0,o.kt)("li",{parentName:"ul"},"Data synchronization: Data synchronization is the process of establishing consistency between data sources and target data storage, which can coordinate data over time;"),(0,o.kt)("li",{parentName:"ul"},"Data subscription: Data subscription provides subscribers with the data they are authorized to access;")),(0,o.kt)("p",null,"In version 1.8.0 of Apache InLong, many other features have also been completed, mainly including:"),(0,o.kt)("h3",{id:"agent-module"},"Agent module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Optimized ultra-long log processing logic, improving file collection efficiency and stability"),(0,o.kt)("li",{parentName:"ul"},"Fixed the issue of thread leakage caused by task termination"),(0,o.kt)("li",{parentName:"ul"},"Adopted flow control to solve the OOM problem caused by file number growth")),(0,o.kt)("h3",{id:"dataproxy-module"},"DataProxy module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for Golang SDK"),(0,o.kt)("li",{parentName:"ul"},"Support for configuring black and white lists based on full IP or CIDR format IP segments"),(0,o.kt)("li",{parentName:"ul"},"Support for configuring the maximum number of write retries"),(0,o.kt)("li",{parentName:"ul"},"Support for sending data to the default Topic when write fails"),(0,o.kt)("li",{parentName:"ul"},"Code refactoring, unified configuration acquisition method")),(0,o.kt)("h3",{id:"sort-module"},"Sort module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enhanced DDL parsing capability, improving the stability of DDL-aware scenarios"),(0,o.kt)("li",{parentName:"ul"},"Support for multiple Flink versions"),(0,o.kt)("li",{parentName:"ul"},"Support for Decimal precision recognition in whole-library scenarios"),(0,o.kt)("li",{parentName:"ul"},"Hive supports whole-library migration, with the implementation consistent with MySQL whole-library migration"),(0,o.kt)("li",{parentName:"ul"},"Iceberg supports automatic column updates and column deletions, greatly enriching Schema change capabilities")),(0,o.kt)("h3",{id:"manager-module"},"Manager module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for Pulsar, TubeMQ data preview"),(0,o.kt)("li",{parentName:"ul"},"Support for dynamic configuration of audit data sources"),(0,o.kt)("li",{parentName:"ul"},"Support for querying audit delay information"),(0,o.kt)("li",{parentName:"ul"},"Support for multi-tenant management")),(0,o.kt)("h3",{id:"dashboard-module"},"Dashboard module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for data flow preview"),(0,o.kt)("li",{parentName:"ul"},"Support for viewing InLongGroup resource details"),(0,o.kt)("li",{parentName:"ul"},"Support for tenant management and tenant switching"),(0,o.kt)("li",{parentName:"ul"},"Support for data synchronization")),(0,o.kt)("h3",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove conflicting Jsqlparser versions"),(0,o.kt)("li",{parentName:"ul"},"Upgrade Spring-Boot-Autoconfigure version to 2.6.15"),(0,o.kt)("li",{parentName:"ul"},"Upgrade the Snappy-Java version to 1.1.10.1"),(0,o.kt)("li",{parentName:"ul"},"Fix syntax errors in Workflow configuration files")),(0,o.kt)("h2",{id:"180-feature-introduction"},"1.8.0 Feature Introduction"),(0,o.kt)("h3",{id:"agent-optimizes-ultra-long-log-processing-logic-improving-file-collection-efficiency-and-stability"},"Agent optimizes ultra-long log processing logic, improving file collection efficiency and stability"),(0,o.kt)("p",null,"In actual use, due to improper use by users or bugs in data production programs, occasionally, a single data length reaches MB or even GB level. For Agents deployed in low-profile environments, this type of data greatly affects the performance of sending. The lower version Agent reads this type of data directly into memory based on the newline character and then discards it, but is limited by the hardware configuration of the Agent deployment environment, a single ultra-long data is extremely likely to cause OOM exceptions. In version 1.8.0, Agent optimized the processing logic of ultra-long logs, ensuring that data loading does not exceed memory limits through segmented collection and segmented discarding. Thanks to @justinhuang's contribution, see INLONG-8180 for details.\n",(0,o.kt)("img",{alt:"1.8.0-agent-under-1.8.0.png",src:n(31198).Z,width:"2544",height:"1356"}),"\n",(0,o.kt)("img",{alt:"1.8.0-agent-1.8.0.png",src:n(91101).Z,width:"3334",height:"2143"})),(0,o.kt)("h3",{id:"agent-adopts-global-flow-control-solving-the-oom-problem-caused-by-the-growth-of-file-numbers"},"Agent adopts global flow control, solving the OOM problem caused by the growth of file numbers"),(0,o.kt)("p",null,"In previous versions, each file was collected and sent by its thread. Although we limited the maximum collection buffer of each file, with the growth of user traffic, the increase in the number of files is inevitable, leading to the simultaneous collection of too many files, causing OOM exceptions due to memory overflow. InLong supports the feature of Agent configuring global flow control in version 1.8.0. With this feature, Agent can effectively avoid frequent OOM problems caused by the growth of file numbers or the use of small quota servers. Thanks to @justinhuang's contribution, see INLONG-8251 for details. If you need to use this feature, you can add the corresponding configuration in agent.properties.\n",(0,o.kt)("img",{alt:"1.8.0-agent-flow-controll.png",src:n(24855).Z,width:"3356",height:"1213"})),(0,o.kt)("h3",{id:"support-multiple-flink-versions"},"Support multiple Flink versions"),(0,o.kt)("p",null,"As community users go deeper into using InLong, the scenarios InLong faces become more diverse and complex. To support the needs of users in different Flink environments, InLong has added support for multiple Flink versions in the current version. Users can choose the Flink version to start in the plugins/flink-sort-plugin.properties configuration file in InLong-Manager."),(0,o.kt)("p",null,"When changing the Flink version required to run the Sort component, you also need to replace the connectors in the InLong-Sort/connector directory with the corresponding version of the jar package. For details, see the InLong official website documentation. Thanks to @Emsnap, @GanfengTan, and @haifxu for their contributions to this capability."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# inLong-manager/plugins/flink-sort-plugin.properties\n\n# Flink version, support [1.13|1.15]\nflink.version=1.13\n")),(0,o.kt)("h3",{id:"support-multi-tenant-management"},"Support multi-tenant management"),(0,o.kt)("p",null,"To address the requirements for permission and resource isolation in multi-user scenarios, InLong introduces a multi-tenant architecture in the current version. The multi-tenant architecture ensures that data and permissions do not interfere with each other among different users within the same group of services. Thanks to @vernedeng and @bluewang for their contributions to this feature, see INLONG-7914 for feature details. The following is the core process:\n",(0,o.kt)("img",{alt:"1.8.0-multi-tenant-management.png",src:n(80969).Z,width:"2597",height:"3891"})),(0,o.kt)("p",null,"Tenants are transparent to core logic developers. At the entrance of the request, tenant authentication is added, and requests without access to the tenant's permissions are directly rejected; before accessing the Database, the corresponding tenant filter conditions are added to ensure that the scope of data query and modification is limited within the tenant."),(0,o.kt)("p",null,"Users can create tenants and assign tenant roles on the Dashboard.\n",(0,o.kt)("img",{alt:"1.8.0-create-tenant.png",src:n(6100).Z,width:"1726",height:"863"})),(0,o.kt)("h3",{id:"support-real-time-synchronization"},"Support real-time synchronization"),(0,o.kt)("p",null,"The new version supports real-time data synchronization. The main difference between real-time synchronization and data access is that it does not require the support of intermediate MQ storage. The Sort component directly stores the source data, greatly enriching the user's usage scenarios."),(0,o.kt)("p",null,'As shown in the figure below, the Tab page adds a "Data Synchronization" label. After the user configures the basic Group information, they only need to enter the "Data Source" and "Data Target" information, and after submitting the task, the data can be synchronized in real-time.'),(0,o.kt)("p",null,"Thanks to @fuwen11, @bluewang, @Emsnap, and @haifxu for their contributions to this feature.\n",(0,o.kt)("img",{alt:"1.8.0-realtime-sync.png",src:n(55403).Z,width:"1726",height:"961"})),(0,o.kt)("h3",{id:"support-data-preview"},"Support data preview"),(0,o.kt)("p",null,"For businesses just accessing InLong, data preview can help users quickly confirm the accuracy of reported data and locate problems. In this version, the InLong front supports previewing users' real-time reported data. Thanks to @fuwen11 and @bluewang's contributions, users can choose data preview in the operation bar under the data stream after successfully creating a data stream and reporting data.\n",(0,o.kt)("img",{alt:"1.8.0-data-preview.png",src:n(96561).Z,width:"1714",height:"913"})),(0,o.kt)("h3",{id:"support-querying-transmission-delay"},"Support querying transmission delay"),(0,o.kt)("p",null,"Transmission delay is crucial for some real-time consumption scenarios. In this version, InLong audit supports frontend viewing of average transmission delay indicators. Thanks to @fuwen11 and @bluewang's contributions, users can query link transmission delay after successfully creating a data stream and reporting data.\n",(0,o.kt)("img",{alt:"1.8.0-trans-delay.png",src:n(70606).Z,width:"1711",height:"964"})),(0,o.kt)("h2",{id:"follow-up-planning"},"Follow-up planning"),(0,o.kt)("p",null,"In version 1.8.0, the community also restructured the DataProxy code, unified the configuration pull interface, supported complete IP and CIDR-based IP segment configuration of black and white list features, and improved module performance and stability. Sort has improved stability in DDL sensing scenarios and supports whole library migration of Hive, Iceberg automatic column update, and column storage features. In subsequent versions, InLong will refactor DataProxy C++ SDK, enrich Flink 1.15 Connector, and improve data synchronization functions, looking forward to more developers participating in the contribution."))}d.isMDXComponent=!0},91101:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-agent-1.8.0-5605736e061b6d7909be88085fe7e328.png"},24855:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-agent-flow-controll-586153f2b9ee526b805dd01af8db56f1.png"},31198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-agent-under-1.8.0-9125fe37a0229a983fe1e6f5a6606d31.png"},6100:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-create-tenant-369c08949975ccaa2f136783327f102d.png"},96561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-data-preview-e8f81f356cbbae7dc5df7a84eba3d15b.png"},80969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-multi-tenant-management-c3af4313025cdb26d7601e45b2274420.png"},55403:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-realtime-sync-238be2fc9f89289a181513e67f552bb2.png"},70606:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.8.0-trans-delay-7486369cefa16ed1b894dcd0ce7b7fe1.png"}}]);