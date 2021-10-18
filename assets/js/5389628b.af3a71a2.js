"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7778],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,f=p["".concat(a,".").concat(g)]||p[g]||c[g]||s;return t?r.createElement(f,u(u({ref:n},m),{},{components:t})):r.createElement(f,u({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,u=new Array(s);u[0]=p;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<s;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6652:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),u=["components"],i={title:"Consumer Example"},a=void 0,l={unversionedId:"modules/tubemq/consumer_example",id:"modules/tubemq/consumer_example",isDocsHomePage:!1,title:"Consumer Example",description:"1 Consumer Example",source:"@site/docs/modules/tubemq/consumer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/consumer_example",permalink:"/docs/modules/tubemq/consumer_example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/tubemq/consumer_example.md",tags:[],version:"current",frontMatter:{title:"Consumer Example"},sidebar:"tutorialSidebar",previous:{title:"Console Introduction",permalink:"/docs/modules/tubemq/console_introduction"},next:{title:"Deployment",permalink:"/docs/modules/tubemq/deployment"}},m=[{value:"1 Consumer Example",id:"1-consumer-example",children:[{value:"1.1 PullConsumer",id:"11-pullconsumer",children:[]},{value:"1.2 PushConsumer",id:"12-pushconsumer",children:[]}]}],c={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,u);return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-consumer-example"},"1 Consumer Example"),(0,s.kt)("p",null,"  TubeMQ provides two ways to consumer message, PullConsumer and PushConsumer:"),(0,s.kt)("h3",{id:"11-pullconsumer"},"1.1 PullConsumer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```java\npublic class PullConsumerExample {\n\n    public static void main(String[] args) throws Throwable {\n        final String masterHostAndPort = "localhost:8000";\n        final String topic = "test";\n        final String group = "test-group";\n        final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n        consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n        final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n        final PullMessageConsumer messagePullConsumer = messageSessionFactory.createPullConsumer(consumerConfig);\n        messagePullConsumer.subscribe(topic, null);\n        messagePullConsumer.completeSubscribe();\n        // wait for client to join the exact consumer queue that consumer group allocated\n        while (!messagePullConsumer.isPartitionsReady(1000)) {\n            ThreadUtils.sleep(1000);\n        }\n        while (true) {\n            ConsumerResult result = messagePullConsumer.getMessage();\n            if (result.isSuccess()) {\n                List<Message> messageList = result.getMessageList();\n                for (Message message : messageList) {\n                    System.out.println("received message : " + message);\n                }\n                messagePullConsumer.confirmConsume(result.getConfirmContext(), true);\n            }\n        }\n    }   \n\n}\n``` \n')),(0,s.kt)("h3",{id:"12-pushconsumer"},"1.2 PushConsumer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'```java\npublic class PushConsumerExample {\n\n    public static void test(String[] args) throws Throwable {\n        final String masterHostAndPort = "localhost:8000";\n        final String topic = "test";\n        final String group = "test-group";\n        final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n        consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n        final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n        final PushMessageConsumer pushConsumer = messageSessionFactory.createPushConsumer(consumerConfig);\n        pushConsumer.subscribe(topic, null, new MessageListener() {\n\n            @Override\n            public void receiveMessages(PeerInfo peerInfo, List<Message> messages) throws InterruptedException {\n                for (Message message : messages) {\n                    System.out.println("received message : " + new String(message.getData()));\n                }\n            }\n\n            @Override\n            public Executor getExecutor() {\n                return null;\n            }\n\n            @Override\n            public void stop() {\n                //\n            }\n        });\n        pushConsumer.completeSubscribe();\n        CountDownLatch latch = new CountDownLatch(1);\n        latch.await(10, TimeUnit.MINUTES);\n    }\n}\n```\n')))}p.isMDXComponent=!0}}]);