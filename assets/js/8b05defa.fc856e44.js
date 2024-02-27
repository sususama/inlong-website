"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[55006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={title:"C++ SDK",sidebar_position:1},a=void 0,i={unversionedId:"sdk/tubemq-sdk/cpp",id:"version-1.11.0/sdk/tubemq-sdk/cpp",title:"C++ SDK",description:"Build TubeMQ C++ SDK",source:"@site/versioned_docs/version-1.11.0/sdk/tubemq-sdk/cpp.md",sourceDirName:"sdk/tubemq-sdk",slug:"/sdk/tubemq-sdk/cpp",permalink:"/docs/sdk/tubemq-sdk/cpp",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/sdk/tubemq-sdk/cpp.md",tags:[],version:"1.11.0",sidebarPosition:1,frontMatter:{title:"C++ SDK",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/docs/sdk/manager-sdk/example"},next:{title:"Python SDK",permalink:"/docs/sdk/tubemq-sdk/python"}},l={},c=[{value:"Build TubeMQ C++ SDK",id:"build-tubemq-c-sdk",level:2},{value:"C++ SDK API",id:"c-sdk-api",level:2},{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Example",id:"example",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"build-tubemq-c-sdk"},"Build TubeMQ C++ SDK"),(0,o.kt)("p",null,"C++ SDK is based on the non-boost asio, and the CMake is used for building, the commands are\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# enter the root directory of c++ sdk source\ngit clone https://github.com/apache/inlong.git\ncd inlong/inlong-tubemq/tubemq-client-twins/tubemq-client-cpp\n\nmkdir build && cd build\n\ncmake .. \n\nmake -j8 # the thread num is based on the cpu cores\n\n")),(0,o.kt)("p",null,"The building can also be completed in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-docker/tubemq-cpp"},"docker")," environment provided by InLong."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# pull image\ndocker pull inlong/tubemq-cpp\n\n# start container and mount the source code\ndocker run -it --net=host -v ${REPLACE_BY_CPP_SOURCE_DIR_PATH}:/tubemq-cpp/  inlong/tubemq-cpp /bin/bash\n\n# same as the build process in physical machines\nmkdir build && cd build\ncmake .. \nmake -j8 \n")),(0,o.kt)("h2",{id:"c-sdk-api"},"C++ SDK API"),(0,o.kt)("p",null,"Similar with other MQ systems\uff0cC++ SDK is diveded into ",(0,o.kt)("strong",{parentName:"p"},"Producer")," and ",(0,o.kt)("strong",{parentName:"p"},"Consumer"),". The API of Producer and Consumer are introduced respectively below."),(0,o.kt)("p",null,"First of all, regardless of role, start the background global TubeMQ SDK service (support the default C++ ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"tubemq"),")\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"bool StartTubeMQService(string& err_info, const TubeMQServiceConfig& serviceConfig);\n")),(0,o.kt)("p",null,"Look up the return boolean value and the ",(0,o.kt)("inlineCode",{parentName:"p"},"err_info")," to check the start process is successful\u3002"),(0,o.kt)("h3",{id:"producer"},"Producer"),(0,o.kt)("p",null,"The user-level api class is ",(0,o.kt)("inlineCode",{parentName:"p"},"TubeMQProducer"),"\uff0cthe first thing is initializing the class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "tubemq/tubemq_client.h" // header file of TubeMQProducer\n\nTubeMQProducer producer;\n')),(0,o.kt)("p",null,"Set the config of producer, then start the producer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ProducerConfig producer_config;\nproducer_config.SetRpcReadTimeoutMs(20000);\nproducer_config.SetMasterAddrInfo(err_info, master_addr);\nbool result = producer.start(); // start producer\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"register2Master")," is successed\uff0cproducer will send heartbeat request to master periodically to update the meta info of topics. Then users can publish topics, multiple topics can be published at once,  and the param type is ",(0,o.kt)("inlineCode",{parentName:"p"},"std::set"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'std::set topics{"topic_0", "topic_1"};\nbool result = producer.Publish(err_info, topics);\n')),(0,o.kt)("p",null,"After publishing, construct the message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "tubemq/tubemq_message.h" // header file of tubemq::Message\n\nstd::string topic_name = "demo";\nstd::string send_data = "hello_world";\nMessage message(topic_name, send_data.c_str(), send_data.size()); // type is const char*\n')),(0,o.kt)("p",null,"There are two ",(0,o.kt)("inlineCode",{parentName:"p"},"SendMessage")," API: synchronous sending and asynchronous sending."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// sync send\nbool TubeMQProducer::SendMessage(string& err_info, const Message& message);\n// async send\nvoid TubeMQProducer::SendMessage(const Message& message, const std::function<void(const ErrorCode&)>& callback);\n")),(0,o.kt)("p",null,"How to use these two ",(0,o.kt)("inlineCode",{parentName:"p"},"SendMessage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"bool result = producer.SendMessage(err_info, message);\n\nvoid callback(const ErrorCode&); \nproducer.SendMessage(message, callback); // callback can be other invoked objects\n")),(0,o.kt)("p",null,"Synchronous sending will block until the result is returned, asynchronous sending will not, and the returnted result is received through the user-defined callback function."),(0,o.kt)("p",null,"Finally, close the producer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"producer.ShutDown();\n")),(0,o.kt)("h3",{id:"consumer"},"Consumer"),(0,o.kt)("p",null,"Similar with producer\uff0cinitialize the consumer object and set the config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "tubemq/tubemq_client.h" // header file of TubeMQConsumer\n\nTubeMQConsumer consumer;\n\n// config of consumption\nConsumerConfig consumer_config;\nconsumer_config.SetRpcReadTimeoutMs(20000);\nconsumer_config.SetMasterAddrInfo(err_info, master_addr);\n// set the consume group and the topic \nconsumer_config.SetGroupConsumeTarget(err_info, group_name, topic_list);\n\n// start the consumer\nconsumer.start();\n')),(0,o.kt)("p",null,"After starting the consumer, invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetMessage")," to get messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ConsumerResult get_result;\nConsumerResult confirm_result;\n\nbool result = consumer.GetMessage(get_result);\nif (result) {\n    list<Message> messages = get_result.GetMessageList();\n    consumer.Confirm(get_result.GetConfirmContext(), true, confirm_result);\n}\n\n// stop the consumer \nconsumer.ShutDown();\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"There are more detailed examples about C++ SDK in  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-cpp/example"},"C++ SDK Example"),"\uff0cthe compiled executable is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"build/example/producer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"build/example/consumer")))}d.isMDXComponent=!0}}]);