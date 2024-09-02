"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6968],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=g(n),u=r,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const o={title:"Basic Concept",sidebar_position:1},i=void 0,l={unversionedId:"design_and_concept/basic_concept",id:"version-1.11.0/design_and_concept/basic_concept",title:"Basic Concept",description:"| Name                 | Description                                                                                                                                                   | Other                                                                                     |",source:"@site/versioned_docs/version-1.11.0/design_and_concept/basic_concept.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/basic_concept",permalink:"/docs/1.11.0/design_and_concept/basic_concept",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/design_and_concept/basic_concept.md",tags:[],version:"1.11.0",sidebarPosition:1,frontMatter:{title:"Basic Concept",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.11.0/introduction"},next:{title:"Format",permalink:"/docs/1.11.0/design_and_concept/the_format_in_inlong"}},s={},g=[],d={toc:g},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Other"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Standard"),(0,r.yg)("td",{parentName:"tr",align:null},"Standard Architecture, contains all InLong components such as InLong Agent, Manager, MQ, Sort, Dashboard"),(0,r.yg)("td",{parentName:"tr",align:null},"Support ",(0,r.yg)("inlineCode",{parentName:"td"},"Data Ingestion"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"Data Synchronization")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"Data Subscription")," at the same time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Lightweight"),(0,r.yg)("td",{parentName:"tr",align:null},"Lightweight Architecture, contains only one component of InLong Sort, which also can be used with Manager, Dashboard"),(0,r.yg)("td",{parentName:"tr",align:null},"The lightweight architecture is simple and flexible, only support ",(0,r.yg)("inlineCode",{parentName:"td"},"Data Synchronization"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Ingestion"),(0,r.yg)("td",{parentName:"tr",align:null},"Data ingestion is the process of moving data from a source into a landing area or an object store where it can be used for ad hoc queries and analytics"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Synchronization"),(0,r.yg)("td",{parentName:"tr",align:null},"Data synchronization is the process of establishing consistency between source and target data stores, and the continuous harmonization of the data over time"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Subscription"),(0,r.yg)("td",{parentName:"tr",align:null},"Data Subscription provides subscribers bulk data feeds of the data they are entitled to access"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Group"),(0,r.yg)("td",{parentName:"tr",align:null},"Data Streams Group, it contains multiple data streams, and one Group represents one data business unit."),(0,r.yg)("td",{parentName:"tr",align:null},"Group has attributes such as ID and Name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Stream"),(0,r.yg)("td",{parentName:"tr",align:null},"Data Stream, a stream has a specific data source, data format and data sink."),(0,r.yg)("td",{parentName:"tr",align:null},"Stream has attributes such as ID, Name, and data fields.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node"),(0,r.yg)("td",{parentName:"tr",align:null},"Data Node, including ",(0,r.yg)("inlineCode",{parentName:"td"},"Extract Node")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"Load Node"),",  stands for the data source and sink types separately."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"InLongMsg"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong data format, if you consume message directly from the message queue, you need to perform ",(0,r.yg)("inlineCode",{parentName:"td"},"InLongMsg")," parsing first."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Cluster"),(0,r.yg)("td",{parentName:"tr",align:null},"Each component can form a single cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"Contains cluster name, label, necessary information for each component, etc.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Tag"),(0,r.yg)("td",{parentName:"tr",align:null},"Clusters of different components can use the same tag to represent a set of data stream execution units."),(0,r.yg)("td",{parentName:"tr",align:null},"Currently tag are only available for clusters")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Agent"),(0,r.yg)("td",{parentName:"tr",align:null},"The standard architecture uses Agent for data collection, and Agent represents different types of collection capabilities."),(0,r.yg)("td",{parentName:"tr",align:null},"It contains File Agent, SQL Agent, Binlog Agent, etc.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DataProxy"),(0,r.yg)("td",{parentName:"tr",align:null},"Forward received data to different message queues."),(0,r.yg)("td",{parentName:"tr",align:null},"Supports data transmission blocking, placing retransmission.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Sort"),(0,r.yg)("td",{parentName:"tr",align:null},"Data stream sorting."),(0,r.yg)("td",{parentName:"tr",align:null},"Sort-flink based on Flink, sort-standalone for local sorting.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TubeMQ"),(0,r.yg)("td",{parentName:"tr",align:null},"InLong's self-developed message queuing service"),(0,r.yg)("td",{parentName:"tr",align:null},"It can also be called Tube, with low-cost, high-performance features.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Apache Pulsar"),", a high-performance, high-consistency message queue service"),(0,r.yg)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);