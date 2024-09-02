"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[30689],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),p=u(n),s=a,d=p["".concat(o,".").concat(s)]||p[s]||y[s]||l;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[p]="string"==typeof e?e:a,i[1]=g;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const l={title:"\u76d1\u63a7\u6307\u6807",sidebar_position:3},i=void 0,g={unversionedId:"modules/agent/metrics",id:"version-1.8.0/modules/agent/metrics",title:"\u76d1\u63a7\u6307\u6807",description:"JMX \u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.8.0/modules/agent/metrics.md",sourceDirName:"modules/agent",slug:"/modules/agent/metrics",permalink:"/zh-CN/docs/1.8.0/modules/agent/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/modules/agent/metrics.md",tags:[],version:"1.8.0",sidebarPosition:3,frontMatter:{title:"\u76d1\u63a7\u6307\u6807",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/1.8.0/modules/agent/configure"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.8.0/modules/dataproxy/overview"}},o={},u=[{value:"JMX \u914d\u7f6e",id:"jmx-\u914d\u7f6e",level:2},{value:"Prometheus \u914d\u7f6e",id:"prometheus-\u914d\u7f6e",level:2},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u9644\u5f55\uff1a\u6307\u6807\u9879",id:"\u9644\u5f55\u6307\u6807\u9879",level:2},{value:"AgentTaskMetric",id:"agenttaskmetric",level:3},{value:"JobMetrics",id:"jobmetrics",level:3},{value:"PluginMetric",id:"pluginmetric",level:3},{value:"SourceMetric",id:"sourcemetric",level:3},{value:"SinkMetric",id:"sinkmetric",level:3}],m={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"jmx-\u914d\u7f6e"},"JMX \u914d\u7f6e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"# JMX\u76d1\u542c\u7c7b\u662fAgentJmxMetricListener\nagent.domainListeners=org.apache.inlong.agent.metrics.AgentJmxMetricListener\n")),(0,a.yg)("h2",{id:"prometheus-\u914d\u7f6e"},"Prometheus \u914d\u7f6e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"# Prometheus\u76d1\u542c\u7c7b\u662fAgentPrometheusMetricListener\nagent.domainListeners=org.apache.inlong.agent.metrics.AgentPrometheusMetricListener\n# \u9ed8\u8ba4\u7aef\u53e3\u4e3a9080\nagent.prometheus.exporter.port=9080\n")),(0,a.yg)("h2",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.yg)("p",null,"\u5982\u679c\u7528\u6237\u60f3\u901a\u8fc7\u5176\u4ed6\u76d1\u63a7\u6307\u6807\u80fd\u529b\uff0c\u53ef\u4ee5\u7ee7\u627f",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.metrics.AgentMetricBaseListener"),"\u7c7b\u5e76\u5b9e\u73b0\uff0c\n\u6700\u540e\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"agent.properties")," \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"agent.domainListeners")," \u5c5e\u6027\u3002"),(0,a.yg)("h2",{id:"\u9644\u5f55\u6307\u6807\u9879"},"\u9644\u5f55\uff1a\u6307\u6807\u9879"),(0,a.yg)("h3",{id:"agenttaskmetric"},"AgentTaskMetric"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"runningTasks"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"retryingTasks"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u91cd\u8bd5\u7684\u4efb\u52a1")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fatalTasks"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5931\u8d25\u7684\u4efb\u52a1\u603b\u6570")))),(0,a.yg)("h3",{id:"jobmetrics"},"JobMetrics"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"runningJobs"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684job\u603b\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fatalJobs"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5931\u8d25\u7684job\u603b\u6570")))),(0,a.yg)("h3",{id:"pluginmetric"},"PluginMetric"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readNum"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u7684\u6761\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sendNum"),(0,a.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7684\u6761\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sendFailedNum"),(0,a.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5931\u8d25\u6761\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readFailedNum"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u5931\u8d25\u6761\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readSuccessNum"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u6210\u529f\u6761\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sendSuccessNum"),(0,a.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6210\u529f\u6761\u6570")))),(0,a.yg)("h3",{id:"sourcemetric"},"SourceMetric"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"agent_source_count_success"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"source \u8bfb\u53d6\u6210\u529f\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"agent_source_count_fail"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"source \u8bfb\u53d6\u5931\u8d25\u6b21\u6570")))),(0,a.yg)("h3",{id:"sinkmetric"},"SinkMetric"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"agent_sink_count_success"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"sink \u5199\u5165\u6210\u529f\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"agent_sink_count_fail"),(0,a.yg)("td",{parentName:"tr",align:null},"Counter"),(0,a.yg)("td",{parentName:"tr",align:null},"sink \u5199\u5165\u5931\u8d25\u6b21\u6570")))))}y.isMDXComponent=!0}}]);