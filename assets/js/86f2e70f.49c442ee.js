"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9831],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),d=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,m=p["".concat(g,".").concat(c)]||p[c]||u[c]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const l={title:"Overview",sidebar_position:1},i=void 0,o={unversionedId:"modules/agent/overview",id:"version-1.9.0/modules/agent/overview",title:"Overview",description:"InLong Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc.",source:"@site/versioned_docs/version-1.9.0/modules/agent/overview.md",sourceDirName:"modules/agent",slug:"/modules/agent/overview",permalink:"/docs/1.9.0/modules/agent/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/modules/agent/overview.md",tags:[],version:"1.9.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bare Metal",permalink:"/docs/1.9.0/deployment/bare_metal"},next:{title:"Deployment",permalink:"/docs/1.9.0/modules/agent/quick_start"}},g={},d=[{value:"Design Concept",id:"design-concept",level:2},{value:"InLong-Agent Architecture",id:"inlong-agent-architecture",level:2},{value:"Different kinds of agent",id:"different-kinds-of-agent",level:2},{value:"File",id:"file",level:3},{value:"File options",id:"file-options",level:4},{value:"SQL",id:"sql",level:3},{value:"Binlog",id:"binlog",level:3}],s={toc:d},p="wrapper";function u(e){let{components:t,...l}=e;return(0,r.yg)(p,(0,a.A)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"InLong Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc."),(0,r.yg)("h2",{id:"design-concept"},"Design Concept"),(0,r.yg)("p",null,"In order to solve the problem of data source diversity, InLong-agent abstracts multiple data sources into a unified source concept, and abstracts sinks to write data. When you need to access a new data source, you only need to configure the format and reading parameters of the data source to achieve efficient reading."),(0,r.yg)("h2",{id:"inlong-agent-architecture"},"InLong-Agent Architecture"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(47881).A,width:"1652",height:"506"})),(0,r.yg)("p",null,"The InLong Agent task is used as a data acquisition framework, constructed with a channel + plug-in architecture. Read and write the data source into a reader/writer plug-in, and then into the entire framework."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Reader: Reader is the data collection module, responsible for collecting data from the data source and sending the data to the channel."),(0,r.yg)("li",{parentName:"ul"},"Writer: Writer is a data writing module, which reuses data continuously to the channel and writes the data to the destination."),(0,r.yg)("li",{parentName:"ul"},"Channel: The channel used to connect the reader and writer, and as the data transmission channel of the connection, which realizes the function of data reading and monitoring")),(0,r.yg)("h2",{id:"different-kinds-of-agent"},"Different kinds of agent"),(0,r.yg)("h3",{id:"file"},"File"),(0,r.yg)("p",null,"File collection includes the following functions:"),(0,r.yg)("p",null,"User-configured path monitoring, able to monitor the created file information\nDirectory regular filtering, support YYYYMMDD+regular expression path configuration\nBreakpoint retransmission, when InLong-Agent restarts, it can automatically re-read from the last read position to ensure no reread or missed reading."),(0,r.yg)("h4",{id:"file-options"},"File options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"File pattern. For example: /root/","[*]",".log")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timeOffset"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"File name includes time, for example: ",(0,r.yg)("strong",{parentName:"td"},(0,r.yg)("em",{parentName:"strong"}," YYYYMMDDHH "))," YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour, *** is any character. '1m' means one minute after, '-1m' means one minute before. '1h' means one hour after, '-1h' means one hour before. '1d' means one day after, '-1d' means one day before.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collectType"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"FULL"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"FULL is all file. INCREMENT is the newly created file after start task.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lineEndPattern"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"'\\n'"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Line of file end pattern.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"contentCollectType"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"FULL"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Collect data of file content.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"envList"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"File needs to collect environment information, for example: kubernetes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataContentStyle"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Type of data result for column separator. Json format, set this parameter to json. CSV format, set this parameter to a custom separator: ",(0,r.yg)("inlineCode",{parentName:"td"},",")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},":"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataSeparator"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Column separator of data source.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"monitorStatus"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Monitor switch, 1 true and 0 false. Batch data is 0,real time data is 1.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"monitorInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"Monitor interval for file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"monitorExpire"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"Monitor expire time and the time in milliseconds.")))),(0,r.yg)("h3",{id:"sql"},"SQL"),(0,r.yg)("p",null,"This type of data refers to the way it is executed through SQL\nSQL regular decomposition, converted into multiple SQL statements\nExecute SQL separately, pull the data set, the pull process needs to pay attention to the impact on mysql itself\nThe execution cycle, which is generally executed regularly"),(0,r.yg)("h3",{id:"binlog"},"Binlog"),(0,r.yg)("p",null,"This type of collection reads binlog and restores data by configuring mysql slave\nNeed to pay attention to multi-threaded parsing when binlog is read, and multi-threaded parsing data needs to be labeled in order\nThe code is based on the old version of dbsync, the main modification is to change the sending of tdbus-sender to push to agent-channel for integration"))}u.isMDXComponent=!0},47881:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);