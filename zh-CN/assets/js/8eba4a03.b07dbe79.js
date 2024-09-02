"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[11747],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>N});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function g(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=t.createContext({}),o=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):g(g({},n),e)),a},d=function(e){var n=o(e.components);return t.createElement(m.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(a),u=l,N=p["".concat(m,".").concat(u)]||p[u]||y[u]||r;return a?t.createElement(N,g(g({ref:n},d),{},{components:a})):t.createElement(N,g({ref:n},d))}));function N(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[p]="string"==typeof e?e:l,g[1]=i;for(var o=2;o<r;o++)g[o]=a[o];return t.createElement.apply(null,g)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14866:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>g,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=a(58168),l=(a(96540),a(15680));const r={title:"Format",sidebar_position:2},g=void 0,i={unversionedId:"design_and_concept/the_format_in_inlong",id:"version-1.12.0/design_and_concept/the_format_in_inlong",title:"Format",description:"\u4ec0\u4e48\u662f Format?",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.12.0/design_and_concept/the_format_in_inlong.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/the_format_in_inlong",permalink:"/zh-CN/docs/1.12.0/design_and_concept/the_format_in_inlong",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/design_and_concept/the_format_in_inlong.md",tags:[],version:"1.12.0",sidebarPosition:2,frontMatter:{title:"Format",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh-CN/docs/1.12.0/design_and_concept/basic_concept"},next:{title:"Agent \u63d2\u4ef6",permalink:"/zh-CN/docs/1.12.0/design_and_concept/how_to_write_plugin_agent"}},m={},o=[{value:"\u4ec0\u4e48\u662f Format?",id:"\u4ec0\u4e48\u662f-format",level:2},{value:"InLong \u4e2d\u7684 Format",id:"inlong-\u4e2d\u7684-format",level:2},{value:"\u6709\u54ea\u4e9b Format?",id:"\u6709\u54ea\u4e9b-format",level:2},{value:"CSV",id:"csv",level:3},{value:"Key-Value",id:"key-value",level:3},{value:"JSON",id:"json",level:3}],d={toc:o},p="wrapper";function y(e){let{components:n,...r}=e;return(0,l.yg)(p,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u4ec0\u4e48\u662f-format"},"\u4ec0\u4e48\u662f Format?"),(0,l.yg)("p",null,(0,l.yg)("img",{src:a(89217).A,width:"890",height:"383"})),(0,l.yg)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c Flink SQL \u5728\u8bfb\u5199\u6570\u636e\u65f6\uff0c\u5747\u91c7\u7528 Row \u7684\u5f62\u5f0f\uff0c\u5176\u5185\u90e8\u4e3a Object \u6570\u7ec4 ",(0,l.yg)("inlineCode",{parentName:"p"},"Object[]"),"\uff0c\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u4ee3\u8868\u4e86\u4e00\u4e2a Flink \u8868\u7684\u5b57\u6bb5\u3002\n\u5b57\u6bb5\u7684\u7c7b\u578b\u3001\u540d\u79f0\u3001\u7cbe\u5ea6\u7b49\u4fe1\u606f\uff0c\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"Schema")," \u6765\u6807\u793a\u3002"),(0,l.yg)("p",null,"Flink \u7684 Format \u63d0\u4f9b\u4e86\u4e24\u79cd\u63a5\u53e3\uff1aSerializationSchema \u548c DeserializationSchema\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5f53 Flink \u5f80 MQ \u5199\u6570\u636e\u65f6\uff0c\u9700\u8981\u628a ",(0,l.yg)("inlineCode",{parentName:"li"},"Flink Row")," \u5e8f\u5217\u5316\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"key-value")," / ",(0,l.yg)("inlineCode",{parentName:"li"},"csv")," / ",(0,l.yg)("inlineCode",{parentName:"li"},"Json")," \u7b49 Format,\n\u8fd9\u65f6\u8c03\u7528\u4e86 ",(0,l.yg)("inlineCode",{parentName:"li"},"SerializationSchema#serialize")," \u65b9\u6cd5\uff0c\u6570\u636e\u4f1a\u5e8f\u5217\u5316\u6210 ",(0,l.yg)("inlineCode",{parentName:"li"},"Byte[]"),"\uff0c\u5199\u5165\u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"MQ"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5f53 Flink \u8bfb\u53d6 MQ \u7684\u6570\u636e\u65f6\uff0c\u8be5\u8fc7\u7a0b\u5219\u76f8\u53cd\uff1a\u4ece MQ \u8bfb\u53d6\u6570\u636e\uff0c\u6570\u636e\u683c\u5f0f\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"byte[]"),"\uff0c\u53cd\u5e8f\u5217\u5316\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"Format"),"\uff0c\u518d\u8f6c\u6362\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"Flink row"),"\u3002")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u8be6\u60c5\u8bf7\u67e5\u770b\u4ee3\u7801 ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats"},(0,l.yg)("inlineCode",{parentName:"a"},"inlong-sort/sort-formats")))),(0,l.yg)("h2",{id:"inlong-\u4e2d\u7684-format"},"InLong \u4e2d\u7684 Format"),(0,l.yg)("p",null,(0,l.yg)("img",{src:a(8974).A,width:"803",height:"271"})),(0,l.yg)("p",null,"InLong \u4f5c\u4e3a\u4e00\u7ad9\u5f0f\u3001\u5168\u573a\u666f\u7684\u6570\u636e\u96c6\u6210\u5e73\u53f0\uff0c\u5c06 MQ\uff08\u56fe\u4e2d Cache \u90e8\u5206\uff09\u4f5c\u4e3a\u4f20\u8f93\u901a\u9053\uff0c\u540c\u65f6\u5b9e\u73b0 DataProxy \u4e0e Sort \u7684\u89e3\u8026\uff0c\u6269\u5c55\u6027\u4f1a\u66f4\u5f3a\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"DataProxy \u4e0a\u62a5\u6570\u636e\u65f6\uff0c\u9700\u8981\u5c06\u6570\u636e\u5e8f\u5217\u5316\u6210\u5bf9\u5e94\u7684\u683c\u5f0f\uff08",(0,l.yg)("inlineCode",{parentName:"li"},"SerializationSchema#serialize"),"\uff09\u3002"),(0,l.yg)("li",{parentName:"ul"},"Sort \u63a5\u6536\u5230\u6570\u636e\uff0c\u5c06 MQ \u7684\u6570\u636e\u53cd\u5e8f\u5217\u5316\uff08",(0,l.yg)("inlineCode",{parentName:"li"},"DeserializationSchema#deserialize"),"\uff09\u6210 ",(0,l.yg)("inlineCode",{parentName:"li"},"Flink Row")," \uff0c\u901a\u8fc7 Flink SQL \u5199\u5165\u5230\u5bf9\u5e94\u7684\u5b58\u50a8\u3002")),(0,l.yg)("h2",{id:"\u6709\u54ea\u4e9b-format"},"\u6709\u54ea\u4e9b Format?"),(0,l.yg)("p",null,"\u76ee\u524d\uff0cInLong-Sort \u63d0\u4f9b\u4e86 CSV/KeyValue/JSON\uff0c\u4ee5\u53ca\u901a\u8fc7 InLongMsg \u5c01\u88c5\u7684\u683c\u5f0f\u3002"),(0,l.yg)("h3",{id:"csv"},"CSV"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.inlong</groupId>\n<artifactId>sort-format-csv</artifactId>\n<version>${inlong.version}</version>\n</dependency>\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.formats.kv.KvFormatFactory")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Option"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default value"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ad8\u7ea7\u5c5e\u6027"),(0,l.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.delimiter")),(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},",")),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.escape-character")),(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"disabled"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.quote-character")),(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"disabled"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.null-literal")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"disabled"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.charset")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.ignore-errors")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.derive_schema")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u672a\u5b9a\u4e49 Format Schema\uff0c\u5219\u4e3a\u5fc5\u9700\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ece\u8868\u7684 Schema \u4e2d\u6d3e\u751f Format Schema \u3002 \u8fd9\u5141\u8bb8\u53ea\u5b9a\u4e49\u4e00\u6b21schema \u4fe1\u606f\u3002 ",(0,l.yg)("br",null)," format \u7684\u540d\u79f0\u3001\u7c7b\u578b\u548c\u5b57\u6bb5\u987a\u5e8f\u7531\u8868\u7684 schema \u51b3\u5b9a\u3002 ",(0,l.yg)("br",null),"\u5982\u679c\u65f6\u95f4\u5c5e\u6027\u4e0d\u662f\u5b57\u6bb5\uff0c\u5219\u5ffd\u7565\u5b83\u4eec\u3002 ",(0,l.yg)("br",null)," \u201cfrom\u201d \u5b9a\u4e49\u88ab\u89e3\u91ca\u4e3a format \u4e2d\u7684\u5b57\u6bb5\u91cd\u547d\u540d\u3002")))),(0,l.yg)("h3",{id:"key-value"},"Key-Value"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.inlong</groupId>\n<artifactId>sort-format-kv</artifactId>\n<version>${inlong.version}</version>\n</dependency>\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.formats.csv.CsvFormatFactory")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Option"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default value"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ad8\u7ea7\u5c5e\u6027"),(0,l.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.entry-delimiter")),(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"'&'"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.kv-delimiter")),(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"'='"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.escape-character")),(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"disabled"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.quote-character")),(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"disabled"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.null-literal")),(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"disabled"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.charset")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.ignore-errors")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"format.derive_schema")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"Required if no format schema is defined."),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ece\u8868\u7684 Schema \u4e2d\u6d3e\u751f Format Schema \u3002 \u8fd9\u5141\u8bb8\u53ea\u5b9a\u4e49\u4e00\u6b21schema\u4fe1\u606f\u3002 ",(0,l.yg)("br",null)," format \u7684\u540d\u79f0\u3001\u7c7b\u578b\u548c\u5b57\u6bb5\u987a\u5e8f\u7531\u8868\u7684 schema \u51b3\u5b9a\u3002 ",(0,l.yg)("br",null),"\u5982\u679c\u65f6\u95f4\u5c5e\u6027\u4e0d\u662f\u5b57\u6bb5\uff0c\u5219\u5ffd\u7565\u5b83\u4eec\u3002 ",(0,l.yg)("br",null)," \u201cfrom\u201d \u5b9a\u4e49\u88ab\u89e3\u91ca\u4e3a format \u4e2d\u7684\u5b57\u6bb5\u91cd\u547d\u540d\u3002")))),(0,l.yg)("h3",{id:"json"},"JSON"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.flink</groupId>\n<artifactId>flink-json</artifactId>\n<version>${flink.version}</version>\n</dependency>\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"org.apache.flink.formats.json.JsonFormatFactory")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"org.apache.flink.formats.json.JsonOptions")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Option"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default value"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ad8\u7ea7\u5c5e\u6027"),(0,l.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ignore-parse-errors")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009\u6807\u5fd7\u4ee5\u8df3\u8fc7\u5177\u6709\u89e3\u6790\u9519\u8bef\u800c\u4e0d\u662f\u5931\u8d25\u7684\u5b57\u6bb5\u548c\u884c\uff1b ",(0,l.yg)("br",null),"\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u5b57\u6bb5\u8bbe\u7f6e\u4e3a null\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a false\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"map-null-key.mode")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},'"FAIL"'),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009\u6807\u5fd7\uff0c\u7528\u4e8e\u5728\u5e8f\u5217\u5316map\u6570\u636e\u7684\u7a7a\u952e\u65f6\u63a7\u5236\u5904\u7406\u6a21\u5f0f\u3002",(0,l.yg)("br",null),(0,l.yg)("br",null),"\u9009\u9879 DROP \u5c06\u5220\u9664map\u6570\u636e\u7684\u7a7a\u952e\u6761\u76ee\u3002",(0,l.yg)("br",null),"\u9009\u9879 LITERAL \u5c06\u4f7f\u7528 'map-null-key.literal' \u4f5c\u4e3a key \u5173\u952e\u5b57\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"map-null-key.literal")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},'"null"'),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u201cmap-null-key.mode\u201d\u4e3a LITERAL \u65f6\uff0c\u7528\u4e8e\u4e3a\u7a7a\u952e\u6307\u5b9a\u5b57\u7b26\u4e32\u6587\u5b57\u7684\u53ef\u9009\u6807\u5fd7\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"encode.decimal-as-plain-number")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009\u6807\u5fd7\uff0c\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u5c06\u6240\u6709\u5c0f\u6570\u7f16\u7801\u4e3a\u666e\u901a\u6570\u5b57\u800c\u4e0d\u662f\u79d1\u5b66\u8bb0\u6570\u6cd5\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a false\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"timestamp-format.standard")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},'"SQL"'),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9a\u65f6\u95f4\u6233\u683c\u5f0f\u7684\u53ef\u9009\u6807\u5fd7\uff0c\u9ed8\u8ba4\u4e3a SQL\u3002",(0,l.yg)("br",null),"\u9009\u9879 ISO-8601 \u5c06\u4ee5\u201cyyyy-MM-ddTHH:mm:ss.s{precision}\u201d \u683c\u5f0f\u89e3\u6790\u8f93\u5165\u65f6\u95f4\u6233\uff0c\u5e76\u4ee5\u76f8\u540c\u683c\u5f0f\u8f93\u51fa\u65f6\u95f4\u6233\u3002 ",(0,l.yg)("br",null),"\u9009\u9879 SQL \u5c06\u4ee5\u201cyyyy-MM-dd HH:mm:ss.s{precision}\u201d\u683c\u5f0f\u89e3\u6790\u8f93\u5165\u65f6\u95f4\u6233\uff0c\u5e76\u4ee5\u76f8\u540c\u683c\u5f0f\u8f93\u51fa\u65f6\u95f4\u6233\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"encode.decimal-as-plain-number")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"N"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Y"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009\u6807\u5fd7\uff0c\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u5c06\u6240\u6709\u5c0f\u6570\u7f16\u7801\u4e3a\u666e\u901a\u6570\u5b57\u800c\u4e0d\u662f\u53ef\u80fd\u7684\u79d1\u5b66\u8bb0\u6570\u6cd5\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),"\u3002")))))}y.isMDXComponent=!0},89217:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/format_and_flink-65dad61dae55e9aa7b697fd3fc41b910.png"},8974:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/the_format_in_inlong-f53068957d177750d03b42bd0c2cface.png"}}]);