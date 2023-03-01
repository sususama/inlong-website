"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},o=void 0,i={unversionedId:"deployment/standalone",id:"deployment/standalone",title:"\u5355\u673a\u90e8\u7f72",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/zh-CN/docs/next/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/deployment/standalone.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Pulsar \u793a\u4f8b",permalink:"/zh-CN/docs/next/quick_start/pulsar_example"},next:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/docs/next/deployment/docker"}},s={},p=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u51c6\u5907\u6d88\u606f\u961f\u5217",id:"\u51c6\u5907\u6d88\u606f\u961f\u5217",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"DB \u4f9d\u8d56",id:"db-\u4f9d\u8d56",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u6ce8\u518c Pulsar \u96c6\u7fa4",id:"\u6ce8\u518c-pulsar-\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/"},"Flink 1.13.5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,r.kt)("h2",{id:"\u51c6\u5907\u6d88\u606f\u961f\u5217"},"\u51c6\u5907\u6d88\u606f\u961f\u5217"),(0,r.kt)("p",null,"InLong \u5f53\u524d\u652f\u6301\u4ee5\u4e0b\u6d88\u606f\u961f\u5217\uff0c\u6839\u636e\u4f7f\u7528\u60c5\u51b5",(0,r.kt)("strong",{parentName:"p"},"\u9009\u62e9\u5176\u4e00"),"\u5373\u53ef\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"\u4e0b\u8f7d\u9875\u9762")," \u83b7\u53d6\u4e8c\u8fdb\u5236\u5305\uff0c\u6216\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/quick_start/how_to_build"},"\u5982\u4f55\u7f16\u8bd1")," \u7f16\u8bd1\u9700\u8981\u7684\u7248\u672c\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u89e3\u538b ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-sort-connectors.tar.gz"),"\uff0c\u5e76\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-sort/connectors/")," \u76ee\u5f55\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"sort-connector-[type]-[version].jar"),"\u3002")),(0,r.kt)("h2",{id:"db-\u4f9d\u8d56"},"DB \u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165\u4ee5\u4e0b\u76ee\u5f55\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"conf/inlong.conf"),"\u6587\u4ef6\u4e2d\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u914d\u7f6e\u53c2\u6570\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u672c\u5730\u673a\u5668 IP\nlocal_ip=\n# \u6570\u636e\u5e93\u914d\u7f6e\uff0cMySQL \u6216\u8005 PostgreSQL\nspring_datasource_hostname=\nspring_datasource_port=3306\nspring_datasource_username=root\nspring_datasource_password=inlong\n# \u914d\u7f6e Pulsar \u96c6\u7fa4\u5730\u5740\uff0c\u5982\u679c Audit \u4f7f\u7528 Pulsar\npulsar_service_url=\npulsar_admin_url=\n# Flink REST server \u5730\u5740\nflink_rest_address=\n# Flink REST server \u7aef\u53e3\nflink_rest_port=8081\n")),(0,r.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,r.kt)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee InLong Dashboard \u5730\u5740",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.kt)("h3",{id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"},"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"),(0,r.kt)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u6807\u7b7e\u7ba1\u7406]","->","[\u65b0\u5efa]","\uff0c\u6307\u5b9a\u96c6\u7fa4\u6807\u7b7e\u540d\u79f0\u548c\u8d1f\u8d23\u4eba\uff1a\n",(0,r.kt)("img",{src:n(44164).Z,width:"517",height:"331"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u5404\u4e2a\u7ec4\u4ef6\u9ed8\u8ba4\u4e0a\u62a5\u96c6\u7fa4\u6807\u7b7e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u8bf7\u52ff\u4f7f\u7528\u5176\u5b83\u540d\u79f0\u3002")),(0,r.kt)("h3",{id:"\u6ce8\u518c-pulsar-\u96c6\u7fa4"},"\u6ce8\u518c Pulsar \u96c6\u7fa4"),(0,r.kt)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c Pulsar \u96c6\u7fa4\uff1a\n",(0,r.kt)("img",{src:n(59309).Z,width:"511",height:"638"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u96c6\u7fa4\u6807\u7b7e\u9009\u62e9\u521a\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u7136\u540e\u914d\u7f6e Pulsar \u96c6\u7fa4\u4fe1\u606f\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u521b\u5efa\u6570\u636e\u6d41\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/quick_start/pulsar_example"},"Pulsar Example"),"."))}d.isMDXComponent=!0},44164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_cluster_tag-c25267ed8accf193c4f1ddcd95afc6fd.png"},59309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_pulsar_cluster-bce8dbc4c05df0564a4f3453832baab3.png"}}]);