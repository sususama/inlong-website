"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[99875],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,u=p["".concat(o,".").concat(s)]||p[s]||y[s]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[p]="string"==typeof e?e:r,i[1]=g;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const l={title:"Format",sidebar_position:2},i=void 0,g={unversionedId:"design_and_concept/the_format_in_inlong",id:"version-1.12.0/design_and_concept/the_format_in_inlong",title:"Format",description:"What is format ?",source:"@site/versioned_docs/version-1.12.0/design_and_concept/the_format_in_inlong.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/the_format_in_inlong",permalink:"/docs/1.12.0/design_and_concept/the_format_in_inlong",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/design_and_concept/the_format_in_inlong.md",tags:[],version:"1.12.0",sidebarPosition:2,frontMatter:{title:"Format",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Concept",permalink:"/docs/1.12.0/design_and_concept/basic_concept"},next:{title:"Agent Plugin",permalink:"/docs/1.12.0/design_and_concept/how_to_write_plugin_agent"}},o={},d=[{value:"What is format ?",id:"what-is-format-",level:2},{value:"The format in InLong",id:"the-format-in-inlong",level:2},{value:"What are the formats?",id:"what-are-the-formats",level:2},{value:"CSV",id:"csv",level:3},{value:"Key-Value",id:"key-value",level:3},{value:"JSON",id:"json",level:3}],m={toc:d},p="wrapper";function y(e){let{components:t,...l}=e;return(0,r.yg)(p,(0,a.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"what-is-format-"},"What is format ?"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(50584).A,width:"890",height:"383"})),(0,r.yg)("p",null,"As shown in the figure, in Flink SQL, when reading and writing data, it adopts the form of Row. Inside it is an Object array ",(0,r.yg)("inlineCode",{parentName:"p"},"Object[]"),", and each element in the array represents a field of the Flink table. The information about field type , name and precision is marked by ",(0,r.yg)("inlineCode",{parentName:"p"},"Schema")," ."),(0,r.yg)("p",null,"Format provides two interfaces : SerializationSchema and DeserializationSchema :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When Flink writes data to MQ , it needs to serialize ",(0,r.yg)("inlineCode",{parentName:"li"},"Flink Row")," into ",(0,r.yg)("inlineCode",{parentName:"li"},"key-value")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"csv")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"Json")," format . Then call the method of ",(0,r.yg)("inlineCode",{parentName:"li"},"SerializationSchema#serialize")," . Data will be serialized into Byte[] , which can be written to MQ ."),(0,r.yg)("li",{parentName:"ul"},"When Flink reads data from MQ , it works vice versa . It reads data from MQ with format Byte[] . Then deserializes them into Format and finally converts them into Flink row .")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"See\ndetails: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats"},(0,r.yg)("inlineCode",{parentName:"a"},"inlong-sort/sort-formats")))),(0,r.yg)("h2",{id:"the-format-in-inlong"},"The format in InLong"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(83487).A,width:"803",height:"271"})),(0,r.yg)("p",null,"InLong serves as a one-stop, full-scenario data integration platform , with MQ (the Cache part in the picture) as the transmission channel , which decouples DataProxy and Sort and provides better scalability . When DataProxy is reporting data , it needs to serialize the data into corresponding format ( ",(0,r.yg)("inlineCode",{parentName:"p"},"SerializationSchema#serialize")," ) . When Sort receives data, it will deserialize the MQ's data ( ",(0,r.yg)("inlineCode",{parentName:"p"},"DeserializationSchema#deserialize")," ) into ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink Row")," , and then write to the corresponding storage using Flink SQL ."),(0,r.yg)("h2",{id:"what-are-the-formats"},"What are the formats?"),(0,r.yg)("p",null,"Currently , InLong-sort provides CSV / KeyValue / JSON , and the corresponding InLongMsg packaging format ."),(0,r.yg)("h3",{id:"csv"},"CSV"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.inlong</groupId>\n<artifactId>sort-format-csv</artifactId>\n<version>${inlong.version}</version>\n</dependency>\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.formats.kv.KvFormatFactory")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Advanced"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.delimiter")),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},",")),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.escape-character")),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.quote-character")),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.null-literal")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.charset")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.ignore-errors")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.derive_schema")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Required if no format schema is defined ."),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Derives the format schema from the table's schema . This allows for defining schema information only once . ",(0,r.yg)("br",null)," The names , types , and fields' order of the format are determined by the table's schema . ",(0,r.yg)("br",null)," Time attributes are ignored if their origin is not a field . ",(0,r.yg)("br",null),' A "from" definition is interpreted as a field renaming in the format .')))),(0,r.yg)("h3",{id:"key-value"},"Key-Value"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.inlong</groupId>\n<artifactId>sort-format-kv</artifactId>\n<version>${inlong.version}</version>\n</dependency>\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.formats.csv.CsvFormatFactory")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Advanced"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.entry-delimiter")),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"'&'"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.kv-delimiter")),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"'='"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.escape-character")),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.quote-character")),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.null-literal")),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.charset")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.ignore-errors")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format.derive_schema")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Required if no format schema is defined ."),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Derives the format schema from the table's schema . This allows for defining schema information only once . ",(0,r.yg)("br",null)," The names , types , and fields' order of the format are determined by the table's schema . ",(0,r.yg)("br",null)," Time attributes are ignored if their origin is not a field . ",(0,r.yg)("br",null),' A "from" definition is interpreted as a field renaming in the format .')))),(0,r.yg)("h3",{id:"json"},"JSON"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.flink</groupId>\n<artifactId>flink-json</artifactId>\n<version>${flink.version}</version>\n</dependency>\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.flink.formats.json.JsonFormatFactory")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.flink.formats.json.JsonOptions")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Advanced"),(0,r.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ignore-parse-errors")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional flag to skip fields and rows with parse errors instead of failing ; ",(0,r.yg)("br",null)," fields are set to null in case of errors , false by default .")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"map-null-key.mode")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},'"FAIL"'),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},'Optional flag to control the handling mode when serializing null key for map data ." ',(0,r.yg)("br",null),' Option DROP will drop null key entries for map data ." ',(0,r.yg)("br",null)," Option LITERAL will use 'map-null-key.literal' as key literal .")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"map-null-key.literal")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},'"null"'),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional flag to specify string literal for null keys when 'map-null-key.mode' is LITERAL .")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"encode.decimal-as-plain-number")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional flag to specify whether to encode all decimals as plain numbers instead of possible scientific notations , false by default .")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"timestamp-format.standard")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},'"SQL"'),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},'Optional flag to specify timestamp format , SQL by default ."',(0,r.yg)("br",null),' Option ISO-8601 will parse input timestamp in "yyyy-MM-ddTHH:mm:ss.s{precision}" format and output timestamp in the same format ."',(0,r.yg)("br",null),' Option SQL will parse input timestamp in "yyyy-MM-dd HH:mm:ss.s{precision}" format and output timestamp in the same format .')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"encode.decimal-as-plain-number")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional flag to specify whether to encode all decimals as plain numbers instead of possible scientific notations , false by default .")))))}y.isMDXComponent=!0},50584:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/format_and_flink-65dad61dae55e9aa7b697fd3fc41b910.png"},83487:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/the_format_in_inlong-f53068957d177750d03b42bd0c2cface.png"}}]);