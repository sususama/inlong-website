"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[79709],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),y=a,m=u["".concat(p,".").concat(y)]||u[y]||c[y]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={title:"\u6982\u89c8",sidebar_position:1},i=void 0,l={unversionedId:"modules/dashboard/overview",id:"version-1.11.0/modules/dashboard/overview",title:"\u6982\u89c8",description:"Dashboard \u662f Apache InLong\u7684\u7ba1\u63a7\u7aef\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.11.0/modules/dashboard/overview.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/overview",permalink:"/zh-CN/docs/1.11.0/modules/dashboard/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/modules/dashboard/overview.md",tags:[],version:"1.11.0",sidebarPosition:1,frontMatter:{title:"\u6982\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/1.11.0/modules/manager/configure"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.11.0/modules/dashboard/quick_start"}},p={},d=[{value:"\u5f00\u53d1\u6307\u5f15",id:"\u5f00\u53d1\u6307\u5f15",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:3}],s={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Dashboard \u662f ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong"},"Apache InLong"),"\u7684\u7ba1\u63a7\u7aef\u3002"),(0,a.yg)("h2",{id:"\u5f00\u53d1\u6307\u5f15"},"\u5f00\u53d1\u6307\u5f15"),(0,a.yg)("p",null,"\u786e\u8ba4 ",(0,a.yg)("inlineCode",{parentName:"p"},"nodejs >= 12.0")," \u5df2\u7ecf\u5b89\u88c5\u3002"),(0,a.yg)("p",null,"\u5728\u65b0\u521b\u5efa\u7684\u9879\u76ee\u4e2d\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e9b\u5185\u7f6e\u547d\u4ee4\uff1a"),(0,a.yg)("p",null,"\u5982\u679c\u6ca1\u6709\u5b89\u88c5 ",(0,a.yg)("inlineCode",{parentName:"p"},"node_modules"),"\uff0c\u4f60\u5e94\u8be5\u9996\u5148\u8fd0\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"yarn install"),"\u3002"),(0,a.yg)("p",null,"\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"yarn dev")," \u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u8fd0\u884c\u6210\u529f\uff0c\u6d4f\u89c8\u5668\u5c06\u6253\u5f00 ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173")," \u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u8fdb\u884c\u7f16\u8f91\uff0c\u9875\u9762\u5c06\u91cd\u65b0\u52a0\u8f7d\u3002\n\u60a8\u8fd8\u5c06\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u4efb\u4f55 lint \u9519\u8bef\u3002"),(0,a.yg)("p",null,"web\u670d\u52a1\u5668\u7684\u542f\u52a8\u4f9d\u8d56\u4e8e\u540e\u7aef\u670d\u52a1 ",(0,a.yg)("inlineCode",{parentName:"p"},"manger api")," \u63a5\u53e3\u3002"),(0,a.yg)("p",null,"\u60a8\u5e94\u8be5\u5148\u542f\u52a8\u540e\u7aef\u670d\u52a1\u5668\uff0c\u7136\u540e\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"/inlong-dashboard/vite.config.ts")," \u4e2d\u7684\u53d8\u91cf",(0,a.yg)("inlineCode",{parentName:"p"},"target")," \u8bbe\u7f6e\u4e3aapi\u670d\u52a1\u7684\u5730\u5740\u3002"),(0,a.yg)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,a.yg)("p",null,"\u8fd0\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"npm test")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"yarn test")),(0,a.yg)("p",null,"\u5728\u4ea4\u4e92\u5f0f\u89c2\u5bdf\u6a21\u5f0f\u4e0b\u542f\u52a8\u6d4b\u8bd5\u8fd0\u884c\u5668\u3002\n\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6709\u5173 ",(0,a.yg)("a",{parentName:"p",href:"https://create-react-app.dev/docs/running-tests/"},"\u8fd0\u884c\u6d4b\u8bd5")," \u7684\u90e8\u5206\u3002"),(0,a.yg)("h3",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,a.yg)("p",null,"\u9996\u5148\u4fdd\u8bc1\u9879\u76ee\u5df2\u8fd0\u884c\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"yarn install")," \u5b89\u88c5\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"node_modules"),"\u3002"),(0,a.yg)("p",null,"\u8fd0\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run build")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"yarn build"),"\u3002"),(0,a.yg)("p",null,"\u5c06\u7528\u4e8e\u751f\u4ea7\u7684\u5e94\u7528\u7a0b\u5e8f\u6784\u5efa\u5230\u6784\u5efa\u6587\u4ef6\u5939\u3002\n\u5728\u6784\u5efa\u540e\u7684\u751f\u4ea7\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u83b7\u5f97\u8f83\u597d\u7684\u9875\u9762\u6027\u80fd\u3002"),(0,a.yg)("p",null,"\u6784\u5efa\u540e\u4ee3\u7801\u88ab\u538b\u7f29\uff0c\u6587\u4ef6\u540d\u5305\u62ec\u54c8\u5e0c\u503c\u3002\n\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5df2\u51c6\u5907\u597d\u90e8\u7f72\uff01"),(0,a.yg)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6709\u5173 ",(0,a.yg)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/"},"deployment")," \u7684\u90e8\u5206\u3002"))}c.isMDXComponent=!0}}]);