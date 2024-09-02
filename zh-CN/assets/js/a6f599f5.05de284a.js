"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[83896],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,y=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={title:"\u5982\u4f55\u7f16\u8bd1",sidebar_position:1},i=void 0,l={unversionedId:"quick_start/how_to_build",id:"version-1.11.0/quick_start/how_to_build",title:"\u5982\u4f55\u7f16\u8bd1",description:"\u4e0b\u8f7d\u6e90\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.11.0/quick_start/how_to_build.md",sourceDirName:"quick_start",slug:"/quick_start/how_to_build",permalink:"/zh-CN/docs/1.11.0/quick_start/how_to_build",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/quick_start/how_to_build.md",tags:[],version:"1.11.0",sidebarPosition:1,frontMatter:{title:"\u5982\u4f55\u7f16\u8bd1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DataProxy \u63d2\u4ef6",permalink:"/zh-CN/docs/1.11.0/design_and_concept/how_to_write_plugin_dataproxy"},next:{title:"Pulsar \u793a\u4f8b",permalink:"/zh-CN/docs/1.11.0/quick_start/data_ingestion/file_pulsar_clickhouse_example"}},c={},p=[{value:"\u4e0b\u8f7d\u6e90\u7801",id:"\u4e0b\u8f7d\u6e90\u7801",level:2},{value:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6",level:2},{value:"\u7f16\u8bd1Docker\u955c\u50cf",id:"\u7f16\u8bd1docker\u955c\u50cf",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u4e0b\u8f7d\u6e90\u7801"},"\u4e0b\u8f7d\u6e90\u7801"),(0,o.yg)("p",null,"\u4ece",(0,o.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"InLong Download Page"),"\u4e0b\u8f7d\u6e90\u7801."),(0,o.yg)("h2",{id:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6"},"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Java ",(0,o.yg)("a",{parentName:"li",href:"https://adoptopenjdk.net/?variant=openjdk8"},"JDK 8")),(0,o.yg)("li",{parentName:"ul"},"Maven 3.6.1+")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ mvn clean install -DskipTests\n")),(0,o.yg)("p",null,"(\u53ef\u9009) \u4f7f\u7528docker\u7f16\u8bd1:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ docker pull maven:3.6-openjdk-8\n$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests\n")),(0,o.yg)("p",null,"\u82e5\u7f16\u8bd1\u6210\u529f\uff0c\u5728",(0,o.yg)("inlineCode",{parentName:"p"},"inlong-distribution/target"),"\u4e0b\u4f1a\u627e\u5230",(0,o.yg)("inlineCode",{parentName:"p"},"tar.gz"),"\u683c\u5f0f\u7684\u5b89\u88c5\u5305\uff0c\u89e3\u538b\u5b89\u88c5\u76ee\u5f55\uff0c\u5305\u62ec\u5404\u4e2a\u6a21\u5757\u5b89\u88c5\u6587\u4ef6\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker\ninlong-agent\ninlong-audit\ninlong-dataproxy\ninlong-manager\ninlong-sort\ninlong-tubemq-manager\ninlong-tubemq-server\ninlong-dashboard\n")),(0,o.yg)("h2",{id:"\u7f16\u8bd1docker\u955c\u50cf"},"\u7f16\u8bd1Docker\u955c\u50cf"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mvn clean package -DskipTests -Pdocker\n")))}d.isMDXComponent=!0}}]);