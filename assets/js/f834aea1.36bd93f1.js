"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[56676],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,m=p["".concat(c,".").concat(g)]||p[g]||s[g]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},53494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(58168),o=(t(96540),t(15680));const a={title:"How to Build",sidebar_position:1},i=void 0,l={unversionedId:"quick_start/how_to_build",id:"version-1.7.0/quick_start/how_to_build",title:"How to Build",description:"Download Source Code",source:"@site/versioned_docs/version-1.7.0/quick_start/how_to_build.md",sourceDirName:"quick_start",slug:"/quick_start/how_to_build",permalink:"/docs/1.7.0/quick_start/how_to_build",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/quick_start/how_to_build.md",tags:[],version:"1.7.0",sidebarPosition:1,frontMatter:{title:"How to Build",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DataProxy Plugin",permalink:"/docs/1.7.0/design_and_concept/how_to_write_plugin_dataproxy"},next:{title:"Hive Example",permalink:"/docs/1.7.0/quick_start/hive_example"}},c={},u=[{value:"Download Source Code",id:"download-source-code",level:2},{value:"Build Binary Package",id:"build-binary-package",level:2},{value:"Build Docker Images",id:"build-docker-images",level:2}],d={toc:u},p="wrapper";function s(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"download-source-code"},"Download Source Code"),(0,o.yg)("p",null,"Download Source Code from ",(0,o.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"InLong Download Page"),"."),(0,o.yg)("h2",{id:"build-binary-package"},"Build Binary Package"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Java ",(0,o.yg)("a",{parentName:"li",href:"https://adoptopenjdk.net/?variant=openjdk8"},"JDK 8")),(0,o.yg)("li",{parentName:"ul"},"Maven 3.6.1+")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ mvn clean install -DskipTests\n")),(0,o.yg)("p",null,"(Optional) Compile using docker image:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ docker pull maven:3.6-openjdk-8\n$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests\n")),(0,o.yg)("p",null,"after compile successfully, you could find distribution file at ",(0,o.yg)("inlineCode",{parentName:"p"},"inlong-distribution/target")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"tar.gz")," format, it includes following files:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker\ninlong-agent\ninlong-audit\ninlong-dataproxy\ninlong-manager\ninlong-sort\ninlong-tubemq-manager\ninlong-tubemq-server\ninlong-dashboard\n")),(0,o.yg)("h2",{id:"build-docker-images"},"Build Docker Images"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mvn clean package -DskipTests -Pdocker\n")))}s.isMDXComponent=!0}}]);