"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[68316],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"Dashboard \u63d2\u4ef6",sidebar_position:5},i=void 0,l={unversionedId:"design_and_concept/how_to_write_plugin_dashboard",id:"version-1.8.0/design_and_concept/how_to_write_plugin_dashboard",title:"Dashboard \u63d2\u4ef6",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.8.0/design_and_concept/how_to_write_plugin_dashboard.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_dashboard",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_dashboard",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.8.0/design_and_concept/how_to_write_plugin_dashboard.md",tags:[],version:"1.8.0",sidebarPosition:5,frontMatter:{title:"Dashboard \u63d2\u4ef6",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Sort \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_extend_data_node_for_sort"},next:{title:"Manager \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_extend_data_node_for_manager"}},d={},s=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u63d2\u4ef6\u57fa\u7840",id:"\u63d2\u4ef6\u57fa\u7840",level:2},{value:"\u8bbe\u8ba1\u6982\u8981",id:"\u8bbe\u8ba1\u6982\u8981",level:3},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u63d2\u4ef6\u6570\u636e\u7c7b",id:"\u63d2\u4ef6\u6570\u636e\u7c7b",level:3},{value:"\u63d2\u4ef6\u89c6\u56fe\u7c7b",id:"\u63d2\u4ef6\u89c6\u56fe\u7c7b",level:3},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:3},{value:"\u6269\u5c55 ExtractNode",id:"\u6269\u5c55-extractnode",level:2},{value:"\u6269\u5c55 LoadNode",id:"\u6269\u5c55-loadnode",level:2}],p={toc:s},c="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,a.kt)("p",null,"\u672c\u6587\u9762\u5411 InLong Dashboard \u63d2\u4ef6\u5f00\u53d1\u4eba\u5458\uff0c\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u5168\u9762\u5730\u9610\u8ff0\u5f00\u53d1\u4e00\u4e2a Dashboard \u63d2\u4ef6\u6240\u7ecf\u8fc7\u7684\u5386\u7a0b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u65b0\u589e\u4e00\u4e2a Plugin\uff0c\u8ba9\u63d2\u4ef6\u5f00\u53d1\u53d8\u5f97\u7b80\u5355\u3002\nInLong Dashboard \u672c\u8eab\u4f5c\u4e3a\u524d\u7aef\u63a7\u5236\u53f0\uff0c\u91c7\u7528 React \u6846\u67b6\u6784\u5efa\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u57fa\u7840"},"\u63d2\u4ef6\u57fa\u7840"),(0,a.kt)("h3",{id:"\u8bbe\u8ba1\u6982\u8981"},"\u8bbe\u8ba1\u6982\u8981"),(0,a.kt)("p",null,"\u8fd9\u662f InLong Dashboard \u63d2\u4ef6\u7684\u8bbe\u8ba1\u6982\u8981\u56fe\uff0c\u6211\u4eec\u5c06\u63d2\u4ef6\u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u5c42\u7ea7\uff0c\u7531\u5404\u4e2a\u9875\u9762\u4f7f\u7528\u4e0d\u540c\u7684\u63d2\u4ef6\uff0c\u8fdb\u884c\u6d88\u8d39\u3002Data \u4e0e View \u662f\u7cfb\u7edf\u63d0\u4f9b\u7684\u62bd\u8c61\u7c7b\uff0c\u800c\u63d2\u4ef6\u5c31\u662f\u4e00\u4e2a\u4e2a\u7684\u6d3e\u751f\u7c7b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard_Plugin",src:t(5992).Z,width:"754",height:"462"})),(0,a.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"|\n|- defaults: InLong \u793e\u533a\u63d0\u4f9b\u7684\u9ed8\u8ba4\u516c\u5171\u63d2\u4ef6\n|- extends: \u79c1\u6709\u5316\u90e8\u7f72\u65f6\u7684\u6269\u5c55\u63d2\u4ef6\uff0c\u4f5c\u4e3a\u5185\u90e8\u63d2\u4ef6\uff0c\u4e0d\u6295\u653e\u5230\u793e\u533a\n|- common: \u63d2\u4ef6\u7684\u516c\u5171\u8bbe\u8ba1\uff0c\u4f8b\u5982 `BasicInfo` \u7684\u8bbe\u8ba1\n")),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u6570\u636e\u7c7b"},"\u63d2\u4ef6\u6570\u636e\u7c7b"),(0,a.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e24\u79cd\u57fa\u672c\u6570\u636e\u7c7b\uff0c\u6bcf\u4e00\u4e2a\u63d2\u4ef6\u90fd\u53ea\u80fd\u5b9e\u73b0\u5176\u4e2d\u7684\u4e00\u79cd\uff0c\u4ece\u800c\u5b9e\u73b0\u6570\u636e\u6a21\u578b\u3002\u540c\u65f6\uff0c\u5728\u57fa\u672c\u6570\u636e\u7c7b\u4e2d\uff0c\u5747\u63d0\u4f9b\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"@I18n"),"\uff0c\u53ef\u7528\u4e8e\u63cf\u8ff0\u5b57\u6bb5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DataStatic \u9759\u6001\u6570\u636e\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"DataWithBackend \u4e0e\u540e\u53f0\u901a\u4fe1\u7684\u6570\u636e\u7c7b")),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u89c6\u56fe\u7c7b"},"\u63d2\u4ef6\u89c6\u56fe\u7c7b"),(0,a.kt)("p",null,"\u5728\u89c6\u56fe\u4e0a\uff0c\u6211\u4eec\u63d0\u4f9b\u4e24\u79cd\u57fa\u672c\u89c6\u56fe\u7c7b\uff0c\u6bcf\u4e00\u4e2a\u63d2\u4ef6\u53ef\u5b9e\u73b0\u5176\u4e2d\u7684\u4e00\u79cd\u6216\u591a\u79cd\uff0c\u4ece\u800c\u5b9e\u73b0\u89c6\u56fe\u6a21\u578b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RenderRow\uff0c\u5728\u8be5\u7c7b\u4e2d\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"li"},"@FieldDecorator")," \u7528\u4e8e\u63cf\u8ff0\u884c\u6570\u636e\u89c6\u56fe"),(0,a.kt)("li",{parentName:"ul"},"RenderList\uff0c\u5728\u8be5\u7c7b\u4e2d\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"li"},"@ColumnDecorator")," \u7528\u4e8e\u63cf\u8ff0\u5217\u6570\u636e\u89c6\u56fe")),(0,a.kt)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u57fa\u672c\u793a\u4f8b\uff0c\u5728\u8be5\u63d2\u4ef6\u4e2d\uff0c\u5b9e\u73b0\u4e86\u4e0e backend \u901a\u4fe1\u7684\u4e00\u4e2a\u7c7b\uff0c\u5305\u542b3\u4e2a\u5b57\u6bb5(username, password, format)\u3002\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"BasicInfo")," \u6765\u6e90\u4e8e\u5404\u81ea\u4e0d\u540c\u7684\u57fa\u7840\u7c7b\u578b\u7c7b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { DataWithBackend } from '@/metas/DataWithBackend';\nimport { RenderRow } from '@/metas/RenderRow';\nimport { RenderList } from '@/metas/RenderList';\nimport { BasicInfo } from '../common/BasicInfo';\n\nconst { I18n } = DataWithBackend;\nconst { FieldDecorator } = RenderRow;\nconst { ColumnDecorator } = RenderList;\n\nexport default class Example extends BasicInfo implements DataWithBackend, RenderRow, RenderList {\n  @FieldDecorator({\n    type: 'input',\n    rules: [{ required: true }],\n  })\n  @I18n('meta.Sinks.Username')\n  username: string;\n\n  @FieldDecorator({\n    type: 'password',\n    rules: [{ required: true }],\n  })\n  @I18n('meta.Sinks.Password')\n  password: string;\n\n  @FieldDecorator({\n    type: 'radio',\n    initialValue: 'TextFile',\n    rules: [{ required: true }],\n    props: {\n      options: [\n        {\n          label: 'TextFile',\n          value: 'TextFile',\n        },\n        {\n          label: 'SequenceFile',\n          value: 'SequenceFile',\n        },\n      ],\n    },\n  })\n  @I18n('meta.Sinks.Example.Format')\n  format: string;\n}\n")),(0,a.kt)("h2",{id:"\u6269\u5c55-extractnode"},"\u6269\u5c55 ExtractNode"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dashboard/src/metas/sources/defaults")," \u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Example.ts")," \u6587\u4ef6\uff0c\u4f5c\u4e3a\u6211\u4eec\u65b0\u5efa\u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u540c\u65f6\u5728\u5f53\u524d\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," \u6587\u4ef6\u5185\u90e8\u8fdb\u884c\u5bfc\u51fa\uff08\u53ef\u53c2\u8003\u5df2\u6709\u7684\u5199\u6cd5\uff09\uff0c\u8fd9\u6837\u4fbf\u5b8c\u6210\u4e86\u65b0\u589e\u4e00\u79cd\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Example")," \u7684 ExtractNode\u3002"),(0,a.kt)("h2",{id:"\u6269\u5c55-loadnode"},"\u6269\u5c55 LoadNode"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dashboard/src/metas/sinks/defaults")," \u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Example.ts")," \u6587\u4ef6\uff0c\u4f5c\u4e3a\u6211\u4eec\u65b0\u5efa\u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u540c\u65f6\u5728\u5f53\u524d\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," \u6587\u4ef6\u5185\u90e8\u8fdb\u884c\u5bfc\u51fa\uff08\u53ef\u53c2\u8003\u5df2\u6709\u7684\u5199\u6cd5\uff09\uff0c\u8fd9\u6837\u4fbf\u5b8c\u6210\u4e86\u65b0\u589e\u4e00\u79cd\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Example")," \u7684 LoadNode\u3002"))}u.isMDXComponent=!0},5992:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dashboard_plugin-d1937ae225705973c130bc310fd47705.png"}}]);