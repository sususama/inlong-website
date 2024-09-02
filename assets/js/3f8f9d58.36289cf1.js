"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[24762],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={title:"Deployment"},i=void 0,l={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"version-1.9.0/modules/tubemq/tubemq-manager/quick_start",title:"Deployment",description:"All deploying files at inlong-tubemq-manager directory.",source:"@site/versioned_docs/version-1.9.0/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/docs/1.9.0/modules/tubemq/tubemq-manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"1.9.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.9.0/modules/tubemq/tubemq-manager/overview"},next:{title:"Command-line Tools",permalink:"/docs/1.9.0/modules/tubemq/commandline_tools"}},s={},p=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Start",id:"start",level:2},{value:"Restart",id:"restart",level:2},{value:"Register TubeMQ cluster",id:"register-tubemq-cluster",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"All deploying files at ",(0,a.yg)("inlineCode",{parentName:"p"},"inlong-tubemq-manager")," directory."),(0,a.yg)("h2",{id:"environment-preparation"},"Environment Preparation"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Install and start MySQL 5.7+"),(0,a.yg)("li",{parentName:"ul"},"Load ",(0,a.yg)("inlineCode",{parentName:"li"},"sql/apache_tube_manager.sql")," through the command to complete the initialization of the table structure and basic data:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# Create database and table with username and password:\nmysql -uDB_USER -pDB_PASSWD < sql/apache_tube_manager.sql\n")),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ini"},"# MySQL configuration for Manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/apache_tube_manager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n\n# If you are on JDK version 11+, add the following extra\nspring.jaxb-compatibility-mode=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect\n")),(0,a.yg)("h2",{id:"dependencies"},"Dependencies"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Please download ",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/hibernate/common/hibernate-commons-annotations/5.1.2.Final/hibernate-commons-annotations-5.1.2.Final.jar"},"hibernate-commons-annotations-5.1.2.Final.jar"),",\n",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/hibernate/hibernate-core/5.6.7.Final/hibernate-core-5.6.7.Final.jar"},"hibernate-core-5.6.7.Final.jar"),",\n",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/antlr/antlr/2.7.7/antlr-2.7.7.jar"},"antlr-2.7.7.jar"),",\n",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/org/jboss/logging/jboss-logging/3.4.3.Final/jboss-logging-3.4.3.Final.jar"},"jboss-logging-3.4.3.Final.jar")," and put it into ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,a.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar"},"mysql-connector-java-8.0.28.jar")," and put it into ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,a.yg)("h2",{id:"start"},"Start"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,a.yg)("h2",{id:"restart"},"Restart"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"$ bin/restart-manager.sh \n")),(0,a.yg)("h2",{id:"register-tubemq-cluster"},"Register TubeMQ cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,a.yg)("p",null,"replace the parameters below"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TUBE_MANAGER_IP=  \nTUBE_MANAGER_PORT=   \nTUBE_MASTER_IP=   \nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,a.yg)("p",null,"then run\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,a.yg)("p",null,"this will create a cluster with id = 1, note that this operation should not be executed repeatedly."))}c.isMDXComponent=!0}}]);