"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[94807],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||g[u]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(58168),o=(t(96540),t(15680));const r={title:"Sort Plugin",sidebar_position:4},i=void 0,s={unversionedId:"design_and_concept/how_to_extend_data_node_for_sort",id:"version-1.6.0/design_and_concept/how_to_extend_data_node_for_sort",title:"Sort Plugin",description:"Overview",source:"@site/versioned_docs/version-1.6.0/design_and_concept/how_to_extend_data_node_for_sort.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_extend_data_node_for_sort",permalink:"/docs/1.6.0/design_and_concept/how_to_extend_data_node_for_sort",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.6.0/design_and_concept/how_to_extend_data_node_for_sort.md",tags:[],version:"1.6.0",sidebarPosition:4,frontMatter:{title:"Sort Plugin",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Agent Plugin",permalink:"/docs/1.6.0/design_and_concept/how_to_write_plugin_agent"},next:{title:"Dashboard Plugin",permalink:"/docs/1.6.0/design_and_concept/how_to_write_plugin_dashboard"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Extend Extract Node",id:"extend-extract-node",level:2},{value:"Extend Load Node",id:"extend-load-node",level:2},{value:"Integrate Entrance",id:"integrate-entrance",level:2}],c={toc:d},p="wrapper";function g(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"InLong Sort is an ETL service based on Apache Flink SQL, the powerful expressive power of Flink SQL brings high scalability and flexibility.\nBasically, the semantics supported by Flink SQL are supported by InLong Sort. In some scenarios, when the built-in functions of Flink SQL do not meet the requirements,\nthey can also be extended through various UDFs in InLong Sort. At the same time, it will be easier for those who have used SQL, especially Flink SQL, to get started."),(0,o.yg)("p",null,"This article describes how to extend a new source (abstracted as extract node in inlong) or a new sink (abstracted as load node in inlong) in InLong Sort.\nThe architecture of inlong sort can be represented by UML object relation diagram as:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"sort_UML",src:t(54594).A,width:"2576",height:"869"})),(0,o.yg)("p",null,"The concepts of each component are:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"th"},"Name")),(0,o.yg)("th",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"th"},"Description")))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"Group")),(0,o.yg)("td",{parentName:"tr",align:null},"data flow group, including multiple data flows, one group represents one data access")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"Stream")),(0,o.yg)("td",{parentName:"tr",align:null},"data flow, a data flow has a specific flow direction")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"GroupInfo")),(0,o.yg)("td",{parentName:"tr",align:null},"encapsulation of data flow in sort. a groupinfo can contain multiple dataflowinfo")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"StreamInfo")),(0,o.yg)("td",{parentName:"tr",align:null},"abstract of data flow in sort, including various sources, transformations, destinations, etc.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"Node")),(0,o.yg)("td",{parentName:"tr",align:null},"abstraction of data source, data transformation and data destination in data synchronization")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"ExtractNode")),(0,o.yg)("td",{parentName:"tr",align:null},"source-side abstraction for data synchronization")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"TransformNode")),(0,o.yg)("td",{parentName:"tr",align:null},"transformation process abstraction of data synchronization")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"LoadNode")),(0,o.yg)("td",{parentName:"tr",align:null},"destination abstraction for data synchronization")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"NodeRelationShip")),(0,o.yg)("td",{parentName:"tr",align:null},"abstraction of each node relationship in data synchronization")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"FieldRelationShip")),(0,o.yg)("td",{parentName:"tr",align:null},"abstraction of the relationship between upstream and downstream node fields in data synchronization")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"FieldInfo")),(0,o.yg)("td",{parentName:"tr",align:null},"node field")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"MetaFieldInfo")),(0,o.yg)("td",{parentName:"tr",align:null},"node meta fields")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"Function")),(0,o.yg)("td",{parentName:"tr",align:null},"abstraction of transformation function")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"FunctionParam")),(0,o.yg)("td",{parentName:"tr",align:null},"input parameter abstraction of function")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"ConstantParam")),(0,o.yg)("td",{parentName:"tr",align:null},"constant parameters")))),(0,o.yg)("p",null,"To extend the extract node or load node, you need to do the following:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Inherit the node class (such as MyExtractNode) and build specific extract or load usage logic;"),(0,o.yg)("li",{parentName:"ul"},"In a specific node class (such as MyExtractNode), specify the corresponding Flink connector;"),(0,o.yg)("li",{parentName:"ul"},"Use specific node classes in specific ETL implementation logic (such as MyExtractNode)")),(0,o.yg)("p",null,"In the second step, you can use the existing flick connector or extend it yourself. How to extend the flink connector, please refer to the official flink documentation",(0,o.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors"},"DataStream Connectors "),"."),(0,o.yg)("h2",{id:"extend-extract-node"},"Extend Extract Node"),(0,o.yg)("p",null,"There are three steps to extend an ExtractNode: "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),"\uff1aInherit the ExtractNode class,the location of the class is:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/node/ExtractNode.java\n")),(0,o.yg)("p",null,"Specify the connector in the implemented ExtractNode."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Java"},'// Inherit ExtractNode class and implement specific classes, such as MongoExtractNode\n@EqualsAndHashCode(callSuper = true)\n@JsonTypeName("MongoExtract")\n@Data\npublic class MongoExtractNode extends ExtractNode implements Serializable {\n    @JsonInclude(Include.NON_NULL)\n    @JsonProperty("primaryKey")\n    private String primaryKey;\n    ...\n\n    @JsonCreator\n    public MongoExtractNode(@JsonProperty("id") String id, ...) { ... }\n\n    @Override\n    public Map<String, String> tableOptions() {\n        Map<String, String> options = super.tableOptions();\n        // configure the specified connector, here is mongodb-cdc\n        options.put("connector", "mongodb-cdc");\n        ...\n        return options;\n    }\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),"\uff1aadd the Extract to JsonSubTypes in ExtractNode and Node"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'// add field in JsonSubTypes of ExtractNode and Node\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = MongoExtractNode.class, name = "mongoExtract")\n})\n...\npublic abstract class ExtractNode implements Node{...}\n\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = MongoExtractNode.class, name = "mongoExtract")\n})\npublic interface Node {...}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),"\uff1aExpand the Sort connector and check whether the corresponding connector already exists in the (",(0,o.yg)("inlineCode",{parentName:"p"},"InLong Agentinlong-sort/sort-connectors/mongodb-cdc"),") directory. If you haven't already,\nyou need to refer to the official flink documentation ",(0,o.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors"},"DataStream Connectors")," to extend,\ndirectly call the existing flink-connector (such as",(0,o.yg)("inlineCode",{parentName:"p"},"inlong-sort/sort-connectors/mongodb-cdc"),") or implement the related connector by yourself."),(0,o.yg)("h2",{id:"extend-load-node"},"Extend Load Node"),(0,o.yg)("p",null,"There are three steps to extend an LoadNode: "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),"\uff1aInherit the LoadNode class, the location of the class is:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/node/LoadNode.java\n")),(0,o.yg)("p",null,"specify the connector in the implemented LoadNode."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'// Inherit LoadNode class and implement specific classes, such as KafkaLoadNode\n@EqualsAndHashCode(callSuper = true)\n@JsonTypeName("kafkaLoad")\n@Data\n@NoArgsConstructor\npublic class KafkaLoadNode extends LoadNode implements Serializable {\n    @Nonnull\n    @JsonProperty("topic")\n    private String topic;\n    ...\n\n    @JsonCreator\n    public KafkaLoadNode(@Nonnull @JsonProperty("topic") String topic, ...) {...}\n\n    // configure and use different connectors according to different conditions\n    @Override\n    public Map<String, String> tableOptions() {\n      ...\n        if (format instanceof JsonFormat || format instanceof AvroFormat || format instanceof CsvFormat) {\n            if (StringUtils.isEmpty(this.primaryKey)) {\n                // kafka connector\n                options.put("connector", "kafka");\n                options.putAll(format.generateOptions(false));\n            } else {\n                options.put("connector", "upsert-kafka"); // upsert-kafka connector\n                options.putAll(format.generateOptions(true));\n            }\n        } else if (format instanceof CanalJsonFormat || format instanceof DebeziumJsonFormat) {\n            // kafka-inlong connector\n            options.put("connector", "kafka-inlong");\n            options.putAll(format.generateOptions(false));\n        } else {\n            throw new IllegalArgumentException("kafka load Node format is IllegalArgument");\n        }\n        return options;\n    }\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),"\uff1aadd the Load to JsonSubTypes in ExtractNode and Node"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'// add field in JsonSubTypes of LoadNode and Node\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = KafkaLoadNode.class, name = "kafkaLoad")\n})\n...\npublic abstract class LoadNode implements Node{...}\n\n...\n@JsonSubTypes({\n        @JsonSubTypes.Type(value = KafkaLoadNode.class, name = "kafkaLoad")\n})\npublic interface Node {...}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),"\uff1aExtend the Sort connector, Kafka's sort connector is in ",(0,o.yg)("inlineCode",{parentName:"p"},"inlong-sort/sort-connectors/kafka"),"."),(0,o.yg)("h2",{id:"integrate-entrance"},"Integrate Entrance"),(0,o.yg)("p",null,"To integrate extract and load into the InLong Sort mainstream, you need to implement the semantics mentioned in the overview section: group, stream, node, etc. The entry class of InLong Sort is in :"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"inlong-sort/sort-core/src/main/java/org/apache/inlong/sort/Entrance.java\n")),(0,o.yg)("p",null,"How to integrate extract and load into InLong Sort can refer to the following ut. First, build the corresponding extractnode and loadnode, then build noderelation, streaminfo and groupinfo, and finally use FlinkSqlParser to execute."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'public class MongoExtractToKafkaLoad extends AbstractTestBase {\n\n    // create MongoExtractNode\n    private MongoExtractNode buildMongoNode() {\n        List<FieldInfo> fields = Arrays.asList(new FieldInfo("name", new StringFormatInfo()), ...);\n        return new MongoExtractNode(..., fields, ...);\n    }\n\n    // create KafkaLoadNode\n    private KafkaLoadNode buildAllMigrateKafkaNode() {\n        List<FieldInfo> fields = Arrays.asList(new FieldInfo("name", new StringFormatInfo()), ...);\n        List<FieldRelation> relations = Arrays.asList(new FieldRelation(new FieldInfo("name", new StringFormatInfo()), ...), ...);\n        CsvFormat csvFormat = new CsvFormat();\n        return new KafkaLoadNode(..., fields, relations, csvFormat, ...);\n    }\n\n    // create NodeRelation\n    private NodeRelation buildNodeRelation(List<Node> inputs, List<Node> outputs) {\n        List<String> inputIds = inputs.stream().map(Node::getId).collect(Collectors.toList());\n        List<String> outputIds = outputs.stream().map(Node::getId).collect(Collectors.toList());\n        return new NodeRelation(inputIds, outputIds);\n    }\n\n    // test the main flow: mongodb to kafka\n    @Test\n    public void testMongoDbToKafka() throws Exception {\n        EnvironmentSettings settings = EnvironmentSettings. ... .build();\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        ...\n        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env, settings);\n        Node inputNode = buildMongoNode();\n        Node outputNode = buildAllMigrateKafkaNode();\n        StreamInfo streamInfo = new StreamInfo("1", Arrays.asList(inputNode, outputNode), ...);\n        GroupInfo groupInfo = new GroupInfo("1", Collections.singletonList(streamInfo));\n        FlinkSqlParser parser = FlinkSqlParser.getInstance(tableEnv, groupInfo);\n        ParseResult result = parser.parse();\n        Assert.assertTrue(result.tryExecute());\n    }\n}\n')))}g.isMDXComponent=!0},54594:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sort_uml-d90bb6f0835781e064b7417f266b7b30.png"}}]);