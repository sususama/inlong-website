"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3992],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1654:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Overview",sidebar_position:1},i=void 0,o={unversionedId:"modules/agent/overview",id:"modules/agent/overview",title:"Overview",description:"InLong Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc.",source:"@site/docs/modules/agent/overview.md",sourceDirName:"modules/agent",slug:"/modules/agent/overview",permalink:"/docs/next/modules/agent/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/agent/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bare Metal",permalink:"/docs/next/deployment/bare_metal"},next:{title:"Deployment",permalink:"/docs/next/modules/agent/quick_start"}},d={},s=[{value:"Design Concept",id:"design-concept",level:2},{value:"InLong-Agent Architecture",id:"inlong-agent-architecture",level:2},{value:"Different kinds of agent",id:"different-kinds-of-agent",level:2},{value:"File",id:"file",level:3},{value:"File options",id:"file-options",level:4},{value:"SQL",id:"sql",level:3},{value:"Binlog",id:"binlog",level:3}],p={toc:s};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"InLong Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including File, SQL, Binlog, Metrics, etc."),(0,r.kt)("h2",{id:"design-concept"},"Design Concept"),(0,r.kt)("p",null,"In order to solve the problem of data source diversity, InLong-agent abstracts multiple data sources into a unified source concept, and abstracts sinks to write data. When you need to access a new data source, you only need to configure the format and reading parameters of the data source to achieve efficient reading."),(0,r.kt)("h2",{id:"inlong-agent-architecture"},"InLong-Agent Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(11846).Z,width:"1652",height:"506"})),(0,r.kt)("p",null,"The InLong Agent task is used as a data acquisition framework, constructed with a channel + plug-in architecture. Read and write the data source into a reader/writer plug-in, and then into the entire framework."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reader: Reader is the data collection module, responsible for collecting data from the data source and sending the data to the channel."),(0,r.kt)("li",{parentName:"ul"},"Writer: Writer is a data writing module, which reuses data continuously to the channel and writes the data to the destination."),(0,r.kt)("li",{parentName:"ul"},"Channel: The channel used to connect the reader and writer, and as the data transmission channel of the connection, which realizes the function of data reading and monitoring")),(0,r.kt)("h2",{id:"different-kinds-of-agent"},"Different kinds of agent"),(0,r.kt)("h3",{id:"file"},"File"),(0,r.kt)("p",null,"File collection includes the following functions:"),(0,r.kt)("p",null,"User-configured path monitoring, able to monitor the created file information\nDirectory regular filtering, support YYYYMMDD+regular expression path configuration\nBreakpoint retransmission, when InLong-Agent restarts, it can automatically re-read from the last read position to ensure no reread or missed reading."),(0,r.kt)("h4",{id:"file-options"},"File options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"File pattern. For example: /root/","[*]",".log")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"File name includes time, for example: ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"}," YYYYMMDDHH "))," YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour, *** is any character. '1m' means one minute after, '-1m' means one minute before. '1h' means one hour after, '-1h' means one hour before. '1d' means one day after, '-1d' means one day before.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collectType"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"FULL"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"FULL is all file. INCREMENT is the newly created file after start task.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineEndPattern"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"'\\n'"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Line of file end pattern.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contentCollectType"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"FULL"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Collect data of file content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"envList"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"File needs to collect environment information, for example: kubernetes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataContentStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of data result for column separator. Json format, set this parameter to json. CSV format, set this parameter to a custom separator: ",(0,r.kt)("inlineCode",{parentName:"td"},",")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},":"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSeparator"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Column separator of data source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor switch, 1 true and 0 false. Batch data is 0,real time data is 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor interval for file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorExpire"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor expire time and the time in milliseconds.")))),(0,r.kt)("h3",{id:"sql"},"SQL"),(0,r.kt)("p",null,"This type of data refers to the way it is executed through SQL\nSQL regular decomposition, converted into multiple SQL statements\nExecute SQL separately, pull the data set, the pull process needs to pay attention to the impact on mysql itself\nThe execution cycle, which is generally executed regularly"),(0,r.kt)("h3",{id:"binlog"},"Binlog"),(0,r.kt)("p",null,"This type of collection reads binlog and restores data by configuring mysql slave\nNeed to pay attention to multi-threaded parsing when binlog is read, and multi-threaded parsing data needs to be labeled in order\nThe code is based on the old version of dbsync, the main modification is to change the sending of tdbus-sender to push to agent-channel for integration"))}u.isMDXComponent=!0},11846:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);