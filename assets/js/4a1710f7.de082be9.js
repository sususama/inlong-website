"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,y=l["".concat(c,".").concat(m)]||l[m]||h[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[l]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"How to Maintain Third-party Dependencies",sidebar_position:9},o=void 0,d={unversionedId:"how-to-maintain-3rd-party-dependencies",id:"how-to-maintain-3rd-party-dependencies",title:"How to Maintain Third-party Dependencies",description:"Why maintain third-party dependencies",source:"@site/community/how-to-maintain-3rd-party-dependencies.md",sourceDirName:".",slug:"/how-to-maintain-3rd-party-dependencies",permalink:"/community/how-to-maintain-3rd-party-dependencies",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/community/how-to-maintain-3rd-party-dependencies.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"How to Maintain Third-party Dependencies",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"How to Report Issues",permalink:"/community/how-to-report-issues"}},c={},p=[{value:"Why maintain third-party dependencies",id:"why-maintain-third-party-dependencies",level:2},{value:"Operations involved",id:"operations-involved",level:2},{value:"Third-party dependency combing method",id:"third-party-dependency-combing-method",level:2}],s={toc:p},l="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(l,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"why-maintain-third-party-dependencies"},"Why maintain third-party dependencies"),(0,a.kt)("p",null,"Different dependencies contain different LICENSEs. The third-party dependencies used by the Apache project must strictly comply with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/resolved.html"},"ASF 3rd Party License Policy")," , which The various licenses that depend on are divided into three categories: A, B, and X, and a detailed and clear enumeration definition of which authorization protocol belongs to which category; Apache project deliverables must not contain X The authorization protocol of the class depends on the package, either directly or indirectly, is not allowed."),(0,a.kt)("h2",{id:"operations-involved"},"Operations involved"),(0,a.kt)("p",null,"Based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/resolved.html"},"ASF 3rd Party License Policy"),", we have done a complete sorting and inspection of all dependencies of the InLong project to ensure that all third-party versions of Dependencies are already in a state that meets the requirements of the Apache specification; since the project is developing iteratively, you need to check and maintain third-party dependency packages in accordance with unified standards, including:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add new modules to the project;"),(0,a.kt)("li",{parentName:"ol"},"Perform the following operations on the existing modules of the project:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Add new third-party dependencies;"),(0,a.kt)("li",{parentName:"ol"},"Delete existing third-party dependencies;"),(0,a.kt)("li",{parentName:"ol"},"Modify the version number that has been relied on by a third party;"))),(0,a.kt)("li",{parentName:"ol"},"Release check on deliverables before release")),(0,a.kt)("p",null,"The core of the above operation is to add or modify each pom.xml operation, we need to check the third-party dependencies of the project and make changes to the third-party dependencies licenses of existing projects."),(0,a.kt)("h2",{id:"third-party-dependency-combing-method"},"Third-party dependency combing method"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Aggregate location of LICENSE and NOTICE relied on by third parties:\nWe currently summarize the licenses and NOTICEs of third-party dependencies of each module into the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/licenses"},"third-party license directory"),"  according to the module name of the project, and you can import After the project, you can see the following content: ",(0,a.kt)("img",{src:n(63892).Z,width:"433",height:"717"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"How third-party dependencies of deliverables are mapped:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Let's take the inlong-dataproxy module as an example. We first package it locally through the ",(0,a.kt)("inlineCode",{parentName:"li"},"mvn clean package install")," command to get the details of each dependent package: ",(0,a.kt)("img",{src:n(5307).Z,width:"1735",height:"986"}),";")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"As we can see from the figure, we have obtained the DEPENDENCIES file of the module. We search for the corresponding entry of the DEPENDENCIES file according to the artifactId of the dependency package in the delivery example, and archive the dependency according to the type of LICENSE: ",(0,a.kt)("img",{src:n(74858).Z,width:"1679",height:"663"}),'\nAttention: the entry format here is "groupId:artifactId:version - name (url), (license.name)", and each unit is sorted by the alphabet of artifactId;')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"There is NOTICE in this project, we need to copy the original text of NOTICE to the NOTICE file of the inlong-dataproxy module: ",(0,a.kt)("img",{src:n(84565).Z,width:"1312",height:"704"}),", if the original text of NOTICE exceeds 10 lines, the original text Put it in the notices subdirectory;")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Special case: If the dependency package does not carry LICENSE and (or, there may be LICENSE but no NOTICE) NOTICE files, we need to find the project source code corresponding to the dependency package, find the LICENSE and NOTICE in the corresponding source code, and Add to the above directory, you can refer to the combing method of ZooKeeper components: ",(0,a.kt)("img",{src:n(26012).Z,width:"1919",height:"558"}),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Goals: Apache project deliverables must not contain authorization protocol dependency packages with class X, whether direct or indirect dependencies, are not allowed to exist."))))}h.isMDXComponent=!0},5307:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3rdpart-to-sort-9fc75e38fbee0016abdd9a06ef544280.png"},74858:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3rdparty-to-license-4cc13f46a0d35985f4d34f593c195231.png"},26012:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3rdparty-to-notexist-4ac476c45f280f2b765ac3c1d37e459d.png"},84565:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3rdparty-to-notice-5cd94ec3dce5cbefae2170fa9177d58b.png"},63892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/main-frame-2d676ba905f847e9e56f3d25aa9f3b01.png"}}]);