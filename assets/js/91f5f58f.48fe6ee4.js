"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[55183],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),g=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=g(a),c=r,y=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30298:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const l={title:"Bare Metal",sidebar_position:4},o=void 0,i={unversionedId:"deployment/bare_metal",id:"version-1.5.0/deployment/bare_metal",title:"Bare Metal",description:"Environment Requirements",source:"@site/versioned_docs/version-1.5.0/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/docs/1.5.0/deployment/bare_metal",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/deployment/bare_metal.md",tags:[],version:"1.5.0",sidebarPosition:4,frontMatter:{title:"Bare Metal",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/1.5.0/deployment/k8s"},next:{title:"Overview",permalink:"/docs/1.5.0/modules/agent/overview"}},d={},g=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"Standard Architecture",id:"standard-architecture",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Create Data Stream",id:"create-data-stream",level:3},{value:"Lightweight Architecture",id:"lightweight-architecture",level:2},{value:"Deploy",id:"deploy-1",level:3}],p={toc:g},u="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"MySQL 5.7+ or PostgreSQL"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"Apache Flink 1.13.5"))),(0,r.yg)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,r.yg)("p",null,"InLong Support the following Message Queue services now, you can choose one of them."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.5.0/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,r.yg)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,r.yg)("p",null,"You can get binary package from ",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.5.0/quick_start/how_to_build"},"How to Build"),".\u3002"),(0,r.yg)("h2",{id:"standard-architecture"},"Standard Architecture"),(0,r.yg)("p",null,"You need deploy all InLong components for Standard Architecture."),(0,r.yg)("h3",{id:"deploy"},"Deploy"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"order"),(0,r.yg)("th",{parentName:"tr",align:null},"component"),(0,r.yg)("th",{parentName:"tr",align:null},"dependencies"),(0,r.yg)("th",{parentName:"tr",align:null},"deploy guide"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-audit"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL or Elasticsearch"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/1.5.0/modules/audit/quick_start"},"InLong Audit")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-manager"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/1.5.0/modules/manager/quick_start"},"InLong Manager")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/1.5.0/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-agent"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/1.5.0/modules/agent/quick_start"},"InLong Agent")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-dashboard"),(0,r.yg)("td",{parentName:"tr",align:null},"Nginx or Docker"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/1.5.0/modules/dashboard/quick_start"},"InLong Dashboard")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong-sort-connectors"),(0,r.yg)("td",{parentName:"tr",align:null},"Apache Flink"),(0,r.yg)("td",{parentName:"tr",align:null},"Extract ",(0,r.yg)("a",{parentName:"td",href:"https://inlong.apache.org/download/"},"apache-inlong-[version]-sort-connectors.tar.gz")," and move connectors jar to ",(0,r.yg)("inlineCode",{parentName:"td"},"inlong-sort/connectors")," directory."),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"create-data-stream"},"Create Data Stream"),(0,r.yg)("p",null,"After the InLong cluster deployed successfully, you can create a data stream refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.5.0/user_guide/dashboard_usage"},"Dashboard Usage Guide")," to start using."),(0,r.yg)("h2",{id:"lightweight-architecture"},"Lightweight Architecture"),(0,r.yg)("h3",{id:"deploy-1"},"Deploy"),(0,r.yg)("p",null,"Lightweight Architecture only needs InLong Sort component, it is simple and flexible, suitable for small-scale data.\nYou can deploy and use it refer ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.5.0/modules/sort/quick_start"},"the deployment guide"),"."))}s.isMDXComponent=!0}}]);