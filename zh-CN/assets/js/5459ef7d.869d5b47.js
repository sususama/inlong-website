"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[74826],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),o=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),y=o(n),m=r,s=y["".concat(g,".").concat(m)]||y[m]||d[m]||l;return n?a.createElement(s,i(i({ref:t},p),{},{components:n})):a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var g in t)hasOwnProperty.call(t,g)&&(u[g]=t[g]);u.originalType=e,u[y]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(58168),r=n(96540),l=n(20053),i=n(23104),u=n(72681),g=n(57485),o=n(31682),p=n(89466);function y(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??y(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function s(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,g.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function c(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[g,o]=s({queryString:n,groupId:a}),[y,c]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),N=(()=>{const e=g??y;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&u(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),c(e)}),[o,c,l]),tabValues:l}}var N=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:u,selectValue:g,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:y}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=o[n].value;a!==u&&(y(t),g(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":u===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=c(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(f,(0,a.A)({},e,t)),r.createElement(h,(0,a.A)({},e,t)))}function x(e){const t=(0,N.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},23079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>s,frontMatter:()=>u,metadata:()=>o,toc:()=>y});var a=n(58168),r=(n(96540),n(15680)),l=n(11470),i=n(19365);const u={title:"\u7b80\u4ecb",sidebar_position:1},g=void 0,o={unversionedId:"introduction",id:"version-1.9.0/introduction",title:"\u7b80\u4ecb",description:"InLong(\u5e94\u9f99)\uff0c\u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u96c6\u6210\u80fd\u529b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.9.0/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh-CN/docs/1.9.0/introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.9.0/introduction.md",tags:[],version:"1.9.0",sidebarPosition:1,frontMatter:{title:"\u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh-CN/docs/1.9.0/design_and_concept/basic_concept"}},p={},y=[{value:"\u5173\u4e8e InLong",id:"\u5173\u4e8e-inlong",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2},{value:"\u5df2\u652f\u6301\u6570\u636e\u8282\u70b9\uff08\u66f4\u65b0\u4e2d\uff09",id:"\u5df2\u652f\u6301\u6570\u636e\u8282\u70b9\u66f4\u65b0\u4e2d",level:2}],d={toc:y},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"InLong(\u5e94\u9f99)\uff0c\u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u96c6\u6210\u80fd\u529b\u3002")),(0,r.yg)("h2",{id:"\u5173\u4e8e-inlong"},"\u5173\u4e8e InLong"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org"},"Apache InLong\uff08\u5e94\u9f99\uff09"),"\u662f\u4e00\u7ad9\u5f0f\u3001\u5168\u573a\u666f\u7684\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u540c\u65f6\u652f\u6301\u6570\u636e\u63a5\u5165\u3001\u6570\u636e\u540c\u6b65\u548c\u6570\u636e\u8ba2\u9605\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002\nInLong \u9879\u76ee\u539f\u540d TubeMQ \uff0c\u4e13\u6ce8\u4e8e\u9ad8\u6027\u80fd\u3001\u4f4e\u6210\u672c\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002\u4e3a\u4e86\u8fdb\u4e00\u6b65\u91ca\u653e TubeMQ \u5468\u8fb9\u7684\u751f\u6001\u80fd\u529b\uff0c\u6211\u4eec\u5c06\u9879\u76ee\u5347\u7ea7\u4e3a InLong\uff0c\u4e13\u6ce8\u6253\u9020\u4e00\u7ad9\u5f0f\u3001\u5168\u573a\u666f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\u3002\nApache InLong \u4f9d\u6258 10 \u4e07\u4ebf\u7ea7\u522b\u7684\u6570\u636e\u63a5\u5165\u548c\u5904\u7406\u80fd\u529b\uff0c\u6574\u5408\u4e86\u6570\u636e\u91c7\u96c6\u3001\u6c47\u805a\u3001\u5b58\u50a8\u3001\u5206\u62e3\u6570\u636e\u5904\u7406\u5168\u6d41\u7a0b\uff0c\u62e5\u6709\u7b80\u5355\u6613\u7528\u3001\u7075\u6d3b\u6269\u5c55\u3001\u7a33\u5b9a\u53ef\u9760\u7b49\u7279\u6027\u3002\n\u8be5\u9879\u76ee\u6700\u521d\u4e8e 2019 \u5e74 11 \u6708\u7531\u817e\u8baf\u5927\u6570\u636e\u56e2\u961f\u6350\u732e\u5230 Apache \u5b75\u5316\u5668\uff0c2022 \u5e74 6 \u6708\u6b63\u5f0f\u6bd5\u4e1a\u6210\u4e3a Apache \u9876\u7ea7\u9879\u76ee\u3002\u76ee\u524d InLong \u6b63\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5e7f\u544a\u3001\u652f\u4ed8\u3001\u793e\u4ea4\u3001\u6e38\u620f\u3001\u4eba\u5de5\u667a\u80fd\u7b49\u5404\u4e2a\u884c\u4e1a\u9886\u57df\uff0c\u4e3a\u591a\u9886\u57df\u5ba2\u6237\u63d0\u4f9b\u9ad8\u6548\u5316\u4fbf\u6377\u5316\u670d\u52a1\u3002"),(0,r.yg)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7b80\u5355\u6613\u7528"),(0,r.yg)("p",{parentName:"li"},"\u57fa\u4e8eSaaS\u6a21\u5f0f\u5bf9\u5916\u670d\u52a1\uff0c\u7528\u6237\u53ea\u9700\u8981\u6309\u4e3b\u9898\u53d1\u5e03\u548c\u8ba2\u9605\u6570\u636e\u5373\u53ef\u5b8c\u6210\u6570\u636e\u7684\u4e0a\u62a5\uff0c\u4f20\u8f93\u548c\u5206\u53d1\u5de5\u4f5c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7a33\u5b9a\u53ef\u9760"),(0,r.yg)("p",{parentName:"li"},"\u7cfb\u7edf\u6e90\u4e8e\u5b9e\u9645\u7684\u7ebf\u4e0a\u7cfb\u7edf\uff0c\u670d\u52a1\u4e0a\u5341\u4e07\u4ebf\u7ea7\u7684\u9ad8\u6027\u80fd\u53ca\u4e0a\u5343\u4ebf\u7ea7\u7684\u9ad8\u53ef\u9760\u6570\u636e\u6570\u636e\u6d41\u91cf\uff0c\u7cfb\u7edf\u7a33\u5b9a\u53ef\u9760")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u529f\u80fd\u5b8c\u5584"),(0,r.yg)("p",{parentName:"li"},"\u652f\u6301\u5404\u79cd\u7c7b\u578b\u7684\u6570\u636e\u63a5\u5165\u65b9\u5f0f\uff0c\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684MQ\u96c6\u6210\uff0c\u4ee5\u53ca\u57fa\u4e8e\u914d\u7f6e\u89c4\u5219\u7684\u5b9e\u65f6\u6570\u636eETL\u548c\u6570\u636e\u5206\u62e3\u843d\u5730\uff0c\u5e76\u652f\u6301\u4ee5\u53ef\u63d2\u62d4\u65b9\u5f0f\u6269\u5c55\u7cfb\u7edf\u80fd\u529b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u670d\u52a1\u96c6\u6210"),(0,r.yg)("p",{parentName:"li"},"\u652f\u6301\u7edf\u4e00\u7684\u7cfb\u7edf\u76d1\u63a7\u3001\u544a\u8b66\uff0c\u4ee5\u53ca\u7ec6\u7c92\u5ea6\u7684\u6570\u636e\u6307\u6807\u5448\u73b0\uff0c\u5bf9\u4e8e\u7ba1\u9053\u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u4ee5\u6570\u636e\u4e3b\u9898\u4e3a\u6838\u5fc3\u7684\u6570\u636e\u8fd0\u8425\u60c5\u51b5\uff0c\u6c47\u603b\u5728\u7edf\u4e00\u7684\u6570\u636e\u6307\u6807\u5e73\u53f0\uff0c\u5e76\u652f\u6301\u901a\u8fc7\u4e1a\u52a1\u8bbe\u7f6e\u7684\u544a\u8b66\u4fe1\u606f\u8fdb\u884c\u5f02\u5e38\u544a\u8b66\u63d0\u9192")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7075\u6d3b\u6269\u5c55"),(0,r.yg)("p",{parentName:"li"},"\u5168\u94fe\u6761\u4e0a\u7684\u5404\u4e2a\u6a21\u5757\u57fa\u4e8e\u534f\u8bae\u4ee5\u53ef\u63d2\u62d4\u65b9\u5f0f\u7ec4\u6210\u670d\u52a1\uff0c\u4e1a\u52a1\u53ef\u6839\u636e\u81ea\u8eab\u9700\u8981\u8fdb\u884c\u7ec4\u4ef6\u66ff\u6362\u548c\u529f\u80fd\u6269\u5c55"))),(0,r.yg)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,r.yg)(l.A,{defaultValue:"standard",values:[{label:"\u6807\u51c6",value:"standard"},{label:"\u8f7b\u91cf\u5316",value:"lightweight"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"standard",mdxType:"TabItem"}," \u6807\u51c6\u67b6\u6784\uff1a\u5305\u542b InLong Agent\u3001Manager\u3001MQ\u3001Sort\u3001Dashboard \u7b49\u6240\u6709 InLong \u7ec4\u4ef6\uff0c\u540c\u65f6\u652f\u6301`\u6570\u636e\u63a5\u5165`\u3001`\u6570\u636e\u540c\u6b65`\u548c`\u6570\u636e\u8ba2\u9605`\u3002",(0,r.yg)("img",{src:"/img/inlong-structure-zh.png",align:"center",alt:"Apache InLong"})),(0,r.yg)(i.A,{value:"lightweight",mdxType:"TabItem"}," \u8f7b\u91cf\u5316\u67b6\u6784\uff1a\u53ea\u5305\u542b InLong Sort \u4e00\u4e2a\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u642d\u914d Manager\uff0cDashboard \u4e00\u8d77\u4f7f\u7528\u3002\u8f7b\u91cf\u5316\u67b6\u6784\u7b80\u5355\u3001\u7075\u6d3b\uff0c\u53ea\u652f\u6301`\u6570\u636e\u540c\u6b65`\u3002",(0,r.yg)("img",{src:"/img/inlong-structure-light.png",align:"center",style:{objectFit:"cover",height:"460px",width:"860px"},alt:"Apache InLong"}))),(0,r.yg)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,r.yg)("p",null,"Apache InLong \u670d\u52a1\u4e8e\u6570\u636e\u91c7\u96c6\u5230\u843d\u5730\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\uff0c\u6309\u6570\u636e\u7684\u4e0d\u540c\u9636\u6bb5\u63d0\u4f9b\u4e0d\u540c\u7684\u5904\u7406\u6a21\u5757\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"inlong-agent"),"\uff0c\u6570\u636e\u91c7\u96c6\u670d\u52a1\uff0c\u5305\u62ec\u6587\u4ef6\u91c7\u96c6\u3001DB \u91c7\u96c6\u7b49\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"inlong-dataproxy"),"\uff0c\u4e00\u4e2a\u57fa\u4e8e Flume-ng \u7684 Proxy \u7ec4\u4ef6\uff0c\u652f\u6301\u6570\u636e\u53d1\u9001\u963b\u585e\u548c\u843d\u76d8\u91cd\u53d1\uff0c\u62e5\u6709\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u8f6c\u53d1\u5230\u4e0d\u540c MQ\uff08\u6d88\u606f\u961f\u5217\uff09\u7684\u80fd\u529b\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"inlong-tubemq"),"\uff0c\u817e\u8baf\u81ea\u7814\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\uff0c\u4e13\u6ce8\u4e8e\u5927\u6570\u636e\u573a\u666f\u4e0b\u6d77\u91cf\u6570\u636e\u7684\u9ad8\u6027\u80fd\u5b58\u50a8\u548c\u4f20\u8f93\uff0c\u5728\u6d77\u91cf\u5b9e\u8df5\u548c\u4f4e\u6210\u672c\u65b9\u9762\u6709\u7740\u826f\u597d\u7684\u6838\u5fc3\u4f18\u52bf\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"inlong-sort"),"\uff0c\u5bf9\u4ece\u4e0d\u540c\u7684 MQ \u6d88\u8d39\u5230\u7684\u6570\u636e\u8fdb\u884c ETL \u5904\u7406\uff0c\u7136\u540e\u6c47\u805a\u5e76\u5199\u5165 Hive\u3001ClickHouse\u3001Hbase\u3001Iceberg\u3001Hudi \u7b49\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"inlong-manager"),"\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u6570\u636e\u670d\u52a1\u7ba1\u63a7\u80fd\u529b\uff0c\u5305\u62ec\u5143\u6570\u636e\u3001\u4efb\u52a1\u6d41\u3001\u6743\u9650\uff0cOpenAPI \u7b49\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"inlong-dashboard"),"\uff0c\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u63a5\u5165\u7684\u524d\u7aef\u9875\u9762\uff0c\u7b80\u5316\u6574\u4e2a InLong \u7ba1\u63a7\u5e73\u53f0\u7684\u4f7f\u7528\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"inlong-audit"),"\uff0c\u5bf9 InLong \u7cfb\u7edf\u7684 Agent\u3001DataProxy\u3001Sort \u6a21\u5757\u7684\u5165\u6d41\u91cf\u3001\u51fa\u6d41\u91cf\u8fdb\u884c\u5b9e\u65f6\u5ba1\u8ba1\u5bf9\u8d26\u3002")),(0,r.yg)("h2",{id:"\u5df2\u652f\u6301\u6570\u636e\u8282\u70b9\u66f4\u65b0\u4e2d"},"\u5df2\u652f\u6301\u6570\u636e\u8282\u70b9\uff08\u66f4\u65b0\u4e2d\uff09"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Extract Node"),(0,r.yg)("td",{parentName:"tr",align:null},"Auto Push"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"File"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"2.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL"),(0,r.yg)("td",{parentName:"tr",align:null},"5.6, 5.7, 8.0.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.yg)("td",{parentName:"tr",align:null},">= 3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"MQTT"),(0,r.yg)("td",{parentName:"tr",align:null},">= 3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Oracle"),(0,r.yg)("td",{parentName:"tr",align:null},"11,12,19")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"9.6, 10, 11, 12")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.yg)("td",{parentName:"tr",align:null},"2.8.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Redis"),(0,r.yg)("td",{parentName:"tr",align:null},"2.6.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer"),(0,r.yg)("td",{parentName:"tr",align:null},"2012, 2014, 2016, 2017, 2019")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("td",{parentName:"tr",align:null},"Auto Consumption"),(0,r.yg)("td",{parentName:"tr",align:null},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Hive"),(0,r.yg)("td",{parentName:"tr",align:null},"1.x, 2.x, 3.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Iceberg"),(0,r.yg)("td",{parentName:"tr",align:null},"0.12.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Hudi"),(0,r.yg)("td",{parentName:"tr",align:null},"0.12.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ClickHouse"),(0,r.yg)("td",{parentName:"tr",align:null},"20.7+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"2.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"HBase"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"9.6, 10, 11, 12")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Oracle"),(0,r.yg)("td",{parentName:"tr",align:null},"11, 12, 19")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL"),(0,r.yg)("td",{parentName:"tr",align:null},"5.6, 5.7, 8.0.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"TDSQL-PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"10.17")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Greenplum"),(0,r.yg)("td",{parentName:"tr",align:null},"4.x, 5.x, 6.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Elasticsearch"),(0,r.yg)("td",{parentName:"tr",align:null},"6.x, 7.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"SQLServer"),(0,r.yg)("td",{parentName:"tr",align:null},"2012, 2014, 2016, 2017, 2019")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Doris"),(0,r.yg)("td",{parentName:"tr",align:null},">= 0.13")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"StarRocks"),(0,r.yg)("td",{parentName:"tr",align:null},">= 2.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"HDFS"),(0,r.yg)("td",{parentName:"tr",align:null},"2.x, 3.x")))))}s.isMDXComponent=!0}}]);