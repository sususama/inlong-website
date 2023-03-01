"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[77105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Deployment",sidebar_position:2},a=void 0,s={unversionedId:"modules/website/quick_start",id:"version-0.12.0/modules/website/quick_start",title:"Deployment",description:"Prepare Docker Image",source:"@site/versioned_docs/version-0.12.0/modules/website/quick_start.md",sourceDirName:"modules/website",slug:"/modules/website/quick_start",permalink:"/docs/0.12.0/modules/website/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/website/quick_start.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/0.12.0/modules/website/overview"},next:{title:"Overview",permalink:"/docs/0.12.0/sdk/dataproxy-sdk/overview"}},l={},c=[{value:"Prepare Docker Image",id:"prepare-docker-image",level:2},{value:"Run",id:"run",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prepare-docker-image"},"Prepare Docker Image"),(0,o.kt)("p",null,"pull image from central hub\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull inlong/website:latest\n")),(0,o.kt)("p",null,"or build image from source\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn package -DskipTests -Pdocker -pl inlong-website\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# MANAGER_API_ADDRESS must be replaced by inlong-manager-web address\ndocker run -d --name website -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/website\n")))}d.isMDXComponent=!0}}]);