"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[98690],{15680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>m});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?t.createElement(m,l(l({ref:n},g),{},{components:r})):t.createElement(m,l({ref:n},g))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30271:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));const i={title:"Manager Custom Plugin",sidebar_position:3},l=void 0,o={unversionedId:"development/inlong_manager_plugin",id:"version-1.7.0/development/inlong_manager_plugin",title:"Manager Custom Plugin",description:"Overview",source:"@site/versioned_docs/version-1.7.0/development/inlong_manager_plugin.md",sourceDirName:"development",slug:"/development/inlong_manager_plugin",permalink:"/docs/1.7.0/development/inlong_manager_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.7.0/development/inlong_manager_plugin.md",tags:[],version:"1.7.0",sidebarPosition:3,frontMatter:{title:"Manager Custom Plugin",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Authentication",permalink:"/docs/1.7.0/development/inlong_manager_shiro_plugin"},next:{title:"User Management",permalink:"/docs/1.7.0/administration/user_management"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Before Development",id:"before-development",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Reference Demo",id:"reference-demo",level:2},{value:"Last but not Least",id:"last-but-not-least",level:2}],g={toc:p},u="wrapper";function c(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,t.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"This article is aimed at InLong-Manager plugin developers, trying to explain the process of developing an Manager plugin as comprehensively as possible, and strive to eliminate the confusion of developers and make plugin development easier."),(0,a.yg)("h2",{id:"before-development"},"Before Development"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Inlong is stream processing framework constructed with a Group + Stream architecture."),(0,a.yg)("li",{parentName:"ul"},"An Inlong Group contains more than one Inlong Stream, each Inlong Stream is capable of a single individual dataflow."),(0,a.yg)("li",{parentName:"ul"},"Inlong Group is responsible for physical resource definition shared by all Inlong Streams included, especially middleware clusters and sort functions."),(0,a.yg)("li",{parentName:"ul"},"In order to create Inlong Group, Inlong Manager use ",(0,a.yg)("strong",{parentName:"li"},"CreateGroupWorkflowDefinition")," to init all necessary physical resources, a workflow definition contains several individual service tasks. When it's created and processed, service tasks will be executed one after another."),(0,a.yg)("li",{parentName:"ul"},"Service task is constructed in ",(0,a.yg)("strong",{parentName:"li"},"observer pattern"),", which also known as the ",(0,a.yg)("strong",{parentName:"li"},"publish-subscribe pattern"),", each service task will register several task listeners. Listener accepts workflow context and controls execution logic on physical resources."),(0,a.yg)("li",{parentName:"ul"},"As a developer, you need to develop specific Listener with personalized logic.")),(0,a.yg)("h2",{id:"demonstration"},"Demonstration"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The Inlong Manager plugin mechanism can be represented by the following figure:")),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(19817).A,width:"1471",height:"696"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When Inlong Manager is deployed, plugins must be located under installation directory, then ",(0,a.yg)("strong",{parentName:"li"},"Manager Process")," will find the plugin jar and install the plugin automatically.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(25423).A,width:"2042",height:"210"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"As a developer, you can confirm your plugin be loaded successfully by searching logs below:")),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(35530).A,width:"3012",height:"850"})),(0,a.yg)("h2",{id:"reference-demo"},"Reference Demo"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For helping all Inlong developers. We hava provide ",(0,a.yg)("strong",{parentName:"li"},"manager-plugins")," in Inlong Manager Module, which provide ",(0,a.yg)("strong",{parentName:"li"},"FlinkSortProcessPlugin")," as an example; or you can create ",(0,a.yg)("strong",{parentName:"li"},"ProcessPlugin")," as below;")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public class EmptyProcessPlugin implements ProcessPlugin {\n\n    @Override\n    public Map<DataSourceOperateListener, EventSelector> createSourceOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n    @Override\n    public Map<QueueOperateListener, EventSelector> createQueueOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n    @Override\n    public Map<SortOperateListener, EventSelector> createSortOperateListeners() {\n        return ProcessPlugin.super.createSortOperateListeners();\n    }\n\n    @Override\n    public Map<SinkOperateListener, EventSelector> createSinkOperateListeners() {\n        return ProcessPlugin.super.createSinkOperateListeners();\n    }\n\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"DataSourceOperateListener"),",",(0,a.yg)("strong",{parentName:"li"},"QueueOperateListener"),",",(0,a.yg)("strong",{parentName:"li"},"SortOperateListener"),",",(0,a.yg)("strong",{parentName:"li"},"SinkOperateListener")," are child_classes extended from ",(0,a.yg)("strong",{parentName:"li"},"TaskEventListener"),". Then ",(0,a.yg)("strong",{parentName:"li"},"EventSelector")," decides whether the listener should be triggered.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public interface EventSelector {\n\n    boolean accept(WorkflowContext context);\n\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"After developing you plugin, you should prepare plugin definition file in ",(0,a.yg)("strong",{parentName:"li"},"Yaml"),", and put it under resources/META-INF.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"name: example\ndescription: example for manager plugin\njavaVersion: 1.8\npluginClass: org.apache.inlong.manager.plugin.EmptyProcessPlugin\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To develop available Listeners , you can refer to the native Listeners in ",(0,a.yg)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.workflow.listener.GroupTaskListenerFactory"))),(0,a.yg)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,a.yg)("p",null,"We provide the plugin mechanism in Inlong Manager make it easier and more convenient for developers to customize personalized logic when Inlong is not supported.\nPlugin mechanism is far from perfect now and we will continuously devote to improve it."))}c.isMDXComponent=!0},19817:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/inlong_plugin-189f358c3cf91a3814a31d3f43d8692b.png"},25423:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/plugin_location-c07bc755eb46f282a2e4dea5747a39d0.png"},35530:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/plugin_log-e98df1d61e487d1b747315d1297314a3.png"}}]);