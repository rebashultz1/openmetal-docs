"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[9445],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1552:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Getting Started with Ceilometer and Gnocchi",s={unversionedId:"operators-manual-extras/telemetry",id:"operators-manual-extras/telemetry",title:"Getting Started with Ceilometer and Gnocchi",description:"Introduction",source:"@site/docs/operators-manual-extras/telemetry.md",sourceDirName:"operators-manual-extras",slug:"/operators-manual-extras/telemetry",permalink:"/openmetal-docs/docs/operators-manual-extras/telemetry",editUrl:"https://github.com/inmotionhosting/openmetal-docs/blob/main/docs/operators-manual-extras/telemetry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Magnum and Kubernetes",permalink:"/openmetal-docs/docs/operators-manual-extras/magnum-and-kubernetes"},next:{title:"How to Live Migrate an Instance Using Horizon",permalink:"/openmetal-docs/docs/how-to-guides/horizon/live-migrate-instance"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"What is Ceilometer?",id:"what-is-ceilometer",children:[],level:2},{value:"What is Gnocchi?",id:"what-is-gnocchi",children:[],level:2},{value:"What is Aodh?",id:"what-is-aodh",children:[],level:2},{value:"How can I work with Ceilometer and collect metrics?",id:"how-can-i-work-with-ceilometer-and-collect-metrics",children:[{value:"Collect Instance Metrics using OpenStackClient",id:"collect-instance-metrics-using-openstackclient",children:[{value:"Required Command Line Clients",id:"required-command-line-clients",children:[],level:4},{value:"How to Collect Instance Metrics from Ceilometer",id:"how-to-collect-instance-metrics-from-ceilometer",children:[],level:4}],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-ceilometer-and-gnocchi"},"Getting Started with Ceilometer and Gnocchi"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"With our latest update to Private Cloud Core comes two new OpenStack\nservices: Ceilometer and Gnocchi. These services are part of OpenStack's\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.openstack.org/wiki/Telemetry"},"Telemetry Project")," and serve\nto collect data. That data then can be acted upon using the OpenStack\nalarming service ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/aodh/latest/"},"Aodh"),"."),(0,o.kt)("p",null,"The purpose of this guide is to briefly explain the function of\nCeilometer, Gnocchi, and Aodh. We also demonstrate a way to collect\ninstance resource usage metrics provided by Ceilometer using\nOpenStackClient."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-is-ceilometer"},"What is Ceilometer?"),(0,o.kt)("p",null,"Ceilometer is an OpenStack service that provides cloud metrics. The data\nthis service provides can be used for customer billing, resource usage\nanalysis, and to send alerts."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference"),": ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/ceilometer/latest/"},"Ceilometer\nDocumentation")),(0,o.kt)("h2",{id:"what-is-gnocchi"},"What is Gnocchi?"),(0,o.kt)("p",null,"Gnocchi, part of the bigger Telemetry project in OpenStack, addresses\nthe problem of storage and collection of time series data. Gnocchi\nprovides time series database as a service."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference"),": ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.openstack.org/wiki/Gnocchi"},"Gnocchi Wiki")),(0,o.kt)("h2",{id:"what-is-aodh"},"What is Aodh?"),(0,o.kt)("p",null,"Aodh is an OpenStack alarming service that can provide alerts and\ntrigger actions based on the metrics collected by Ceilometer and\nGnocchi."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference"),": ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/aodh/latest/"},"Aodh\nDocumentation")),(0,o.kt)("h2",{id:"how-can-i-work-with-ceilometer-and-collect-metrics"},"How can I work with Ceilometer and collect metrics?"),(0,o.kt)("p",null,"This section describes software that makes use of Ceilometer and Gnocchi\nand also a way to collect instance usage metric data."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"An example of software that can be installed to an OpenStack cloud is\n",(0,o.kt)("a",{parentName:"p",href:"https://fleio.com/"},"Fleio"),". This is software that makes use of metric\ncollecting services like Ceilometer and Gnocchi to provide a billing\nsystem and self-service portal."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- Fleio is third party software and is not part of the\ndefault software installed to a Private Cloud Core cloud."),(0,o.kt)("h3",{id:"collect-instance-metrics-using-openstackclient"},"Collect Instance Metrics using OpenStackClient"),(0,o.kt)("p",null,"Using the Ceilometer command line client, you can collect instance\nresource usage metrics like CPU time, memory, and disk space used."),(0,o.kt)("p",null,"This section demonstrates how you can use OpenStackClient to collect\ninstance resource usage metrics."),(0,o.kt)("h4",{id:"required-command-line-clients"},"Required Command Line Clients"),(0,o.kt)("p",null,"Before proceeding, the required command line clients must be installed."),(0,o.kt)("p",null,"To work with Gnocchi, Ceilometer, and Aodh over the command line, the\nfollowing packages must be installed to your OpenStackClient virtual\nenvironment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gnocchiclient")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"python-ceilometerclient")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"aodhclient"))),(0,o.kt)("h4",{id:"how-to-collect-instance-metrics-from-ceilometer"},"How to Collect Instance Metrics from Ceilometer"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," -- Install required command line client"),(0,o.kt)("p",null,"This section requires ",(0,o.kt)("inlineCode",{parentName:"p"},"python-ceilometerclient")," to be installed and an\nOpenStack cloud that has at least one instance using resources within\nthe cloud."),(0,o.kt)("p",null,"To install this package, ensure you have a ",(0,o.kt)("a",{parentName:"p",href:"../operators-manual/day-1/command-line/openstackclient"},"prepared OpenStackClient\nenvironment"),", then install\nthe package using pip."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install python-ceilometerclient\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," -- List instances"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack server list")," to list instances."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack server list\n+--------------------------------------+----------------------------+--------+---------------------------------------+------------------------------------------------------+----------+\n| ID                                   | Name                       | Status | Networks                              | Image                                                | Flavor   |\n+--------------------------------------+----------------------------+--------+---------------------------------------+------------------------------------------------------+----------+\n| 1d6e3cd6-2a2d-4603-b854-47966e4d0eef | instance-1                 | ACTIVE | demo-net=173.231.254.73, 192.168.1.87 | N/A (booted from volume)                             | c1.small |\n| 52e3a93f-a593-404e-91fd-53ee7ebc6d86 | test-4j5gttlkz52p-node-2   | ACTIVE | test=10.0.0.233, 173.231.254.75       | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | m1.small |\n| e4d67716-4d1a-4460-9276-bd0da12f3cca | test-4j5gttlkz52p-node-1   | ACTIVE | test=10.0.0.143, 173.231.254.70       | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | m1.small |\n| ef263252-54a7-40a9-9d6a-14814c5ed66c | test-4j5gttlkz52p-node-0   | ACTIVE | test=10.0.0.188, 173.231.254.78       | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | m1.small |\n| ccea9641-879e-434d-ab69-f538dc291d34 | test-4j5gttlkz52p-master-2 | ACTIVE | test=10.0.0.148, 173.231.254.71       | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | m1.small |\n| 3f108ea3-12bc-494c-83bf-16f3be3f839a | test-4j5gttlkz52p-master-1 | ACTIVE | test=10.0.0.88, 173.231.254.76        | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | m1.small |\n| b989247d-a879-4ad9-bdb7-dae219039b33 | test-4j5gttlkz52p-master-0 | ACTIVE | test=10.0.0.117, 173.231.254.72       | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | m1.small |\n+--------------------------------------+----------------------------+--------+---------------------------------------+------------------------------------------------------+----------+\n")),(0,o.kt)("p",null,"From this output, you need the instance's UUID. Copy this for the next\nstep."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3")," -- List metrics for an instance"),(0,o.kt)("p",null,"With the instance UUID, use ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack metric list -c resource_id -c\nname -c unit | grep <instance-uuid>")," to list metrics."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack metric list -c resource_id -c name -c unit | grep 1d6e3cd6-2a2d-4603-b854-47966e4d0eef\n| cpu                             | ns      | 1d6e3cd6-2a2d-4603-b854-47966e4d0eef |\n| memory.usage                    | MB      | 1d6e3cd6-2a2d-4603-b854-47966e4d0eef |\n| vcpus                           | vcpu    | 1d6e3cd6-2a2d-4603-b854-47966e4d0eef |\n| compute.instance.booting.time   | sec     | 1d6e3cd6-2a2d-4603-b854-47966e4d0eef |\n| disk.ephemeral.size             | GB      | 1d6e3cd6-2a2d-4603-b854-47966e4d0eef |\n| memory                          | MB      | 1d6e3cd6-2a2d-4603-b854-47966e4d0eef |\n| disk.root.size                  | GB      | 1d6e3cd6-2a2d-4603-b854-47966e4d0eef |\n")),(0,o.kt)("p",null,"Listed in the left-most column are the names of the metrics. The column\nimmediately following this one contains the units in which the metrics\nare measured."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4")," -- List CPU usage metrics"),(0,o.kt)("p",null,"This step demonstrates collecting the CPU usage for an instance."),(0,o.kt)("p",null,"To collect CPU usage, use ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack metric measures show\n--resource-id=<instance-uuid> cpu"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack metric measures show --resource-id=1d6e3cd6-2a2d-4603-b854-47966e4d0eef cpu\n+---------------------------+-------------+----------------+\n| timestamp                 | granularity |          value |\n+---------------------------+-------------+----------------+\n| 2021-09-09T18:00:00-04:00 |       300.0 |  20340000000.0 |\n| 2021-09-09T18:05:00-04:00 |       300.0 |  20680000000.0 |\n| 2021-09-09T18:10:00-04:00 |       300.0 |  21010000000.0 |\n| 2021-09-09T18:15:00-04:00 |       300.0 |  21440000000.0 |\n| 2021-09-09T18:20:00-04:00 |       300.0 |  21880000000.0 |\n| 2021-09-09T18:25:00-04:00 |       300.0 |  22290000000.0 |\n| 2021-09-09T18:30:00-04:00 |       300.0 |  22590000000.0 |\n| 2021-09-09T18:35:00-04:00 |       300.0 |  22870000000.0 |\n[... output truncated...]\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Beyond this, Aodh can be used to act on metrics, by providing alarms or\ncausing specific actions to occur. For more on setting up alarms using\nAodh, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/aodh/victoria/admin/telemetry-alarms.html#using-alarms"},"Using\nAlarms"),",\nfrom the OpenStack documentation page. Setting up alarms or causing\nspecific actions to occur is beyond the scope of this guide."))}m.isMDXComponent=!0}}]);