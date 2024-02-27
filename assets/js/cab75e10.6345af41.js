"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[16831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75940:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Overview",sidebar_position:1},i=void 0,l={unversionedId:"modules/manager/overview",id:"version-1.10.0/modules/manager/overview",title:"Overview",description:"Introduction",source:"@site/versioned_docs/version-1.10.0/modules/manager/overview.md",sourceDirName:"modules/manager",slug:"/modules/manager/overview",permalink:"/docs/1.10.0/modules/manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/modules/manager/overview.md",tags:[],version:"1.10.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dirty Data Archive",permalink:"/docs/1.10.0/modules/sort/dirty_data_archive"},next:{title:"Deployment",permalink:"/docs/1.10.0/modules/manager/quick_start"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Module",id:"module",level:2},{value:"Interaction Flow",id:"interaction-flow",level:2},{value:"Data Model",id:"data-model",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"InLong Manager is a unified management platform for the Apache InLong project. The platform provides maintenance portals for various basic configurations (such as data flow configuration, consumption configuration, cluster management, etc.). Users can create data collection tasks and view indicator data."),(0,r.kt)("h2",{id:"module"},"Module"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Modules"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-common"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Module common code, such as exception definition, tool class, enumeration, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,r.kt)("td",{parentName:"tr",align:"left"},"database operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-service"),(0,r.kt)("td",{parentName:"tr",align:"left"},"business logic layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-workflow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Workflow Services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-plugins"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sort plugin service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-web"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Front-end interactive interface layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-client"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client Services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-client-examples"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client usage examples")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-client-tools"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client command line tools")))),(0,r.kt)("h2",{id:"interaction-flow"},"Interaction Flow"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(46471).Z,width:"723",height:"1188"})),(0,r.kt)("h2",{id:"data-model"},"Data Model"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(77329).Z,width:"4055",height:"1944"}),"\nCurrently, the InLong Manager mainly consists of the following data models:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"InlongGroup: Data Streams Group, it contains multiple data streams, and one InlongGroup represents one data business unit."),(0,r.kt)("li",{parentName:"ul"},"InlongStream: Data Stream, a stream has a specific data source, data format and data sink."),(0,r.kt)("li",{parentName:"ul"},"StreamSource: Data sources, including File collection, MySQL collection, etc."),(0,r.kt)("li",{parentName:"ul"},"StreamSink: Data targets, including Hive, ClickHouse, and other locations where data ultimately flows into."),(0,r.kt)("li",{parentName:"ul"},"DataNode: Data nodes, including information such as data collection address, username, password, etc."),(0,r.kt)("li",{parentName:"ul"},"InlongCluster: Clusters, including cluster information such as Pulsar, TubeMQ, Kafka, etc.")))}p.isMDXComponent=!0},77329:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data_model-9de46caa93c0510cf8449069f30daa81.png"},46471:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/interaction-232d3de3787a9440dc1e70edd55dda3b.png"}}]);