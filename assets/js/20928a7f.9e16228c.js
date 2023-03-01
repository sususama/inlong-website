"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[45308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Overview",sidebar_position:1},s=void 0,i={unversionedId:"modules/sort-standalone/overview",id:"modules/sort-standalone/overview",title:"Overview",description:"Introduction",source:"@site/docs/modules/sort-standalone/overview.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/overview",permalink:"/docs/next/modules/sort-standalone/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/sort-standalone/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/next/modules/dashboard/quick_start"},next:{title:"Deployment",permalink:"/docs/next/modules/sort-standalone/quick_start"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Feature",id:"feature",level:2},{value:"Multi tenant system",id:"multi-tenant-system",level:3},{value:"Distribution tasks support dynamic updates",id:"distribution-tasks-support-dynamic-updates",level:3},{value:"message queues supported by the cache layer",id:"message-queues-supported-by-the-cache-layer",level:3},{value:"supported data storage",id:"supported-data-storage",level:3},{value:"Future planning",id:"future-planning",level:3},{value:"support more kinds of data storage",id:"support-more-kinds-of-data-storage",level:4},{value:"support more file formats written to Apache hive",id:"support-more-file-formats-written-to-apache-hive",level:4}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Inlong sort standalone is a module responsible for consuming the data stream reported by users from the cache layer and distributing it to different data stores. It supports hive, elasticsearch, CLS and other data stores.",(0,a.kt)("br",{parentName:"p"}),"\n","Inlong sort standalone relies on inlong manager to manage system metadata. Inlong sort standalone is deployed by cluster and aggregates and distributes tasks by target storage."),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("h3",{id:"multi-tenant-system"},"Multi tenant system"),(0,a.kt)("p",null,"Inlong sort standalone supports multi tenancy. An inlong sort standalone cluster can host the distribution tasks of different tenants. The distribution tasks are obtained from the inlong manager.",(0,a.kt)("br",{parentName:"p"}),"\n","Each distribution task is responsible for distributing multiple data streams to a data store. Users only need to configure on the front page of inlong manager to specify the data streams to be distributed to a specific data store.",(0,a.kt)("br",{parentName:"p"}),"\n","For example, the inlong data streams D1 and D2 are distributed to hive cluster H1, D1 is also distributed to elasticsearch cluster E1, and D2 is also distributed to CLS cluster C1. Then the inlong sort standalone cluster will receive three distribution tasks."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H1 distributes task consumption D1 and D2 to hive cluster H1;"),(0,a.kt)("li",{parentName:"ul"},"E1 distribution task consumption D1, distributed to elasticsearch cluster E1;"),(0,a.kt)("li",{parentName:"ul"},"C1 distributes the task consumption D2 and distributes it to CLS cluster C1.")),(0,a.kt)("h3",{id:"distribution-tasks-support-dynamic-updates"},"Distribution tasks support dynamic updates"),(0,a.kt)("p",null,"Inlong sort standalone supports dynamic updating of distribution tasks, such as the information of the data source where the inlong data stream is located, the data stream schema information, and the information of the target data store.",(0,a.kt)("br",{parentName:"p"}),"\n","It should be noted that the new distribution of inlong data stream will be consumed from the latest location of the cache layer;",(0,a.kt)("br",{parentName:"p"}),"\n","After the inlong data stream is distributed offline, it goes online again. If the consumption location when it goes offline is still within the life cycle of the cache layer, it continues to consume from the consumption location when it goes offline;",(0,a.kt)("br",{parentName:"p"}),"\n","If the consumption location at the time of offline is no longer within the life cycle of the cache layer, consumption starts from the latest location of the cache layer."),(0,a.kt)("h3",{id:"message-queues-supported-by-the-cache-layer"},"message queues supported by the cache layer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inlong-Tube"),(0,a.kt)("li",{parentName:"ul"},"Apache Pulsar"),(0,a.kt)("li",{parentName:"ul"},"Apache Kafka")),(0,a.kt)("h3",{id:"supported-data-storage"},"supported data storage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Apache Hive (currently only supports sequence file format)"),(0,a.kt)("li",{parentName:"ul"},"Apache Pulsar"),(0,a.kt)("li",{parentName:"ul"},"Apache Kafka"),(0,a.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,a.kt)("li",{parentName:"ul"},"ClickHouse"),(0,a.kt)("li",{parentName:"ul"},"Tencent CLS")),(0,a.kt)("h3",{id:"future-planning"},"Future planning"),(0,a.kt)("h4",{id:"support-more-kinds-of-data-storage"},"support more kinds of data storage"),(0,a.kt)("p",null,"HBase, etc."),(0,a.kt)("h4",{id:"support-more-file-formats-written-to-apache-hive"},"support more file formats written to Apache hive"),(0,a.kt)("p",null,"Orc file, etc."))}c.isMDXComponent=!0}}]);