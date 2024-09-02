"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[98278],{15680:(e,n,s)=>{s.d(n,{xA:()=>u,yg:()=>y});var t=s(96540);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?o(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function i(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(s),m=r,y=d["".concat(l,".").concat(m)]||d[m]||g[m]||o;return s?t.createElement(y,a(a({ref:n},u),{},{components:s})):t.createElement(y,a({ref:n},u))}));function y(e,n){var s=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=s.length,a=new Array(o);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=s[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},4555:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(58168),r=(s(96540),s(15680));const o={title:"\u751f\u4ea7\u8005\u793a\u4f8b",sidebar_position:4},a=void 0,i={unversionedId:"modules/tubemq/producer_example",id:"modules/tubemq/producer_example",title:"\u751f\u4ea7\u8005\u793a\u4f8b",description:"1 Producer \u793a\u4f8b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/tubemq/producer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/producer_example",permalink:"/zh-CN/docs/next/modules/tubemq/producer_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/tubemq/producer_example.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u751f\u4ea7\u8005\u793a\u4f8b",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/next/modules/tubemq/quick_start"},next:{title:"\u6d88\u8d39\u8005\u793a\u4f8b",permalink:"/zh-CN/docs/next/modules/tubemq/consumer_example"}},l={},c=[{value:"1 Producer \u793a\u4f8b",id:"1-producer-\u793a\u4f8b",level:2},{value:"1.1 TubeSingleSessionFactory",id:"11-tubesinglesessionfactory",level:3},{value:"1.1.1 Send Message Synchronously",id:"111-send-message-synchronously",level:4},{value:"1.1.2 Send Message Asynchronously",id:"112-send-message-asynchronously",level:4},{value:"1.1.3 Send Message With Attributes",id:"113-send-message-with-attributes",level:4},{value:"1.2 TubeMultiSessionFactory",id:"12-tubemultisessionfactory",level:3}],u={toc:c},d="wrapper";function g(e){let{components:n,...s}=e;return(0,r.yg)(d,(0,t.A)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"1-producer-\u793a\u4f8b"},"1 Producer \u793a\u4f8b"),(0,r.yg)("p",null,"TubeMQ\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u521d\u59cb\u5316 session factory: TubeSingleSessionFactory \u548c TubeMultiSessionFactory\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"TubeSingleSessionFactory \u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u53ea\u4f1a\u521b\u5efa\u4e00\u4e2a session"),(0,r.yg)("li",{parentName:"ul"},"TubeMultiSessionFactory \u6bcf\u6b21\u8c03\u7528\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2asession")),(0,r.yg)("h3",{id:"11-tubesinglesessionfactory"},"1.1 TubeSingleSessionFactory"),(0,r.yg)("h4",{id:"111-send-message-synchronously"},"1.1.1 Send Message Synchronously"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'   \n   public final class SyncProducerExample {\n   \n       public static void main(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n           final MessageProducer messageProducer = messageSessionFactory.createProducer();\n           final String topic = "test";\n           final String body = "This is a test message from single-session-factory!";\n           byte[] bodyData = StringUtils.getBytesUtf8(body);\n           messageProducer.publish(topic);\n           Message message = new Message(topic, bodyData);\n           MessageSentResult result = messageProducer.sendMessage(message);\n           if (result.isSuccess()) {\n               System.out.println("sync send message : " + message);\n           }\n           messageProducer.shutdown();\n       }\n   }\n')),(0,r.yg)("h4",{id:"112-send-message-asynchronously"},"1.1.2 Send Message Asynchronously"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'   public final class AsyncProducerExample {\n   \n      public static void main(String[] args) throws Throwable {\n          final String masterHostAndPort = "localhost:8000";\n          final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n          final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n          final MessageProducer messageProducer = messageSessionFactory.createProducer();\n          final String topic = "test";\n          final String body = "async send message from single-session-factory!";\n          byte[] bodyData = StringUtils.getBytesUtf8(body);\n          messageProducer.publish(topic);\n          final Message message = new Message(topic, bodyData);\n          messageProducer.sendMessage(message, new MessageSentCallback(){\n              @Override\n              public void onMessageSent(MessageSentResult result) {\n                  if (result.isSuccess()) {\n                      System.out.println("async send message : " + message);\n                  } else {\n                      System.out.println("async send message failed : " + result.getErrMsg());\n                  }\n              }\n              @Override\n              public void onException(Throwable e) {\n                  System.out.println("async send message error : " + e);\n              }\n          });\n          messageProducer.shutdown();\n      }\n')),(0,r.yg)("h4",{id:"113-send-message-with-attributes"},"1.1.3 Send Message With Attributes"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'   public final class ProducerWithAttributeExample {\n   \n      public static void main(String[] args) throws Throwable {\n          final String masterHostAndPort = "localhost:8000";\n          final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n          final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n          final MessageProducer messageProducer = messageSessionFactory.createProducer();\n          final String topic = "test";\n          final String body = "send message with attribute from single-session-factory!";\n          byte[] bodyData = StringUtils.getBytesUtf8(body);\n          messageProducer.publish(topic);\n          Message message = new Message(topic, bodyData);\n          //set attribute\n          message.setAttrKeyVal("test_key", "test value");\n          //msgType is used for consumer filtering, and msgTime(accurate to minute) is used as the pipe to send and receive statistics\n          SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");\n          message.putSystemHeader("test", sdf.format(new Date()));\n          messageProducer.sendMessage(message);\n          messageProducer.shutdown();\n      }\n')),(0,r.yg)("h3",{id:"12-tubemultisessionfactory"},"1.2 TubeMultiSessionFactory"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'   public class MultiSessionProducerExample {\n       \n       public static void main(String[] args) throws Throwable {\n           final int SESSION_FACTORY_NUM = 10;\n           final String masterHostAndPort = "localhost:8000";\n           final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n           final List<MessageSessionFactory> sessionFactoryList = new ArrayList<>(SESSION_FACTORY_NUM);\n           final ExecutorService sendExecutorService = Executors.newFixedThreadPool(SESSION_FACTORY_NUM);\n           final CountDownLatch latch = new CountDownLatch(SESSION_FACTORY_NUM);\n           for (int i = 0; i < SESSION_FACTORY_NUM; i++) {\n               TubeMultiSessionFactory tubeMultiSessionFactory = new TubeMultiSessionFactory(clientConfig);\n               sessionFactoryList.add(tubeMultiSessionFactory);\n               MessageProducer producer = tubeMultiSessionFactory.createProducer();\n               Sender sender = new Sender(producer, latch);\n               sendExecutorService.submit(sender);\n           }\n           latch.await();\n           sendExecutorService.shutdownNow();\n           for (MessageSessionFactory sessionFactory : sessionFactoryList) {\n               sessionFactory.shutdown();\n           }\n       }\n   \n       private static class Sender implements Runnable {\n           \n           private MessageProducer producer;\n           \n           private CountDownLatch latch;\n   \n           public Sender(MessageProducer producer, CountDownLatch latch) {\n               this.producer = producer;\n               this.latch = latch;\n           }\n   \n           @Override\n           public void run() {\n               final String topic = "test";\n               try {\n                   producer.publish(topic);\n                   final byte[] bodyData = StringUtils.getBytesUtf8("This is a test message from multi-session factory");\n                   Message message = new Message(topic, bodyData);\n                   producer.sendMessage(message);\n                   producer.shutdown();\n               } catch (Throwable ex) {\n                   System.out.println("send message error : " + ex);\n               } finally {\n                   latch.countDown();\n               }\n           }\n       }\n   }\n')),(0,r.yg)("hr",null),(0,r.yg)("a",{href:"#top"},"Back to top"))}g.isMDXComponent=!0}}]);