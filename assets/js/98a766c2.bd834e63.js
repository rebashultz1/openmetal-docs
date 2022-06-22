"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[4059],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="How to Live Migrate Instances Using OpenStack Horizon",l={unversionedId:"operators-manual/day-2/live-migrate-instances",id:"operators-manual/day-2/live-migrate-instances",title:"How to Live Migrate Instances Using OpenStack Horizon",description:"Introduction",source:"@site/docs/operators-manual/day-2/live-migrate-instances.md",sourceDirName:"operators-manual/day-2",slug:"/operators-manual/day-2/live-migrate-instances",permalink:"/openmetal-docs/docs/operators-manual/day-2/live-migrate-instances",editUrl:"https://github.com/inmotionhosting/openmetal-docs/blob/main/docs/operators-manual/day-2/live-migrate-instances.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Ceph",permalink:"/openmetal-docs/docs/operators-manual/day-2/introduction-to-ceph"},next:{title:"Maintaining OpenStack Software Updates",permalink:"/openmetal-docs/docs/operators-manual/day-2/maintenance"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Prerequisite",id:"prerequisite",children:[],level:2},{value:"Determining an Instance&#39;s Parent Host",id:"determining-an-instances-parent-host",children:[],level:2},{value:"Migrate Instance",id:"migrate-instance",children:[],level:2}],u={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-live-migrate-instances-using-openstack-horizon"},"How to Live Migrate Instances Using OpenStack Horizon"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This guide provides instructions for cloud administrators on how to\nmigrate instances through your Horizon dashboard. Migration is the\nprocess that a server administrator can move instances to a different\nhost. Live migration keeps instances in an active state during the\nmigration process. This process is useful when applications need to\nremain running and shutting down an instance is not possible or\nadvantageous."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"live-migrate-instances#prerequisite"},"Prerequisite")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"live-migrate-instances#determining-an-instance-s-parent-host"},"Determining an Instance's Parent\nHost")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"live-migrate-instances#migrate-instance"},"Migrate\nInstance"))),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"Live migrating instances requires having a user account with the\nadministrator role. This is typically the account called ",(0,i.kt)("strong",{parentName:"p"},"admin"),"."),(0,i.kt)("h2",{id:"determining-an-instances-parent-host"},"Determining an Instance's Parent Host"),(0,i.kt)("p",null,"To determine an instance's parent host, navigate to ",(0,i.kt)("strong",{parentName:"p"},"Admin -",">"," Compute\n-",">"," Instances"),". You have the option to see the project, the host, as\nwell as the IP address, and the state of your instance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(3217).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 1:")," Summary of Instances"),(0,i.kt)("h2",{id:"migrate-instance"},"Migrate Instance"),(0,i.kt)("p",null,"Once you have determined the instance you want to migrate, navigate to\n",(0,i.kt)("strong",{parentName:"p"},"Admin -",">"," Compute -",">"," Instances"),". On this page, you are presented\nwith a series of actions. To access these actions click the small\ntriangle next to the button called ",(0,i.kt)("strong",{parentName:"p"},"Rescue Instance"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(9678).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 2:")," Link for Live Migration Drop Down Menu"),(0,i.kt)("p",null,"From the drop-down menu, select ",(0,i.kt)("strong",{parentName:"p"},"Live Migrate Instance"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(5143).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 3:")," Drop down menu for live migration"),(0,i.kt)("p",null,"Within Live Migrate, the options for ",(0,i.kt)("strong",{parentName:"p"},"Disk Over Commit")," and ",(0,i.kt)("strong",{parentName:"p"},"Block\nMigration")," are options for local storage. Block live migration uses\nephemeral disks on instances. These disks are not shared between source\nand destination hosts. The storage for OpenMetal uses a shared storage\nsystem through Ceph. Because of the shared storage system in OpenMetal,\nneither option should be selected."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(75).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 4:")," Live Migration Options"),(0,i.kt)("p",null,"Live Migrate does have the option to either auto-select a new host or to\nchoose one manually. If you have a specific node for your instance,\nselect the name of the node under the ",(0,i.kt)("strong",{parentName:"p"},"New Host")," option. Once you have\nmade your selection, click submit. During the live migration process, a\nstatus bar appears under tasks, upon completion, the task returns to\nnone and your instance host changes to a new node."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(1869).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 5:")," Task list for migrating instances"))}m.isMDXComponent=!0},3217:function(e,t,n){t.Z=n.p+"assets/images/all-instance-list-117d0ee65957675af98a1cdbddeb9005.png"},9678:function(e,t,n){t.Z=n.p+"assets/images/figure2-5f783dc6d5545b0e642512ae16a7d51e.png"},5143:function(e,t,n){t.Z=n.p+"assets/images/figure3-6900e6c3f96f306021676ad67b63493f.png"},75:function(e,t,n){t.Z=n.p+"assets/images/figure4-da28d1bc6e2474836053e8816f85fb5f.png"},1869:function(e,t,n){t.Z=n.p+"assets/images/figure5-e021ba72e11aae6e841d9c090d679070.png"}}]);