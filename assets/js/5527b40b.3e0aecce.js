"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[9777],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=u(t),h=r,d=g["".concat(c,".").concat(h)]||g[h]||p[h]||a;return t?o.createElement(d,s(s({ref:n},l),{},{components:t})):o.createElement(d,s({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},560:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return g}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],i={},c="Recover an Instance Using Horizon",u={unversionedId:"how-to-guides/recoverinstance/recoveraninstance",id:"how-to-guides/recoverinstance/recoveraninstance",title:"Recover an Instance Using Horizon",description:"This guide provides instructions for how to recover a failed instance",source:"@site/docs/how-to-guides/recoverinstance/recoveraninstance.md",sourceDirName:"how-to-guides/recoverinstance",slug:"/how-to-guides/recoverinstance/recoveraninstance",permalink:"/docs/manuals/how-to-guides/recoverinstance/recoveraninstance",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/how-to-guides/recoverinstance/recoveraninstance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manage Flavors in OpenStack",permalink:"/docs/manuals/how-to-guides/horizon/manage-flavors"},next:{title:"How to Handle a Failed OpenStack Control Plane Node",permalink:"/docs/manuals/how-to-guides/recover-from-failed-control-plane-node"}},l=[{value:"Rebooting an Instance Through Horizon",id:"rebooting-an-instance-through-horizon",children:[],level:2},{value:"Accessing Instance Console Through Horizon",id:"accessing-instance-console-through-horizon",children:[],level:2}],p={toc:l};function g(e){var n=e.components,i=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recover-an-instance-using-horizon"},"Recover an Instance Using Horizon"),(0,a.kt)("p",null,"This guide provides instructions for how to recover a failed instance\nthrough the Horizon Dashboard. If an instance becomes inaccessible,\nthere is an option to reboot the instance from within Horizon. You can\nalso run commands directly on your instance through Horizon using the\nconsole. Outlined with this guide is how to reboot an instance through\nHorizon and how to access the console."),(0,a.kt)("h2",{id:"rebooting-an-instance-through-horizon"},"Rebooting an Instance Through Horizon"),(0,a.kt)("p",null,"To reboot an instance through your Horizon dashboard, navigate to\n",(0,a.kt)("strong",{parentName:"p"},"Admin -",">"," Compute -",">"," Instances"),". Within this dashboard, lists the\ninstances of your project as well as their status."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 1:")," List of Running Instances Within Horizon"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(8484).Z})),(0,a.kt)("p",null,"To reboot an instance, click the small arrow next to the button ",(0,a.kt)("strong",{parentName:"p"},"Rescue\nInstance"),". Depending on the current status of your instance you have\nthe options to Soft Reboot Instance and Hard Reboot Instance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Soft Reboot Instance - attempts a graceful shutdown and restart of\ninstance"),(0,a.kt)("li",{parentName:"ul"},"Hard Reboot Instance - power cycles instance")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Because of the use of Ceph, the rebuild function will not\nwork."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 2:")," Link to Drop Down Menu"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(1453).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 3:")," Actions Menu for Working With Instance Functions"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(7731).Z})),(0,a.kt)("p",null,"Once you have rebooted your instance, you can check the status by\nattempting to SSH into the instance. If you are still unable to access\nyour instance after a hard reboot, attempt to use the console to access\nthe instance."),(0,a.kt)("h2",{id:"accessing-instance-console-through-horizon"},"Accessing Instance Console Through Horizon"),(0,a.kt)("p",null,"To access the Instance Console, navigate to ",(0,a.kt)("strong",{parentName:"p"},"Admin -",">"," Compute -",">","\nInstances")," and click on the name of the instance that you wish to\naccess."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 4:")," Name of Instance to Access Console"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(7667).Z})),(0,a.kt)("p",null,"From the options menu, select ",(0,a.kt)("strong",{parentName:"p"},"Console")," from the upper left menu to\naccess the console page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 5:")," Console Page of Instance"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(7516).Z})),(0,a.kt)("p",null,"Within the console page, a root user or superuser password is required.\nInput the login credentials of the user with appropriate access to the\ninstance. If still accessible, your instance should accept commands\nthrough its console."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 6:")," Console Access Demonstration"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:t(4851).Z})))}g.isMDXComponent=!0},8484:function(e,n,t){n.Z=t.p+"assets/images/figure1-117d0ee65957675af98a1cdbddeb9005.png"},1453:function(e,n,t){n.Z=t.p+"assets/images/figure2-5f783dc6d5545b0e642512ae16a7d51e.png"},7731:function(e,n,t){n.Z=t.p+"assets/images/figure3-7f9022011c3ab52973e8e66eda285a83.png"},7667:function(e,n,t){n.Z=t.p+"assets/images/figure4-bd9cce5bf7366c1caa9b364cd310cb38.png"},7516:function(e,n,t){n.Z=t.p+"assets/images/figure5-3adce3d965d4456cb5771b295e4fa40a.png"},4851:function(e,n,t){n.Z=t.p+"assets/images/figure6-758b976ecf70a6376ecc898871fab638.png"}}]);