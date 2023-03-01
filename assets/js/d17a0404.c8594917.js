"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[52507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={title:"Zookeeper Configure"},a="Overview",l={unversionedId:"modules/sort/protocol_introduction",id:"version-0.11.0/modules/sort/protocol_introduction",title:"Zookeeper Configure",description:"Currently the metadata management of inlong-sort relies on inlong-manager.",source:"@site/versioned_docs/version-0.11.0/modules/sort/protocol_introduction.md",sourceDirName:"modules/sort",slug:"/modules/sort/protocol_introduction",permalink:"/docs/0.11.0/modules/sort/protocol_introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/sort/protocol_introduction.md",tags:[],version:"0.11.0",frontMatter:{title:"Zookeeper Configure"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/0.11.0/modules/sort/introduction"},next:{title:"Build && Deployment",permalink:"/docs/0.11.0/modules/sort/quick_start"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Currently the metadata management of inlong-sort relies on inlong-manager."),(0,n.kt)("p",null,"Metadata interaction between inlong-sort and inlong-manager is performed via ZK."),(0,n.kt)("h1",{id:"zookeepers-path-structure"},"Zookeeper's path structure"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:r(68638).Z,width:"663",height:"130"})),(0,n.kt)("p",null,"Cluster represents a flink job. Multiple flows can be handled in the same cluster, but these flows must be homogeneous (source is the same as sink)."),(0,n.kt)("p",null,"The DataFlow represents a specific flow, and each flow is identified by a globally unique ID. The flow consists of source + sink."),(0,n.kt)("p",null,"A path at the top of the figure indicates which dataflow are running in a cluster, without metadata under the node."),(0,n.kt)("p",null,"The path below is used to store the details of the dataflow."),(0,n.kt)("h1",{id:"protocol"},"Protocol"),(0,n.kt)("p",null,"Please reference\n",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.protocol.DataFlowInfo")))}d.isMDXComponent=!0},68638:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/img-344b6f587c065734ac081babe17c0b2c.png"}}]);