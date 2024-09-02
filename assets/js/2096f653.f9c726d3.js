"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21684],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(58168),r=(n(96540),n(15680));const a={title:"Auto Consumption",sidebar_position:2},i=void 0,s={unversionedId:"data_node/load_node/auto_consumption",id:"version-1.8.0/data_node/load_node/auto_consumption",title:"Auto Consumption",description:"Overview",source:"@site/versioned_docs/version-1.8.0/data_node/load_node/auto_consumption.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/auto_consumption",permalink:"/docs/1.8.0/data_node/load_node/auto_consumption",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/data_node/load_node/auto_consumption.md",tags:[],version:"1.8.0",sidebarPosition:2,frontMatter:{title:"Auto Consumption",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.8.0/data_node/load_node/overview"},next:{title:"ClickHouse",permalink:"/docs/1.8.0/data_node/load_node/clickhouse"}},c={},d=[{value:"Overview",id:"overview",level:2}],l={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Auto Consumption")," meanings receive data from Message Queue Services (TubeMQ or Pulsar) directly, you can consume the message from MQ\nby ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/2.8.3/client-libraries/"},"Pulsar SDK Client")," or ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.8.0/modules/tubemq/clients_java"},"TubeMQ SDK Client"),",\nafter that, you have to ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.8.0/development/inlong_msg"},"Parse the InLongMsg")," to get raw data for forward processing."))}p.isMDXComponent=!0}}]);