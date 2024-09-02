"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10923],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49772:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"1.5.0"}},13530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));n(49772);const r={title:"C++ SDK",sidebar_position:1},o=void 0,l={unversionedId:"sdk/dataproxy-sdk/cpp",id:"version-1.5.0/sdk/dataproxy-sdk/cpp",title:"C++ SDK",description:"Create real-time synchronization task",source:"@site/versioned_docs/version-1.5.0/sdk/dataproxy-sdk/cpp.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/cpp",permalink:"/docs/1.5.0/sdk/dataproxy-sdk/cpp",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/sdk/dataproxy-sdk/cpp.md",tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{title:"C++ SDK",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hudi",permalink:"/docs/1.5.0/data_node/load_node/hudi"},next:{title:"Java SDK",permalink:"/docs/1.5.0/sdk/dataproxy-sdk/java"}},s={},c=[{value:"Create real-time synchronization task",id:"create-real-time-synchronization-task",level:2},{value:"Import C++ SDK",id:"import-c-sdk",level:2},{value:"Data report process",id:"data-report-process",level:2},{value:"Initialize SDK",id:"initialize-sdk",level:3},{value:"Call the send interface to report data",id:"call-the-send-interface-to-report-data",level:3},{value:"Close SDK",id:"close-sdk",level:3},{value:"Warning",id:"warning",level:2},{value:"Appendix\uff1aConfig File Description",id:"appendixconfig-file-description",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"create-real-time-synchronization-task"},"Create real-time synchronization task"),(0,i.yg)("p",null,"Create a task on the Dashboard or through the command line, and use ",(0,i.yg)("inlineCode",{parentName:"p"},"Auto Push")," (autonomous push) as the data source type."),(0,i.yg)("h2",{id:"import-c-sdk"},"Import C++ SDK"),(0,i.yg)("p",null,"The header files and libraries of the SDK need to be introduced into the project before using the SDK. Header files and libraries can be self-compiled from source, see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp"},"SDK Compile&Use"),"\u3002"),(0,i.yg)("h2",{id:"data-report-process"},"Data report process"),(0,i.yg)("p",null,"After import the SDK, you can report single or batch data by calling the ",(0,i.yg)("inlineCode",{parentName:"p"},"send")," related interface of the SDK ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp/release/demo/send_demo.cc"},"send_demo.cc"),"\u3002The overall process includes the following three steps\uff1a"),(0,i.yg)("h3",{id:"initialize-sdk"},"Initialize SDK"),(0,i.yg)("p",null,"SDK supports object instance and configuration file initialization"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"object instance initialization\nInitialize the client configuration firstly, and then call the initialization interface:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'// Initialize client configuration\nClientConfig client;\n// Set client-related configuration parameters, proxy_URL_ is a mandatory parameter (the format is as follows), and other parameters are detailed in the client_config.h file\nclient.proxy_cluster_URL_="http://{Manager url}/inlong/manager/openapi/dataproxy/getIpList";\n// Initialize the SDK, a return value of zero means initialization is successful, non-zero means failure\nint32_t result = tc_api_init(client);\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Config file initialization\nConfiguration files are in json format, see ","[Config file description]","(#Appendix\uff1aConfig File Description), initialize the SDK through the configuration file:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'// Initialize the SDK, the parameter is the path name of the configuration file; a return value of zero means the initialization is successful\nint32_t result = tc_api_init("/home/conf/config.json");\n')),(0,i.yg)("h3",{id:"call-the-send-interface-to-report-data"},"Call the send interface to report data"),(0,i.yg)("p",null,"The SDK supports single (recommended) and batch sending, both of which are sent in asynchronous mode, and the data reporting interface is thread-safe. Before data reporting, the callback function can be set to perform callback processing when the data transmission fails. The callback function signature is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"int32_t callBackFunc(const char* inlong_group_id, const char* inlong_stream_id, const char* msg, int32_t msg_len, const int64_t report_time, const char* client_ip);\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Single data reporting interface")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"// Return value: zero means sending is successful, non-zero means failure, see SDKInvalidReuslt in tc_api.h for specific exception return value\nint32_t tc_api_send(const char* inlong_group_id, const char* inlong_stream_id, const char* msg, int32_t msg_len, UserCallBack call_back = NULL);\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Batch data reporting interface")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"int32_t tc_api_send_batch(const char* inlong_group_id, const char* inlong_stream_id, const char** msg_list, int32_t msg_cnt, UserCallBack call_back = NULL);\n")),(0,i.yg)("h3",{id:"close-sdk"},"Close SDK"),(0,i.yg)("p",null,"Call the close interface to close the SDK:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"// A return value of zero means that the shutdown is successful, and subsequent data reporting cannot be performed\n// max_waitms\uff1aThe maximum number of milliseconds to wait before closing the SDK, waiting for the completion of the SDK internal data sending\nint32_t tc_api_close(int32_t max_waitms);\n")),(0,i.yg)("h2",{id:"warning"},"Warning"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The initialization and shutdown of the SDK are at the process level, and only need to be initialized once, and the initialization interface needs to be called in the subprocess of the fork before the data is reported;"),(0,i.yg)("li",{parentName:"ul"},"It is recommended to use the SDK as a resident service for data reporting to avoid frequent initialization and shutdown of the same process midway, as repeated initialization and shutdown will bring more overhead;"),(0,i.yg)("li",{parentName:"ul"},"SDK sending is asynchronous, and a return value of 0 indicates that the data has been successfully stored in the SDK's internal buffer and is waiting for network sending. If ",(0,i.yg)("inlineCode",{parentName:"li"},"inlong_group_id")," itself is misconfigured or the network is abnormal, it will also cause the data to fail to send, so it is recommended that the user set a callback when calling this interface, and execute the callback when the data fails to be sent after multiple retries.")),(0,i.yg)("h2",{id:"appendixconfig-file-description"},"Appendix\uff1aConfig File Description"),(0,i.yg)("p",null,"The configuration file format and important parameters are as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n"init-param": {\n"thread_num": 5, // The number of network sending and receiving threads\n"enable_pack": true, // Whether to send multiple packages\n"pack_size": 409600, // When the data reaches the pack_size size, it will be packaged and sent, unit byte\n"ext_pack_size": 409600, // The maximum length of a single piece of data, unit byte\n"enable_zip": true, // Whether to perform data compression\n"min_ziplen": 4096, // Minimum compression length, unit byte\n"enable_retry": true, // Whether to retry if sending fails\n"retry_ms": 10000, // retry interval, unit: ms\n"retry_num": 3, // Maximum number of retries for sending failures\n"max_active_proxy": 4, // The maximum number of tcp connections, used for sending and receiving network data\n"max_buf_pool": 548576000, // Single data buffer size, unit byte\n"buffer_num_per_groupId": 3, // Number of data buffers for each groupid\n"log_num": 10, // Maximum number of log files\n"log_size": 10, // The size limit of a single log, unit MB\n"log_level": 3, // Log level, trace(4)>debug(3)>info(2)>warn(1)>error(0)\n"log_file_type": 2, // Log output type, 2->file, 1->console\n"log_path": "./", // log path\n"proxy_cfg_preurl": "http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList", // Visit the URL of the manager\n"need_auth": false, // Is authentication required?\n"auth_id": "admin", // authentication id\n"auth_key": "adminKey" // authentication key\n}\n}\n')))}u.isMDXComponent=!0}}]);