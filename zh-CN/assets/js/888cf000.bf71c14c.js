"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19782],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>d});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),g=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=g(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=g(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return r?t.createElement(d,i(i({ref:n},c),{},{components:r})):t.createElement(d,i({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var g=2;g<a;g++)i[g]=r[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48264:(e,n,r)=>{r.d(n,{l:()=>t});const t={inLongVersion:"1.11.0-SNAPSHOT"}},36803:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=r(58168),o=(r(96540),r(15680)),a=r(48264);const i={title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",sidebar_position:2},l=void 0,p={unversionedId:"development/inlong_manager_shiro_plugin",id:"version-1.11.0/development/inlong_manager_shiro_plugin",title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.11.0/development/inlong_manager_shiro_plugin.md",sourceDirName:"development",slug:"/development/inlong_manager_shiro_plugin",permalink:"/zh-CN/docs/1.11.0/development/inlong_manager_shiro_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.11.0/development/inlong_manager_shiro_plugin.md",tags:[],version:"1.11.0",sidebarPosition:2,frontMatter:{title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u89e3\u6790 InLongMsg",permalink:"/zh-CN/docs/1.11.0/development/inlong_msg"},next:{title:"Manager \u81ea\u5b9a\u4e49\u63d2\u4ef6",permalink:"/zh-CN/docs/1.11.0/development/inlong_manager_plugin"}},g={},c=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u7f16\u7801",id:"\u7f16\u7801",level:2}],u={toc:c},s="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(s,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,o.yg)("p",null,"Inlong Manager\u4e2d\u4f7f\u7528\u4e86Apache Shiro\u6846\u67b6\u5b9e\u73b0\u4e86\u8ba4\u8bc1\u548c\u6388\u6743\u7b49\u529f\u80fd\uff0cManager\u5df2\u7ecf\u96c6\u6210\u597d\u4e86\u9ed8\u8ba4\u7684\u5b9e\u73b0\u903b\u8f91\uff0c\u5982\u679c\u60a8\u60f3\u5728Inlong Manager\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u57fa\u4e8eShiro\u7684\u8ba4\u8bc1\u548c\u6388\u6743\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u7684\u8bf4\u660e\uff0c\u8fdb\u884c\u76f8\u5173\u529f\u80fd\u7684\u63d2\u4ef6\u5316\u5f00\u53d1\u3002"),(0,o.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u589e\u52a0maven \u4f9d\u8d56",(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>manager-common</artifactId>\n    <version>${a.l.inLongVersion}</version>\n</dependency>\n`)))),(0,o.yg)("h2",{id:"\u7f16\u7801"},"\u7f16\u7801"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5b9e\u73b0\u5176\u4e2d\u5173\u4e8eShiro\u76f8\u5173\u6a21\u5757\u7684\u63a5\u53e3")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"org.apache.inlong.manager.common.auth.InlongShiro\n\npublic interface InlongShiro {\n\n    WebSecurityManager getWebSecurityManager();\n\n    AuthorizingRealm getShiroRealm();\n\n    WebSessionManager getWebSessionManager();\n\n    CredentialsMatcher getCredentialsMatcher();\n\n    ShiroFilterFactoryBean getShiroFilter(SecurityManager securityManager);\n\n    AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(SecurityManager securityManager);\n\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,o.yg)("em",{parentName:"li"},"InlongShiro"),'\u63a5\u53e3\uff0c\u5e76\u5728"@ConditionalOnProperty"\u6307\u5b9a\u914d\u7f6e')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'@ConditionalOnProperty(name = "type", prefix = "inlong.auth", havingValue = "Custom")\n@Component\npublic class InlongShiroImpl implements InlongShiro {\n   //todo\n}\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4fee\u6539manager-web module\u4e0bapplication.properties\u6587\u4ef6\u4e2d\u914d\u7f6e")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"inlong.auth.type=Custom\n")))}m.isMDXComponent=!0}}]);