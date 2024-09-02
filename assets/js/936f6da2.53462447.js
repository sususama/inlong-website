"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33992],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={title:"Deployment",sidebar_position:2},i=void 0,l={unversionedId:"modules/sort-standalone/quick_start",id:"version-1.8.0/modules/sort-standalone/quick_start",title:"Deployment",description:"Prepare to get module archive",source:"@site/versioned_docs/version-1.8.0/modules/sort-standalone/quick_start.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/quick_start",permalink:"/docs/1.8.0/modules/sort-standalone/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/modules/sort-standalone/quick_start.md",tags:[],version:"1.8.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.8.0/modules/sort-standalone/overview"},next:{title:"Pulsar2Hive Example",permalink:"/docs/1.8.0/modules/sort-standalone/pulsar2hive"}},s={},c=[{value:"Prepare to get module archive",id:"prepare-to-get-module-archive",level:2},{value:"Start inlong-sort-standalone application",id:"start-inlong-sort-standalone-application",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"prepare-to-get-module-archive"},"Prepare to get module archive"),(0,o.yg)("p",null,"Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz."),(0,o.yg)("h2",{id:"start-inlong-sort-standalone-application"},"Start inlong-sort-standalone application"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Decompress the archive file;"),(0,o.yg)("li",{parentName:"ul"},"Prepare conf/common.properties (and other config files if choosing local file config mode);"),(0,o.yg)("li",{parentName:"ul"},"Start SortStandalone ",(0,o.yg)("inlineCode",{parentName:"li"},"./bin/sort-start.sh")),(0,o.yg)("li",{parentName:"ul"},'You can check the log file "sort.log".')))}d.isMDXComponent=!0}}]);