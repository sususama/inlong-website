"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[95386],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,y=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={title:"Python SDK",sidebar_position:2},l=void 0,s={unversionedId:"sdk/tubemq-sdk/python",id:"version-1.13.0/sdk/tubemq-sdk/python",title:"Python SDK",description:"Build TubeMQ Python SDK",source:"@site/versioned_docs/version-1.13.0/sdk/tubemq-sdk/python.md",sourceDirName:"sdk/tubemq-sdk",slug:"/sdk/tubemq-sdk/python",permalink:"/docs/sdk/tubemq-sdk/python",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/sdk/tubemq-sdk/python.md",tags:[],version:"1.13.0",sidebarPosition:2,frontMatter:{title:"Python SDK",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"C++ SDK",permalink:"/docs/sdk/tubemq-sdk/cpp"},next:{title:"Golang SDK",permalink:"/docs/sdk/tubemq-sdk/go"}},i={},p=[{value:"Build TubeMQ Python SDK",id:"build-tubemq-python-sdk",level:2},{value:"Python SDK API",id:"python-sdk-api",level:2},{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Example",id:"example",level:3}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"build-tubemq-python-sdk"},"Build TubeMQ Python SDK"),(0,o.yg)("p",null,"Python SDK is a wrapper of C++ SDK through ",(0,o.yg)("a",{parentName:"p",href:"https://pybind11.readthedocs.io/en/stable/"},"pybind11"),", so before building Python SDK\uff0censure the C++ SDK has built. The build process of C++ SDK is in  ",(0,o.yg)("a",{parentName:"p",href:"/docs/sdk/tubemq-sdk/cpp"},"Build TubeMQ C++ SDK")),(0,o.yg)("p",null,"Then install the C++ SDK library and header files."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# copy header files\ncp -r /tubemq-cpp/include/tubemq /usr/local/include\n\n# copy third party and tubemq library files\ncp /tubemq-cpp/build/src/libtubemq.a \\\n   /tubemq-cpp/build/proto/libtubemq_proto.a \\\n   /tubemq-cpp/build/third_party/lib/lib* \\\n   /usr/local/lib64/\n\n")),(0,o.yg)("p",null,"Install ",(0,o.yg)("inlineCode",{parentName:"p"},"python3"),", requirements and python sdk"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# install requirements\npip3 install -r requirements.txt\n\n# install python sdk\npython3 setup.py install\n")),(0,o.yg)("p",null,"After installation\uff0cthere are compliled so files and python package in ",(0,o.yg)("inlineCode",{parentName:"p"},"build/lib"),", they can be added to python's ",(0,o.yg)("inlineCode",{parentName:"p"},"site-packages"),"  or ",(0,o.yg)("inlineCode",{parentName:"p"},"PYTHONPATH")),(0,o.yg)("h2",{id:"python-sdk-api"},"Python SDK API"),(0,o.yg)("p",null,"Similar with C++ SDK \uff0cPython SDK is also divided into Producer and Consumer."),(0,o.yg)("h3",{id:"producer"},"Producer"),(0,o.yg)("p",null,"First of all, initialize ",(0,o.yg)("inlineCode",{parentName:"p"},"tubemq.Producer")," "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'import tubemq\n\nmaster_addr = "127.0.0.1:8000"\nproducer = tubemq.Producer(master_addr)\n')),(0,o.yg)("p",null,"then, publish the topic list"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'topic_list = ["topic_0", "topic_1"]\nproducer.publish(topic_list)\n')),(0,o.yg)("p",null,"Construct the  ",(0,o.yg)("inlineCode",{parentName:"p"},"tubemq.Message")," and send"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'send_data = "hello_tubemq"\ntopic_name = "demo"\nmsg = tubemq_message.Message(topic_name, send_data, len(send_data))\nif is_sync:\n    result = producer.send(msg, is_sync=True)\nelse:\n    producer.send(msg, callback=func) # default is async send\n')),(0,o.yg)("p",null,"The Python SDK also supports synchronous and asynchronous sending methods, which are similar to  C++ SDK. When sending asynchronously, a callable object should be provided."),(0,o.yg)("p",null,"Finally, stop the producer"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"producer.stop()\n")),(0,o.yg)("h3",{id:"consumer"},"Consumer"),(0,o.yg)("p",null,"Consumer API of Python SDK is similar with Producer, this is a simple example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'import tubemq\n\nmaster_addr = "127.0.0.1:8000"\ntopic_list = ["demo"]\ngroup_name = "test_group"\nconsumer = tubemq.Consumer(master_addr, group_name, topic_list) # initialize consumer\n\nmsgs = consumer.receive()\nif msgs:\n    consumer.acknowledge()\n\nconsumer.stop()\n')),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("p",null,"For more detailed python sdk use cases, please refer to  ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-tubemq/tubemq-client-twins/tubemq-client-python/src/python/example"},"Python SDK Example")))}c.isMDXComponent=!0}}]);