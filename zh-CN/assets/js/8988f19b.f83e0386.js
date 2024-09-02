"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[32320],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>g});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?t.createElement(g,i(i({ref:r},c),{},{components:n})):t.createElement(g,i({ref:r},c))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44826:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=n(58168),o=(n(96540),n(15680));const a={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},i=void 0,l={unversionedId:"modules/dashboard/quick_start",id:"version-1.12.0/modules/dashboard/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u9009\u62e9 1\uff1aDocker \u90e8\u7f72",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.12.0/modules/dashboard/quick_start.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/quick_start",permalink:"/zh-CN/docs/1.12.0/modules/dashboard/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/modules/dashboard/quick_start.md",tags:[],version:"1.12.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/1.12.0/modules/dashboard/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.12.0/modules/sort-standalone/overview"}},s={},d=[{value:"\u9009\u62e9 1\uff1aDocker \u90e8\u7f72",id:"\u9009\u62e9-1docker-\u90e8\u7f72",level:2},{value:"\u51c6\u5907\u955c\u50cf",id:"\u51c6\u5907\u955c\u50cf",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"\u9009\u62e9 2\uff1aNginx \u90e8\u7f72",id:"\u9009\u62e9-2nginx-\u90e8\u7f72",level:2}],c={toc:d},p="wrapper";function u(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u9009\u62e9-1docker-\u90e8\u7f72"},"\u9009\u62e9 1\uff1aDocker \u90e8\u7f72"),(0,o.yg)("h3",{id:"\u51c6\u5907\u955c\u50cf"},"\u51c6\u5907\u955c\u50cf"),(0,o.yg)("p",null,"\u4ece\u4ed3\u5e93\u62c9\u8d77\u6700\u65b0\u955c\u50cf\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker pull inlong/dashboard:latest\n")),(0,o.yg)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"# MANAGER_API_ADDRESS \u73af\u5883\u53d8\u91cf \u4f7f\u7528inlong-manager \u90e8\u7f72\u5730\u5740\u66ff\u6362\ndocker run -d --name dashboard -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/dashboard\n")),(0,o.yg)("h2",{id:"\u9009\u62e9-2nginx-\u90e8\u7f72"},"\u9009\u62e9 2\uff1aNginx \u90e8\u7f72"),(0,o.yg)("p",null,"\u4f8b\u5982\uff0c\u4fee\u6539 ",(0,o.yg)("inlineCode",{parentName:"p"},"inlong-dashboard")," \u5b89\u88c5\u8def\u5f84\u548c Manager \u670d\u52a1\u5730\u5740\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"server {\nlisten       80;\nlisten       [::]:80;\nserver_name  _;\nroot         ${dashboard_installed_path};\n# API prefix of InlongManager\nlocation /inlong/manager {\nproxy_pass      http://{manager_api_address};\n}\n}\n")))}u.isMDXComponent=!0}}]);