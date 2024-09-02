"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[23260],{15680:(e,n,s)=>{s.d(n,{xA:()=>u,yg:()=>y});var t=s(96540);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function i(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):o(o({},n),e)),s},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(s),m=r,y=d["".concat(l,".").concat(m)]||d[m]||g[m]||a;return s?t.createElement(y,o(o({ref:n},u),{},{components:s})):t.createElement(y,o({ref:n},u))}));function y(e,n){var s=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=s[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},97122:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=s(58168),r=(s(96540),s(15680));const a={title:"Producer Example",sidebar_position:4},o=void 0,i={unversionedId:"modules/tubemq/producer_example",id:"version-1.9.0/modules/tubemq/producer_example",title:"Producer Example",description:"1 Producer Example",source:"@site/versioned_docs/version-1.9.0/modules/tubemq/producer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/producer_example",permalink:"/docs/1.9.0/modules/tubemq/producer_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/modules/tubemq/producer_example.md",tags:[],version:"1.9.0",sidebarPosition:4,frontMatter:{title:"Producer Example",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/1.9.0/modules/tubemq/quick_start"},next:{title:"Consumer Example",permalink:"/docs/1.9.0/modules/tubemq/consumer_example"}},l={},c=[{value:"1 Producer Example",id:"1-producer-example",level:2},{value:"1.1 TubeSingleSessionFactory",id:"11-tubesinglesessionfactory",level:3},{value:"1.1.1 Send Message Synchronously",id:"111-send-message-synchronously",level:4},{value:"1.1.2 Send Message Asynchronously",id:"112-send-message-asynchronously",level:4},{value:"1.1.3 Send Message With Attributes",id:"113-send-message-with-attributes",level:4},{value:"1.2 TubeMultiSessionFactory",id:"12-tubemultisessionfactory",level:3}],u={toc:c},d="wrapper";function g(e){let{components:n,...s}=e;return(0,r.yg)(d,(0,t.A)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"1-producer-example"},"1 Producer Example"),(0,r.yg)("p",null,"  TubeMQ provides two ways to initialize session factory, TubeSingleSessionFactory and TubeMultiSessionFactory:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"TubeSingleSessionFactory creates only one session in the lifecycle, this is very useful in streaming scenarios."),(0,r.yg)("li",{parentName:"ul"},"TubeMultiSessionFactory creates new session on every call.")),(0,r.yg)("h3",{id:"11-tubesinglesessionfactory"},"1.1 TubeSingleSessionFactory"),(0,r.yg)("h4",{id:"111-send-message-synchronously"},"1.1.1 Send Message Synchronously"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'   \n   public final class SyncProducerExample {\n   \n       public static void main(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n           final MessageProducer messageProducer = messageSessionFactory.createProducer();\n           final String topic = "test";\n           final String body = "This is a test message from single-session-factory!";\n           byte[] bodyData = StringUtils.getBytesUtf8(body);\n           messageProducer.publish(topic);\n           Message message = new Message(topic, bodyData);\n           MessageSentResult result = messageProducer.sendMessage(message);\n           if (result.isSuccess()) {\n               System.out.println("sync send message : " + message);\n           }\n           messageProducer.shutdown();\n       }\n   }\n')),(0,r.yg)("h4",{id:"112-send-message-asynchronously"},"1.1.2 Send Message Asynchronously"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'   public final class AsyncProducerExample {\n   \n      public static void main(String[] args) throws Throwable {\n          final String masterHostAndPort = "localhost:8000";\n          final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n          final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n          final MessageProducer messageProducer = messageSessionFactory.createProducer();\n          final String topic = "test";\n          final String body = "async send message from single-session-factory!";\n          byte[] bodyData = StringUtils.getBytesUtf8(body);\n          messageProducer.publish(topic);\n          final Message message = new Message(topic, bodyData);\n          messageProducer.sendMessage(message, new MessageSentCallback(){\n              @Override\n              public void onMessageSent(MessageSentResult result) {\n                  if (result.isSuccess()) {\n                      System.out.println("async send message : " + message);\n                  } else {\n                      System.out.println("async send message failed : " + result.getErrMsg());\n                  }\n              }\n              @Override\n              public void onException(Throwable e) {\n                  System.out.println("async send message error : " + e);\n              }\n          });\n          messageProducer.shutdown();\n      }\n')),(0,r.yg)("h4",{id:"113-send-message-with-attributes"},"1.1.3 Send Message With Attributes"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'   public final class ProducerWithAttributeExample {\n   \n      public static void main(String[] args) throws Throwable {\n          final String masterHostAndPort = "localhost:8000";\n          final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n          final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n          final MessageProducer messageProducer = messageSessionFactory.createProducer();\n          final String topic = "test";\n          final String body = "send message with attribute from single-session-factory!";\n          byte[] bodyData = StringUtils.getBytesUtf8(body);\n          messageProducer.publish(topic);\n          Message message = new Message(topic, bodyData);\n          //set attribute\n          message.setAttrKeyVal("test_key", "test value");\n          //msgType is used for consumer filtering, and msgTime(accurate to minute) is used as the pipe to send and receive statistics\n          SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");\n          message.putSystemHeader("test", sdf.format(new Date()));\n          messageProducer.sendMessage(message);\n          messageProducer.shutdown();\n      }\n')),(0,r.yg)("h3",{id:"12-tubemultisessionfactory"},"1.2 TubeMultiSessionFactory"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'   public class MultiSessionProducerExample {\n       \n       public static void main(String[] args) throws Throwable {\n           final int SESSION_FACTORY_NUM = 10;\n           final String masterHostAndPort = "localhost:8000";\n           final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n           final List<MessageSessionFactory> sessionFactoryList = new ArrayList<>(SESSION_FACTORY_NUM);\n           final ExecutorService sendExecutorService = Executors.newFixedThreadPool(SESSION_FACTORY_NUM);\n           final CountDownLatch latch = new CountDownLatch(SESSION_FACTORY_NUM);\n           for (int i = 0; i < SESSION_FACTORY_NUM; i++) {\n               TubeMultiSessionFactory tubeMultiSessionFactory = new TubeMultiSessionFactory(clientConfig);\n               sessionFactoryList.add(tubeMultiSessionFactory);\n               MessageProducer producer = tubeMultiSessionFactory.createProducer();\n               Sender sender = new Sender(producer, latch);\n               sendExecutorService.submit(sender);\n           }\n           latch.await();\n           sendExecutorService.shutdownNow();\n           for (MessageSessionFactory sessionFactory : sessionFactoryList) {\n               sessionFactory.shutdown();\n           }\n       }\n   \n       private static class Sender implements Runnable {\n           \n           private MessageProducer producer;\n           \n           private CountDownLatch latch;\n   \n           public Sender(MessageProducer producer, CountDownLatch latch) {\n               this.producer = producer;\n               this.latch = latch;\n           }\n   \n           @Override\n           public void run() {\n               final String topic = "test";\n               try {\n                   producer.publish(topic);\n                   final byte[] bodyData = StringUtils.getBytesUtf8("This is a test message from multi-session factory");\n                   Message message = new Message(topic, bodyData);\n                   producer.sendMessage(message);\n                   producer.shutdown();\n               } catch (Throwable ex) {\n                   System.out.println("send message error : " + ex);\n               } finally {\n                   latch.countDown();\n               }\n           }\n       }\n   }\n')),(0,r.yg)("hr",null),(0,r.yg)("a",{href:"#top"},"Back to top"))}g.isMDXComponent=!0}}]);