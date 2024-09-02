"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[47659],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={title:"Hive Example",sidebar_position:2},i=void 0,l={unversionedId:"quick_start/hive_example",id:"version-1.8.0/quick_start/hive_example",title:"Hive Example",description:"Here we use a simple example to help you experience InLong.",source:"@site/versioned_docs/version-1.8.0/quick_start/hive_example.md",sourceDirName:"quick_start",slug:"/quick_start/hive_example",permalink:"/docs/1.8.0/quick_start/hive_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/quick_start/hive_example.md",tags:[],version:"1.8.0",sidebarPosition:2,frontMatter:{title:"Hive Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Build",permalink:"/docs/1.8.0/quick_start/how_to_build"},next:{title:"Pulsar Example",permalink:"/docs/1.8.0/quick_start/pulsar_example"}},s={},c=[{value:"Install Hive",id:"install-hive",level:2},{value:"Install InLong",id:"install-inlong",level:2},{value:"Create a data access",id:"create-a-data-access",level:2},{value:"Approve the data access",id:"approve-the-data-access",level:2},{value:"Configure the agent file",id:"configure-the-agent-file",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Here we use a simple example to help you experience InLong."),(0,r.yg)("h2",{id:"install-hive"},"Install Hive"),(0,r.yg)("p",null,"Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"here"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note that if you use Docker, you need to add a port mapping ",(0,r.yg)("inlineCode",{parentName:"p"},"8020:8020"),", because it's the port of HDFS DefaultFS, and we need to use it later.")),(0,r.yg)("h2",{id:"install-inlong"},"Install InLong"),(0,r.yg)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.8.0/deployment/docker"},"instructions here"),".(Recommanded)"),(0,r.yg)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.8.0/deployment/bare_metal"},"instructions here"),".")),(0,r.yg)("h2",{id:"create-a-data-access"},"Create a data access"),(0,r.yg)("p",null,'After deployment, we first enter the "Data Access" interface, click "Create an Access" in the upper right corner to create a new date access, and fill in the data streams group information as shown in the figure below.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Create Group",src:a(1526).A,width:"1453",height:"465"})),(0,r.yg)("p",null,"Then we click the next button, and fill in the stream information as shown in the figure below."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Create Stream",src:a(82991).A,width:"970",height:"443"})),(0,r.yg)("p",null,'Note that the message source is "File", you can create a data source manually and configure ',(0,r.yg)("inlineCode",{parentName:"p"},"Agent Address")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"File Path"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"File Source",src:a(42170).A,width:"658",height:"458"})),(0,r.yg)("p",null,'Then we fill in the following information in the "data information" column below.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Data Information",src:a(7533).A,width:"1501",height:"469"})),(0,r.yg)("p",null,'Then we select Hive in the data flow and click "Add" to add Hive configuration'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Hive Config",src:a(48979).A,width:"1194",height:"983"})),(0,r.yg)("p",null,"Note that the target table does not need to be created in advance, as InLong Manager will automatically create the table for us after the access is approved. Also, please use connection test to ensure that InLong Manager can connect to your Hive."),(0,r.yg)("p",null,'Then we click the "Submit for Approval" button, the connection will be created successfully and enter the approval state.'),(0,r.yg)("h2",{id:"approve-the-data-access"},"Approve the data access"),(0,r.yg)("p",null,'Then we enter the "Approval Management" interface and click "My Approval" to approve the data access that we just applied for.'),(0,r.yg)("p",null,"At this point, the data access has been created successfully. We can see that the corresponding table has been created in Hive, and we can see that the corresponding topic has been created successfully in the management GUI of TubeMQ."),(0,r.yg)("h2",{id:"configure-the-agent-file"},"Configure the agent file"),(0,r.yg)("p",null,"Then we need to create a new file ",(0,r.yg)("inlineCode",{parentName:"p"},"/data/collect-data/test.log")," and add content to it to trigger the agent to send data to the dataproxy."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'mkdir collect-data\nEND=100000\nfor ((i=1;i<=END;i++)); do\n    sleep 3\n    echo "name_$i | $i" >> /data/collect-data/test.log\ndone\n')),(0,r.yg)("p",null,"Then you can observe the Audit Data Pages, and see that the data has been collected and sent successfully."))}u.isMDXComponent=!0},1526:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create-group-76d3fdd824a51855292891b50e75cbd3.png"},82991:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create-stream-b525a38e7ff3475e180a71362180faf8.png"},7533:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/data-information-840b6e3b3554bcaed25ba134776577b7.png"},42170:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/file-source-e62466d16f0beb72ff66134bd9720f97.png"},48979:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/hive-config-a3f2010f831c0ffae94ec9f0e953ee6a.png"}}]);