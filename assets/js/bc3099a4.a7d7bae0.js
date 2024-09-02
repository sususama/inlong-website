"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64090],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):A(A({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,u=d["".concat(o,".").concat(p)]||d[p]||g[p]||i;return a?n.createElement(u,A(A({ref:t},c),{},{components:a})):n.createElement(u,A({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,A=new Array(i);A[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,A[1]=l;for(var s=2;s<i;s++)A[s]=a[s];return n.createElement.apply(null,A)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},59338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>A,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const i={title:"MySQL to Iceberg Example",sidebar_position:3},A=void 0,l={unversionedId:"quick_start/data_sync/mysql_iceberg_example",id:"version-1.10.0/quick_start/data_sync/mysql_iceberg_example",title:"MySQL to Iceberg Example",description:"Here we use an example to introduce how to use Apache InLong creating MySQL -> Iceberg full database migration.",source:"@site/versioned_docs/version-1.10.0/quick_start/data_sync/mysql_iceberg_example.md",sourceDirName:"quick_start/data_sync",slug:"/quick_start/data_sync/mysql_iceberg_example",permalink:"/docs/1.10.0/quick_start/data_sync/mysql_iceberg_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.10.0/quick_start/data_sync/mysql_iceberg_example.md",tags:[],version:"1.10.0",sidebarPosition:3,frontMatter:{title:"MySQL to Iceberg Example",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MySQL to StarRocks Example",permalink:"/docs/1.10.0/quick_start/data_sync/mysql_starrocks_example"},next:{title:"Standalone",permalink:"/docs/1.10.0/deployment/standalone"}},o={},s=[{value:"Deployment",id:"deployment",level:2},{value:"Install InLong",id:"install-inlong",level:3},{value:"Add Connectors",id:"add-connectors",level:3},{value:"Install Iceberg",id:"install-iceberg",level:3},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Pulsar Cluster",id:"register-pulsar-cluster",level:3},{value:"Register Iceberg DataNodes",id:"register-iceberg-datanodes",level:3},{value:"Create Task",id:"create-task",level:2},{value:"Create Data Streams Group",id:"create-data-streams-group",level:3},{value:"Create Data Source",id:"create-data-source",level:3},{value:"Create Data Sink",id:"create-data-sink",level:3},{value:"Approve Data Stream",id:"approve-data-stream",level:3},{value:"Test Data",id:"test-data",level:2},{value:"Send Data",id:"send-data",level:3},{value:"Verify Data",id:"verify-data",level:3}],c={toc:s},d="wrapper";function g(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,n.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Here we use an example to introduce how to use Apache InLong creating ",(0,r.yg)("inlineCode",{parentName:"p"},"MySQL -> Iceberg")," full database migration."),(0,r.yg)("h2",{id:"deployment"},"Deployment"),(0,r.yg)("h3",{id:"install-inlong"},"Install InLong"),(0,r.yg)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.10.0/deployment/docker"},"Docker Deployment")," (Recommended)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.10.0/deployment/bare_metal"},"Bare Metal Deployment"))),(0,r.yg)("h3",{id:"add-connectors"},"Add Connectors"),(0,r.yg)("p",null,"Download the ",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/downloads/"},"connectors")," corresponding to Flink 1.13, and after decompression, place ",(0,r.yg)("inlineCode",{parentName:"p"},"sort-connector-iceberg-[version]-SNAPSHOT.jar")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"/inlong-sort/connectors/")," directory."),(0,r.yg)("h3",{id:"install-iceberg"},"Install Iceberg"),(0,r.yg)("p",null,"Please refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/hive-quickstart"},"Installation Tutorial")," on the Apache Iceberg official website."),(0,r.yg)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.yg)("p",null,"When all containers are successfully started, you can access the InLong dashboard address http://localhost, and use the following default account to log in."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.yg)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,r.yg)("p",null,"Click ","[Clusters]"," -> ","[ClusterTags]"," -> ","[Create]"," on the page to specify the cluster label name and responsible person.\n",(0,r.yg)("img",{alt:"Create Cluster Tag",src:a(17095).A,width:"532",height:"373"})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster")," is the default ClusterTags reported by each component. If you decide to use a different name, make sure to update the corresponding tag configuration accordingly.")),(0,r.yg)("h3",{id:"register-pulsar-cluster"},"Register Pulsar Cluster"),(0,r.yg)("p",null,"Click ","[Clusters]"," -> ","[Cluster]"," -> ","[Create]"," on the page to register Pulsar Cluster.\n",(0,r.yg)("img",{alt:"Create Pulsar Cluster",src:a(92770).A,width:"527",height:"650"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The ClusterTags selects the newly created ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),", the Pulsar cluster deployed by docker:"),(0,r.yg)("p",{parentName:"admonition"},"Service URL is ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar://pulsar:6650"),", Admin URL is ",(0,r.yg)("inlineCode",{parentName:"p"},"http://pulsar:8080"),".")),(0,r.yg)("h3",{id:"register-iceberg-datanodes"},"Register Iceberg DataNodes"),(0,r.yg)("p",null,"Click ","[DataNodes]"," -> ","[Create]"," on the page to register Iceberg DataNodes.\n",(0,r.yg)("img",{alt:"Create Iceberg DataNode",src:a(28040).A,width:"727",height:"653"})),(0,r.yg)("h2",{id:"create-task"},"Create Task"),(0,r.yg)("h3",{id:"create-data-streams-group"},"Create Data Streams Group"),(0,r.yg)("p",null,"Click ","[Synchronization]"," \u2192 ","[Create]"," on the page and input the Group ID, Stream ID and Full database migration:\n",(0,r.yg)("img",{alt:"Create Group Stream",src:a(14062).A,width:"1470",height:"422"})),(0,r.yg)("h3",{id:"create-data-source"},"Create Data Source"),(0,r.yg)("p",null,"In the data source, click ","[New]"," \u2192 ","[MySQL]"," to configure the source name, address, databases and tables information.\n",(0,r.yg)("img",{alt:"Create Stream_Source",src:a(90184).A,width:"674",height:"631"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If the read mode is ",(0,r.yg)("inlineCode",{parentName:"li"},"Full amount + Incremental"),", the existing data in the source table will also be collected, but the ",(0,r.yg)("inlineCode",{parentName:"li"},"Incremental")," mode will not."),(0,r.yg)("li",{parentName:"ul"},"The table white list format is ",(0,r.yg)("inlineCode",{parentName:"li"},"<dbName>.<tableName>")," and supports regular expressions."))),(0,r.yg)("h3",{id:"create-data-sink"},"Create Data Sink"),(0,r.yg)("p",null,"In the data sink, click ","[New]"," \u2192 ","[Iceberg]"," to configure the sink name and created Iceberg data node.\nWe can choose the data sink to have the same database table name as the data source, or customize it.\n",(0,r.yg)("img",{alt:"Create data object",src:a(93758).A,width:"1212",height:"376"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"When customizing the names of database tables, you can use built-in parameters and string combinations to generate the target table names."),(0,r.yg)("p",{parentName:"admonition"},"Built-in parameters include:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Source database name: ${database}"),(0,r.yg)("li",{parentName:"ul"},"Source table name: ${table}")),(0,r.yg)("p",{parentName:"admonition"},"For example, if the source table name is ",(0,r.yg)("inlineCode",{parentName:"p"},"table1")," and the mapping rule is ",(0,r.yg)("inlineCode",{parentName:"p"},"${table}_inlong"),", the data from ",(0,r.yg)("inlineCode",{parentName:"p"},"table1")," will be ultimately mapped and written into ",(0,r.yg)("inlineCode",{parentName:"p"},"table1_inlong"),".")),(0,r.yg)("h3",{id:"approve-data-stream"},"Approve Data Stream"),(0,r.yg)("p",null,"Click ","[Approval]"," -> ","[MyApproval]"," -> ","[Approval]"," -> ","[Ok]",".\n",(0,r.yg)("img",{alt:"Approve",src:a(13080).A,width:"1653",height:"719"})),(0,r.yg)("p",null,"Back to ","[Synchronization]"," page, wait for ","[success]",".\n",(0,r.yg)("img",{alt:"Success",src:a(21340).A,width:"1324",height:"75"})),(0,r.yg)("h2",{id:"test-data"},"Test Data"),(0,r.yg)("h3",{id:"send-data"},"Send Data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'#!/bin/bash\n\n# MySQL info\nDB_HOST="mysql"\nDB_USER="root"\nDB_PASS="inlong"\nDB_NAME="test"\nDB_TABLE1="source_table"\nDB_TABLE2="source_table2"\n\n# Insert data in a loop\nfor ((i=1; i<=500; i++))\ndo\n    # Generate data\n    id=$i\n    name="name_$i"\n\n    # Build an insert SQL\n    query1="INSERT INTO $DB_TABLE1 (id, name) VALUES ($id, \'$name\');"\n    query2="INSERT INTO $DB_TABLE2 (id, name) VALUES ($id, \'$name\');"\n\n    # Execute insert SQL\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query1"\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query2"\ndone\n')),(0,r.yg)("p",null,"Modify the variables in the script according to the actual environment, and insert 500 pieces of data into each table(There is a piece of existing data in ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table"),"):\n",(0,r.yg)("img",{alt:"Result Source",src:a(12253).A,width:"424",height:"343"})),(0,r.yg)("h3",{id:"verify-data"},"Verify Data"),(0,r.yg)("p",null,"Enter Iceberg, check data in table."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Result Sink",src:a(53140).A,width:"451",height:"160"})),(0,r.yg)("p",null,"You can also view audit data on the page:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Result Sink",src:a(29106).A,width:"2265",height:"710"})))}g.isMDXComponent=!0},13080:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/approval-c3c95e6df941b809cf786b1d9b6ad8a8.png"},29106:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/audit_iceberg-1ea62c29cfc8b0a25a651c6e5eb26e7f.png"},17095:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_cluster_tag-83079ba435eef25964075381c405c176.png"},14062:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_group_stream-cbd6f0dfc6f02437232b1ade24568013.png"},28040:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_iceberg_datanode-3f89dc82e7fb0cf01d454bc408de9346.png"},92770:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_pulsar_cluster-8931f8b43da437e42a266e4443003b48.png"},93758:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_stream_sink-96d3c2f03117a10c96690687908ca54e.png"},90184:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_stream_source-bb9fcf7ffc971ac4f9ec549eb57e84d2.png"},53140:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcMAAACgCAIAAAD/85DJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AACAASURBVHic7Z1NSCNZ18fv+2F6EYSMhmAPFghhXhj8qMA08riYphA3kkWgZpOhO9Qis9CNbloodSEu2g6T2YwwdC/GRcgjk5UgTXDTiAwDQqAhsZVZDAWBEpTQZgJSzNvmeeBdHLxvTX3c+kpi7D6/laZSVafOvffk3nNv3f9/fPHF/xArPnz4X8vPEQRBEAP/edcGIAiC3HswkiIIggQFIymCIEhQ/vuuDbBGkqT5+flisVgul7t9r2QymclkQqEQIaTRaDx//lxV1W7ftG/N6EM4jltfX6/X67lcTv95Pp+/uroyf0gIWVlZ8XEjfRHc3Nyk0+kAViPOyLI8Pj7+ww8/1Go1w6F71xywT0rK5XI6nRZFUVGUj8wMnueLxaIsy526YMdxY+HS0lI4HD44OIB/JUmCcHl1dXVxccHz/M7OTjKZhKNHR0ccx/l4ZGi6qqqKoiiKIoZRr3S2svVJq3QPRlKkr5FlmeO4UqlEuy2Hh4eDg4OlUunzzz+fmJjY2NhoNpt07FIulw8ODqanpyVJ8nSjyclJQsjR0VFHzUc+FTCSsuj/Pt3HDc/z4+Pj1WpVn+RRVXVhYWFlZQWGfqIoGsbyhUJBUZS5uTme5z3drt1un5+fd8Ry5FPDW56U5/lnz56Fw2FCyM3NDc1jyrI8Njb2yy+/fPfdd3C0UqnQBJYh/UTPoslQQRDi8TghRNM0y6SJLMvT09OapmUyGX8WGg4B+/v7hUKBcbVarXZ2djY9PZ3P5z2l3hhmQNYvFouZDzFgnyVJUiqVgr8VRVlZWQGPwSfT09N7e3vwt75cGJgvyH4uQ8ILvnZ2dpbL5ezqhhsL5+fnCSF0XK93RSQSaTQahJC9vT3zQx0dHWUymfn5eXNd8gS7ilp6I5lMptPpN2/ezM3NDQwM0HMbjcbCwgL7di5rr0vPO7Yvu1L2WkUdi9IuAgCjo6P00VzWT7aFNFHjL13uDw99Uiiky8tLSCS9ePFCEASO4+BoLBZbXl5+8+aNKIr7+/t0eMXzvCAIKysrcJaqqplMhma1QqFQNpslhIiiuLy8rGna4uKi4b5QTpVKxWUYtbQwmUyurq6enZ3BoZ2dnZubGzdPncvl9vf34/H4q1ev6MP6NoPn+a2trevrazhUrVb13mBckHFWPp9PpVL7+/tw9PT0VJKkXC4niuLm5qamaZVKRbzFTTW1vCAhRJKkjY0N6sNqtZrNZt0MomOx2OLiYqlU0tcNRws5jhsbG7u8vDREw9nZ2evr63Q6/eHDh9PT083NzS+++MLgw5OTk1arNTY25lhkkiTt7e3t7e1NT0+Hw+GNjQ34F1KxxL6Ksr3x+PHj169ft1otURQJIfv7+5FIhG0Jo9r49jyjfdmVso8qyi5KdgQghGQyGXPcYDuKbeHk5GQoFBoZGfE6KAmCh0g6Ojo6MDBwenoK/9ZqtZWVFf2EGu3iHR4eNhqNiYkJ89cgDwU5KaBSqcBPh6qq9Xpd32ckhEiSBGHUTQhgWCgIQqvV2t3ddf+8lEKhsLOzE4lEtra23JQNwwzoZP3zn/+EQ7u7u61WSxAE9gUZZyWTSY7j9J3rQqHA7mizsbsgx3EzMzOKotCC2N3dbTQaMzMzbi57cHAAvYZqtapp2sOHDx1PmZqaikQi1I2UQqFA+xoPHz6s1WrZbNbQaaJ1aWhoiH2XQqEADbJSqWiatrm5Cf/quzPmKsr2xsDAQLPZPD4+JoSEQiEoOOiRMbCrNgE9b9m+GNXGXxVlwI4AMJeojxuOz+Vo4bt3725ubsy/wV3Fw+j+/Py83W7DcMDcVjVNq1ar8LeqqtfX14ODg3YX0X9ycXFB/zaEy0ePHvE87zKMMizkeX5kZOTs7Mz3QopyuXx+fv7s2bPV1VXHwY6dGeZOFsNRLs+anJxst9vU88GxuyDEtXq9Tj+Bljk+Pu54TX3dcE80GiWEvH//3u4L7LHbxcVFIpEYHR0N3pzMVTSZTLK9QQOipmnNZtPNXeyqTRDPWxpP7EvZXxX1hCECmOPGyMgI43Q3FpbL5R6snjTgIZLWarW1tbX19fVUKpVKpdzn+PRpFPeEQiHoAOqrApDP5yHvA9BQ69tCT1YJgsC+pp0ZQ0ND4XA4FovRRBIA+T472GcNDw+7b6tuYF/QXBYDAwOduvW9o7PeYNfezt7LrpT9VVFH3EeAq6srdiTtkoXB8TbjBNOm5DanC4lLN9loOo6AZJCbe0FNEgTB/CvN6IxYWhh8Qhau1m63Nzc33fRxLM04OTnRNO3y8tJTIrzZbDLOgpo3NDTUqXXLXi9oGGF84gT0hmW16ca97EqZXdn84SkCQIhnXK0bFnYEn6ugyuVysVgkt0MwAzCartfr0BVvNBqHh4f+brS9vd1oNObn5x2nZRgWgveHh4fpUUEQHPNWFEmSstlsq9VaW1vzOlTUm0GHIS5nrgD2WRcXF+FwOJFIWJ5rfnBH7C4IcziQ+wboOMt8kUQiYch328GwEMb1lhXMDQ8fPuzeqiZP3vCBvtp0w/N2peyvigKWRekpAkDcuL6+ZnzHjYWweLFYLPbpjJMkSfqVlZAztkxjPX36lBBycHAAjx2JRKampsjtBLrLNgaoqvry5ct2u51Opx39Ymch5JU4joNwLMvyyMiIy7l7WZZTqZSiKAsLCy67aQxHHR0dRSKRpaUlN9ehMM6CJL3+l0aSJDr7Cf6nD+4Guwuqqnp8fByPx+nFnzx5EolEYAJB3zL1a2scYVhojiDugQbc2byHHrY3/MGovR33PKPa+KuixKYoPUUAiBt0KskORwvh5yQcDsPcVG/4D0/7k+rzHfq1aYY8iP49Wf3KL03TSqVSOp2m691gHYZ5/srw3j0Mdgghju/w2VlIdNlVRVFgvSFMGlomcSD3ql+dx76vezPslrUyzGCcZXg08veFgeTv/ieu1+vZXVDfVg3PRe3XNO3nn3/+9ttv4U15xoJHRwsZ72WzgQpDJ4XdYHkvRhW18wa99eHh4fr6OiHk+fPns7OzqVQKVkSxbbCrNj48zzae2Jeyj5XXgGVRMiKAfp0p+XvcCNIc6B0NbaGreIukdviu8XeFj5aG9B66xNJre8jn84ODg/2/7QXSJQzJ2R6Ab4si/Qu8Y6Yf2LpBkqR4PH58fIxh9NMEXjIOMj3jA4ykSF+Ty+UURXE/5ZhMJufn5yuVCo42PkE4jnv16hW8D+Z+YqMj9On+pAhC2d7eXl9fn5ycdLM0WBAEVVW95rURR4rFot1MkWP+t2fQZWS9pzN5UgRBkE8ZHN0jCIIEBSMpgiBIUDCSIgiCBAUjKYIgSFAwkiIIggQFIymCIEhQPKwnNe+P4KhpQ79JX5zvjYQ9giBIL/G2Mt9u72SDBFU+n6dbl8JuAoSQ33///csvv+yQ2QiCIH1EZ0b3oJK0vb0N/25vb1NllaWlpXq9vrCw8OHDh47cC0EQpN/owNuiZpWk2dnZWCwGI/1+29oaQRCk43iLpCD6CrqvNEkKmohUZwZ22Pv111//8Y9/dN5eBEGQ/sNDJNXL/0L2E4Q26Rfgw+vr60wm42kbNARBkHuNzzypqqqvX78mOt3qzz77bGtrq16v43AeQZBPDf95UtCtHh4ehj8eP36s36Ea9Mg6ZCSCIEhf4z+SguzU6elprVa7vLwcHBykO1R3VmcRQRCkz/E5uoedyRVFgU4oqP09efIEji4tLYXDYUeNQARBkI8DDzs9G9T+DGpTeplAhuwo0Gg07mprawRBkI6De+YjCIIEBXcwQRAECQpGUgRBkKBgJEUQBAkKRlIEQZCgYCRFEAQJCkZSBEGQoGAkRRAECQpGUgRBkKB0MpImk8lSqVQsFnme7+BlO4IkSaVSKZlM3rUhiB+gan0EWzXKshy8gdxfb3Ac9+rVK1mW3Xw5n8/n8/lum9Qp7mWflOf5YrHosjwQpEtgPfQK7MhxcHDg5stHR0ccx90X97rdC8osLArc3Nyk02n4u1wuo26oI2wRVgZ2+qz6nQ0ajcbz58+pDIx+MwTDIYSi9xLFsK3E/aV/ZH1lWeY4rlgswo4cjpTL5Wg0mkqlJEnq/7JwG0nphvl0Y3zc0dkHDBFWxlkMfVZZlsfGxpaXl1VVhRi9vr4OERN+/GhEyOfzW1tbdGcZxMBHEzopfSXry/P8+Ph4tVr1FM0LhcLExMTc3Fy1Wu3zetsBRTxi3/dJJpPpdPrNmzdzc3MDAwPFYlEQhHg8TveCgsKOxWLEXQdN3/+anp7e29uDvyuVSi6XM1jCuCBcR9M0CGR2ZkCc+uWXX7777jvoRdIbARC8NE1z2d0zi7Cur68LgsB+atBnzeVy5pGO3pharXZ2dpZIJKampoaGhubm5iqVCo0OR0dHmUxmfn7esUYyes3s8tIPXBRFob+1dhdku1d/lnsLO47lIzvWQ2LvDULI6OgotV9/CsO9DG/Ywag2DCRJmp+fp02V/H1rN0vP5/P5wcFBQxOAb0L7IoTMz88TQszjeseidF9v75bORFI6rgefGo4+fvz49evXs7Ozoig2m839/X1wKzjx8vISoqosy44dNKhzcOLZ2Zk+jsDngiCsrKxAidr1+KAZ0BrMNiMWiy0uLkIBQ9vQjzVgu+uBgYGpqSnHSMoWYWXgo/tvkCkkhJycnLRareHhYUcjwRtwU57nnz59enJyQvu8do7K5/PxeJz27CRJAkeB06i3ZVnOZrPRaBS+Zude+EWsVqv6H0hHC716yRG7R2bXQ4Y3CCHhcDibzcIhCFvJZLJcLjPcy/AGA9+jRhC+VBRFFEUI7ouLiwsLC3ZFeXV1NTIyMjQ0ZFcEdOt3QzR0U5RQb8fGxjiO6+fcVNdnnAYGBprN5vHxMSEkFArB9s/QZ4R4SjeE3t3dbbVagiD4vletVqNhlBBydHREdEpTgCRJ+jDqxoyDgwMIFtVqVdO0hw8f0kPwSavVOjk5cTTPLMI6Nzf366+/DgwM+HteM8PDw+12+/z8HCRh9KYC5t85SyNPT0/hX71LGY5KJpMcx+kHyJAO4jhuZmZGURTq7d3d3UajMTMzQ+9o6V7ovO/u7nqysOP4q6J23qBfoIeq1Wq73YYqyrgXwxtdolKpQHRTVbVer4fDYUZR0ioNU/Mw4T46OkqvNjU1FYlEaJFR3BQlNWBoaKg7z9oZOtMnZUM9pWlas9mEv80/U6qqXl9fOzZ190A00X/y6NEjnucN4ym2GZqmVatVu1vUajU3vQMDXRJhlSQpHo8rigLPcnl5mUgkoL9DCHny5EksFms0GuyLgNNgWKpv/GxHTU5Otttts6OgCdXrdfoJNIzx8XH419K95s67GwsDkkql6GAcxrPNZtNfFbXzBr24+RDDvWxvdAn9aIZ2hO2K8v379+Q2dIbD4XA4zPN8NBqlXYRoNEoIga/pcVmUFxcXiURidHS0nwf4vYiklgwNDYXD4VgsRnNMgGNTZ2O5RT8QCoVgHZ++lnTJDAYgwmo5JAwCjLwajQZNwq6srOTz+Ww2m81mCSG1Wq3RaFxfX7OvU6vV1tbW1tfXIbLQ1BXbUcPDw/qfSQN6hwNBuuF2Fvq+IGCeceJ53l/dYHvDkt7XQ39YFuX5+TkhJBqNRqPRP//8k9xGVUdNzC4V5Z1wZ5G02WxqmkZTJB0BwihtEpCFoUehnARB0P8GdsMMO7onwgqyWpqmvXz5Ut9z0T8UeEPfp7BDVVVI1UE+DjrdJycnDEc5ZsoMBHxkSws73gJ91w2v3mDfqw/fc9FDixLSMm/fvp2YmIB8haZpjqf3pih7wJ2tzKeDF47jvJ4L1c4weQLjo0ajQSVOLdne3m40GpDmD2gGuV2b/erVKzengwir3kKzCKuP98SgCrbbbfYKp0QiQawmTxmUy+VisUgIiUajbEddXFyEw2G4hR6YLpiYmKCfuNGdNZevIAiG9Z5mC+mHnXrXzrFuWNZDYu8Nf/dy742uwihKsPDBgweff/75+/fvT09Px8bGHjx4QAdAMK7Xl5EZy6IEoLcBPd++5S7fcQJF0qWlJa8nQrXjOE7/9id8GIlEpqamCCHJZHJ1ddU8La6q6suXL9vtdjqdhpbm2wxyO3dPb+qIowjr5ORkKBRy3w5dhtF8Pj8/P18qlRwzTZIk6RfNQOcCWgLDUYeHh/rfJ3I7W62q6vHxcTwep+ngJ0+eRCIRmAy0AxJwtHxlWR4ZGbm5uXG0EIhGo+BDmMMJArtuWNZDYu8Nf/die6NnMIoS/MDzfCgUOjk5qVarkCq9urqCb5qjMOBYlOQ2XnvNlvSezozuDdnJH3/8kRBSqVTevXvHOKtcLp+fnz979kyfG3K5QBpWYtIkIEwi6T/UNK1YLNL3r/TUarVSqZTJZFZXV9PpdBAzqtXq3Nycpmlu5u7J7bAlk8nAvfQr9YB3794lEgnDfIXBvfCAsCYXuiehUGhjY4N+AQ7pz1IUxdIVZgqFgizL1BWapr148QIsZDgKxmj6tCxdQQlupPM5+gsyyOVy9GqKovzwww80UcOwEDg8PJyZmYFVmQFxrBuW9ZDhDX/3YniDAaPaePHB/8Moyqurq3g8Xq/XVVVVVfXy8jIej9OkKp2b4nleX1KORUluJy0PDg76eQkUQW1R5KPEkDFH7hzD0lH3WC7770Pu5Q4mCMIgmUwmEglFUTCM9g/wAp4+OeAGWNh3fHzc52GUEPJfdi+9/Pvf/+qxKQgSEI7jvv/++6+//vrt27f6dAfSD/z222+PHj366quv/vrrrz/++MPx+8lk8ptvvnn79u1PP/3UA/MCgqN7BEF6BLyTArsBOH4Z3pW6LzslYSRFEAQJCuZJEQRBgoKRFEEQJCgYSREEQYKCkRRBECQod7aDCRu6cXcP9jLoE7GjPjGjD7Gb8M3n81dXV+YPid8JX4Pggsu3whDfyLI8Pj5u+aLzvWsO2Ccl5XI5nU6LoqgoykdmRv+LX7qx0CBIKUkShMurq6uLiwue53d2dugb7r4FKanEliiKoihiGPVKZytbn7RK9/RpnxRBALMgJbxWXyqVGo3G8PBwKpVSFIWOXXwLUsL2GeytVZD+hyG121WwT8qi//t0HzeWgpSwP8jKygoM/URRNIzlC4WCoihzc3Ned9Xr/63bEDZUalcUxc3NzXA4vL6+7m/DTK9465P6E4m00/tkqxjqMUiB+rCQWKkzOu5wAS8LT09P5/N5T6k33/KcdngV9XQjfsnAh0qoPuGll4qzqxtuLLQUpARXRCIR2E9+b2/P/FCdEqT0IbTpqKfLwGXtdel5x/ZlV8o9Vvy1U1plYGehndQu7ZYaZNI7iIc+Kd3NBRJJL168EASBxvtYLLa8vPzmzRtRFPf396enp2GrAqr3CWepqprJZGhWC1QMCSGiKC4vL2uatri4aLgvlQJ1GUYtLYTtSs/OzuDQzs6Oyx0ec7nc/v5+PB53uZ0z2wye57e2tq6vr+FQtVrVe4NxQcZZ+XwedO3h6OnpqSRJuVwOfpY1TatUKuItLt/SM1+QECJJ0sbGBvVhtVrNZrNuNqQAAdFSqaSvG44W2glSzs7OXl9fp9PpDx8+nJ6ebm5ufvHFFwYf6gUp2bZJkrS3t7e3tzc9PR0Ohzc2NuBfSMUS+yrK9gbo6bZaLVEUCSH7+/uRSIRtCaPa+PY8o33ZlbKPKsouSnYEIIRkMhlz3GA7ykcjAmD/35GRkY4rEXiIpI5CgLSLBzvdwsaujnqfZhVD/U3NUqD+LAyizlgoFHZ2diKRyNbWlpsC8CfPycCHqKfnh7wliEooA4Y+qx12gpSFQoF2KB4+fFir1bLZrKHT5F6QslAoQIOsVCqapm1ubsK/+j6LJ6FNwtTTZWBXbQJ63rJ9MapNjxV/YS5RHzccn8u9hVRql37y7t27m5sb889zcDyM7tlCgHrFRIYEo1nv06xiSDFLgfqzMLg6I92Fd3V11XGw40+e0w5/op6+8a0SyoCtz2qHnSAlhT1A66AgpSehTfjXUk+XjV21CeJ5S+OJfSn3XvHXHDdGRkYYp7u30CC1C5TL5S4trPQQSX0LATL0PhlYSoEC+Xwe8j4ADbU9kCoMhUKCILCv6U+e044gop4+6KVK6H2nl5qpnb2XXSn3XvHXAIgJMr7g0kKz1G638Tbj5EMIkK33ycBSChRgdEYsLQw+IUvlkjY3N930cXzIc9rBVrj0IWPJpscqoR8Z3dBM7ca97Eq594q/BiDEM67mxkI7qd2u4nMVFEMIkNyOpkHGy43eJwODFKg/CwOqM0qSlM1mW63W2tqa16Gie3lOO/yJegJ24pcMOqISCkKBbm7HsNCNICWDrgpS+tNMdY++2nTD83alfFeKvwDEDapIaomjhWyNSFjXGFx31oyHSOpGCBB4+vQpIQRErNzofTIwS4H6sDCIOqMsy7D2e2FhweXvmz95TgY+RD3hbzvxSwb+VEL1LVO/tsYRhoV2gpRu6LYgpT/NVDaM2ttxzzOqzZ0o/gIQN/RSu5YwLHSU2oVfmo7ozhrwttOzPt+hX5tmyIPoXy3Qr/zSNK1UKqXTabreDdZhmOevDO/dg4MIIY7v8NlZSHTZVUVRYL0hTBpaJnEg96pfnce+r3sz7Ja1MsxgnGV4NGKSsdT7n7her2d3QX1bNTwXtV/TtJ9//vnbb7+FN+UZCx4dLWS8l80GKgydFHaD5b0YVdTOG/TWh4eH6+vrhJDnz5/Pzs6mUilYEcW2wa7a+PA823hiX8o+Vl4DlkXJiAD6dabk73HDX3MwzKDQy9KVvNQYN2qvnujMnvm+a/xd4aOlIb3noxekRHpPl3Rn8W1RpH/56AUpkR4D7x8HmbmxAyMp0tfkcjlFUdxPOcK8baVSwdEGoofjuFevXsGrYu7nPNyDe0Eh/c729vb6+vrk5KSbpcGCIKiq6jWvjThSLBbtZooc87/9AF1h1iVQWxRBECQoOLpHEAQJCkZSBEGQoGAkRRAECQpGUgRBkKBgJEUQBAkKRlIEQZCgeFhPat4fwVHTBr7GOIQgCPIR4G1lvl0cNOhM5fN5unUp41BnngBBEOSu6czoHlSS6PbU29vbVFmFcQhBEOTjoANvi5pVkmZnZ2OxWDgcZhwKfl8EQZA+wVufFERfQcaW7jsNmohUZ0aW5bm5uV9//XVgYIBxqLOPgSAIcod4iKRUz5ZqZ6+urup36IHdVoaHhzOZzJ9//qk/l3EIQRDkvuMzT6qq6uvXr4lOt/qzzz7b2tqq1+vmTXkZhxAEQT4C/OdJQbd6eHgY/nj8+LF+G2qqR2Z3qAO2IwiC9Af+IyloS52entZqtcvLy8HBQboNNdU+ZBzqgO0IgiD9gc/RPexMrigK9DRB7e/JkydwdGlpKRwOg0Yg4xCCIMjHgYedng1qfwZJKb1MoEH7kHEIQRDkIwD3zEcQBAkK7mCCIAgSFIykCIIgQcFIiiAIEhSMpAiCIEHBSIogCBIUjKQIgiBBwUiKIAgSFIykCIIgQelkJE0mk6VSie5b2ldIklQqlfR7ACL3CKhakiTdtSFBkWU5eAO5v96A3TVlWXbz5Xw+n8/nu21Sp7iXfVKe54vFosvyQJAugfXQK7DtxsHBgZsvHx0dcRx3X9zrdi8os7AocHNzk06n4e9yuYw6d474VlqF7QsIIeZTLA+xtWARin5fCIphW4n7C6Pa9BhZljmOKxaLLmtguVyORqOpVEqSpP4vC7eRtFAowMNwHLe+vn59fY3bNvvAn9Iq+JwQ8vvvv3/55ZcuDxHUxPbCRxM6Key60WN4nh8fH69Wq55qY6FQmJiYmJubq1arfd4D6IAiHvn7r3qj0Xj+/DlI4CWTyXQ6/ebNm7m5uYGBgWKxKAhCPB5vNBoLCwvktrBjsRhx1+z1+1FNT0/v7e3B35VKJZfLGSxhXBCuo2kaBDI7M2RZHhsb++WXX7777jvoRdIbAdDB1DSNPjIbs9Lq+vq6IAjsp15aWqrX67lczjzSYRzyDaPXzC4vfS9YURT6W2t3QbZ79We5t7DjWD6yYz0k9t4ghIyOjlL79acw3Mvwhh3+6oYkSfPz87Spkr8PZSw9n8/nBwcHDU0AvgntixAyPz9PCDGP6x2L8ujoKJPJzM/PfxKRlI7rwaeGo48fP379+vXs7Kwois1mc39/H9wKTry8vISoKsuyYwcN6hyceHZ2pg9q8LkgCCsrK1Cidj0+aAa0BrPNiMVii4uLUMDQNvRjDdjuemBgYGpqyjGS+lZaZXT/Oz4yoN6AK/M8//Tp05OTE1VV2Y7K5/PxeJz27CRJAkeB06i3ZVnOZrPRaBS+Zude+EWsVqv6H0hHCzvrCmJfN9j1kOENQkg4HM5ms3AIwlYymSyXywz3MrzBwHfdAOFLRVFEUYTgvri4uLCwYFeUV1dXIyMjQ0NDdkWg3/pd/7mbojw5OWm1WmNjYxzHdaOIO0XXZ5wGBgaazebx8TEhJBQKwR7P0GeEeEp3fd7d3W21WoIg+L5XrVajYZQQcnR0RHRKU4AkSfow6saMg4MDCBbValXTtIcPH9JD8Emr1To5OXE0r/dKq5ZasG6MPD09hX/1LmU4KplMchynHyBDOojjuJmZGUVRqLd3d3cbjcbMzAy9o6V7ofO+u7vrycKO46+K2nmDfoEeqlar7XYbqijjXgxvdIlKpQLRTVXVer0eDocZRUmrNEzNw4T76OgovdrU1FQkEqFFRnFTlNSAoaGh7jxrZ+hMn5QN9ZSmac1mE/42/0ypqnp9fW3u0voGVKT0nzx69IjnecN4im2GpmnVatXuFrVazU3vwADNNWcyme6tZdG3Xrjj6uqq40AYnAbDUn3jZztqcnKy3W6bHQVNqF6v00+gYYyPj8O/lu41d97dWBiQVCpFB+Mwnm02m/6qqJ036MXNhxjuZXujS9DgSG474Mlk0q4o379/T25DZzgcgTigigAABpBJREFUDofDPM9Ho1HaRYhGo4QQ+Joel0V5cXGRSCRGR0f7eYDfi0hqydDQUDgcjsViNMcENBqNIJc1bOyvJxQKQadMX0u6ZAYDUFq1HBJ2D9CCzWQyk5OT7Ehaq9XW1tbW19chstDUFdtRw8PD+p9JA3qHA0G64XYW+r4gYJ5x4nneX91ge8OS3tdDf1gW5fn5OSEkGo1Go1HQYIeo6ih82aWivBPuLJI2m01N02iKpCNAGKVNArIw9CiUkyAI+t/Abphhx90qrVItWMdvqqoKqTrIx0Gn++TkhOEox0yZgYCPbGlhx1ug77rh1Rvse/Xhey56aFFCWubt27cTExOQr9A0zfH03hRlD7izlfl08MJxnNdzodoZggKMjxqNBtUxtWR7e7vRaECaP6AZ5HZt9qtXr9ycDkqregvNSqvde0+MasG6P6VcLheLRUJINBplO+ri4iIcDicSCcPnMF0wMTFBP3EjLmsuX0EQDOs9zRbSDzvlQ8e6YVkPib03/N3LvTe6CqMowcIHDx58/vnn79+/Pz09HRsbe/DgwfX1NXwTxvX6MjJjWZQAlXzv8CN1lLt8xwlkR5eWlryeCNWO4zj925/wYSQSmZqaIoQkk8nV1VXztLiqqi9fvmy32+l0GlqabzPIbXiiN3XEUWl1cnIyFAp5bYeOGLRgGUiSpF80A50LaAkMRx0eHup/n8jtbLWqqsfHx/F4nKaDnzx5EolEYDLQDkjA0fKVZXlkZOTm5sbRQiAajYIPYQ4nCOy6YVkPib03/N2L7Y2ewShK8APP86FQ6OTkpFqtQqr06uoKvmmOwoBjUZLbeO01W9J7OjO6N2Qnf/zxR0JIpVJ59+4d46xyuXx+fv7s2TN9bsjlAmlYiZnNZrPZLLldlKf/UNO0YrFI37/SU6vVSqVSJpNZXV1Np9NBzKhWq3Nzc5qmuZm7J7fDlkwmA/cyv3T07t27RCJhmK8wuBceENbkuj/k8okKhYIsy9QVmqa9ePECLGQ4CsZo+XyelghdQQk3pfM5+gsyyOVy9GqKovzwww80UcOwEDg8PJyZmYFVmQFxrBuW9ZDhDX/3YniDAaNuePHB/8Moyqurq3g8Xq/XVVVVVfXy8jIej9OkKp2b4nleX1KORUluJy0PDg76eQkUQW1R5KPEkDFH7hzD0lH3WC7770Pu5Q4mCMIgmUwmEgk3qQykZ9RqtbOzM31ywA2SJMXj8ePj4z4Po4SQ/7KbzP33v//VY1MQJCAcx33//fdff/3127dvNzY27toc5G/89ttvjx49+uqrr/76668//vjD8fvJZPKbb755+/btTz/91APzAoKjewRBegS8IQK7ATh+Gd6Vui87JWEkRRAECcqdrcz/WDG8o6JHFMVeWoIgSM/AGScEQZCgYCRFEAQJCkZSBEGQoPRpnpRu3N2DvQzsNvxHEARxCfZJSblcTqfToigqinLXtiAIci/BSIogCBIUjKQsUNAcQRA3eMuT+hOJtNP7ZKsY6jFIgfqwkFipMzrucAEvC09PT+fz+fvyrgWCIL3HQ5+U7uYiiqIoii9evBAEgW5MG4vFlpeX37x5I4ri/v7+9PQ0bFVA9T7hLFVVM5kM3bcRJNsIIaIoLi8va5q2uLhouC+VAnUZRi0thO1Kz87O4NDOzo7LHR5zudz+/n48Hne5nTOCIJ8gHiKpoxAg7eLBTrewsauj3qdZxVB/U7MUqD8Lg6gzFgqFnZ2dSCSytbXV51IQCILcCR4iKRUCtNwXS6+YyJBgNOt9GlQM9R3PR48e6fW1fVsI6oywDa2b65gpl8svXrwghKyurho2SEcQBPGQJ/UtBMjQ+2RgKQUK5PN5yKsCNNT2QKowFAoJgnAfFbsQBOke3macfAgBsvU+GVhKgQKMyR9LC4NracHV2u325uZmP4tuIwhyJ/hcBcUQAiS60bRLvU8GBilQfxYGVGeUJCmbzbZarbW1NQyjCIKY8RBJ3QgBAk+fPiWEgIiVG71PBmYpUB8WBlFnlGU5lUopirKwsIBvkSIIYomH0T1bCDAcDlO9h0ajsba2BnHHpd4nA4MUqD8LDeqMcEH4mp0wai6X43l+fHzc/ZQXgiCfJp3ZM1+W5fHxcctF9f0J5D0PDg46LpqGOz0jyCcIvi2KIAgSFIykCIIgQcFIiiAIEhTUFu0wmCdFkE8QjKQIgiBBwdE9giBIUDCSIgiCBAUjKYIgSFAwkiIIggQFIymCIEhQ/g+Pr/eeNeK2XAAAAABJRU5ErkJggg=="},12253:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/result_mysql-35af09e6b244ba0886889e0ca15b66c0.png"},21340:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/png;base64,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"}}]);