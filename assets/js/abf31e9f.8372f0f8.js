"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[63616],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,y=s["".concat(d,".").concat(c)]||s[c]||p[c]||i;return n?a.createElement(y,l(l({ref:t},g),{},{components:n})):a.createElement(y,l({ref:t},g))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const i={title:"Overview",sidebar_position:1},l=void 0,o={unversionedId:"modules/audit/overview",id:"modules/audit/overview",title:"Overview",description:"InLong audit is a subsystem independent of InLong, which performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.",source:"@site/docs/modules/audit/overview.md",sourceDirName:"modules/audit",slug:"/modules/audit/overview",permalink:"/docs/next/modules/audit/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/audit/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar2kafka Example",permalink:"/docs/next/modules/sort-standalone/pulsar2kafka"},next:{title:"Configuration",permalink:"/docs/next/modules/audit/configure"}},d={},u=[{value:"Architecture",id:"architecture",level:2},{value:"Module",id:"module",level:2},{value:"Audit Dimension",id:"audit-dimension",level:2},{value:"Audit ID",id:"audit-id",level:2},{value:"Data Transfer Protocol",id:"data-transfer-protocol",level:2}],g={toc:u},s="wrapper";function p(e){let{components:t,...i}=e;return(0,r.yg)(s,(0,a.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"InLong audit is a subsystem independent of InLong, which performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.\nThere are three granularities for reconciliation: minutes, hours, and days."),(0,r.yg)("p",null,"The audit reconciliation is based on the log reporting time, and each service participating in the audit will conduct real-time reconciliation according to the same log time. Through audit reconciliation, we can clearly understand InLong\nThe transmission status of each module, and whether the data stream is lost or repeated"),(0,r.yg)("h2",{id:"architecture"},"Architecture"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(98703).A,width:"1130",height:"352"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The audit SDK is nested in the service that needs to be audited, audits the service, and sends the audit result to the audit access layer"),(0,r.yg)("li",{parentName:"ol"},"The audit proxy writes audit data to MQ (Pulsar, Kafka or TubeMQ)"),(0,r.yg)("li",{parentName:"ol"},"The distribution service consumes the audit data of MQ, and writes the audit data to MySQL or StarRocks."),(0,r.yg)("li",{parentName:"ol"},"The interface layer encapsulates the data of MySQL or StarRocks."),(0,r.yg)("li",{parentName:"ol"},"Application scenarios mainly include report display, audit reconciliation, etc."),(0,r.yg)("li",{parentName:"ol"},"Support audit and reconciliation of data supplementary recording scenarios."),(0,r.yg)("li",{parentName:"ol"},"Support audit reconciliation in Flink checkpoint scenarios.")),(0,r.yg)("h2",{id:"module"},"Module"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Modules"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"audit-sdk"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Audit hidden points are reported. Each module uses the SDK to report audit data")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"audit-proxy"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Audit proxy layer, receives data reported by SDK and forwards it to MQ (pulsar/kafka/tubeMQ)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"audit-store"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Audit storage layer, supporting common JDBC protocol")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"audit-service"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Audit service layer, providing aggregation, cache, OpenAPI and other capabilities")))),(0,r.yg)("h2",{id:"audit-dimension"},"Audit Dimension"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Machine ip"),(0,r.yg)("td",{parentName:"tr",align:null},"Container ID"),(0,r.yg)("td",{parentName:"tr",align:null},"Thread ID"),(0,r.yg)("td",{parentName:"tr",align:null},"Log time (minutes)"),(0,r.yg)("td",{parentName:"tr",align:null},"Audit ID"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong_group_id"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong_stream_id"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of records"),(0,r.yg)("td",{parentName:"tr",align:null},"Size"),(0,r.yg)("td",{parentName:"tr",align:null},"Transmission delay (ms)")))),(0,r.yg)("h2",{id:"audit-id"},"Audit ID"),(0,r.yg)("p",null,"The receiving and sending of each module are respectively an independent audit item ID"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Inlong Service Module"),(0,r.yg)("th",{parentName:"tr",align:null},"Audit ID"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Inlong API Received Successfully"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Inlong API Send Successfully"),(0,r.yg)("td",{parentName:"tr",align:null},"2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Inlong Agent Received Successfully"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Inlong Agent Send Successfully"),(0,r.yg)("td",{parentName:"tr",align:null},"4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Inlong DataProxy Received Successfully"),(0,r.yg)("td",{parentName:"tr",align:null},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Inlong DataProxy Send Successfully"),(0,r.yg)("td",{parentName:"tr",align:null},"6")))),(0,r.yg)("h2",{id:"data-transfer-protocol"},"Data Transfer Protocol"),(0,r.yg)("p",null,"The transmission protocol between SDK, Audit Proxy, and Audit Store is Protocol Buffers"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},'syntax = "proto3";\n\npackage org.apache.inlong.audit.protocol;\n\nmessage BaseCommand {\n    enum Type {\n        PING          = 0;\n        PONG          = 1;\n        AUDITREQUEST  = 2;\n        AUDITREPLY    = 3;\n    }\n    Type type                            = 1;\n    optional AuditRequest audit_request  = 2;\n    optional AuditReply audit_reply      = 3;\n    optional Ping ping                   = 4;\n    optional Pong pong                   = 5;\n}\n\nmessage Ping {\n}\n\nmessage Pong {\n}\n\nmessage AuditRequest {\n  AuditMessageHeader msg_header = 1;   \n  repeated AuditMessageBody msg_body = 2;   \n}\n\nmessage AuditMessageHeader {\n  string ip = 1;            \n  string docker_id = 2;     \n  string thread_id = 3;     \n  uint64 sdk_ts = 4;        \n  uint64 packet_id = 5;     \n}\n\nmessage AuditMessageBody {\n  uint64 log_ts = 1;   \n  string inlong_group_id= 2;   \n  string inlong_stream_id= 3; \n  string audit_id = 4;   \n  uint64 count = 5;     \n  uint64 size = 6;      \n  int64  delay = 7;      \n}\n\nmessage AuditReply {\n  enum RSP_CODE {\n    SUCCESS  = 0;  \n    FAILED   = 1;   \n    DISASTER = 2; \n  }\n  RSP_CODE rsp_code = 1;   \n  optional string message = 2;\n}\n')))}p.isMDXComponent=!0},98703:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/audit_architecture-22e87871be9417f200d28eac4f208041.png"}}]);