"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3214],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,u=g["".concat(p,".").concat(d)]||g[d]||m[d]||r;return n?i.createElement(u,l(l({ref:t},s),{},{components:n})):i.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(58168),a=(n(96540),n(15680));const r={title:"\u79df\u6237\u7ba1\u7406",sidebar_position:3},l=void 0,o={unversionedId:"administration/multiple_tenant",id:"version-1.13.0/administration/multiple_tenant",title:"\u79df\u6237\u7ba1\u7406",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.13.0/administration/multiple_tenant.md",sourceDirName:"administration",slug:"/administration/multiple_tenant",permalink:"/zh-CN/docs/administration/multiple_tenant",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/administration/multiple_tenant.md",tags:[],version:"1.13.0",sidebarPosition:3,frontMatter:{title:"\u79df\u6237\u7ba1\u7406",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5ba1\u6279\u7ba1\u7406",permalink:"/zh-CN/docs/administration/approval_management"},next:{title:"\u8054\u7cfb\u6211\u4eec",permalink:"/zh-CN/docs/contact"}},p={},c=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u521b\u5efa\u79df\u6237",id:"\u521b\u5efa\u79df\u6237",level:2},{value:"\u521b\u5efa\u79df\u6237\u89d2\u8272",id:"\u521b\u5efa\u79df\u6237\u89d2\u8272",level:2},{value:"\u79df\u6237\u5207\u6362",id:"\u79df\u6237\u5207\u6362",level:2}],s={toc:c},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,i.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,a.yg)("p",null,"\u591a\u79df\u6237\uff08Multi-tenancy\uff09\u662f\u4e00\u79cd\u8f6f\u4ef6\u67b6\u6784\u6a21\u5f0f\uff0c\u5141\u8bb8\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u540c\u65f6\u4e3a\u591a\u4e2a\u72ec\u7acb\u7684\u7528\u6237\u6216\u7ec4\u7ec7\uff08\u79f0\u4e3a\u201c\u79df\u6237\u201d\uff09\u63d0\u4f9b\u670d\u52a1\u3002\n\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u6bcf\u4e2a\u79df\u6237\u5728\u903b\u8f91\u4e0a\u662f\u76f8\u4e92\u9694\u79bb\u7684\uff0c\u4f46\u5171\u4eab\u76f8\u540c\u7684\u5e95\u5c42\u8f6f\u4ef6\u57fa\u7840\u8bbe\u65bd\u548c\u8d44\u6e90\u3002\n\u8fd9\u610f\u5473\u7740\u540c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b\u53ef\u4ee5\u4e3a\u591a\u4e2a\u79df\u6237\u63d0\u4f9b\u670d\u52a1\uff0c\u800c\u65e0\u9700\u4e3a\u6bcf\u4e2a\u79df\u6237\u5355\u72ec\u90e8\u7f72\u548c\u7ef4\u62a4\u5e94\u7528\u7a0b\u5e8f\u3002\n\u4e3a\u4e86\u89e3\u51b3\u591a\u7528\u6237\u573a\u666f\u4e0b\u5bf9\u4e8e\u6743\u9650\u548c\u8d44\u6e90\u9694\u79bb\u6027\u7684\u8981\u6c42\uff0cInLong \u5728 1.8.0 \u7248\u672c\u5f15\u5165\u4e86\u591a\u79df\u6237\u67b6\u6784\u3002"),(0,a.yg)("p",null,"InLong\u591a\u79df\u6237\u5b9e\u73b0\u53ef\u4ee5\u53c2\u8003\uff1a\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/issues/7914"},"https://github.com/apache/inlong/issues/7914")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u540c\u79df\u6237\u4e4b\u95f4\u8d44\u6e90\u548c\u6743\u9650\u4e92\u76f8\u9694\u79bb\uff0c\u7528\u6237\u53ea\u80fd\u770b\u5230\u8be5\u79df\u6237\u4e0b\u7684\u8d44\u6e90\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4ece\u4f4e\u7248\u672c\u5347\u7ea7\u81f3 1.8.0 \u7248\u672c\u540e\uff0c\u6240\u6709\u8d44\u6e90\u4f1a\u88ab\u8fc1\u79fb\u5230\u516c\u5171\u79df\u6237 ",(0,a.yg)("inlineCode",{parentName:"li"},"public")," \u4e0b\u3002"))),(0,a.yg)("h2",{id:"\u521b\u5efa\u79df\u6237"},"\u521b\u5efa\u79df\u6237"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u9009\u62e9",(0,a.yg)("inlineCode",{parentName:"li"},"\u79df\u6237\u7ba1\u7406"),"\uff0c\u70b9\u51fb",(0,a.yg)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u89d2\u8272"),(0,a.yg)("img",{alt:"img.png",src:n(78506).A,width:"1720",height:"950"})),(0,a.yg)("li",{parentName:"ul"},"\u9009\u62e9",(0,a.yg)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u79df\u6237"),(0,a.yg)("img",{alt:"img_1.png",src:n(35937).A,width:"1721",height:"961"})),(0,a.yg)("li",{parentName:"ul"},"\u5b8c\u5584",(0,a.yg)("inlineCode",{parentName:"li"},"\u79df\u6237\u540d\u79f0"),"\u548c",(0,a.yg)("inlineCode",{parentName:"li"},"\u63cf\u8ff0"),"\uff0c\u70b9\u51fb",(0,a.yg)("inlineCode",{parentName:"li"},"\u786e\u5b9a"),"\uff0c\u5219\u5b8c\u6210\u79df\u6237\u7684\u521b\u5efa\n",(0,a.yg)("img",{alt:"img.png",src:n(14808).A,width:"1723",height:"960"}),"\n\u81f3\u6b64\u5b8c\u6210\u4e86\u79df\u6237\u7684\u521b\u5efa")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"\u76ee\u524d\u53ea\u5141\u8bb8 ",(0,a.yg)("inlineCode",{parentName:"p"},"InLong \u7ba1\u7406\u5458"),"\u6765\u8fdb\u884c\u79df\u6237\u7684\u521b\u5efa\u548c\u4fee\u6539\u64cd\u4f5c\u3002")),(0,a.yg)("h2",{id:"\u521b\u5efa\u79df\u6237\u89d2\u8272"},"\u521b\u5efa\u79df\u6237\u89d2\u8272"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u9009\u62e9",(0,a.yg)("inlineCode",{parentName:"li"},"\u79df\u6237\u7ba1\u7406"),"\uff0c\u70b9\u51fb",(0,a.yg)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u89d2\u8272"),(0,a.yg)("img",{alt:"img.png",src:n(78506).A,width:"1720",height:"950"})),(0,a.yg)("li",{parentName:"ul"},"\u9009\u5219",(0,a.yg)("inlineCode",{parentName:"li"},"\u76ee\u6807\u79df\u6237"),"\uff0c",(0,a.yg)("inlineCode",{parentName:"li"},"\u7528\u6237\u540d\u79f0"),"\uff0c\u548c\u60f3\u8981\u6388\u4e88\u7684",(0,a.yg)("inlineCode",{parentName:"li"},"\u79df\u6237\u89d2\u8272"),"(\u5982\u679c\u79df\u6237\u4e0d\u5b58\u5728\uff0c\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA%E7%A7%9F%E6%88%B7"},"\u521b\u5efa\u79df\u6237"),")\n",(0,a.yg)("img",{alt:"img.png",src:n(66559).A,width:"1720",height:"965"})),(0,a.yg)("li",{parentName:"ul"},"\u521b\u5efa\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u5728",(0,a.yg)("inlineCode",{parentName:"li"},"\u79df\u6237\u7ba1\u7406"),"\u754c\u9762\u770b\u5230\u540d\u4e0b\u7684\u79df\u6237\u4ee5\u53ca\u5bf9\u5e94\u7684\u7528\u6237\u89d2\u8272\n",(0,a.yg)("img",{alt:"img.png",src:n(52996).A,width:"1721",height:"963"}))),(0,a.yg)("h2",{id:"\u79df\u6237\u5207\u6362"},"\u79df\u6237\u5207\u6362"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u70b9\u51fb\u53f3\u4e0a\u89d2",(0,a.yg)("inlineCode",{parentName:"li"},"\u79df\u6237"),"\u5b57\u6bb5\uff0c\u53ef\u4ee5\u9009\u62e9\u5207\u6362\u5230\u540d\u4e0b\u62e5\u6709\u7684\u79df\u6237\n",(0,a.yg)("img",{alt:"img.png",src:n(95501).A,width:"1432",height:"809"}))))}m.isMDXComponent=!0},78506:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create_tenant_1-d55307a613dea1d5528ab50d0f934478.png"},35937:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create_tenant_2-0804b808f9435da1ee8ebd1905c656fc.png"},14808:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create_tenant_3-d4c4a5967933c5702fcb7a103c107952.png"},66559:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create_tenant_role_1-79dcf54c17e0adb61d72c60ad6b70279.png"},52996:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create_tenant_role_2-74b1c8f127688ec1258b9c457c78430a.png"},95501:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create_tenant_role_3-b784712094f886602b986a33156133ca.png"}}]);