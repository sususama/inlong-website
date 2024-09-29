"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37927],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>m});var a=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),p=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=t,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||s;return n?a.createElement(m,o(o({ref:r},u),{},{components:n})):a.createElement(m,o({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:t,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65882:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(58168),t=(n(96540),n(15680));const s={title:"Transform \u6269\u5c55 UDF",sidebar_position:3},o="\u57fa\u672c\u6982\u5ff5",i={unversionedId:"development/extension_sort/transform_udf",id:"development/extension_sort/transform_udf",title:"Transform \u6269\u5c55 UDF",description:"\u4e0b\u9762\u662f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u9700\u8981\u4e86\u89e3\u7684\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/extension_sort/transform_udf.md",sourceDirName:"development/extension_sort",slug:"/development/extension_sort/transform_udf",permalink:"/zh-CN/docs/next/development/extension_sort/transform_udf",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_sort/transform_udf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Transform \u6269\u5c55 UDF",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/zh-CN/docs/next/development/api"},next:{title:"\u79bb\u7ebf\u540c\u6b65 Connector \u63d2\u4ef6\u6269\u5c55",permalink:"/zh-CN/docs/next/development/extension_sort/offline_data_sync"}},l={},p=[{value:"\u521b\u5efa\u51fd\u6570\u7c7b\u6587\u4ef6",id:"\u521b\u5efa\u51fd\u6570\u7c7b\u6587\u4ef6",level:2},{value:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa",id:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa",level:2},{value:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c ValueParser \u5bf9\u8c61",id:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c-valueparser-\u5bf9\u8c61",level:2},{value:"\u5b9e\u73b0\u51fd\u6570\u903b\u8f91",id:"\u5b9e\u73b0\u51fd\u6570\u903b\u8f91",level:2},{value:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",id:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",level:2},{value:"\u521b\u5efa\u89e3\u6790\u5668\u7c7b\u6587\u4ef6",id:"\u521b\u5efa\u89e3\u6790\u5668\u7c7b\u6587\u4ef6",level:2},{value:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa",id:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa-1",level:2},{value:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c\u76f8\u5173\u6210\u5458\u53d8\u91cf",id:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c\u76f8\u5173\u6210\u5458\u53d8\u91cf",level:2},{value:"\u5b9e\u73b0\u89e3\u6790\u903b\u8f91",id:"\u5b9e\u73b0\u89e3\u6790\u903b\u8f91",level:2},{value:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",id:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801-1",level:2},{value:"\u521b\u5efa\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u6587\u4ef6",id:"\u521b\u5efa\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u6587\u4ef6",level:2},{value:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa",id:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa-2",level:2},{value:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c\u76f8\u5173\u6210\u5458\u53d8\u91cf",id:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c\u76f8\u5173\u6210\u5458\u53d8\u91cf-1",level:2},{value:"\u5b9e\u73b0\u5224\u65ad\u903b\u8f91",id:"\u5b9e\u73b0\u5224\u65ad\u903b\u8f91",level:2},{value:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",id:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801-2",level:2}],u={toc:p},c="wrapper";function g(e){let{components:r,...n}=e;return(0,t.yg)(c,(0,a.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,t.yg)("p",null,"\u4e0b\u9762\u662f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u9700\u8981\u4e86\u89e3\u7684\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Transform SQL \u51fd\u6570\uff0c\u5305\u62ec\u7b97\u672f\u51fd\u6570(\u5982 abs , power )\uff0c\u65f6\u95f4\u51fd\u6570(\u5982 localtime \u3001 date_format )\uff0c\u5b57\u7b26\u4e32\u51fd\u6570(\u5982 locate \u3001 translate )\u7b49\uff0c\u51fd\u6570\u4e00\u822c\u90fd\u6709\u4e00\u81f3\u591a\u4e2a\u53c2\u6570\uff0c\u4f5c\u7528\u662f\u5bf9\u8f93\u5165\u7684\u6570\u636e\u8fdb\u884c\u67d0\u79cd\u8f6c\u6362\u64cd\u4f5c\uff0c\u7136\u540e\u8f93\u51fa\u8f6c\u6362\u540e\u7684\u7ed3\u679c\u3002"),(0,t.yg)("li",{parentName:"ul"},"Transform SQL \u89e3\u6790\u5668\uff0c\u4e3b\u8981\u6709\u4e24\u7c7b\u89e3\u6790\u5668\uff0c\u4e00\u79cd\u662f\u9488\u5bf9\u7c7b\u578b\u7684\u89e3\u6790\u5668\u7c7b\uff0c\u4f5c\u7528\u662f\u5c06\u539f\u59cb\u6570\u636e\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684\u7c7b\u578b\u5bf9\u8c61\uff0c\u5982 DateParser \u53ef\u4ee5\u5c06\u8f93\u5165\u6570\u636e\u8f6c\u6362\u4e3a Java \u4e2d\u7684 Date \u5bf9\u8c61\uff0c\u4fbf\u4e8e\u5b9e\u73b0\u8fdb\u4e00\u6b65\u7684\u8f6c\u6362\u64cd\u4f5c\uff1b\u53e6\u4e00\u79cd\u662f\u9488\u5bf9\u8ba1\u7b97\u8868\u8fbe\u5f0f\u7684\u89e3\u6790\u5668\u7c7b\uff0c\u4f5c\u7528\u662f\u5bf9\u539f\u59cb\u6570\u636e\u8f6c\u6362\u540e\u518d\u8fdb\u884c\u4e00\u5b9a\u7684\u8ba1\u7b97\u64cd\u4f5c\uff0c\u8f93\u51fa\u8ba1\u7b97\u7ed3\u679c(\u7c7b\u4f3c\u4e00\u79cd\u51fd\u6570)\uff0c\u5982 AdditionParser \u53ef\u4ee5\u89e3\u6790 SQL \u8bed\u53e5\u4e2d\u7c7b\u4f3c a + b \u7684\u90e8\u5206\uff0c\u8f93\u51fa\u76f8\u5e94\u7684\u8f93\u51fa\u7ed3\u679c\u3002"),(0,t.yg)("li",{parentName:"ul"},"Transform SQL \u64cd\u4f5c\u7b26\uff0c\u4e3b\u8981\u662f\u4e00\u4e9b\u903b\u8f91\u64cd\u4f5c\u7b26\uff0c\u5982( and \u3001 or \u3001 not )\u7b49\uff0c\u5b9e\u73b0\u4e00\u4e9b\u903b\u8f91\u5224\u65ad\u64cd\u4f5c\uff0c\u8f93\u51fa\u7ed3\u679c\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\u3002")),(0,t.yg)("h1",{id:"\u51fd\u6570\u5f00\u53d1"},"\u51fd\u6570\u5f00\u53d1"),(0,t.yg)("p",null,"\u8be5\u90e8\u5206\u4ecb\u7ecd\u4e86\u5982\u4f55\u62d3\u5c55\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u3002"),(0,t.yg)("h2",{id:"\u521b\u5efa\u51fd\u6570\u7c7b\u6587\u4ef6"},"\u521b\u5efa\u51fd\u6570\u7c7b\u6587\u4ef6"),(0,t.yg)("p",null,"\u51fd\u6570\u5b9e\u73b0\u7c7b\u5b58\u653e\u5728\u8be5",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/function"},"\u76ee\u5f55"),"\u4e0b\u3002\u786e\u5b9a\u597d\u60a8\u60f3\u8981\u62d3\u5c55\u7684\u51fd\u6570\u540e\uff0c\u5728\u8be5\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7c7b\u540d\u7531 ",(0,t.yg)("inlineCode",{parentName:"p"},"\u51fd\u6570\u540d + Function")," \u7ec4\u6210\uff0c\u5982 ",(0,t.yg)("inlineCode",{parentName:"p"},"AbsFunction"),"\u3002"),(0,t.yg)("h2",{id:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa"},"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa"),(0,t.yg)("p",null,"\u521b\u5efa\u597d\u7c7b\u540e\uff0c\u6784\u5efa\u4ee3\u7801\u7684\u57fa\u7840\u6846\u67b6\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AbsFunction")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'/**\n * AbsFunction\n * description: abs(numeric)--returns the absolute value of numeric\n */\n@TransformFunction(names = {"abs"})\npublic class AbsFunction implements ValueParser {\n\n    @Override\n    public Object parse(SourceData sourceData, int rowIndex, Context context) {\n        \n    }\n}\n')),(0,t.yg)("p",null,"\u4e3a\u51fd\u6570\u6dfb\u52a0\u5bf9\u5e94\u7684\u7c7b\u6ce8\u91ca\u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"@TransformFunction")," \u6ce8\u89e3\uff0c\u51fd\u6570\u9700\u8981\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"ValueParser")," \u63a5\u53e3\uff0c\u91cd\u5199\u8be5\u63a5\u53e3\u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"parse")," \u65b9\u6cd5\u3002"),(0,t.yg)("h2",{id:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c-valueparser-\u5bf9\u8c61"},"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c ValueParser \u5bf9\u8c61"),(0,t.yg)("p",null,"\u5728\u51fd\u6570\u4e2d\u6dfb\u52a0\u6709\u53c2\u6784\u9020\u51fd\u6570\u53ca\u76f8\u5173\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"ValueParser")," \u6210\u5458\u53d8\u91cf\uff0c\u5728\u6784\u9020\u51fd\u6570\u4e2d\u89e3\u6790\u51fd\u6570\u8868\u8fbe\u5f0f\uff0c\u521d\u59cb\u5316\u53c2\u6570\u89e3\u6790\u5668\u5bf9\u8c61\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AbsFunction")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"private ValueParser numberParser;\n\npublic AbsFunction(Function expr) {\n    numberParser = OperatorTools.buildParser(expr.getParameters().getExpressions().get(0));\n}\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ValueParser")," \u5bf9\u8c61\u6570\u91cf\u4e0e\u51fd\u6570\u53c2\u6570\u4e2a\u6570\u76f8\u540c\u3002"),(0,t.yg)("h2",{id:"\u5b9e\u73b0\u51fd\u6570\u903b\u8f91"},"\u5b9e\u73b0\u51fd\u6570\u903b\u8f91"),(0,t.yg)("p",null,"\u91cd\u5199 ",(0,t.yg)("inlineCode",{parentName:"p"},"parse")," \u65b9\u6cd5\uff0c\u89e3\u6790\u53c2\u6570\u5e76\u5b9e\u73b0\u51fd\u6570\u903b\u8f91\uff0c\u8ba1\u7b97\u51fd\u6570\u8fd4\u56de\u503c\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AbsFunction")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Object parse(SourceData sourceData, int rowIndex, Context context) {\n    Object numberObj = numberParser.parse(sourceData, rowIndex, context);\n    BigDecimal numberValue = OperatorTools.parseBigDecimal(numberObj);\n    return numberValue.abs();\n}\n")),(0,t.yg)("h2",{id:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801"},"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801"),(0,t.yg)("p",null,"\u6bcf\u4e2a\u51fd\u6570\u90fd\u9700\u8981\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5\u6765\u9a8c\u8bc1\u51fd\u6570\u903b\u8f91\u662f\u5426\u6b63\u786e\uff0c\u5355\u5143\u6d4b\u8bd5\u7c7b\u4f4d\u4e8e\u8be5",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process/function"},"\u76ee\u5f55"),"\u4e0b\u3002\u6bcf\u4e2a\u51fd\u6570\u7684\u6240\u6709\u5355\u5143\u6d4b\u8bd5\u51fd\u6570\u5747\u653e\u5728\u540c\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u7c7b\u4e2d\uff0c\u5355\u5143\u6d4b\u8bd5\u7c7b\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"Test + \u51fd\u6570\u540d + Function")," \u7684\u683c\u5f0f\u8fdb\u884c\u547d\u540d\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"testAbsFunction()")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testAbsFunction() throws Exception {\n    String transformSql = "select abs(numeric1) from source";\n    TransformConfig config = new TransformConfig(transformSql);\n    // case1: |2|\n    TransformProcessor<String, String> processor = TransformProcessor\n            .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),\n                    SinkEncoderFactory.createKvEncoder(kvSink));\n    List<String> output1 = processor.transform("2|4|6|8", new HashMap<>());\n    Assert.assertEquals(1, output1.size());\n    Assert.assertEquals(output1.get(0), "result=2");\n    // case2: |-4.25|\n    List<String> output2 = processor.transform("-4.25|4|6|8", new HashMap<>());\n    Assert.assertEquals(1, output2.size());\n    Assert.assertEquals(output2.get(0), "result=4.25");\n}\n')),(0,t.yg)("p",null,"\u7ecf\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u606d\u559c\u60a8\u5b8c\u6210\u4e86\u4e00\u4e2a\u65b0\u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u53ef\u4ee5\u5411\u793e\u533a\u63d0\u4ea4\u60a8\u7684\u4ee3\u7801\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"AbsFunction")," \u5b8c\u6574\u4ee3\u7801\u53ef\u89c1 ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/function/AbsFunction.java"},"\u4ee3\u7801\u94fe\u63a5")),(0,t.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u90e8\u5206\u51fd\u6570\u7684\u53c2\u6570\u53ef\u4ee5\u4e3a NULL\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"li"},"parse")," \u51fd\u6570\u4e2d\u6ce8\u610f\u5bf9 NULL \u5bf9\u8c61\u7684\u89e3\u6790\u903b\u8f91\uff0c\u9632\u6b62\u51fa\u73b0 ",(0,t.yg)("inlineCode",{parentName:"li"},"NullPointerException")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"@TransformFunction")," \u6ce8\u89e3\u4e2d\u7684\u51fd\u6570\u540d\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c\u53ea\u8981\u9075\u5faa\u5404\u7c7b\u6570\u636e\u5e93\u7684\u547d\u540d\u89c4\u8303\u5373\u53ef"),(0,t.yg)("li",{parentName:"ul"},"\u90e8\u5206\u51fd\u6570\u7684\u53c2\u6570\u4e2a\u6570\u4e0d\u56fa\u5b9a\uff0c\u5728\u6784\u5efa ",(0,t.yg)("inlineCode",{parentName:"li"},"ValueParser")," \u7684\u8fc7\u7a0b\u4e2d\u8981\u9632\u6b62\u51fa\u73b0 ",(0,t.yg)("inlineCode",{parentName:"li"},"IndexOutOfBoundsException")),(0,t.yg)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u8bf7\u5c3d\u53ef\u80fd\u8986\u76d6\u591a\u79cd\u60c5\u51b5\uff0c\u5982\u4f7f\u7528\u4e0d\u540c\u7684\u53c2\u6570\u4e2a\u6570\u3001\u53c2\u6570\u8bbe\u7f6e\u4e3a NULL \u7b49\uff0c\u4ee5\u786e\u4fdd\u51fd\u6570\u80fd\u591f\u5728\u4e0d\u540c\u60c5\u51b5\u4e0b\u90fd\u80fd\u8f93\u51fa\u6b63\u786e\u7ed3\u679c")),(0,t.yg)("h1",{id:"\u89e3\u6790\u5668\u5f00\u53d1"},"\u89e3\u6790\u5668\u5f00\u53d1"),(0,t.yg)("p",null,"\u8be5\u90e8\u5206\u4ecb\u7ecd\u4e86\u5982\u4f55\u62d3\u5c55\u4e00\u4e2a\u65b0\u7684\u89e3\u6790\u5668\u7c7b\u3002"),(0,t.yg)("h2",{id:"\u521b\u5efa\u89e3\u6790\u5668\u7c7b\u6587\u4ef6"},"\u521b\u5efa\u89e3\u6790\u5668\u7c7b\u6587\u4ef6"),(0,t.yg)("p",null,"\u89e3\u6790\u5668\u5b58\u653e\u5728\u8be5",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/parser"},"\u76ee\u5f55"),"\u4e0b\u3002\u786e\u5b9a\u597d\u60a8\u60f3\u8981\u62d3\u5c55\u7684\u89e3\u6790\u5668\u540e\uff0c\u5728\u8be5\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7c7b\u540d\u7531 ",(0,t.yg)("inlineCode",{parentName:"p"},"\u7c7b\u578b + Parser")," \u7ec4\u6210\uff0c\u5982 ",(0,t.yg)("inlineCode",{parentName:"p"},"AdditionParser"),"\u3002"),(0,t.yg)("h2",{id:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa-1"},"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa"),(0,t.yg)("p",null,"\u521b\u5efa\u597d\u7c7b\u540e\uff0c\u6784\u5efa\u4ee3\u7801\u7684\u57fa\u7840\u6846\u67b6\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AdditionParser")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * description: calcute a + b\n */\n@TransformParser(values = Addition.class)\npublic class AdditionParser implements ValueParser {\n\n    @Override\n    public Object parse(SourceData sourceData, int rowIndex, Context context) {\n    }\n}\n")),(0,t.yg)("p",null,"\u4e3a\u89e3\u6790\u5668\u7c7b\u6dfb\u52a0\u5bf9\u5e94\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"@TransformParser")," \u6ce8\u89e3\uff0c\u7c7b\u578b\u89e3\u6790\u5668\u7c7b\u9700\u8981\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"ValueParser")," \u63a5\u53e3\uff0c\u91cd\u5199\u8be5\u63a5\u53e3\u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"parse")," \u65b9\u6cd5\u3002"),(0,t.yg)("h2",{id:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c\u76f8\u5173\u6210\u5458\u53d8\u91cf"},"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c\u76f8\u5173\u6210\u5458\u53d8\u91cf"),(0,t.yg)("p",null,"\u5728\u89e3\u6790\u5668\u7c7b\u4e2d\u6dfb\u52a0\u6709\u53c2\u6784\u9020\u51fd\u6570\u53ca\u76f8\u5173\u7684\u6210\u5458\u53d8\u91cf\uff0c\u5728\u6784\u9020\u51fd\u6570\u4e2d\u89e3\u6790\u8f93\u5165\u7684\u8868\u8fbe\u5f0f\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684\u7c7b\u578b\u5bf9\u8c61\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AdditionParser")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"    private final ValueParser left;\n\n    private final ValueParser right;\n\n    public AdditionParser(Addition expr) {\n        this.left = OperatorTools.buildParser(expr.getLeftExpression());\n        this.right = OperatorTools.buildParser(expr.getRightExpression());\n    }\n")),(0,t.yg)("h2",{id:"\u5b9e\u73b0\u89e3\u6790\u903b\u8f91"},"\u5b9e\u73b0\u89e3\u6790\u903b\u8f91"),(0,t.yg)("p",null,"\u91cd\u5199 ",(0,t.yg)("inlineCode",{parentName:"p"},"parse")," \u65b9\u6cd5\uff0c\u5982\u679c\u89e3\u6790\u5668\u9700\u8981\u5bf9\u4e0a\u4e00\u6b65\u4e2d\u89e3\u6790\u5f97\u5230\u7684\u7c7b\u578b\u5bf9\u8c61\u8fdb\u884c\u8fdb\u4e00\u6b65\u5904\u7406\uff0c\u53ef\u4ee5\u5728\u6b64\u65b9\u6cd5\u4e2d\u5b9e\u73b0\u5bf9\u5e94\u7684\u5904\u7406\u903b\u8f91\uff0c\u5426\u5219\u76f4\u63a5\u8fd4\u56de\u4e0a\u4e00\u6b65\u4e2d\u89e3\u6790\u5f97\u5230\u7684\u7c7b\u578b\u5bf9\u8c61\u5373\u53ef\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AdditionParser")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public Object parse(SourceData sourceData, int rowIndex, Context context) {\n        if (this.left instanceof IntervalParser && this.right instanceof IntervalParser) {\n            return null;\n        } else if (this.left instanceof IntervalParser || this.right instanceof IntervalParser) {\n            IntervalParser intervalParser = null;\n            ValueParser dateParser = null;\n            if (this.left instanceof IntervalParser) {\n                intervalParser = (IntervalParser) this.left;\n                dateParser = this.right;\n            } else {\n                intervalParser = (IntervalParser) this.right;\n                dateParser = this.left;\n            }\n            Object intervalPairObj = intervalParser.parse(sourceData, rowIndex, context);\n            Object dateObj = dateParser.parse(sourceData, rowIndex, context);\n            if (intervalPairObj == null || dateObj == null) {\n                return null;\n            }\n            return DateUtil.dateAdd(OperatorTools.parseString(dateObj),\n                    (Pair<Integer, Map<ChronoField, Long>>) intervalPairObj, 1);\n        } else {\n            return numericalOperation(sourceData, rowIndex, context);\n        }\n    }\n")),(0,t.yg)("h2",{id:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801-1"},"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801"),(0,t.yg)("p",null,"\u6bcf\u4e2a\u89e3\u6790\u5668\u7c7b\u90fd\u9700\u8981\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5\u6765\u9a8c\u8bc1\u903b\u8f91\u662f\u5426\u6b63\u786e\uff0c\u5355\u5143\u6d4b\u8bd5\u7c7b\u4f4d\u4e8e\u8be5",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process/parser"},"\u76ee\u5f55"),"\u4e0b\u3002\u6bcf\u4e2a\u89e3\u6790\u5668\u7684\u6240\u6709\u5355\u5143\u6d4b\u8bd5\u51fd\u6570\u5747\u653e\u5728\u540c\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u7c7b\u4e2d\uff0c\u5355\u5143\u6d4b\u8bd5\u7c7b\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"Test + \u89e3\u6790\u5668\u540d + Parser")," \u7684\u683c\u5f0f\u8fdb\u884c\u547d\u540d\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"TestAdditionParser")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'    @Test\n    public void testAdditionParser() throws Exception {\n        String transformSql = null;\n        TransformConfig config = null;\n        TransformProcessor<String, String> processor = null;\n        List<String> output = null;\n\n        transformSql = "select numeric1 + numeric2 from source";\n        config = new TransformConfig(transformSql);\n        processor = TransformProcessor\n                .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),\n                        SinkEncoderFactory.createKvEncoder(kvSink));\n        // case1: 1 + 10\n        output = processor.transform("1|10||||", new HashMap<>());\n        Assert.assertEquals(1, output.size());\n        Assert.assertEquals("result=11", output.get(0));\n    }\n')),(0,t.yg)("p",null,"\u7ecf\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u606d\u559c\u60a8\u5b8c\u6210\u4e86\u4e00\u4e2a\u65b0\u89e3\u6790\u5668\u7c7b\u7684\u5b9e\u73b0\uff0c\u53ef\u4ee5\u5411\u793e\u533a\u63d0\u4ea4\u60a8\u7684\u4ee3\u7801\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"AdditionParser")," \u5b8c\u6574\u4ee3\u7801\u53ef\u89c1 ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/parser/AdditionParser.java"},"\u4ee3\u7801\u94fe\u63a5")),(0,t.yg)("h1",{id:"\u903b\u8f91\u64cd\u4f5c\u7b26\u5f00\u53d1\u89c4\u8303"},"\u903b\u8f91\u64cd\u4f5c\u7b26\u5f00\u53d1\u89c4\u8303"),(0,t.yg)("p",null,"\u8be5\u90e8\u5206\u4ecb\u7ecd\u4e86\u5982\u4f55\u62d3\u5c55\u4e00\u4e2a\u65b0\u7684\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u3002"),(0,t.yg)("h2",{id:"\u521b\u5efa\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u6587\u4ef6"},"\u521b\u5efa\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u6587\u4ef6"),(0,t.yg)("p",null,"\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u5b58\u653e\u5728\u8be5",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/operator"},"\u76ee\u5f55"),"\u4e0b\u3002\u786e\u5b9a\u597d\u60a8\u60f3\u8981\u62d3\u5c55\u7684\u903b\u8f91\u64cd\u4f5c\u7b26\u540e\uff0c\u5728\u8be5\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7c7b\u540d\u7531 ",(0,t.yg)("inlineCode",{parentName:"p"},"\u903b\u8f91\u64cd\u4f5c\u7b26\u540d + Parser")," \u7ec4\u6210\uff0c\u5982 ",(0,t.yg)("inlineCode",{parentName:"p"},"AndOperator")," \u3002"),(0,t.yg)("h2",{id:"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa-2"},"\u57fa\u7840\u4ee3\u7801\u6846\u67b6\u642d\u5efa"),(0,t.yg)("p",null,"\u521b\u5efa\u597d\u7c7b\u540e\uff0c\u6784\u5efa\u4ee3\u7801\u7684\u57fa\u7840\u6846\u67b6\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AndOperator")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"@TransformOperator(values = AndExpression.class)\npublic class AndOperator implements ExpressionOperator {\n\n    @Override\n    public boolean check(SourceData sourceData, int rowIndex, Context context) {\n    \n    }\n\n}\n")),(0,t.yg)("p",null,"\u4e3a\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u6dfb\u52a0\u5bf9\u5e94\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"@TransformOperator")," \u6ce8\u89e3\uff0c\u64cd\u4f5c\u7b26\u7c7b\u9700\u8981\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"ExpressionOperator")," \u63a5\u53e3\uff0c\u91cd\u5199\u8be5\u63a5\u53e3\u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"check")," \u65b9\u6cd5\u3002"),(0,t.yg)("h2",{id:"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c\u76f8\u5173\u6210\u5458\u53d8\u91cf-1"},"\u6dfb\u52a0\u6784\u9020\u51fd\u6570\u548c\u76f8\u5173\u6210\u5458\u53d8\u91cf"),(0,t.yg)("p",null,"\u5728\u7c7b\u4e2d\u6dfb\u52a0\u5e26\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\u53ca\u76f8\u5173\u7684\u6210\u5458\u53d8\u91cf\uff0c\u5728\u6784\u9020\u51fd\u6570\u4e2d\u89e3\u6790\u8f93\u5165\u7684\u8868\u8fbe\u5f0f\uff0c\u5c06\u5176\u6784\u5efa ",(0,t.yg)("inlineCode",{parentName:"p"},"check")," \u65b9\u6cd5\u4e2d\u5224\u65ad\u903b\u8f91\u6240\u9700\u7684\u5bf9\u8c61\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AndOperator")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"private final ExpressionOperator left;\nprivate final ExpressionOperator right;\n\npublic AndOperator(AndExpression expr) {\n    this.left = OperatorTools.buildOperator(expr.getLeftExpression());\n    this.right = OperatorTools.buildOperator(expr.getRightExpression());\n}\n")),(0,t.yg)("h2",{id:"\u5b9e\u73b0\u5224\u65ad\u903b\u8f91"},"\u5b9e\u73b0\u5224\u65ad\u903b\u8f91"),(0,t.yg)("p",null,"\u91cd\u5199 ",(0,t.yg)("inlineCode",{parentName:"p"},"check")," \u65b9\u6cd5\uff0c\u6839\u636e\u903b\u8f91\u64cd\u4f5c\u7b26\u7684\u5b9a\u4e49\u4e0e\u4e0a\u4e00\u6b65\u4e2d\u89e3\u6790\u5f97\u5230\u7684\u6570\u636e\u5b9e\u73b0\u5224\u65ad\u903b\u8f91\uff0c\u8f93\u51fa\u5224\u65ad\u7ed3\u679c(true\u6216\u8005false)\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"AndOperator")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean check(SourceData sourceData, int rowIndex, Context context) {\n    return OperatorTools.compareValue((Comparable) this.left.parse(sourceData, rowIndex, context),\n            (Comparable) this.right.parse(sourceData, rowIndex, context)) > 0;\n}\n")),(0,t.yg)("h2",{id:"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801-2"},"\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801"),(0,t.yg)("p",null,"\u6bcf\u4e2a\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u90fd\u9700\u8981\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5\u6765\u9a8c\u8bc1\u903b\u8f91\u662f\u5426\u6b63\u786e\uff0c\u5355\u5143\u6d4b\u8bd5\u7c7b\u4f4d\u4e8e\u8be5",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process/operator"},"\u76ee\u5f55"),"\u4e0b\u3002\u6bcf\u4e2a\u903b\u8f91\u64cd\u4f5c\u7b26\u7684\u6240\u6709\u5355\u5143\u6d4b\u8bd5\u51fd\u6570\u5747\u653e\u5728\u540c\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u7c7b\u4e2d\uff0c\u5355\u5143\u6d4b\u8bd5\u7c7b\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"Test + \u903b\u8f91\u64cd\u4f5c\u7b26\u540d + Operator")," \u7684\u683c\u5f0f\u8fdb\u884c\u547d\u540d\uff0c\u4ee5 ",(0,t.yg)("inlineCode",{parentName:"p"},"TestAndOperator")," \u4e3a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'    public void testAndOperator() throws Exception {\n        String transformSql = "select if((string2 < 4) and (numeric4 > 5),1,0) from source";\n        TransformConfig config = new TransformConfig(transformSql);\n        // case1: "3.14159265358979323846|3a|4|4"\n        TransformProcessor<String, String> processor = TransformProcessor\n                .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),\n                        SinkEncoderFactory.createKvEncoder(kvSink));\n        List<String> output1 = processor.transform("3.14159265358979323846|3a|4|4");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output1.get(0), "result=0");\n        // case2: "3.14159265358979323846|5|4|8"\n        List<String> output2 = processor.transform("3.14159265358979323846|5|4|8");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output2.get(0), "result=0");\n        // case3: "3.14159265358979323846|3|4|8"\n        List<String> output3 = processor.transform("3.14159265358979323846|3|4|8");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output3.get(0), "result=1");\n\n        transformSql = "select if((numeric3 < 4) and (numeric4 > 5),1,0) from source";\n        config = new TransformConfig(transformSql);\n        // case4: "3.14159265358979323846|4|4|8"\n        processor = TransformProcessor\n                .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),\n                        SinkEncoderFactory.createKvEncoder(kvSink));\n        List<String> output4 = processor.transform("3.14159265358979323846|4|4|8");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output4.get(0), "result=0");\n        // case5: "3.14159265358979323846|4|3.2|4"\n        List<String> output5 = processor.transform("3.14159265358979323846|4|3.2|4");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output5.get(0), "result=0");\n        // case6: "3.14159265358979323846|4|3.2|8"\n        List<String> output6 = processor.transform("3.14159265358979323846|4|3.2|8");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output6.get(0), "result=1");\n    }\n')),(0,t.yg)("p",null,"\u7ecf\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u606d\u559c\u60a8\u5b8c\u6210\u4e86\u4e00\u4e2a\u65b0\u903b\u8f91\u64cd\u4f5c\u7b26\u7c7b\u7684\u5b9e\u73b0\uff0c\u53ef\u4ee5\u5411\u793e\u533a\u63d0\u4ea4\u60a8\u7684\u4ee3\u7801\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"AndOperator")," \u5b8c\u6574\u4ee3\u7801\u53ef\u89c1 ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/operator/AndOperator.java"},"\u4ee3\u7801\u94fe\u63a5")))}g.isMDXComponent=!0}}]);