"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7856],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,g=s["".concat(l,".").concat(h)]||s[h]||m[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={title:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801",sidebar_position:2},l="\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801",p={unversionedId:"how-to-commit",id:"how-to-commit",isDocsHomePage:!1,title:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801",description:"Apache InLong\u4f7f\u7528Github\u7684Pull Request (PR)\u6765\u63a5\u6536\u8d21\u732e\u7684\u4ee3\u7801\uff0c\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u63d0\u4ea4\u4ee3\u7801\u7684\u8be6\u7ec6\u6d41\u7a0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-development/current/how-to-commit.md",sourceDirName:".",slug:"/how-to-commit",permalink:"/zh-CN/development/how-to-commit",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/i18n/zh-CN/how-to-commit.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e",permalink:"/zh-CN/development/how-to-contribute"},next:{title:"\u8ba2\u9605\u90ae\u4ef6\u5217\u8868",permalink:"/zh-CN/development/how-to-subscribe"}},c=[{value:"1. Fork\u4ed3\u5e93",id:"1-fork\u4ed3\u5e93",children:[]},{value:"2. \u914d\u7f6egit\u548c\u63d0\u4ea4\u4fee\u6539",id:"2-\u914d\u7f6egit\u548c\u63d0\u4ea4\u4fee\u6539",children:[{value:"2.1 \u5c06\u4ee3\u7801\u514b\u9686\u5230\u672c\u5730",id:"21-\u5c06\u4ee3\u7801\u514b\u9686\u5230\u672c\u5730",children:[]},{value:"2.2 \u5c06 apache/incubator-inlong \u6dfb\u52a0\u4e3a\u672c\u5730\u4ed3\u5e93\u7684\u8fdc\u7a0b\u5206\u652fupstream",id:"22-\u5c06-apacheincubator-inlong-\u6dfb\u52a0\u4e3a\u672c\u5730\u4ed3\u5e93\u7684\u8fdc\u7a0b\u5206\u652fupstream",children:[]},{value:"2.3 \u68c0\u67e5\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e",id:"23-\u68c0\u67e5\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e",children:[]},{value:"2.4 \u83b7\u53d6upstream\u4ed3\u5e93\u4ee3\u7801\uff0c\u5e76\u66f4\u65b0\u672c\u5730master\u5206\u652f\u4ee3\u7801\u4e3a\u6700\u65b0",id:"24-\u83b7\u53d6upstream\u4ed3\u5e93\u4ee3\u7801\u5e76\u66f4\u65b0\u672c\u5730master\u5206\u652f\u4ee3\u7801\u4e3a\u6700\u65b0",children:[]},{value:"2.5 \u65b0\u5efa\u5206\u652f",id:"25-\u65b0\u5efa\u5206\u652f",children:[]},{value:"2.6 \u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u5206\u652f",id:"26-\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u5206\u652f",children:[]}]},{value:"4. Review\u4ee3\u7801",id:"4-review\u4ee3\u7801",children:[]}],m={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801"},"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801"),(0,o.kt)("p",null,"Apache InLong\u4f7f\u7528Github\u7684Pull Request (PR)\u6765\u63a5\u6536\u8d21\u732e\u7684\u4ee3\u7801\uff0c\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u63d0\u4ea4\u4ee3\u7801\u7684\u8be6\u7ec6\u6d41\u7a0b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"InLong\u4ee3\u7801\u5e93\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong"},"https://github.com/apache/incubator-inlong"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"InLong\u5b98\u7f51\u5e93\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong-website"},"https://github.com/apache/incubator-inlong-website")))),(0,o.kt)("h2",{id:"1-fork\u4ed3\u5e93"},"1. Fork\u4ed3\u5e93"),(0,o.kt)("p",null,"\u8fdb\u5165 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong"},"apache/incubator-inlong")," \u7684Github\u9875\u9762 \uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u6309\u94ae ",(0,o.kt)("inlineCode",{parentName:"p"},"Fork")," \u8fdb\u884c Fork\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("h2",{id:"2-\u914d\u7f6egit\u548c\u63d0\u4ea4\u4fee\u6539"},"2. \u914d\u7f6egit\u548c\u63d0\u4ea4\u4fee\u6539"),(0,o.kt)("h3",{id:"21-\u5c06\u4ee3\u7801\u514b\u9686\u5230\u672c\u5730"},"2.1 \u5c06\u4ee3\u7801\u514b\u9686\u5230\u672c\u5730"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/<your_github_name>/incubator-inlong.git\n")),(0,o.kt)("p",null,"clone\u5b8c\u6210\u540e\uff0corigin\u4f1a\u9ed8\u8ba4\u6307\u5411github\u4e0a\u7684\u8fdc\u7a0bfork\u5730\u5740\u3002"),(0,o.kt)("h3",{id:"22-\u5c06-apacheincubator-inlong-\u6dfb\u52a0\u4e3a\u672c\u5730\u4ed3\u5e93\u7684\u8fdc\u7a0b\u5206\u652fupstream"},"2.2 \u5c06 apache/incubator-inlong \u6dfb\u52a0\u4e3a\u672c\u5730\u4ed3\u5e93\u7684\u8fdc\u7a0b\u5206\u652fupstream"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd  incubator-inlong\ngit remote add upstream https://github.com/apache/incubator-inlong.git\n")),(0,o.kt)("h3",{id:"23-\u68c0\u67e5\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e"},"2.3 \u68c0\u67e5\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git remote -v\norigin    https://github.com/<your_github_name>/incubator-inlong.git (fetch)\norigin    https://github.com/<your_github_name>/incubator-inlong.git(push)\nupstream  https://github.com/apache/incubator-inlong.git (fetch)\nupstream  https://github.com/apache/incubator-inlong.git (push)\n")),(0,o.kt)("p",null,"\u6b64\u65f6\u4f1a\u6709\u4e24\u4e2a\u4ed3\u5e93\uff1aorigin(\u81ea\u5df1\u7684\u4ed3\u5e93)\u548cupstream\uff08\u5b98\u65b9\u7684\u4ed3\u5e93\uff09"),(0,o.kt)("h3",{id:"24-\u83b7\u53d6upstream\u4ed3\u5e93\u4ee3\u7801\u5e76\u66f4\u65b0\u672c\u5730master\u5206\u652f\u4ee3\u7801\u4e3a\u6700\u65b0"},"2.4 \u83b7\u53d6upstream\u4ed3\u5e93\u4ee3\u7801\uff0c\u5e76\u66f4\u65b0\u672c\u5730master\u5206\u652f\u4ee3\u7801\u4e3a\u6700\u65b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git fetch upstream\ngit pull upstream master\n")),(0,o.kt)("h3",{id:"25-\u65b0\u5efa\u5206\u652f"},"2.5 \u65b0\u5efa\u5206\u652f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e00\u822c\u4ee5issue id\u4f5c\u4e3a\u5206\u652f\u540d\uff0c\u5982\uff1aINLONG-123"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b INLONG-123\n")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u786e\u4fdd\u5206\u652f",(0,o.kt)("inlineCode",{parentName:"strong"},"INLONG-123"),"\u662f\u57fa\u4e8e\u5b98\u65b9master\u5206\u652f\u7684\u6700\u65b0\u4ee3\u7801"))),(0,o.kt)("p",null,"\u5206\u652f\u521b\u5efa\u5b8c\u6210\u540e\u5373\u53ef\u8fdb\u884c\u4ee3\u7801\u66f4\u6539\u3002"),(0,o.kt)("h3",{id:"26-\u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u5206\u652f"},"2.6 \u63d0\u4ea4\u4ee3\u7801\u5230\u8fdc\u7a0b\u5206\u652f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"commit \u4fe1\u606f\u7684\u683c\u5f0f\u5fc5\u987b\u4e0eIssue\u6807\u9898\u4fdd\u6301\u4e00\u81f4\u4e14\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"[issue id]"),"\u5f00\u5934\uff0c\u5373\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"[INLONG-123] xxx")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'git commit -a -m "[INLONG-123] xxx"\ngit push origin INLONG-123\n')),(0,o.kt)("h2",{parentName:"blockquote",id:"3-\u521b\u5efapr"},"3. \u521b\u5efaPR"),(0,o.kt)("h3",{parentName:"blockquote",id:"31-\u6253\u5f00\u81ea\u5df1\u7684github\u4ed3\u5e93\u9875\u9762"},"3.1 \u6253\u5f00\u81ea\u5df1\u7684github\u4ed3\u5e93\u9875\u9762"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"`https://github.com/<your_github_name>/incubator-inlong`\n")),(0,o.kt)("h3",{parentName:"blockquote",id:"32-\u5207\u6362\u5206\u652f"},"3.2. \u5207\u6362\u5206\u652f"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"\u5207\u6362\u5230\u63d0\u4ea4\u7684\u5206\u652f `INLONG-123`\n")),(0,o.kt)("h3",{parentName:"blockquote",id:"33-\u521b\u5efa\u65b0pr"},"3.3. \u521b\u5efa\u65b0PR"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"\u70b9\u51fb `New pull request`\u6216\u8005`Compare & pull request`\n")),(0,o.kt)("h3",{parentName:"blockquote",id:"34-\u70b9\u51fbcreate-pull-request\u6309\u94ae\u8fdb\u884c\u521b\u5efapr"},"3.4. \u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"h3"},"Create pull request"),"\u6309\u94ae\u8fdb\u884c\u521b\u5efaPR"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a\n  1. PR\u7684\u6807\u9898\u5fc5\u987b\u4ee5issue id\u5f00\u5934\uff0c\u6700\u597d\u4e0ecommit\u4fe1\u606f\u4fdd\u6301\u4e00\u81f4\n  2. \u53ef\u4ee5\u586b\u5199\u90e8\u5206\u63cf\u8ff0\u4fe1\u606f\u4e5f\u53ef\u4ee5\u4e0d\u586b\n  3. \u5982\u679c\u70b9\u51fb`Create pull request`\u540e\u63d0\u793a\u4ee3\u7801\u51b2\u7a81\uff0c\u5219\u8bf7\u5c06`INLONG-123`\u5206\u652f\u7684\u4ee3\u7801\n     \u4e0emaster\u5206\u652f\u540c\u6b65\u4e00\u81f4\u540e\u5728\u8fdb\u884c\u63d0\u4ea4\n"))),(0,o.kt)("h2",{id:"4-review\u4ee3\u7801"},"4. Review\u4ee3\u7801"),(0,o.kt)("p",null,"\u521b\u5efa\u5b8cPR\u540e\uff0c\u6240\u6709\u7684\u4eba\u90fd\u53ef\u4ee5Review\u4ee3\u7801\uff0c\u53ef\u80fd\u4f1a\u4e0e\u60a8\u8ba8\u8bba\u4e00\u4e9b\u5b9e\u73b0\u7684\u7ec6\u8282\uff0c\u53ef\u80fd\u8fd8\u9700\u8981\u4f60\u8fdb\u4e00\u6b65\u4fee\u6539\u3002\n",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u822c\u8be5PR\u5fc5\u987b\u67092\u4f4d\u4ee5\u4e0a\u7684\u793e\u533aPPMC/Committer +1\u540e\uff0c\u624d\u53ef\u80fd\u6b63\u5f0f\u5408\u5165\u5b98\u65b9\u4ee3\u7801\u5e93\u3002")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u606d\u559c\u60a8\u5df2\u7ecf\u6210\u4e3a\u4e86InLong\u7684\u5b98\u65b9\u8d21\u732e\u8005\u4e86\uff01"))}s.isMDXComponent=!0}}]);