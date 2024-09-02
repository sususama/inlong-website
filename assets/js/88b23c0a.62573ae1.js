"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10032],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=u(n),d=a,y=g["".concat(l,".").concat(d)]||g[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const o={title:"How to Report Issues",sidebar_position:8},i=void 0,s={unversionedId:"how-to-report-issues",id:"how-to-report-issues",title:"How to Report Issues",description:"For InLong Users",source:"@site/community/how-to-report-issues.md",sourceDirName:".",slug:"/how-to-report-issues",permalink:"/community/how-to-report-issues",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/community/how-to-report-issues.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to Report Issues",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"How to Verify Release Candidate",permalink:"/community/how-to-verify"},next:{title:"How to Maintain Third-party Dependencies",permalink:"/community/how-to-maintain-3rd-party-dependencies"}},l={},u=[{value:"For InLong Users",id:"for-inlong-users",level:2},{value:"For InLong Developers",id:"for-inlong-developers",level:2},{value:"Filing a GitHub Issues for InLong issues",id:"filing-a-github-issues-for-inlong-issues",level:2}],p={toc:u},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"for-inlong-users"},"For InLong Users"),(0,a.yg)("p",null,"If you have an issue with InLong operation, please follow these guidelines:"),(0,a.yg)("p",null,"If you are having an issue with setup, configuration, or some other form of behavior not matching your expectation, ask your questions in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/discussions"},"GitHub Discussions"),".\nSee the ",(0,a.yg)("a",{parentName:"p",href:"https://inlong.apache.org/community/how-to-subscribe"},"how-to-subscribe page")," for information on mailing lists. You can also ask the InLong slack channel for help, check the web page for details on how to join.\nIf you have a bug that needs a fix in the code or in the documentation, please follow the procedure in the GitHub Issues below."),(0,a.yg)("h2",{id:"for-inlong-developers"},"For InLong Developers"),(0,a.yg)("p",null,"GitHub Issues is used by the Apache InLong project to track all issues. These include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add new features"),(0,a.yg)("li",{parentName:"ul"},"Improving existing features"),(0,a.yg)("li",{parentName:"ul"},"Report bugs that need to be fixed in the codebase")),(0,a.yg)("p",null,"If you are interested in tracking development issues in GitHub Issues, you can browse this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/issues"},"link"),"."),(0,a.yg)("h2",{id:"filing-a-github-issues-for-inlong-issues"},"Filing a GitHub Issues for InLong issues"),(0,a.yg)("p",null,"Go to the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/issues"},"InLong GitHub Issues")," page to file your issue."),(0,a.yg)("p",null,"Make sure the Project is set to InLong. Set the issue type field appropriately based on your analysis or request:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Bug"),(0,a.yg)("li",{parentName:"ul"},"New Feature"),(0,a.yg)("li",{parentName:"ul"},"Improvement"),(0,a.yg)("li",{parentName:"ul"},"Umbrella")),(0,a.yg)("p",null,"For Summary, please provide a detailed title e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"[Bug][DataProxy] Repeated registration jmx metric bean")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"Dataproxy registration error"),"."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"Component"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Agent"),(0,a.yg)("td",{parentName:"tr",align:"left"},"data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection capabilities will also be expanded.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"DataProxy"),(0,a.yg)("td",{parentName:"tr",align:"left"},"a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"TubeMQ"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Sort"),(0,a.yg)("td",{parentName:"tr",align:"left"},"after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  Hudi, etc.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Manager"),(0,a.yg)("td",{parentName:"tr",align:"left"},"provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Dashboard"),(0,a.yg)("td",{parentName:"tr",align:"left"},"a front-end page for managing data access,  simplifying the use of the entire InLong control platform.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Audit"),(0,a.yg)("td",{parentName:"tr",align:"left"},"performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"SDK"),(0,a.yg)("td",{parentName:"tr",align:"left"},"include DataProxy SDK, Sort SDK etc.")))),(0,a.yg)("p",null,"The Affects Versions/s field can be set to the earliest version of InLong where you have seen the bug. If you are not sure then just leave it empty."),(0,a.yg)("p",null,"If you are a developer intending to fix the bug, put your GitHub Issues ID in the Assignee field. "),(0,a.yg)("p",null,"Please put as much detail as possible in the Description field. Include your configuration changes, cluster size, and InLong version. Any related code or configuration that helps replicate the issue you should also add."),(0,a.yg)("p",null,"For bug reports: a short reproduction of the problem would be more than welcomed. If you have logs, the specific part of the log with the error message or stack trace. Attaching the entire log can be useful. If you have already tried to debug the issue describe the steps you have already done. Even if that result was that you were not able to reproduce the issue."),(0,a.yg)("p",null,"For new feature requests, it may include a design document. If you do not have that or it is just a generic request work with us to design your feature and implement it."),(0,a.yg)("p",null,"Please set the component field if you have isolated the issue to a particular component:"))}c.isMDXComponent=!0}}]);