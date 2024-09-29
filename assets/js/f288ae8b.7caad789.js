"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[65207],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const a={title:"Manager Custom Plugin",sidebar_position:3},o=void 0,l={unversionedId:"development/extension_manager/inlong_manager_plugin",id:"development/extension_manager/inlong_manager_plugin",title:"Manager Custom Plugin",description:"Overview",source:"@site/docs/development/extension_manager/inlong_manager_plugin.md",sourceDirName:"development/extension_manager",slug:"/development/extension_manager/inlong_manager_plugin",permalink:"/docs/next/development/extension_manager/inlong_manager_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_manager/inlong_manager_plugin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Manager Custom Plugin",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Authentication",permalink:"/docs/next/development/extension_manager/inlong_manager_shiro_plugin"},next:{title:"Sort Extension Connector",permalink:"/docs/next/development/extension_sort/extension_connector"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Before Development",id:"before-development",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Last but not Least",id:"last-but-not-least",level:2}],u={toc:p},c="wrapper";function g(e){let{components:n,...a}=e;return(0,i.yg)(c,(0,r.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"This article is aimed at InLong-Manager plugin developers, trying to explain the process of developing an Manager plugin as comprehensively as possible, and strive to eliminate the confusion of developers and make plugin development easier."),(0,i.yg)("h2",{id:"before-development"},"Before Development"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Inlong is stream processing framework constructed with a Group + Stream architecture."),(0,i.yg)("li",{parentName:"ul"},"An Inlong Group contains more than one Inlong Stream, each Inlong Stream is capable of a single individual dataflow."),(0,i.yg)("li",{parentName:"ul"},"Inlong Group is responsible for physical resource definition shared by all Inlong Streams included, especially middleware clusters and sort functions."),(0,i.yg)("li",{parentName:"ul"},"In order to create Inlong Group, Inlong Manager use ",(0,i.yg)("strong",{parentName:"li"},"CreateGroupWorkflowDefinition")," to init all necessary physical resources, a workflow definition contains several individual service tasks. When it's created and processed, service tasks will be executed one after another."),(0,i.yg)("li",{parentName:"ul"},"Service task is constructed in ",(0,i.yg)("strong",{parentName:"li"},"observer pattern"),", which also known as the ",(0,i.yg)("strong",{parentName:"li"},"publish-subscribe pattern"),", each service task will register several task listeners. Listener accepts workflow context and controls execution logic on physical resources."),(0,i.yg)("li",{parentName:"ul"},"As a developer, you need to develop specific Listener with personalized logic.")),(0,i.yg)("h2",{id:"demonstration"},"Demonstration"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The Inlong Manager plugin mechanism can be represented by the following figure:")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(70761).A,width:"2176",height:"1153"})),(0,i.yg)("p",null,"As shown in the figure, plugins mainly serve the workflows in InLong. Each task in the workflow corresponds to a listener queue, such as Init Mq corresponding to QueueOperateListener, Init Sink corresponding to SinkOperateListener, Init Sort corresponding to SortOperateListener, and Init Source corresponding to SourceOperateListener."),(0,i.yg)("p",null,"When developers need to add a task to the workflow, they can add a Listener through the plugin and register the Listener to the task."),(0,i.yg)("p",null,"Below is an example of adding a TestListener process for the Init Sort task, mainly adding three files: TestListener, TestProcessPlugin, and plugin.yaml."),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(48537).A,width:"842",height:"654"})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Slf4j\npublic class TestListener implements SortOperateListener {\n\n    @Override\n    public TaskEvent event() {\n        return TaskEvent.COMPLETE;\n    }\n\n    @Override\n    public boolean accept(WorkflowContext workflowContext) {\n        return true;\n    }\n\n    @Override\n    public ListenerResult listen(WorkflowContext context) throws Exception {\n        log.info("Success execute test stream listener");\n        return ListenerResult.success();\n    }\n}\n')),(0,i.yg)("p",null,"TestListener implements SortOperateListener and overrides the listen method. When the execution reaches TestListener, it will print a line of log."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"@Slf4j\npublic class TestProcessPlugin implements ProcessPlugin {\n\n    @Override\n    public List<SourceOperateListener> createSourceOperateListeners() {\n        return new LinkedList<>();\n    }\n\n    @Override\n    public List<SortOperateListener> createSortOperateListeners() {\n        List<SortOperateListener> listeners = new LinkedList<>();\n        listeners.add(new TestListener());\n        return listeners;\n    }\n\n    @Override\n    public Map<DataSourceOperateListener, EventSelector> createSourceOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n    @Override\n    public Map<QueueOperateListener, EventSelector> createQueueOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n    @Override\n    public Map<SinkOperateListener, EventSelector> createSinkOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n}\n")),(0,i.yg)("p",null,"TestProcessPlugin implements ProcessPlugin and overrides the createSortOperateListeners method. When the plugin is loaded, the Manager will load TestListener into the SortOperateListener queue. When the workflow executes to Init Sort, TestListener will be executed."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"After developing you plugin, you should prepare plugin definition file in ",(0,i.yg)("strong",{parentName:"li"},"Yaml"),", and put it under resources/META-INF.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"name: test\ndescription: example for manager plugin\njavaVersion: 1.8\npluginClass: org.apache.inlong.manager.plugin.TestProcessPlugin\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When Inlong Manager is deployed, plugins must be located under installation directory, then ",(0,i.yg)("strong",{parentName:"li"},"Manager Process")," will find the plugin jar and install the plugin automatically.")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(31823).A,width:"2042",height:"210"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"As a developer, you can confirm your plugin be loaded successfully by searching logs below:")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(17034).A,width:"3012",height:"850"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In this way, after executing the workflow, the following log will be printed, indicating that the plugin has been successfully executed.")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(3721).A,width:"3386",height:"756"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To develop available Listeners , you can refer to the native Listeners in ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.workflow.listener.GroupTaskListenerFactory"))),(0,i.yg)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,i.yg)("p",null,"We provide the plugin mechanism in Inlong Manager make it easier and more convenient for developers to customize personalized logic when Inlong is not supported.\nPlugin mechanism is far from perfect now and we will continuously devote to improve it."))}g.isMDXComponent=!0},70761:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/inlong_plugin-6ee7552e48c1598291d90f1907f4646c.png"},48537:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/plugin-3b09272e8a6f054792e2db742a606bce.png"},31823:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/plugin_location-c07bc755eb46f282a2e4dea5747a39d0.png"},17034:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/plugin_log-e98df1d61e487d1b747315d1297314a3.png"},3721:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/workflow_plugin-dbdd9cc6b811aeec0e1388168003eeb9.png"}}]);