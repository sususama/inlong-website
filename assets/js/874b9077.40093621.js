"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87515],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const a={title:"Overview",sidebar_position:1},i=void 0,l={unversionedId:"modules/dashboard/overview",id:"modules/dashboard/overview",title:"Overview",description:"This is a dashboard console for us to use the Apache InLong.",source:"@site/docs/modules/dashboard/overview.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/overview",permalink:"/docs/next/modules/dashboard/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/dashboard/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/next/modules/manager/configure"},next:{title:"Deployment",permalink:"/docs/next/modules/dashboard/quick_start"}},s={},p=[{value:"Guide For Developer",id:"guide-for-developer",level:2},{value:"Test",id:"test",level:3},{value:"Build",id:"build",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This is a dashboard console for us to use the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong"},"Apache InLong"),"."),(0,o.yg)("h2",{id:"guide-for-developer"},"Guide For Developer"),(0,o.yg)("p",null,"You should check that ",(0,o.yg)("inlineCode",{parentName:"p"},"nodejs >= 12.0")," is installed."),(0,o.yg)("p",null,"In the project, you can run some built-in commands:"),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"node_modules")," is not installed, you should first run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm install")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn install"),"."),(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn dev")," to run the application in development mode."),(0,o.yg)("p",null,"If the server runs successfully, the browser will open ",(0,o.yg)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173")," to view in the browser."),(0,o.yg)("p",null,"If you edit, the page will reload.\nYou will also see any lint errors in the console."),(0,o.yg)("p",null,"The start of the web server depends on the back-end server ",(0,o.yg)("inlineCode",{parentName:"p"},"manger api")," interface."),(0,o.yg)("p",null,"You should start the backend server first, and then set the variable ",(0,o.yg)("inlineCode",{parentName:"p"},"target")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"/inlong-dashboard/vite.config.ts")," to the address of the api service."),(0,o.yg)("h3",{id:"test"},"Test"),(0,o.yg)("p",null,"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm test")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn test")),(0,o.yg)("p",null,"Start the test runner in interactive observation mode.\nFor more information, see the section on ",(0,o.yg)("a",{parentName:"p",href:"https://create-react-app.dev/docs/running-tests/"},"Running Tests"),"."),(0,o.yg)("h3",{id:"build"},"Build"),(0,o.yg)("p",null,"First, make sure that the project has run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm install")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn install")," to install ",(0,o.yg)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,o.yg)("p",null,"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm run build")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"yarn build"),"."),(0,o.yg)("p",null,"Build the application for production into the build folder.\nBetter page performance can be obtained in the constructed production mode."),(0,o.yg)("p",null,"After the build, the code is compressed, and the file name includes the hash value.\nYour application is ready to be deployed!"),(0,o.yg)("p",null,"For details, see the section on ",(0,o.yg)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/"},"deployment"),"."))}c.isMDXComponent=!0}}]);