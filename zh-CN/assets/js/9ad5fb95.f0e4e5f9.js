"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67234],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=d(t),s=r,c=y["".concat(p,".").concat(s)]||y[s]||m[s]||l;return t?a.createElement(c,i(i({ref:n},g),{},{components:t})):a.createElement(c,i({ref:n},g))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},84043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(58168),r=(t(96540),t(15680));const l={title:"Kubernetes \u90e8\u7f72",sidebar_position:3},i=void 0,o={unversionedId:"deployment/k8s",id:"version-1.5.0/deployment/k8s",title:"Kubernetes \u90e8\u7f72",description:"\u51c6\u5907\u6761\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/deployment/k8s.md",sourceDirName:"deployment",slug:"/deployment/k8s",permalink:"/zh-CN/docs/1.5.0/deployment/k8s",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/deployment/k8s.md",tags:[],version:"1.5.0",sidebarPosition:3,frontMatter:{title:"Kubernetes \u90e8\u7f72",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/docs/1.5.0/deployment/docker"},next:{title:"Bare Metal \u90e8\u7f72",permalink:"/zh-CN/docs/1.5.0/deployment/bare_metal"}},p={},d=[{value:"\u51c6\u5907\u6761\u4ef6",id:"\u51c6\u5907\u6761\u4ef6",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u8fdb\u5165 InLong Dashboard",id:"\u8fdb\u5165-inlong-dashboard",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:3},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",level:2},{value:"kind \u5feb\u901f\u5f00\u59cb",id:"kind-\u5feb\u901f\u5f00\u59cb",level:3},{value:"\u5b89\u88c5 Helm",id:"\u5b89\u88c5-helm",level:3},{value:"\u5b89\u88c5 chart",id:"\u5b89\u88c5-chart",level:3},{value:"\u5f00\u53d1\u4e0e\u8c03\u8bd5",id:"\u5f00\u53d1\u4e0e\u8c03\u8bd5",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],g={toc:d},y="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u51c6\u5907\u6761\u4ef6"},"\u51c6\u5907\u6761\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Kubernetes 1.10+"),(0,r.yg)("li",{parentName:"ul"},"Helm 3.0+"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/inlong/tree/master/docker/kubernetes"},"InLong Helm Chart")),(0,r.yg)("li",{parentName:"ul"},"A dynamic provisioner for the PersistentVolumes(",(0,r.yg)("inlineCode",{parentName:"li"},"production environment"),")")),(0,r.yg)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.yg)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.yg)("p",null,"\u5982\u679c\u4e0d\u5b58\u5728\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong")," \u7684\u547d\u540d\u7a7a\u95f4\uff0c\u5219\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace inlong\n")),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/docker/kubernetes"},"docker/kubernetes")," \u76ee\u5f55\u4e0b\u5b89\u88c5 chart\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm upgrade inlong --install -n inlong ./\n")),(0,r.yg)("h3",{id:"\u8fdb\u5165-inlong-dashboard"},"\u8fdb\u5165 InLong Dashboard"),(0,r.yg)("p",null,"\u5982\u679c ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/docker/kubernetes/values.yaml"},"values.yaml")," \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"ingress.enabled")," \u5b57\u6bb5\u503c\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\n\u5219\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"p"},"http://${ingress.host}/dashboard")," \u5373\u53ef"),(0,r.yg)("p",null,"\u5426\u5219\uff0c\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"p"},"dashboard.service.type")," \u5b57\u6bb5\u503c\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"ClusterIP"),"\uff0c\u5219\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u7aef\u53e3\u8f6c\u53d1\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_POD_NAME=$(kubectl get pods -l "app.kubernetes.io/name=inlong-dashboard,app.kubernetes.io/instance=inlong" -o jsonpath="{.items[0].metadata.name}" -n inlong)\nexport DASHBOARD_CONTAINER_PORT=$(kubectl get pod $DASHBOARD_POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}" -n inlong)\nkubectl port-forward $DASHBOARD_POD_NAME 8181:$DASHBOARD_CONTAINER_PORT -n inlong\n')),(0,r.yg)("p",null,"\u4e4b\u540e\u5c31\u53ef\u4ee5\u8bbf\u95ee ",(0,r.yg)("a",{parentName:"p",href:"http://127.0.0.1:8181"},"http://127.0.0.1:8181")," \u8fdb\u5165 InLong Dashboard \u4e86\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a\u5982\u679c\u51fa\u73b0 ",(0,r.yg)("inlineCode",{parentName:"p"},"unable to do port forwarding: socat not found")," \u7684\u9519\u8bef\uff0c\u5219\u9996\u5148\u9700\u8981\u5b89\u88c5 ",(0,r.yg)("inlineCode",{parentName:"p"},"socat"))),(0,r.yg)("p",null,"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"p"},"dashboard.service.type")," \u5b57\u6bb5\u503c\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"NodePort"),"\uff0c\u5219\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_NODE_IP=$(kubectl get nodes -o jsonpath="{.items[0].status.addresses[0].address}" -n inlong)\nexport DASHBOARD_NODE_PORT=$(kubectl get svc inlong-dashboard -o jsonpath="{.spec.ports[0].nodePort}" -n inlong)\n')),(0,r.yg)("p",null,"\u4e4b\u540e\u5c31\u53ef\u4ee5\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"p"},"http://$DASHBOARD_NODE_IP:$DASHBOARD_NODE_PORT")," \u8fdb\u5165 InLong Dashboard \u4e86\u3002"),(0,r.yg)("p",null,"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"p"},"dashboard.service.type")," \u5b57\u6bb5\u503c\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"LoadBalancer"),"\uff0c\u5219\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'export DASHBOARD_SERVICE_IP=$(kubectl get svc inlong-dashboard --template "{{"{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}"}}"  -n inlong)\n')),(0,r.yg)("p",null,"\u4e4b\u540e\u5c31\u53ef\u4ee5\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"p"},"http://$DASHBOARD_SERVICE_IP:30080")," \u8fdb\u5165 InLong Dashboard \u4e86\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8fd9\u5c06\u82b1\u8d39\u4e00\u4e9b\u65f6\u95f4\uff0c\u53ef\u4ee5\u8fd0\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl get svc inlong-dashboard -n inlong -w")," \u547d\u4ee4\u6765\u67e5\u770b\u5176\u72b6\u6001")),(0,r.yg)("p",null,"\u9ed8\u8ba4\u7684\u7528\u6237\u540d\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"admin"),"\uff0c\u9ed8\u8ba4\u5bc6\u7801\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong"),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b83\u4eec\u8fdb\u5165 InLong Dashboard\u3002"),(0,r.yg)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.yg)("p",null,"\u914d\u7f6e\u9879\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/docker/kubernetes/values.yaml"},"values.yaml")," \u6587\u4ef6\u4e2d\uff0c\u4e0b\u8868\u5c55\u793a\u4e86\u6240\u6709\u53ef\u914d\u7f6e\u9879\u53ca\u5176\u9ed8\u8ba4\u503c\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"timezone")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"Asia/Shanghai")),(0,r.yg)("td",{parentName:"tr",align:"center"},"World time and date for cities in all time zones")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"images.pullPolicy")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"IfNotPresent")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Image pull policy. One of ",(0,r.yg)("inlineCode",{parentName:"td"},"Always"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"Never"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"images.<component>.repository")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Docker image repository for the component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"images.<component>.tag")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"latest")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Docker image tag for the component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.component")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Component name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.replicas")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"1")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Replicas is the desired number of replicas of a given Template")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.podManagementPolicy")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"OrderedReady")),(0,r.yg)("td",{parentName:"tr",align:"center"},"PodManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.annotations")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:"center"},"The ",(0,r.yg)("inlineCode",{parentName:"td"},"annotations")," field can be used to attach arbitrary non-identifying metadata to objects")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.tolerations")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"[]")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Tolerations are applied to pods, and allow (but do not require) the pods to schedule onto nodes with matching taints")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.nodeSelector")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:"center"},"You can add the ",(0,r.yg)("inlineCode",{parentName:"td"},"nodeSelector")," field to your Pod specification and specify the node labels you want the target node to have")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.affinity")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Node affinity is conceptually similar to nodeSelector, allowing you to constrain which nodes your Pod can be scheduled on based on node labels")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.terminationGracePeriodSeconds")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"30")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Optional duration in seconds the pod needs to terminate gracefully")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.resources")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Optionally specify how much of each resource a container needs")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.port(s)")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The port(s) for each component service")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.env")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Environment variables for each component container")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".enabled")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Turn on and off liveness or readiness probe")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".failureThreshold")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"10")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Minimum consecutive successes for the probe")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".initialDelaySeconds")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"10")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Delay before the probe is initiated")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("code",null,"\\<component",">",".probe.\\<liveness","|","readiness",">",".periodSeconds")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"30")),(0,r.yg)("td",{parentName:"tr",align:"center"},"How often to perform the probe")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.volumes.name")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Volume name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.volumes.size")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"10Gi")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Volume size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.service.annotations")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:"center"},"The ",(0,r.yg)("inlineCode",{parentName:"td"},"annotations")," field may need to be set when service.type is ",(0,r.yg)("inlineCode",{parentName:"td"},"LoadBalancer"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.service.type")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"ClusterIP")),(0,r.yg)("td",{parentName:"tr",align:"center"},"The ",(0,r.yg)("inlineCode",{parentName:"td"},"type")," field determines how the service is exposed. Valid options are ",(0,r.yg)("inlineCode",{parentName:"td"},"ClusterIP"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"NodePort"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"LoadBalancer")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"ExternalName"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.service.clusterIP")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"nil")),(0,r.yg)("td",{parentName:"tr",align:"center"},"ClusterIP is the IP address of the service and is usually assigned randomly by the master")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.service.nodePort")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"nil")),(0,r.yg)("td",{parentName:"tr",align:"center"},"NodePort is the port on each node on which this service is exposed when service type is ",(0,r.yg)("inlineCode",{parentName:"td"},"NodePort"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.service.loadBalancerIP")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"nil")),(0,r.yg)("td",{parentName:"tr",align:"center"},"LoadBalancer will get created with the IP specified in this field when service type is ",(0,r.yg)("inlineCode",{parentName:"td"},"LoadBalancer"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.service.externalName")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"nil")),(0,r.yg)("td",{parentName:"tr",align:"center"},"ExternalName is the external reference that kubedns or equivalent will return as a CNAME record for this service, requires service type to be ",(0,r.yg)("inlineCode",{parentName:"td"},"ExternalName"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"<component>.service.externalIPs")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"[]")),(0,r.yg)("td",{parentName:"tr",align:"center"},"ExternalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"external.mysql.enabled")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:"center"},"If not exists external MySQL, InLong will use the internal MySQL by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"external.mysql.hostname")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"localhost")),(0,r.yg)("td",{parentName:"tr",align:"center"},"External MySQL hostname")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"external.mysql.port")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"3306")),(0,r.yg)("td",{parentName:"tr",align:"center"},"External MySQL port")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"external.mysql.username")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"root")),(0,r.yg)("td",{parentName:"tr",align:"center"},"External MySQL username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"external.mysql.password")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:"center"},"External MySQL password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"external.pulsar.enabled")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:"center"},"If not exists external Pulsar, InLong will use the internal TubeMQ by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"external.pulsar.serviceUrl")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"localhost:6650")),(0,r.yg)("td",{parentName:"tr",align:"center"},"External Pulsar service URL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"external.pulsar.adminUrl")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"localhost:8080")),(0,r.yg)("td",{parentName:"tr",align:"center"},"External Pulsar admin URL")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u53ef\u9009\u7684\u7ec4\u4ef6\u6709\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"agent"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"audit"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"dashboard"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"dataproxy"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"manager"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"tubemq-manager"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"tubemq-master"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"tubemq-broker"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"zookeeper")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql"),"\u3002")),(0,r.yg)("h3",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,r.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d chart\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm uninstall inlong -n inlong\n")),(0,r.yg)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u4f1a\u5220\u9664\u9664\u4e0e chart \u5173\u8054\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"PVC")," \u4e4b\u5916\u7684\u6240\u6709 Kubernetes \u7ec4\u4ef6\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u4e0d\u518d\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"PVC"),"\uff0c\u53ef\u901a\u8fc7\u4e0b\u5217\u547d\u4ee4\u5220\u9664\uff0c\u5b83\u5c06\u4f1a\u5220\u9664\u6240\u6709\u6570\u636e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pvc -n inlong --all\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5220\u9664 PVC \u4e5f\u4f1a\u5220\u9664\u6240\u6709\u6570\u636e\u3002\u5728\u505a\u4e4b\u524d\u8bf7\u5c0f\u5fc3\u3002")),(0,r.yg)("h2",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),(0,r.yg)("p",null,"\u5728\u5f00\u53d1\u524d\u9700\u8981\u6709\u4e00\u4e2a\u88c5\u6709 ",(0,r.yg)("a",{parentName:"p",href:"https://helm.sh"},"helm")," \u7684 Kubernetes \u96c6\u7fa4\u3002\n\u4f46\u662f\u6ca1\u6709\u4e5f\u6ca1\u6709\u5173\u7cfb\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind"},"kind")," \uff0c\n\u5b83\u80fd\u591f\u5728 Docker \u5bb9\u5668\u4e2d\u8fd0\u884c\u4e00\u4e2a\u672c\u5730\u7684 Kubernetes \u96c6\u7fa4\uff0c\u56e0\u6b64\uff0c\u53ea\u9700\u82b1\u8d39\u5f88\u5c11\u7684\u65f6\u95f4\u5373\u53ef\u542f\u52a8\u548c\u505c\u6b62 kubernetes \u8282\u70b9\u3002"),(0,r.yg)("h3",{id:"kind-\u5feb\u901f\u5f00\u59cb"},"kind \u5feb\u901f\u5f00\u59cb"),(0,r.yg)("p",null,"\u4f60\u53ef\u4ee5\u6309\u7167 ",(0,r.yg)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start"},"\u5feb\u901f\u5f00\u59cb")," \u7ae0\u8282\u4e2d\u7684\u6307\u793a\u5b89\u88c5 kind\u3002\n\u5b89\u88c5\u597d kind \u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/.github/kind.yml"},"kind.yml")," \u914d\u7f6e\u6587\u4ef6\u6765\u521b\u5efa\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kind create cluster --config kind.yml\n")),(0,r.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"--image")," \u6307\u5b9a\u5177\u4f53\u7684 Docker \u955c\u50cf \u2014\u2014 ",(0,r.yg)("inlineCode",{parentName:"p"},"kind create cluster --image=...."),"\u3002\n\u4f7f\u7528\u4e0d\u540c\u7684\u955c\u50cf\u53ef\u4ee5\u6539\u53d8\u96c6\u7fa4\u7684 kubernetes \u7248\u672c\u3002\n\u8981\u627e\u5230\u9002\u5408\u5f53\u524d\u7248\u672c\u7684\u955c\u50cf\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"\u53d1\u884c\u8bf4\u660e")," \u3002"),(0,r.yg)("p",null,"\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4e0e\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info --context kind-inlong-cluster\n")),(0,r.yg)("p",null,"\u73b0\u5728\uff0c\u4f60\u5df2\u7ecf\u62e5\u6709\u4e86\u4e00\u4e2a\u53ef\u4ee5\u8fdb\u884c\u672c\u5730\u5f00\u53d1\u7684 Kubernetes \u96c6\u7fa4\uff01"),(0,r.yg)("h3",{id:"\u5b89\u88c5-helm"},"\u5b89\u88c5 Helm"),(0,r.yg)("p",null,"\u8bf7\u6309\u7167 ",(0,r.yg)("a",{parentName:"p",href:"https://helm.sh/zh/docs/intro/install"},"\u5b89\u88c5\u6307\u5f15")," \u8fdb\u884c\u5b89\u88c5\u3002"),(0,r.yg)("h3",{id:"\u5b89\u88c5-chart"},"\u5b89\u88c5 chart"),(0,r.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u547d\u540d\u7a7a\u95f4\u5e76\u5b89\u88c5 chart\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace inlong\nhelm upgrade inlong --install -n inlong ./\n")),(0,r.yg)("p",null,"\u8fd9\u5c06\u82b1\u8d39\u4e00\u6bb5\u65f6\u95f4\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6240\u6709 pod \u662f\u5426\u80fd\u591f\u6b63\u5e38\u542f\u52a8\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"watch kubectl get pods -n inlong -o wide\n")),(0,r.yg)("h3",{id:"\u5f00\u53d1\u4e0e\u8c03\u8bd5"},"\u5f00\u53d1\u4e0e\u8c03\u8bd5"),(0,r.yg)("p",null,"\u6309\u7167 ",(0,r.yg)("a",{parentName:"p",href:"https://helm.sh/zh/docs/chart_template_guide/debugging"},"\u6a21\u677f\u8c03\u8bd5\u6307\u5f15")," \u6765\u8c03\u8bd5\u4f60\u6240\u5f00\u53d1\u7684 chart\u3002"),(0,r.yg)("p",null,"\u9664\u6b64\u4ee5\u5916\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4fdd\u5b58\u6e32\u67d3\u7684\u6a21\u677f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"helm template ./ --output-dir ./result\n")),(0,r.yg)("p",null,"\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"result")," \u6587\u4ef6\u5939\u4e0b\u68c0\u67e5\u6e32\u67d3\u540e\u7684\u6a21\u677f\u3002"),(0,r.yg)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,r.yg)("p",null,"\u6211\u4eec\u5df2\u5c3d\u6700\u5927\u52aa\u529b\u4f7f\u8fd9\u4e9b chart \u5c3d\u53ef\u80fd\u6b63\u786e\uff0c\u4f46\u5076\u5c14\u4e5f\u4f1a\u51fa\u73b0\u6211\u4eec\u65e0\u6cd5\u63a7\u5236\u7684\u60c5\u51b5\u3002\n\u6211\u4eec\u5df2\u7ecf\u6536\u96c6\u4e86\u7528\u4e8e\u89e3\u51b3\u5e38\u89c1\u95ee\u9898\u7684\u63d0\u793a\u548c\u6280\u5de7\u3002\n\u8bf7\u5728\u63d0\u51fa ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/issues/new/choose"},"issue")," \u4e4b\u524d\u5148\u68c0\u67e5\u8fd9\u4e9b\u5185\u5bb9\uff0c\u5e76\u968f\u65f6\u6b22\u8fce\u5411\u6211\u4eec\u63d0\u51fa ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/compare"},"Pull Request")," \uff01"))}m.isMDXComponent=!0}}]);