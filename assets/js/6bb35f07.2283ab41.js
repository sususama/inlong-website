"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[46501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,g=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Monitor Metrics",sidebar_position:3},i=void 0,o={unversionedId:"modules/agent/metrics",id:"version-1.2.0/modules/agent/metrics",title:"Monitor Metrics",description:"JMX Configuration",source:"@site/versioned_docs/version-1.2.0/modules/agent/metrics.md",sourceDirName:"modules/agent",slug:"/modules/agent/metrics",permalink:"/docs/1.2.0/modules/agent/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/modules/agent/metrics.md",tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{title:"Monitor Metrics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.2.0/modules/agent/quick_start"},next:{title:"Overview",permalink:"/docs/1.2.0/modules/dataproxy/overview"}},s={},u=[{value:"JMX Configuration",id:"jmx-configuration",level:2},{value:"Prometheus Configuration",id:"prometheus-configuration",level:2},{value:"Appendix: Metrics Items",id:"appendix-metrics-items",level:2},{value:"AgentTaskMetric",id:"agenttaskmetric",level:3},{value:"JobMetrics",id:"jobmetrics",level:3},{value:"PluginMetric",id:"pluginmetric",level:3},{value:"SourceMetric",id:"sourcemetric",level:3},{value:"SinkMetric",id:"sinkmetric",level:3}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"jmx-configuration"},"JMX Configuration"),(0,a.kt)("p",null,"Agent provides the ability of monitoring indicators in JMX and Prometheus mode, and JMX mode is used by default. The monitoring indicators have been registered to MBeanServer\nUsers can add similar JMX (port and authentication are adjusted according to the situation) to the startup parameters of the Agent to realize the collection of monitoring indicators from the remote end."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-Dcom.sun.management.jmxremote\n-Djava.rmi.server.hostname=127.0.0.1\n-Dcom.sun.management.jmxremote.port=9999\n-Dcom.sun.management.jmxremote.authenticate=false\n-Dcom.sun.management.jmxremote.ssl=false\n")),(0,a.kt)("h2",{id:"prometheus-configuration"},"Prometheus Configuration"),(0,a.kt)("p",null,"You can declare whether to enable Prometheus and HTTPServer port in ",(0,a.kt)("inlineCode",{parentName:"p"},"agent.properties"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# the default is false\nagent.prometheus.enable=true\n# the default is 8080\nagent.prometheus.exporter.port=8080\n")),(0,a.kt)("h2",{id:"appendix-metrics-items"},"Appendix: Metrics Items"),(0,a.kt)("h3",{id:"agenttaskmetric"},"AgentTaskMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"runningTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"tasks currently being executed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retryingTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"Tasks that are currently being retried")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fatalTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of currently failed tasks")))),(0,a.kt)("h3",{id:"jobmetrics"},"JobMetrics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"runningJobs"),(0,a.kt)("td",{parentName:"tr",align:null},"the total number of currently running jobs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fatalJobs"),(0,a.kt)("td",{parentName:"tr",align:null},"the total number of currently failed jobs")))),(0,a.kt)("h3",{id:"pluginmetric"},"PluginMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of reads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of sent items")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendFailedNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of failed sending")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readFailedNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of failed reads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readSuccessNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of successful reads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendSuccessNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of successfully sent")))),(0,a.kt)("h3",{id:"sourcemetric"},"SourceMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_source_count_success"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"the success message count in agent source since agent started")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_source_count_fail"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"the sink success message count in agent source since agent started")))),(0,a.kt)("h3",{id:"sinkmetric"},"SinkMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_sink_count_success"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"the sink success message count in agent source since agent started")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_sink_count_fail"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"the sink failed message count in agent source since agent started")))))}d.isMDXComponent=!0}}]);