(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),i=n(11),l=n(7),s=n(19),u=n(12),h={searchField:""},d={robots:[],isPending:!1,err:""},b=(n(29),n(2)),p=n(3),f=n(5),m=n(4),v=n(6),g=(n(30),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={count:0},n.onCounterClick=function(){n.setState(function(e){return{count:e.count+1}})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return t!==this.state}},{key:"render",value:function(){return o.a.createElement("button",{color:this.props.color,onClick:this.onCounterClick}," Count:",this.state.count)}}]),t}(a.Component)),E=function(e){function t(){return Object(b.a)(this,t),Object(f.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,{color:"yellow"}),o.a.createElement("h1",null," We Are All Robots"))}}]),t}(a.Component),w=function(e){var t=e.robot,n=t.name,a=t.birth_year,r=t.created;return o.a.createElement("div",{className:"bg-light-blue dib pa3 bw2 br3 ma2 shadow-3 grow"},o.a.createElement("div",null,o.a.createElement("img",{src:"https://robohash.org/".concat(r,"/set_any/bgset_any/size_200x200"),alt:"humans"})),o.a.createElement("div",null,o.a.createElement("h4",null,n),o.a.createElement("p",null,a)))},y=(n(31),function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"lds-hourglass"}))}),C=function(e){var t=e.robotsArray.map(function(e){return o.a.createElement(w,{key:e.created,robot:e})});return o.a.createElement("div",{className:"tc mt2"},t.length?t:o.a.createElement(y,null))},A=function(e){var t=e.searchChange;return o.a.createElement("div",{className:" pa3"},o.a.createElement("input",{className:"pa2 ba b--red bg-light-blue ",type:"search",placeholder:"type n Search",onChange:t,"aria-label":"Search Robots"}))},j=function(e){return o.a.createElement("div",{style:{overflow:"scroll",height:"600px"},className:"ba bw2 b--orange br3"},e.children)},O=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={robots:[]},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.handleRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.handleSearchChange,a=e.robots,r=e.isPending,c=e.err,i=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}),l=o.a.createElement(y,null);return r||(l=o.a.createElement(j,null,o.a.createElement(C,{robotsArray:i}))),c&&(l=o.a.createElement("h1",null,"Oops Something went wrong")),o.a.createElement("div",{className:"App tc vh-100 ma0"},o.a.createElement("div",{className:"bb b--yellow pa3 bw2"},o.a.createElement(E,null)),o.a.createElement(A,{searchChange:n}),l)}}]),t}(a.Component),k=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.fetchRobotApi.robots,isPending:e.fetchRobotApi.isPending,err:e.fetchRobotApi.err}},function(e){return{handleSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},handleRequestRobots:function(){return e(function(e){e({type:"FETCH_API_PEDDING"}),fetch("https://swapi.co/api/people").then(function(e){return e.json()}).then(function(t){e({type:"FETCH_API_SUCCESS",payload:t.results})}).catch(function(t){e({type:"FETCH_API_FAIL",payload:t})})})}}})(O),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(32);var R=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"CHANGE_SEARCHFIELD"===t.type?Object.assign({},e,{searchField:t.payload}):e},fetchRobotApi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_API_PEDDING":return Object(u.a)({},e,{isPending:!0});case"FETCH_API_SUCCESS":return Object(u.a)({},e,{isPending:!1,robots:t.payload});case"FETCH_API_FAIL":return Object(u.a)({},e,{isPending:!1,err:t.payload});default:return e}}}),S=Object(l.d)(R,Object(l.a)(s.a));c.a.render(o.a.createElement(i.a,{store:S},o.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/allrobots-PWA-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/allrobots-PWA-redux","/service-worker.js");P?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):_(t,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.a273b81b.chunk.js.map