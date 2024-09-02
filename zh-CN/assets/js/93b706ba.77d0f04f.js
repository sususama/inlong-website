"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[17395],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),d=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(g.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,u=p["".concat(g,".").concat(m)]||p[m]||y[m]||l;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const l={title:"Golang SDK",sidebar_position:4},i=void 0,o={unversionedId:"sdk/dataproxy-sdk/go",id:"version-1.9.0/sdk/dataproxy-sdk/go",title:"Golang SDK",description:"Create real-time synchronization task",source:"@site/versioned_docs/version-1.9.0/sdk/dataproxy-sdk/go.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/go",permalink:"/zh-CN/docs/1.9.0/sdk/dataproxy-sdk/go",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/sdk/dataproxy-sdk/go.md",tags:[],version:"1.9.0",sidebarPosition:4,frontMatter:{title:"Golang SDK",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"HTTP \u4e0a\u62a5",permalink:"/zh-CN/docs/1.9.0/sdk/dataproxy-sdk/http"},next:{title:"\u793a\u4f8b",permalink:"/zh-CN/docs/1.9.0/sdk/manager-sdk/example"}},g={},d=[{value:"Create real-time synchronization task",id:"create-real-time-synchronization-task",level:2},{value:"Import Golang SDK",id:"import-golang-sdk",level:2},{value:"Data report process",id:"data-report-process",level:2},{value:"Initialize the SDK",id:"initialize-the-sdk",level:3},{value:"Call the Send/SendAsync method to send",id:"call-the-sendsendasync-method-to-send",level:3},{value:"Close the SDK",id:"close-the-sdk",level:3},{value:"Notes",id:"notes",level:2},{value:"Errors",id:"errors",level:2},{value:"Config options",id:"config-options",level:2},{value:"Metrics",id:"metrics",level:2}],s={toc:d},p="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-real-time-synchronization-task"},"Create real-time synchronization task"),(0,r.yg)("p",null,"Create a task on the Dashboard or with the command line tool, and set ",(0,r.yg)("inlineCode",{parentName:"p"},"Auto Push")," (autonomous push) as the data source type."),(0,r.yg)("h2",{id:"import-golang-sdk"},"Import Golang SDK"),(0,r.yg)("p",null,"To use the Golang SDK, you need to import it into your projects. Import the Golang SDK:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'import "github.com/apache/inlong/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy"\n')),(0,r.yg)("h2",{id:"data-report-process"},"Data report process"),(0,r.yg)("p",null,"After importing the SDK, you can initialize a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/client.go"},"Client")," instance, and then call ",(0,r.yg)("inlineCode",{parentName:"p"},"Send()")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"SendAsync()")," to produce messages to DataProxy, SDK will put the messages with a same StreamID into a batch and send them together. A demo can be found at: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/example_test.go"},"example_test.go"),".\nBasically, there are 3 steps to produce messages:"),(0,r.yg)("h3",{id:"initialize-the-sdk"},"Initialize the SDK"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'client, err := dataproxy.NewClient(\n    dataproxy.WithGroupID("test"),              \ndataproxy.WithURL("http://127.0.0.1:8083/inlong/manager/openapi/dataproxy/getIpList"),\n    dataproxy.WithMetricsName("test"),\n)\n\nif err != nil {\n    fmt.Println(err)\n    return\n}\n')),(0,r.yg)("p",null,"Parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'dataproxy.WithGroupID("test")')," sets the GroupID;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'dataproxy.WithURL("http://127.0.0.1:8083/inlong/manager/openapi/dataproxy/getIpList")')," sets the Manager URL;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'dataproxy.WithMetricsName("test")'),' sets the value of the metrics label: "name" of the ',(0,r.yg)("inlineCode",{parentName:"li"},"Client"),".")),(0,r.yg)("h3",{id:"call-the-sendsendasync-method-to-send"},"Call the Send/SendAsync method to send"),(0,r.yg)("p",null,"The send methods of the SDK are goroutine safe, you can send a message synchronously or asynchronously, there are both synchronous and asynchronous examples in the demo."),(0,r.yg)("p",null,"Send synchronously :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'for i := 0; i < 1000; i++ {\n    err := client.Send(context.Background(), dataproxy.Message{\n        GroupID:  "test",\n        StreamID: "test",\n        Payload:  []byte("test|a|b|c"),\n    })\n    if err !=nil {\n        fmt.Println(err)\n    }\n}\n')),(0,r.yg)("p",null,"Send asynchronously:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'var success atomic.Uint64\nvar failed atomic.Uint64\nfor i := 0; i < 1000; i++ {\n    client.SendAsync(context.Background(),\n        dataproxy.Message{\n            GroupID:  "test",\n            StreamID: "test",\n            Payload:  []byte("test|a|b|c"),\n        },\n        func(msg dataproxy.Message, err error) {\n            if err != nil {\n                success.Add(1)\n            } else {\n                failed.Add(1)\n            }\n        })\n}\n\n// wait async send finish\ntime.Sleep(3 * time.Second)\nfmt.Println("success:", success.Load())\nfmt.Println("failed:", failed.Load())\n')),(0,r.yg)("p",null,"The asynchronous way is recommended, as the synchronous way has no concurrency, messages can be sent after the previous one is done or timeout, it can't fulfill your requirements when you need high throughput."),(0,r.yg)("h3",{id:"close-the-sdk"},"Close the SDK"),(0,r.yg)("p",null,"Closing the SDK can be done simply by calling the  ",(0,r.yg)("inlineCode",{parentName:"p"},"Close()")," method of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Client"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"client.Close()\n")),(0,r.yg)("h2",{id:"notes"},"Notes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GroupID")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"URL")," are mandatory options when you initialize the SDK, you can call ",(0,r.yg)("inlineCode",{parentName:"li"},"dataproxy.WithGroupID()")," and\n",(0,r.yg)("inlineCode",{parentName:"li"},"dataproxy.WithURL()")," to set them;"),(0,r.yg)("li",{parentName:"ul"},"When you initialize more the one instance of ",(0,r.yg)("inlineCode",{parentName:"li"},"Client"),", the ",(0,r.yg)("inlineCode",{parentName:"li"},"MetricsName")," must be set to different values, or it will be failed when pulling metrics, you can call ",(0,r.yg)("inlineCode",{parentName:"li"},"dataproxy.WithMetricsName()")," to set it;"),(0,r.yg)("li",{parentName:"ul"},"The default values of the config options of the SDK are good enough for production, you don't need the change then unless you really need to do that, the default values are described in a section below;"),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"Send()")," method of the SDK has no concurrent, messages are sent one by one, it is NOT recommended;"),(0,r.yg)("li",{parentName:"ul"},"The SDK will retry 2 times each message, if it still failed finally, it is up to you to decide what to do next.")),(0,r.yg)("h2",{id:"errors"},"Errors"),(0,r.yg)("p",null,"Some common errors:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Error"),(0,r.yg)("th",{parentName:"tr",align:null},"Desc"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("URL is not given")'),(0,r.yg)("td",{parentName:"tr",align:null},"Manager URL is not set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("group ID is not given")'),(0,r.yg)("td",{parentName:"tr",align:null},"Group ID is not set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("invalid URL")'),(0,r.yg)("td",{parentName:"tr",align:null},"Manager URL is invalid.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("invalid group ID")'),(0,r.yg)("td",{parentName:"tr",align:null},"Group ID is invalid.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("service has no endpoints")'),(0,r.yg)("td",{parentName:"tr",align:null},"Service has no endpoints, service discoery failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("no available worker")'),(0,r.yg)("td",{parentName:"tr",align:null},"No available workers, workers are busy.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10001, strCode: "10001", message: "message send timeout"}'),(0,r.yg)("td",{parentName:"tr",align:null},"Send timeout.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10002, strCode: "10002", message: "message send failed"}'),(0,r.yg)("td",{parentName:"tr",align:null},"Send failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10003, strCode: "10003", message: "producer already been closed"}'),(0,r.yg)("td",{parentName:"tr",align:null},"Producer is closed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10004, strCode: "10004", message: "producer send queue is full"}'),(0,r.yg)("td",{parentName:"tr",align:null},"Send queue is full, return immediately.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10005, strCode: "10005", message: "message context expired"}'),(0,r.yg)("td",{parentName:"tr",align:null},"Send queue is full, enqueue timeout.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10010, strCode: "10010", message: "input log is invalid"}'),(0,r.yg)("td",{parentName:"tr",align:null},"Input message is invalid, the payload may be empty.")))),(0,r.yg)("h2",{id:"config-options"},"Config options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Desc"),(0,r.yg)("th",{parentName:"tr",align:null},"Optional"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithGroupID()"),(0,r.yg)("td",{parentName:"tr",align:null},'""'),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the Group ID."),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithURL()"),(0,r.yg)("td",{parentName:"tr",align:null},'""'),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the Manager URL."),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithUpdateInterval()"),(0,r.yg)("td",{parentName:"tr",align:null},"5m"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the update interval of service discoery."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithConnTimeout()"),(0,r.yg)("td",{parentName:"tr",align:null},"3000ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the connection timeout."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WriteBufferSize"),(0,r.yg)("td",{parentName:"tr",align:null},"16M"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the write buffer size."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithReadBufferSize"),(0,r.yg)("td",{parentName:"tr",align:null},"16M"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the read buffer size."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithSocketSendBufferSize"),(0,r.yg)("td",{parentName:"tr",align:null},"16M"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the socket send buffer size."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithSocketRecvBufferSize"),(0,r.yg)("td",{parentName:"tr",align:null},"16M"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the socket receive buffer size."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBufferPool"),(0,r.yg)("td",{parentName:"tr",align:null},"nil"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the buffer pool to use."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes, if the application has one, use the same one is recommended.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBytePool"),(0,r.yg)("td",{parentName:"tr",align:null},"nil"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the byte pool to use."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes, if the application has one, use the same one is recommended.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBufferPoolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"409600"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the buffer pool size."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBytePoolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"409600"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the byte pool size."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBytePoolWidth"),(0,r.yg)("td",{parentName:"tr",align:null},"equals to BatchingMaxSize"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the byte pool width."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithLogger"),(0,r.yg)("td",{parentName:"tr",align:null},"std.out"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the debug logger."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes, but the default one is not recommended, as it has no log levels control.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithMetricsName"),(0,r.yg)("td",{parentName:"tr",align:null},'"dataproxy-go"'),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the metrics name of this client."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes, if there are more than one client instance in one application, the metrics names must be different.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithMetricsRegistry"),(0,r.yg)("td",{parentName:"tr",align:null},"prometheus.DefaultRegisterer"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the metrics registry."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithWorkerNum"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the worker number."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithSendTimeout"),(0,r.yg)("td",{parentName:"tr",align:null},"30000ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the send timeout."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithMaxRetries"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the max retry count."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBatchingMaxPublishDelay"),(0,r.yg)("td",{parentName:"tr",align:null},"10ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets how long a message to wait for batching."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBatchingMaxMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the message number of a batch."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBatchingMaxSize"),(0,r.yg)("td",{parentName:"tr",align:null},"4K"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the batch size in Bytes of a batch."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithMaxPendingMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"409600"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the queue length of each worker."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBlockIfQueueIsFull"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets if block if the queue is full."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithAddColumns"),(0,r.yg)("td",{parentName:"tr",align:null},"nil"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the added columns to all the messages, DataProxy supports add addtional columns at specific positions to all messages\uff0cfor example:","_","_","addcol1","_","_","worldid=xxx will add a column named 'worldid' at position 1 and its value is 'xxx'."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")))),(0,r.yg)("p",null,"options refers to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/opitons.go"},"options.go")),(0,r.yg)("h2",{id:"metrics"},"Metrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Labels"),(0,r.yg)("th",{parentName:"tr",align:null},"Desc"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_error_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name: name we set with WithMetricsName()",(0,r.yg)("br",null),"code: error code"),(0,r.yg)("td",{parentName:"tr",align:null},"count the errors and the error code.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_retry_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name: name we set with WithMetricsName()",(0,r.yg)("br",null),"worker: worker index"),(0,r.yg)("td",{parentName:"tr",align:null},"count the retry messages and the worker's index.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_timeout_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name: name we set with WithMetricsName()",(0,r.yg)("br",null),"worker: worker index"),(0,r.yg)("td",{parentName:"tr",align:null},"count the timeout messages and the worker's index.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_msg_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name: name we set with WithMetricsName()",(0,r.yg)("br",null),"code: error code"),(0,r.yg)("td",{parentName:"tr",align:null},"count the message handled and error code.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_update_conn_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name: name we set with WithMetricsName()",(0,r.yg)("br",null),"code: error code"),(0,r.yg)("td",{parentName:"tr",align:null},"count the connection update/switch times and error code. when error code is '0', it is a normal update, otherwise, it may be network error.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_pending_msg_gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"name: name we set with WithMetricsName()",(0,r.yg)("br",null),"worker: error code"),(0,r.yg)("td",{parentName:"tr",align:null},"count the pending message in each worker and the worker index.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"name: name we set with WithMetricsName()",(0,r.yg)("br",null),"code: error code"),(0,r.yg)("td",{parentName:"tr",align:null},"distribution of the batch size and the error code.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_batch_time"),(0,r.yg)("td",{parentName:"tr",align:null},"histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"name: name we set with WithMetricsName()",(0,r.yg)("br",null),"code: error code"),(0,r.yg)("td",{parentName:"tr",align:null},"distribution of the batch send time duration and the error code.")))),(0,r.yg)("p",null,"metrics refers to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/metrics.go"},"metrics.go")),(0,r.yg)("p",null,"error codes refers to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/worker.go"},"worker.go")))}y.isMDXComponent=!0}}]);