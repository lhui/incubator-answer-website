"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[5757],{64513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(43010),s=n(90887),r=n(71981),o=n(71401);const i={slug:"/installation"},l="Installation",c={id:"getting-started/installation",title:"Installation",description:"Start Apache Answer",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/installation.md",sourceDirName:"getting-started",slug:"/installation",permalink:"/zh-CN/docs/installation",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"Anne",lastUpdatedAt:1723715012,formattedLastUpdatedAt:"2024\u5e748\u670815\u65e5",frontMatter:{slug:"/installation"},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-CN/docs/"},next:{title:"Upgrade",permalink:"/zh-CN/docs/upgrade"}},u={},d=[{value:"Start Apache Answer",id:"start-apache-answer",level:2},{value:"Install steps",id:"install-steps",level:2},{value:"Step 1: Choose the language",id:"step-1-choose-the-language",level:3},{value:"Step 2: Config database",id:"step-2-config-database",level:3},{value:"Step 3: Create configuration file",id:"step-3-create-configuration-file",level:3},{value:"Step 4: Fill in basic information",id:"step-4-fill-in-basic-information",level:3},{value:"Step 5: Complete",id:"step-5-complete",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.h2,{id:"start-apache-answer",children:"Start Apache Answer"}),"\n","\n","\n",(0,a.jsx)(t.p,{children:"There are multiple ways to start Apache Answer, you can choose the one that suits you best."}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(o.Z,{value:"docker-compose",label:"Docker compose",default:!0,children:[(0,a.jsx)(t.p,{children:"We recommend using Docker Compose to run Apache Answer. This is the easiest way to get started with Apache Answer."}),(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If you are using ",(0,a.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," on Windows or Mac, docker-compose is already included. If you are using Linux, you will need to install docker-compose separately."]})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -fsSL https://raw.githubusercontent.com/apache/incubator-answer/main/docker-compose.yaml | docker compose -p answer -f - up\n"})}),(0,a.jsxs)(t.p,{children:["The default port for Apache Answer is ",(0,a.jsx)(t.code,{children:"9080"}),". You can access it at ",(0,a.jsx)(t.a,{href:"http://localhost:9080",children:"http://localhost:9080"}),"."]})]}),(0,a.jsxs)(o.Z,{value:"docker",label:"Docker",children:[(0,a.jsxs)(t.p,{children:["You can find all the available Docker images on ",(0,a.jsx)(t.a,{href:"https://hub.docker.com/r/apache/answer/tags",children:"Docker Hub"}),". The ",(0,a.jsx)(t.code,{children:"latest"})," tag refers to the latest stable version of Apache Answer."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"docker run -d -p 9080:80 -v answer-data:/data --name answer apache/answer:latest\n"})}),(0,a.jsxs)(t.p,{children:["After running the command, heading to ",(0,a.jsx)(t.a,{href:"http://localhost:9080/install",children:"http://localhost:9080/install"})," to continue installation."]}),(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If you can't access the installation page, you can use the command ",(0,a.jsx)(t.code,{children:"docker logs answer"})," to view the logs. It may help you find the specific problem."]})})]}),(0,a.jsxs)(o.Z,{value:"binary",label:"Binary",children:[(0,a.jsxs)(t.p,{children:["As a golang project, Apache Answer can be compiled into a binary file. You can download the binary file that matches your operating system from the ",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-answer/releases",children:"release page"}),"."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"INSTALL_PORT=80 ./answer init -C ./answer-data/\n"})}),(0,a.jsxs)(t.p,{children:["After running the command, heading to ",(0,a.jsx)(t.a,{href:"http://localhost:80/install",children:"http://localhost:80/install"})," to continue installation."]}),(0,a.jsxs)(t.p,{children:["Follow the ",(0,a.jsx)(t.a,{href:"#install-steps",children:"Install Steps"})," to complete the installation. ",(0,a.jsx)(t.strong,{children:"After that"})," run the following command to start the answer again."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"./answer run -C ./answer-data/\n"})}),(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsxs)(t.p,{children:["You can specify the port on which to start the installation by specifying the environment variable ",(0,a.jsx)(t.code,{children:"INSTALL_PORT"}),", default is 80."]}),(0,a.jsxs)(t.p,{children:["We use ",(0,a.jsx)(t.code,{children:"-C"})," flag to indicate the directory where saved answer data."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"install-steps",children:"Install steps"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"After you start the answer, you can follow the steps below to complete the initialization about the basic configuration."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"step-1-choose-the-language",children:"Step 1: Choose the language"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"install-choose-language",src:n(55048).Z+"",width:"2400",height:"780"})}),"\n",(0,a.jsx)(t.h3,{id:"step-2-config-database",children:"Step 2: Config database"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Apache Answer supports MySQL, PostgreSQL, and SQLite as the database backend. The smallest environment is SQLite, which does not require any additional configuration. If you want to use MySQL or PostgreSQL, you need to setup the database first and then configure the database connection in this step. Here we recommend using sqlite3 to complete your first experience."})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"install-database",src:n(36939).Z+"",width:"2400",height:"900"})}),"\n",(0,a.jsx)(t.h3,{id:"step-3-create-configuration-file",children:"Step 3: Create configuration file"}),"\n",(0,a.jsx)(t.p,{children:"Click Next button to create the configuration file."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"install-create-config-file",src:n(30919).Z+"",width:"2400",height:"700"})}),"\n",(0,a.jsx)(t.h3,{id:"step-4-fill-in-basic-information",children:"Step 4: Fill in basic information"}),"\n",(0,a.jsxs)(t.admonition,{type:"caution",children:[(0,a.jsxs)(t.p,{children:["Site URL is the browser address you will use to access answers after installation. If you are deploying a subdirectory, the site url needs to include the subdirectory's path, eg: ",(0,a.jsx)(t.a,{href:"https://yourdoamin/%7Bsubdirectory%7D",children:"https://yourdoamin/{subdirectory}"})]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Don't forget the admin Email and password."})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"install-site-info",src:n(3753).Z+"",width:"2400",height:"1818"})}),"\n",(0,a.jsx)(t.h3,{id:"step-5-complete",children:"Step 5: Complete"}),"\n",(0,a.jsx)(t.p,{children:"Congratulations, you can click the done button to start your answer journey!"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"install-complete",src:n(58342).Z+"",width:"2400",height:"820"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},71401:(e,t,n)=>{n.d(t,{Z:()=>o});n(85170);var a=n(45924);const s={tabItem:"tabItem_s4ch"};var r=n(43010);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:n,children:t})}},71981:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(85170),s=n(45924),r=n(5899),o=n(31148),i=n(26043),l=n(50160),c=n(68135),u=n(53067);function d(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=f({queryString:n,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=n(91861);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=n(43010);function j(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(w,{...e,...t})]})}function v(e){const t=(0,g.Z)();return(0,x.jsx)(y,{...e},String(t))}},55048:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-choose-language-c9e44e0383e611a706ab1ef0f305d56c.png"},58342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-complete-8a820174dc269858f3b46181385eb63e.png"},30919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-create-config-file-b1d7bacb91abf585c55b1701bdfdf0d7.png"},36939:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-database-20480dbb1bf4701c2f2e4f38e8bb3c32.png"},3753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-site-info-dd11f933444917d34aa90ae18166d00b.png"},90887:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(85170);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);